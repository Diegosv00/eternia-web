"use client"

import { useLanguage } from "@/contexts/language-context"
import { Sparkles, Heart, CheckCircle2, Star } from "lucide-react"

export function ProcessSection() {
  const { t } = useLanguage()

  const packages = [
    {
      icon: Star,
      title: "Planificación Completa",
      description: "Desde el concepto hasta la ejecución, manejamos cada aspecto de tu evento",
    },
    {
      icon: CheckCircle2,
      title: "Coordinación del Día",
      description: "Aseguramos que todo fluya perfectamente el día de tu evento",
    },
    {
      icon: Heart,
      title: "Paquetes Personalizados",
      description: "Diseñamos soluciones únicas adaptadas a tu visión y presupuesto",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-muted via-background to-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/30 border-2 border-secondary/50 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-sm font-bold text-foreground uppercase tracking-widest">Paquetes Personalizados</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
            Convertimos tus sueños en realidad <br />
            <span className="text-secondary">sin importar tu presupuesto</span>
          </h2>

          <div className="space-y-8 text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            <p className="text-2xl font-light">
              En <span className="font-bold text-foreground italic">Eternia</span>, cada evento es único y especial,
              diseñado exclusivamente para ti.
            </p>
            <p className="text-lg">
              Ya sea que desees una planificación completa de principio a fin, coordinación exclusiva el día del evento,
              o un paquete completamente personalizado, nos adaptamos a tu visión, presupuesto y necesidades
              específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="group bg-card border-2 border-border hover:border-secondary rounded-2xl p-8 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-secondary/20"
              >
                <div className="mb-6 inline-flex p-4 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors duration-300">
                  <pkg.icon className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{pkg.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border-2 border-secondary/30 rounded-2xl p-12 mt-16">
            <p className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-relaxed">
              Tu visión es nuestra misión.
              <br />
              <span className="text-secondary">Juntos creamos experiencias extraordinarias e inolvidables.</span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground italic pt-8">
            Sin comprometer la calidad, sin exceder tu presupuesto. Solo perfección adaptada a ti.
          </p>
        </div>
      </div>
    </section>
  )
}
