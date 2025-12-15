"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-16 sm:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/images/wedding-elegant-reception.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-float will-change-transform" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-primary-foreground leading-[1.1] tracking-tight animate-fade-in-up px-4"
            style={{ animationDelay: "0.1s" }}
          >
            {t("hero_title")}
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up px-4"
            style={{ animationDelay: "0.3s" }}
          >
            {t("hero_subtitle")}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-2 sm:pt-4 animate-fade-in-up px-4"
            style={{ animationDelay: "0.5s" }}
          >
            <Link href="/contacto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg group shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {t("hero_cta")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-transparent transition-all duration-300 hover:scale-105"
              >
                {t("hero_cta_secondary")}
              </Button>
            </Link>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 lg:pt-16 max-w-5xl mx-auto animate-fade-in-up px-4"
            style={{ animationDelay: "0.7s" }}
          >
            {[
              { icon: Calendar, label: t("events_social") },
              { icon: Award, label: t("events_corporate") },
              { icon: Sparkles, label: t("excellence") },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-5 sm:p-6 hover:bg-primary-foreground/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground mx-auto mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                  <div className="text-sm sm:text-base text-primary-foreground/90 font-medium tracking-wide">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
