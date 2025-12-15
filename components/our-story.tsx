"use client"

import { useLanguage } from "@/contexts/language-context"
import { Sparkles, Globe, Heart } from "lucide-react"

export function OurStory() {
  const { t } = useLanguage()

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/20 border-2 border-secondary/30 mb-6">
              <Sparkles className="h-4 w-4 text-secondary animate-beige-pulse" />
              <span className="text-sm font-bold text-foreground tracking-widest uppercase">
                {t("our_story_badge")}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
              {t("story_title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group bg-muted/30">
              <img
                src="/elegant-professional-woman-event-planner-confident.jpg"
                alt="Planificadora profesional de eventos Eternia"
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed text-justify">{t("story_text")}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card border-2 border-secondary/30 rounded-xl hover:scale-105 transition-transform">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{t("passion_title")}</h4>
                    <p className="text-muted-foreground leading-relaxed">{t("passion_desc")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card border-2 border-secondary/30 rounded-xl hover:scale-105 transition-transform">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{t("no_borders_title")}</h4>
                    <p className="text-muted-foreground leading-relaxed">{t("hero_location_message")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-12 border-2 border-secondary/30">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-8">
              {t("commitment_title")}
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-serif font-bold text-secondary mb-3">100%</div>
                <p className="text-lg font-semibold text-foreground mb-2">{t("commitment_1_title")}</p>
                <p className="text-muted-foreground">{t("commitment_1_desc")}</p>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-secondary mb-3">24/7</div>
                <p className="text-lg font-semibold text-foreground mb-2">{t("commitment_2_title")}</p>
                <p className="text-muted-foreground">{t("commitment_2_desc")}</p>
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-secondary mb-3">∞</div>
                <p className="text-lg font-semibold text-foreground mb-2">{t("commitment_3_title")}</p>
                <p className="text-muted-foreground">{t("commitment_3_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
