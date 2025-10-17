"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Sparkles } from "lucide-react"
import ParticleField from "@/components/particle-field"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const animated = Array.from(section.querySelectorAll<HTMLElement>("[data-animate]"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.animationDelay = `${target.dataset.delay || "0"}s`
            target.classList.add("reveal-up")
            observer.unobserve(target)
          }
        })
      },
      {
        threshold: 0.35,
      },
    )

    animated.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pb-28 pt-36 text-left sm:pb-36 sm:pt-44 lg:pb-40"
    >
      <ParticleField />

      <div className="absolute left-1/2 top-24 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/15 via-transparent to-transparent blur-3xl" />
      <div className="absolute -left-24 bottom-10 -z-10 hidden h-[320px] w-[320px] rotate-45 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-3xl md:block" />

      <div className="container relative mx-auto px-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-14 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-12">
            <h1
              data-animate
              data-delay="0.05"
              className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[44px] xl:text-[56px]"
            >
              <span className="block text-[32px] leading-tight sm:text-[42px] lg:text-[56px]">Kundan Thota</span>
              <span className="mt-6 inline-flex w-full flex-wrap items-center justify-start gap-3 text-xs sm:text-sm md:flex-nowrap md:text-sm">
                <span className="relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/30 px-4 py-2 font-semibold text-primary shadow-lg shadow-primary/20 backdrop-blur sm:px-5 sm:py-2.5">
                  <span className="pointer-events-none absolute inset-0 -z-20 rounded-full bg-white/70" />
                  <span className="pointer-events-none absolute inset-0 -z-10 animate-[gradient_8s_ease_infinite] bg-[length:200%_200%] bg-gradient-to-r from-primary/30 via-indigo-500/25 to-fuchsia-500/30" />
                  <Sparkles className="relative h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="relative tracking-[0.05em] uppercase">AI Researcher</span>
                </span>
                <span className="hidden h-5 w-px bg-gradient-to-b from-primary/40 via-slate-300 to-primary/40 md:block" />
                <span className="relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full border border-slate-200 px-4 py-2 font-medium text-slate-700 shadow-md backdrop-blur sm:px-5 sm:py-2.5">
                  <span className="pointer-events-none absolute inset-0 -z-20 rounded-full bg-white/85" />
                  <span className="pointer-events-none absolute inset-0 -z-10 animate-[gradient_10s_ease_infinite] bg-[length:220%_220%] bg-gradient-to-r from-slate-100 via-primary/10 to-slate-100" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-primary/60 sm:size-2" />
                  <span className="relative tracking-[0.05em] uppercase">Product-focused ML Engineer</span>
                </span>
              </span>
            </h1>
            <p
              data-animate
              data-delay="0.12"
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              Innovative and results-driven AI professional with a Master&apos;s in Computer Science, delivering
              research-grade machine learning, generative AI, and synthetic data for energy transition, supply
              chain, and fashion technology programs.
            </p>

            <div className="h-8"></div>
            <div data-animate data-delay="0.28" className="grid gap-7 sm:grid-cols-3">
              {[
                {
                  label: "End-to-end ML launches",
                  value: "10+",
                },
                {
                  label: "Domains served",
                  value: "4",
                },
                {
                  label: "Research publications",
                  value: "2",
                },
              ].map((item) => (
                <Card
                  key={item.label}
                  className="group rounded-3xl border border-white/40 bg-white/65 px-6 py-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="text-3xl font-semibold text-slate-900 group-hover:text-primary">{item.value}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card
            data-animate
            data-delay="0.22"
            className="relative overflow-hidden rounded-[2.2rem] border border-white/50 bg-white/75 p-6 shadow-xl backdrop-blur-lg lg:ml-auto lg:max-w-[360px]"
          >
            <div className="relative mx-auto aspect-[4/5] w-[280px] sm:w-[300px]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-primary/30 via-transparent to-primary/20 blur-3xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/70 shadow-[0_35px_80px_-50px_rgba(79,70,229,0.45)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent" />
                <img src="./cover.png" alt="Portrait of Kundan Thota" className="block h-full w-full object-cover" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
