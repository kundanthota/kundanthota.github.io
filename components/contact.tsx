"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, Globe, Linkedin, Mail, Phone, GraduationCap } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  const contactLinks = [
  
    {
      icon: Mail,
      label: "Email",
      value: "",
      href: "mailto:kundanthota@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "",
      href: "https://www.linkedin.com/in/kundanthota/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "",
      href: "https://github.com/kundanthota",
    },
    {
      icon: GraduationCap,
      label: "Google Scholar",
      value: "View Publications",
      href: "https://scholar.google.com/citations?user=IOLl-wMAAAAJ&hl=en&oi=sra",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>("[data-animate]")
            items.forEach((item, index) => {
              item.style.animationDelay = `${0.1 + index * 0.05}s`
              item.classList.add("reveal-up")
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-32">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-gradient-to-t from-primary/15 via-white to-transparent" />
      <div className="container mx-auto px-5">
        <div className="max-w-4xl">
          <p data-animate className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/70">
            Collaborate
          </p>
          <h2 data-animate data-delay="0.08" className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            Let’s architect the next generation of intelligent products.
          </h2>
          <p data-animate data-delay="0.16" className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I'm currently open to partnering with research labs, venture teams, and founders who are shaping thoughtful
            AI-first experiences.
          </p>
        </div>

        <div className="mt-16" data-animate>
          <Card className="rounded-[2.5rem] border border-white/70 bg-white/90 p-8 shadow-lift">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactLinks.map((link, index) => (
                <Card
                  key={link.label}
                  data-animate
                  data-delay={`${0.2 + index * 0.08}`}
                  className="group flex flex-col gap-5 rounded-[1.75rem] border border-white/70 bg-white/95 p-6 shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-content-center rounded-2xl bg-primary/10 text-primary">
                      <link.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-900">{link.value}</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" className="self-start rounded-full border border-primary/20 text-primary">
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      Visit
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <footer className="mt-24 text-center text-sm text-muted-foreground">
        <p>© 2025 Kundan Thota · Designed for clarity, empathy, and cultural impact.</p>
      </footer>
    </section>
  )
}
