"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function AboutHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/images/about-wedding-planning.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white"
          >
            {t("about_hero_title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 font-light"
          >
            {t("about_hero_subtitle")}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
