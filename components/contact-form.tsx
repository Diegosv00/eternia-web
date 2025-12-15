"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

const validateName = (name: string): string | null => {
  if (!name.trim()) return "El nombre es requerido"
  const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/
  if (!nameRegex.test(name)) {
    return "El nombre solo puede contener letras"
  }
  return null
}

const validateEmail = (email: string): string | null => {
  if (!email.trim()) return "El correo electrónico es requerido"
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!emailRegex.test(email)) {
    return "Por favor ingresa un correo válido (ejemplo: usuario@gmail.com)"
  }
  return null
}

const validatePhone = (phone: string): string | null => {
  if (!phone.trim()) return null

  const cleanPhone = phone.replace(/\s/g, "")

  if (!cleanPhone.startsWith("+")) {
    return "El teléfono debe comenzar con el código de país (ejemplo: +503)"
  }

  const phoneRegex = /^\+\d+$/
  if (!phoneRegex.test(cleanPhone)) {
    return "El teléfono solo puede contener números después del +"
  }

  const phoneRules: Record<string, { length: number; digits: string }> = {
    // Centroamérica
    "+503": { length: 12, digits: "8" }, // El Salvador
    "+502": { length: 12, digits: "8" }, // Guatemala
    "+504": { length: 12, digits: "8" }, // Honduras
    "+505": { length: 12, digits: "8" }, // Nicaragua
    "+506": { length: 12, digits: "8" }, // Costa Rica
    "+507": { length: 12, digits: "8" }, // Panamá
    // América del Norte
    "+52": { length: 13, digits: "10" }, // México
    "+1": { length: 12, digits: "10" }, // USA/Canadá
    // América del Sur
    "+51": { length: 12, digits: "9" }, // Perú
    "+54": { length: 13, digits: "10" }, // Argentina
    "+55": { length: 13, digits: "11" }, // Brasil
    "+56": { length: 12, digits: "9" }, // Chile
    "+57": { length: 13, digits: "10" }, // Colombia
    "+58": { length: 13, digits: "10" }, // Venezuela
    "+593": { length: 13, digits: "9" }, // Ecuador
    "+591": { length: 12, digits: "8" }, // Bolivia
    "+595": { length: 12, digits: "9" }, // Paraguay
    "+598": { length: 12, digits: "9" }, // Uruguay
    // Europa
    "+34": { length: 12, digits: "9" }, // España
    "+33": { length: 12, digits: "9" }, // Francia
    "+44": { length: 13, digits: "10" }, // Reino Unido
    "+49": { length: 13, digits: "11" }, // Alemania
    "+39": { length: 13, digits: "10" }, // Italia
    "+351": { length: 12, digits: "9" }, // Portugal
    "+31": { length: 12, digits: "9" }, // Países Bajos
    "+32": { length: 12, digits: "9" }, // Bélgica
    "+41": { length: 12, digits: "9" }, // Suiza
    "+43": { length: 13, digits: "10-11" }, // Austria
    "+45": { length: 11, digits: "8" }, // Dinamarca
    "+46": { length: 12, digits: "9" }, // Suecia
    "+47": { length: 11, digits: "8" }, // Noruega
    "+48": { length: 12, digits: "9" }, // Polonia
    // Asia
    "+86": { length: 13, digits: "11" }, // China
    "+81": { length: 13, digits: "10" }, // Japón
    "+82": { length: 13, digits: "10-11" }, // Corea del Sur
    "+91": { length: 13, digits: "10" }, // India
    "+62": { length: 13, digits: "10-11" }, // Indonesia
    "+63": { length: 13, digits: "10" }, // Filipinas
    "+66": { length: 12, digits: "9" }, // Tailandia
    "+84": { length: 12, digits: "9-10" }, // Vietnam
    "+65": { length: 11, digits: "8" }, // Singapur
    "+60": { length: 12, digits: "9-10" }, // Malasia
  }

  for (const [code, rule] of Object.entries(phoneRules)) {
    if (cleanPhone.startsWith(code)) {
      if (cleanPhone.length !== rule.length) {
        return `Para ${code} debes ingresar exactamente ${rule.digits} dígitos`
      }
      return null
    }
  }

  if (cleanPhone.length < 9 || cleanPhone.length > 16) {
    return "El número de teléfono debe tener entre 8 y 15 dígitos"
  }

  return null
}

const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/[^\d+]/g, "")

  if (!cleaned.startsWith("+")) return cleaned

  let formatted = ""

  // Centroamérica: +503, +502, +504, +505, +506, +507 (cada 4 dígitos)
  if (cleaned.match(/^\+(50[2-7])/)) {
    const code = cleaned.slice(0, 4)
    const numbers = cleaned.slice(4, 12)
    formatted = code
    if (numbers.length > 0) formatted += " " + numbers.slice(0, 4)
    if (numbers.length > 4) formatted += " " + numbers.slice(4, 8)
  }
  // México: +52 (3-3-4)
  else if (cleaned.startsWith("+52")) {
    const code = cleaned.slice(0, 3)
    const numbers = cleaned.slice(3, 13)
    formatted = code
    if (numbers.length > 0) formatted += " " + numbers.slice(0, 3)
    if (numbers.length > 3) formatted += " " + numbers.slice(3, 6)
    if (numbers.length > 6) formatted += " " + numbers.slice(6, 10)
  }
  // USA/Canadá: +1 (3-3-4)
  else if (cleaned.startsWith("+1")) {
    const code = cleaned.slice(0, 2)
    const numbers = cleaned.slice(2, 12)
    formatted = code
    if (numbers.length > 0) formatted += " " + numbers.slice(0, 3)
    if (numbers.length > 3) formatted += " " + numbers.slice(3, 6)
    if (numbers.length > 6) formatted += " " + numbers.slice(6, 10)
  }
  // Sudamérica, Europa y Asia (cada 3-4 dígitos)
  else if (cleaned.match(/^\+(3[1-4]|39|4[1-9]|5[1-8]|591|593|595|598|6[0-6]|8[1-6]|91)/)) {
    const parts = cleaned.match(/^(\+\d{1,3})(.*)/)
    if (parts) {
      const code = parts[1]
      const numbers = parts[2]
      const numberGroups = numbers.match(/.{1,3}/g)
      formatted = code + (numberGroups ? " " + numberGroups.join(" ") : "")
    }
  }
  // Para otros países, cada 4 dígitos
  else {
    const parts = cleaned.match(/.{1,4}/g)
    formatted = parts ? parts.join(" ") : cleaned
  }

  return formatted
}

const validateMessage = (message: string): string | null => {
  if (!message.trim()) return "Por favor cuéntanos sobre tu evento"
  if (message.trim().length < 10) {
    return "Por favor describe tu evento con al menos 10 caracteres"
  }
  if (message.trim().length > 1000) {
    return "El mensaje no puede exceder 1000 caracteres"
  }
  return null
}

export function ContactForm() {
  const { t, language } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const validateField = (field: string, value: string) => {
    let error = ""

    switch (field) {
      case "name":
        error = validateName(value) || ""
        break
      case "email":
        error = validateEmail(value) || ""
        break
      case "phone":
        error = validatePhone(value) || ""
        break
      case "message":
        error = validateMessage(value) || ""
        break
    }

    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const cleaned = input.replace(/[^\d+\s]/g, "")
    const formatted = formatPhoneNumber(cleaned)
    setFormData({ ...formData, phone: formatted })
    validateField("phone", formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError("")

    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const phoneError = validatePhone(formData.phone)
    const messageError = validateMessage(formData.message)

    setErrors({
      name: nameError || "",
      email: emailError || "",
      phone: phoneError || "",
      message: messageError || "",
    })

    if (nameError || emailError || phoneError || messageError) {
      setServerError("Por favor corrige los errores antes de enviar el formulario")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, language }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: "", email: "", phone: "", eventType: "", message: "" })
        setErrors({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        if (data.isConfigError) {
          setServerError(
            data.error + " Por favor contacta directamente: contacto@eterniasv.com o +503 xxxx-xxxx (WhatsApp)",
          )
        } else {
          setServerError(data.error || "Error al enviar el mensaje. Por favor intenta nuevamente.")
        }
      }
    } catch (error) {
      setServerError("Error de conexión. Por favor verifica tu internet e intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-8 sm:p-10 lg:p-12 shadow-lg">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-card-foreground mb-8">{t("contact_form_title")}</h2>
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-card-foreground text-base font-medium">
            {t("form_name")} *
          </Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value })
              validateField("name", e.target.value)
            }}
            onBlur={(e) => validateField("name", e.target.value)}
            className={`bg-background border-border h-12 sm:h-14 text-base transition-colors ${
              errors.name ? "border-red-500 focus:border-red-500" : "focus:border-primary"
            }`}
            placeholder="María García"
          />
          {errors.name && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-card-foreground text-base font-medium">
            {t("form_email")} *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
              validateField("email", e.target.value)
            }}
            onBlur={(e) => validateField("email", e.target.value)}
            className={`bg-background border-border h-12 sm:h-14 text-base transition-colors ${
              errors.email ? "border-red-500 focus:border-red-500" : "focus:border-primary"
            }`}
            placeholder="usuario@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-card-foreground text-base font-medium">
            {t("form_phone")}
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
            onBlur={(e) => validateField("phone", e.target.value)}
            className={`bg-background border-border h-12 sm:h-14 text-base transition-colors ${
              errors.phone ? "border-red-500 focus:border-red-500" : "focus:border-primary"
            }`}
            placeholder="+503 7933 1291"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {errors.phone}
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            Formato automático: +503/502/504 (8 dígitos), +52 (10 dígitos), +1 (10 dígitos), +51/56 (9 dígitos), etc.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventType" className="text-card-foreground text-base font-medium">
            {t("form_event_type")}
          </Label>
          <Select value={formData.eventType} onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
            <SelectTrigger className="bg-background border-border h-12 sm:h-14 text-base">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="social">{t("event_social")}</SelectItem>
              <SelectItem value="corporate">{t("event_corporate")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-card-foreground text-base font-medium">
            {t("form_message")} *
          </Label>
          <Textarea
            id="message"
            required
            rows={7}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value })
              validateField("message", e.target.value)
            }}
            onBlur={(e) => validateField("message", e.target.value)}
            className={`bg-background border-border text-base transition-colors ${
              errors.message ? "border-red-500 focus:border-red-500" : "focus:border-primary"
            }`}
            placeholder={t("form_message_placeholder")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {errors.message}
            </p>
          )}
          <p className="text-sm text-muted-foreground">Describe tu evento con detalle (mínimo 10 caracteres)</p>
        </div>

        {serverError && (
          <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 text-center rounded-lg flex items-start justify-center gap-2 text-sm sm:text-base">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>{serverError}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 sm:h-14 text-base sm:text-lg transition-all hover:scale-[1.02]"
        >
          {loading ? t("form_sending") : t("form_submit")}
          {!loading && <Send className="ml-2 h-5 w-5" />}
        </Button>

        {success && (
          <div className="p-4 bg-primary/10 border border-primary text-foreground text-center rounded-lg flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-4 text-sm sm:text-base">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
            <span>{t("form_success")}</span>
          </div>
        )}
      </form>
    </div>
  )
}
