import { Sparkles, Heart, Award } from "lucide-react"

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
              Nuestra <span className="text-accent">Historia</span>
            </h2>
            <div className="h-px w-32 mx-auto bg-accent mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Eternia nace de un sueño compartido: crear momentos que perduren para siempre en el corazón de las
                  personas. Desde el inicio, visualizamos ser el aliado perfecto para transformar cada celebración en
                  una experiencia única y memorable.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Somos un equipo apasionado por los detalles, comprometido con la excelencia y dedicado a hacer
                  realidad la visión de nuestros clientes. Cada evento es una oportunidad para crear algo
                  extraordinario.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="aspect-[4/3] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url('/luxury-event-planning-team-elegant-setup.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Creatividad</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diseñamos cada evento con innovación y estilo único
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Pasión</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cada detalle es cuidado con dedicación y amor
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Excelencia</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprometidos con la calidad y el profesionalismo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
