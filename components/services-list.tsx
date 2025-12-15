"use client"

import { Heart, Briefcase, Sparkles, Calendar, Users, Gift, Building2, PartyPopper } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ServicesList() {
  const { t } = useLanguage()

  const socialServices = [
    { icon: Heart, name: "Bodas de ensueño", desc: "Desde la ceremonia hasta la recepción, cada detalle perfecto" },
    {
      icon: Gift,
      name: "XV Años inolvidables",
      desc: "Quinceañeras elegantes que marcan el inicio de una nueva etapa",
    },
    { icon: PartyPopper, name: "Bautizos memorables", desc: "Celebraciones especiales para momentos sagrados" },
    { icon: Calendar, name: "Aniversarios únicos", desc: "Renovaciones de votos y celebraciones de amor duradero" },
  ]

  const corporateServices = [
    { icon: Building2, name: "Eventos corporativos", desc: "Conferencias, convenciones y lanzamientos de producto" },
    { icon: Users, name: "Team building", desc: "Actividades que fortalecen equipos y cultura empresarial" },
    { icon: Briefcase, name: "Cenas de gala", desc: "Eventos formales con protocolo impecable" },
    { icon: Sparkles, name: "Inauguraciones", desc: "Aperturas y eventos especiales de alto impacto" },
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/20 border-2 border-secondary/30 mb-6">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-bold text-foreground tracking-widest uppercase">Nuestros Servicios</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Eventos que cautivan y transforman
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especialistas en crear experiencias extraordinarias para eventos sociales y corporativos en El Salvador
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-secondary/30 rounded-3xl p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-secondary rounded-xl">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-serif font-bold text-foreground">{t("social_events")}</h3>
                <p className="text-lg text-muted-foreground mt-2">
                  Creamos momentos mágicos que permanecen en el corazón para siempre
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {socialServices.map((service, i) => {
                const Icon = service.icon
                return (
                  <div
                    key={i}
                    className="bg-card border-2 border-border hover:border-secondary rounded-xl p-6 group transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-secondary/30 rounded-3xl p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-secondary rounded-xl">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-serif font-bold text-foreground">{t("corporate_events")}</h3>
                <p className="text-lg text-muted-foreground mt-2">
                  Eventos empresariales que fortalecen tu marca y conectan equipos
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {corporateServices.map((service, i) => {
                const Icon = service.icon
                return (
                  <div
                    key={i}
                    className="bg-card border-2 border-border hover:border-secondary rounded-xl p-6 group transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-2xl text-muted-foreground font-light italic max-w-3xl mx-auto leading-relaxed">
            "Cada evento es una historia única. Déjanos escribir la tuya con elegancia, profesionalismo y pasión"
          </p>
        </div>
      </div>
    </section>
  )
}
