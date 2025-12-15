import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { OurStory } from "@/components/our-story"
import { OurValues } from "@/components/our-values"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosotros | Eternia Wedding Planner El Salvador",
  description:
    "Conoce a Eternia, el wedding planner #1 en El Salvador. Nuestra misión es crear eventos únicos e inolvidables con atención al detalle y ejecución impecable.",
  openGraph: {
    title: "Nosotros | Eternia Wedding Planner El Salvador",
    description: "Conoce nuestra historia y valores. Wedding planner profesional en El Salvador.",
    url: "https://eterniasv.com/nosotros",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <OurStory />
      <OurValues />
      <Footer />
    </main>
  )
}
