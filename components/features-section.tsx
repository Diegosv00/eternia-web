"use client"

import { CheckCircle2, Palette, Star, Award, Heart, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: CheckCircle2,
      title: t("feature_1_title"),
      description: t("feature_1_desc"),
    },
    {
      icon: Palette,
      title: t("feature_2_title"),
      description: t("feature_2_desc"),
    },
    {
      icon: Star,
      title: t("feature_3_title"),
      description: t("feature_3_desc"),
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: t("benefit_1_title"),
      description: t("benefit_1_desc"),
    },
    {
      icon: Heart,
      title: t("benefit_2_title"),
      description: t("benefit_2_desc"),
    },
    {
      icon: Zap,
      title: t("benefit_3_title"),
      description: t("benefit_3_desc"),
    },
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6 leading-tight px-4">
            {t("features_title")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t("features_subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group p-6 sm:p-8 lg:p-10 bg-card border-2 border-border hover:border-secondary rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:scale-105"
              >
                <div className="mb-4 sm:mb-6 inline-flex p-4 sm:p-5 bg-secondary/10 text-secondary rounded-xl group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-card-foreground mb-3 sm:mb-4 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-secondary/20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center text-foreground mb-8 sm:mb-12 px-4">
            {t("benefits_title")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div key={i} className="text-center group">
                  <div className="inline-flex p-3 sm:p-4 bg-secondary/20 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{benefit.title}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
