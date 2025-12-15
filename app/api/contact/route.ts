import { NextResponse } from "next/server"
import { Resend } from "resend"

const validateName = (name: string): boolean => {
  if (!name || !name.trim()) return false
  const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/
  return nameRegex.test(name)
}

const validateEmail = (email: string): boolean => {
  if (!email || !email.trim()) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  return emailRegex.test(email)
}

const validatePhone = (phone: string): boolean => {
  if (!phone || !phone.trim()) return true // Teléfono es opcional

  const cleanPhone = phone.replace(/\s/g, "")

  if (!cleanPhone.startsWith("+")) return false

  const phoneRegex = /^\+\d+$/
  if (!phoneRegex.test(cleanPhone)) return false

  // Validaciones específicas por código de país
  const phoneValidations: Record<string, number> = {
    "+503": 12, // El Salvador: +503 + 8 dígitos
    "+52": 13, // México: +52 + 10 dígitos
    "+1": 12, // USA/Canadá: +1 + 10 dígitos
    "+502": 12, // Guatemala: +502 + 8 dígitos
    "+504": 12, // Honduras: +504 + 8 dígitos
    "+505": 12, // Nicaragua: +505 + 8 dígitos
    "+506": 12, // Costa Rica: +506 + 8 dígitos
    "+507": 12, // Panamá: +507 + 8 dígitos
    "+51": 12, // Perú: +51 + 9 dígitos
    "+54": 13, // Argentina: +54 + 10 dígitos
    "+55": 13, // Brasil: +55 + 11 dígitos
    "+56": 12, // Chile: +56 + 9 dígitos
    "+57": 13, // Colombia: +57 + 10 dígitos
    "+58": 13, // Venezuela: +58 + 10 dígitos
    "+593": 13, // Ecuador: +593 + 9 dígitos
    "+34": 12, // España: +34 + 9 dígitos
    "+33": 12, // Francia: +33 + 9 dígitos
    "+44": 13, // Reino Unido: +44 + 10 dígitos
    "+49": 13, // Alemania: +49 + 11 dígitos
  }

  for (const [code, expectedLength] of Object.entries(phoneValidations)) {
    if (cleanPhone.startsWith(code)) {
      return cleanPhone.length === expectedLength
    }
  }

  // Para otros países no listados
  return cleanPhone.length >= 9 && cleanPhone.length <= 16
}

const validateMessage = (message: string): boolean => {
  if (!message || !message.trim()) return false
  const trimmed = message.trim()
  return trimmed.length >= 10 && trimmed.length <= 1000
}

const eventTypeMap: Record<string, string> = {
  social: "Evento Social",
  corporate: "Evento Corporativo",
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, eventType, language } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 })
    }

    if (!validateName(name)) {
      return NextResponse.json({ error: "El nombre solo puede contener letras" }, { status: 400 })
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: "El correo electrónico no tiene un formato válido" }, { status: 400 })
    }

    if (phone && !validatePhone(phone)) {
      return NextResponse.json({ error: "El número de teléfono no es válido" }, { status: 400 })
    }

    if (!validateMessage(message)) {
      return NextResponse.json({ error: "El mensaje debe tener entre 10 y 1000 caracteres" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ ERROR: RESEND_API_KEY no está configurada")
      console.error("📝 Para desarrollo local, crea un archivo .env.local con:")
      console.error("   RESEND_API_KEY=tu_api_key_de_resend")
      console.error("📝 Para producción, configura la variable en Vercel Dashboard")

      return NextResponse.json(
        {
          error:
            "El servicio de correo no está configurado. Contacta directamente a contacto@eterniasv.com o por WhatsApp.",
          isConfigError: true,
        },
        { status: 503 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const eventTypeSpanish = eventType ? eventTypeMap[eventType] || eventType : "No especificado"

    const emailData = {
      from: "Eternia Contacto <contacto@eterniasv.com>",
      to: ["contacto@eterniasv.com"],
      replyTo: email,
      subject: `Nuevo contacto de ${name} - ${eventTypeSpanish}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #d4af7a; padding-bottom: 10px;">
            Nuevo Mensaje de Contacto - Eternia
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
            <p><strong>Tipo de Evento:</strong> ${eventTypeSpanish}</p>
            <p><strong>Idioma:</strong> ${language}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d4af7a; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #000;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de eterniasv.com
          </p>
        </div>
      `,
    }

    const { data, error } = await resend.emails.send(emailData)

    if (error) {
      console.error("❌ Error al enviar email con Resend:", error)
      return NextResponse.json(
        {
          error: "Error al enviar el correo. Por favor intenta nuevamente o contacta directamente.",
          details: error.message || "Error desconocido",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente",
      emailId: data?.id,
    })
  } catch (error) {
    console.error("❌ Error inesperado en formulario de contacto:", error)

    return NextResponse.json(
      {
        error: "Error al enviar el mensaje. Por favor intenta nuevamente.",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
