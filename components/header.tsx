"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
          <span className="text-foreground">ETERNIA</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-xl md:hidden">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left py-2 text-sm uppercase tracking-wider hover:text-accent transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-left py-2 text-sm uppercase tracking-wider hover:text-accent transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left py-2 text-sm uppercase tracking-wider hover:text-accent transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left py-2 text-sm uppercase tracking-wider hover:text-accent transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
