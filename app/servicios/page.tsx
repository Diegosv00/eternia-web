import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios | Eternia Wedding Planner El Salvador",
  description:
    "Servicios de wedding planner en El Salvador: Bodas elegantes, XV años, bautizos, eventos corporativos. Planificación completa, coordinación el día del evento, diseño y decoración.",
  openGraph: {
    title: "Servicios | Eternia Wedding Planner El Salvador",
    description: "Planificación de bodas, XV años, eventos corporativos en El Salvador.",
    url: "https://eterniasv.com/servicios",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <Footer />
    </main>
  )
}
