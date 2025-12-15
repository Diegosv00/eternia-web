"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/elegant-wedding-reception-black-and-gold-decor.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-balance">
            Bienvenido a <span className="text-accent">Eternia</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-primary-foreground/90 text-balance">
            Donde tus sueños se convierten en momentos eternos
          </p>

          <div className="h-px w-32 mx-auto bg-accent" />

          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Planificación profesional de eventos sociales y corporativos. Creamos experiencias únicas e inolvidables
            para tus momentos más especiales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base uppercase tracking-wider"
              onClick={() => scrollToSection("contacto")}
            >
              Contáctanos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-base uppercase tracking-wider bg-transparent"
              onClick={() => scrollToSection("servicios")}
            >
              Nuestros Servicios
            </Button>
          </div>

          <div className="pt-16">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="animate-bounce inline-flex items-center justify-center"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-8 w-8 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
