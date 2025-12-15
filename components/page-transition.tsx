"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return t("home")
      case "/nosotros":
        return t("about")
      case "/servicios":
        return t("services")
      case "/contacto":
        return t("contact")
      default:
        return "ETERNIA"
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })

    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 600)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] pointer-events-none"
          >
            <div className="absolute inset-0 bg-black/95" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white text-center"
              >
                <h2 className="text-6xl font-serif font-bold tracking-wide uppercase">{getPageTitle()}</h2>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  )
}
