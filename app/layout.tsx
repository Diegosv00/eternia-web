import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://eterniasv.com"),
  title: {
    default: "Eternia | Wedding & Event Planner en El Salvador",
    template: "%s | Eternia",
  },
 description:
"Eternia convierte tu sueño en realidad creando y planificando bodas y eventos con magia y elegancia desde propuestas de matrimonio quince años bautizos hasta eventos corporativos cuidando cada detalle para una celebración inolvidable.",
  keywords: [
    "wedding planner El Salvador",
    "wedding planner",
    "event planner El Salvador",
    "planificador de bodas El Salvador",
    "planificador de bodas",
    "organizador de bodas El Salvador",
    "bodas El Salvador",
    "bodas elegantes San Salvador",
    "eventos El Salvador",
    "XV años El Salvador",
    "quinceañeras El Salvador",
    "bautizos El Salvador",
    "eventos corporativos El Salvador",
    "Eternia wedding planner",
    "organizador de eventos El Salvador",
    "planner eventos sociales",
    "eventos de lujo El Salvador",
    "bodas San Salvador",
    "destination wedding El Salvador",
    "wedding coordinator El Salvador",
    "event coordinator",
    "planificacion de eventos",
    "bodas destino El Salvador",
    "eventos empresariales El Salvador",
    "organizacion de bodas",
    "planeacion de eventos",
    "coordinador de bodas",
    "mejor wedding planner El Salvador",
    "wedding planner profesional",
    "Eternia",
    "bodas de ensueño",
  ],
  authors: [{ name: "Eternia Event Planning", url: "https://eterniasv.com" }],
  creator: "Eternia",
  publisher: "Eternia Event Planning",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Eternia | Wedding & Event Planner El Salvador",
    description:
      "El mejor wedding planner y event planner en El Salvador. Bodas elegantes, XV años, eventos corporativos. Transformamos tu sueño en realidad. Contacto: contacto@eterniasv.com",
    type: "website",
    locale: "es_SV",
    url: "https://eterniasv.com",
    siteName: "Eternia Wedding & Event Planner",
    images: [
      {
        url: "/images/wedding-elegant-reception.jpg",
        width: 1200,
        height: 630,
        alt: "Eternia Wedding Planner El Salvador - Bodas Elegantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternia | Wedding & Event Planner El Salvador",
    description:
      "El mejor wedding planner en El Salvador. Tu sueño a realidad. Bodas elegantes, XV años, eventos corporativos.",
    images: ["/images/wedding-elegant-reception.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://eterniasv.com",
    languages: {
      "es-SV": "https://eterniasv.com",
      en: "https://eterniasv.com/en",
      fr: "https://eterniasv.com/fr",
      pt: "https://eterniasv.com/pt",
    },
  },
  category: "Wedding Planning",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://eterniasv.com" />
        <meta name="geo.region" content="SV" />
        <meta name="geo.placename" content="San Salvador, El Salvador" />
        <meta name="geo.position" content="13.6929;-89.2182" />
        <meta name="ICBM" content="13.6929, -89.2182" />
        <meta property="business:contact_data:locality" content="San Salvador" />
        <meta property="business:contact_data:country_name" content="El Salvador" />
        <meta property="business:contact_data:email" content="contacto@eterniasv.com" />
        <meta name="rating" content="General" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RY8MW9PT86"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RY8MW9PT86');
            `,
          }}
        />

        {/* Schema.org para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WeddingPlanner",
              name: "Eternia Wedding & Event Planner",
              description:
                "El mejor wedding planner y event planner en El Salvador. Planificación de bodas, XV años, eventos corporativos y sociales.",
              url: "https://eterniasv.com",
              logo: "https://eterniasv.com/favicon.ico",
              image: "https://eterniasv.com/images/wedding-elegant-reception.jpg",
              telephone: "+503-xxxx-xxxx",
              email: "contacto@eterniasv.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Salvador",
                addressRegion: "San Salvador",
                addressCountry: "SV",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "13.6929",
                longitude: "-89.2182",
              },
              areaServed: {
                "@type": "Country",
                name: "El Salvador",
              },
              priceRange: "$$-$$$",
              serviceType: ["Wedding Planning", "Event Planning", "Quinceañera Planning", "Corporate Events"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
