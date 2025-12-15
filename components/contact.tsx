"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Music2, MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
            Hablemos de tu <span className="text-accent">Evento</span>
          </h2>
          <div className="h-px w-32 mx-auto bg-accent mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Estamos listos para hacer realidad tus sueños. Contáctanos y comencemos a planear juntos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Card className="border-border/50">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-serif font-semibold mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Teléfono / WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+503 7933 1291</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Correo Electrónico</p>
                    <p className="text-sm text-muted-foreground">contacto@eterniasv.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ubicación</p>
                    <p className="text-sm text-muted-foreground">El Salvador</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold mb-6">Síguenos en Redes Sociales</h3>

              <div className="space-y-4">
                <a href="https://instagram.com/eterniasv" target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-4 h-auto py-4 hover:bg-accent/10 hover:border-accent group bg-transparent"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20">
                      <Instagram className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Instagram</p>
                      <p className="text-sm text-muted-foreground">@eterniasv</p>
                    </div>
                  </Button>
                </a>

                <a href="https://tiktok.com/@eterniasv" target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-4 h-auto py-4 hover:bg-accent/10 hover:border-accent group bg-transparent"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20">
                      <Music2 className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">TikTok</p>
                      <p className="text-sm text-muted-foreground">@eterniasv</p>
                    </div>
                  </Button>
                </a>

                <a href="https://wa.me/50379331291" target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-4 h-auto py-4 hover:bg-accent/10 hover:border-accent group bg-transparent"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Chatea con nosotros</p>
                    </div>
                  </Button>
                </a>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  ¿Listo para comenzar? Escríbenos por cualquiera de nuestros canales y conversemos sobre cómo hacer de
                  tu evento algo extraordinario.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
