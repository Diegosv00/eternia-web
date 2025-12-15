"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">{t("cta_title")}</h2>
          <p className="text-xl text-primary-foreground/80">{t("cta_subtitle")}</p>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg mt-6 group"
            >
              {t("cta_button")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
