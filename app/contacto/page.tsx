import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Eternia Wedding Planner El Salvador",
  description:
    "Contáctanos para planificar tu boda o evento en El Salvador. Eternia - Wedding Planner profesional. Correo: contacto@eterniasv.com. Te respondemos en 24 horas.",
  openGraph: {
    title: "Contacto | Eternia Wedding Planner El Salvador",
    description: "Contáctanos para planificar tu boda o evento. Email: contacto@eterniasv.com",
    url: "https://eterniasv.com/contacto",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 max-w-7xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  )
}
