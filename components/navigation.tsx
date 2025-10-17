"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto mt-6 w-[min(100%-2rem,1120px)] rounded-full border border-white/5 bg-background/70 px-5 py-2.5 backdrop-blur transition-all duration-300 md:px-8 ${
          isScrolled ? "shadow-xl shadow-primary/5" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-2">
            <span className="text-base font-semibold uppercase tracking-[0.32em] text-muted-foreground md:hidden">Kundan</span>
            <span className="text-base font-semibold uppercase tracking-[0.32em] text-primary md:hidden">Thota</span>
            <span className="hidden items-baseline gap-2 md:flex">
              <span className="text-m font-semibold uppercase tracking-[0.32em] text-muted-foreground">Kundan</span>
              <span className="text-m font-semibold uppercase tracking-[0.32em] text-primary">Thota</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-transparent bg-white/5 p-1 text-sm font-medium text-muted-foreground transition md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full border border-white/10 text-muted-foreground transition md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-3 rounded-3xl border border-white/10 bg-background/90 p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 transition hover:bg-primary/10 hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
