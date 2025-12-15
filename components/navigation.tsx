"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const links = [
    { href: "/", label: t("home") },
    { href: "/nosotros", label: t("about") },
    { href: "/servicios", label: t("services") },
    { href: "/contacto", label: t("contact") },
  ]

  const languages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "pt", label: "Português" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/98 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary-foreground tracking-wide transition-all duration-500 group-hover:opacity-70 group-hover:scale-105">
              ETERNIA
            </div>
            <div className="hidden sm:block text-[9px] sm:text-[10px] text-secondary font-light tracking-[0.3em] uppercase ml-1 sm:ml-2 transition-all duration-500 group-hover:text-accent group-hover:tracking-[0.4em] group-hover:scale-110">
              {t("slogan")}
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wider uppercase transition-all relative group ${
                  pathname === link.href
                    ? "text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-primary-foreground transition-all ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={language === lang.code ? "bg-muted" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button className="lg:hidden text-primary-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-in slide-in-from-top-4">
          <div className="container mx-auto px-4 py-6 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-primary-foreground bg-primary-foreground/10"
                    : "text-primary-foreground/70 hover:bg-primary-foreground/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/50 mb-3 uppercase tracking-wider px-4">Idioma / Language</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any)
                      setIsOpen(false)
                    }}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      language === lang.code
                        ? "bg-primary-foreground text-primary"
                        : "bg-card text-card-foreground hover:bg-card/80"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
