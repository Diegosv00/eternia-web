"use client"

import { Target, Sparkles, Users, Trophy } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function OurValues() {
  const { t } = useLanguage()

  const values = [
    { icon: Trophy, text: t("value_1") },
    { icon: Sparkles, text: t("value_2") },
    { icon: Users, text: t("value_3") },
    { icon: Target, text: t("value_4") },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center">
          {t("values_title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <div
                key={i}
                className="text-center p-8 bg-card border border-border rounded-lg group hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:border-secondary/50"
              >
                <div className="inline-flex p-5 bg-secondary/20 text-secondary rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:bg-secondary/30">
                  <Icon className="h-10 w-10" />
                </div>
                <p className="text-lg font-semibold text-card-foreground transition-colors duration-300 group-hover:text-secondary">
                  {value.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
