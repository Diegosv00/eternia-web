import { Card, CardContent } from "@/components/ui/card"
import { Heart, Cake, Briefcase, Gift, PartyPopper, Users } from "lucide-react"

const socialEvents = [
  {
    icon: Heart,
    title: "Bodas",
    description: "El día más especial de tu vida, planeado a la perfección",
  },
  {
    icon: Cake,
    title: "XV Años",
    description: "Celebraciones mágicas para quinceañeras inolvidables",
  },
  {
    icon: Gift,
    title: "Bautizos",
    description: "Momentos sagrados celebrados con elegancia",
  },
  {
    icon: PartyPopper,
    title: "Cumpleaños",
    description: "Fiestas personalizadas llenas de alegría",
  },
]

const corporateEvents = [
  {
    icon: Briefcase,
    title: "Eventos Corporativos",
    description: "Conferencias, lanzamientos y reuniones empresariales",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Actividades y eventos para fortalecer equipos",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
            Nuestros <span className="text-accent">Servicios</span>
          </h2>
          <div className="h-px w-32 mx-auto bg-accent mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Planificación profesional para todo tipo de eventos, adaptándonos a tus necesidades y superando tus
            expectativas
          </p>
        </div>

        {/* Eventos Sociales */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-semibold text-center mb-8">Eventos Sociales</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialEvents.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eventos Corporativos */}
        <div>
          <h3 className="text-3xl font-serif font-semibold text-center mb-8">Eventos Corporativos</h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {corporateEvents.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground italic">
            {'"Cada evento es una historia única que merece ser contada con elegancia y distinción"'}
          </p>
        </div>
      </div>
    </section>
  )
}
