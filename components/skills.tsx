"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  category: string
  years: number
  description: string
  impact: string
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const skills: Skill[] = [
    {
      name: "ML & deep learning",
      category: "AI/ML",
      years: 5,
      description:
        "Scikit-Learn, PyTorch, MLflow, and time-series forecasting frameworks anchored in production-grade experimentation.",
      impact:
        "Launched end-to-end ML systems for energy transition, supply chain automation, and fashion tech partners.",
    },
    {
      name: "Generative & LLM systems",
      category: "AI/ML",
      years: 3,
      description:
        "LLMs, retrieval-augmented generation, prompt engineering, VAEs, and GAN pipelines tuned for domain copilots.",
      impact:
        "Delivered diagnostic copilots and design assistants that blend proprietary data with large language models.",
    },
    {
      name: "Computer vision pipelines",
      category: "Vision & NLP",
      years: 4,
      description:
        "YOLOv5, OpenCV, anonymisation, OCR, and transformer-based perception models for real-time video and image analytics.",
      impact:
        "Enabled safety monitoring, privacy-preserving detection, and automated document understanding at scale.",
    },
    {
      name: "Language understanding",
      category: "Vision & NLP",
      years: 4,
      description:
        "Transformer models, RAG pipelines, sentiment analysis, and topic modelling for finance and operations intelligence.",
      impact:
        "Equipped stakeholders with dashboards that surface sentiment-driven portfolio and supply chain decisions.",
    },
    {
      name: "Backend & API engineering",
      category: "Backend & APIs",
      years: 4,
      description:
        "FastAPI, Django, RESTful design, and microservices that expose ML capabilities through resilient interfaces.",
      impact:
        "Productised models as dependable services with clear SLAs, authentication, and partner integrations.",
    },
    {
      name: "Data & cloud foundations",
      category: "Data & Cloud",
      years: 4,
      description:
        "PostgreSQL, Redis, Linux servers, data contracts, and synthetic data generation for trustworthy pipelines.",
      impact:
        "Maintained reliable data flows that power forecasting, experimentation, and stakeholder reporting.",
    },
    {
      name: "DevOps & observability",
      category: "Tools",
      years: 3,
      description:
        "Docker, CI/CD, telemetry, and MLflow governance to keep deployments fast and auditable.",
      impact:
        "Shortened release cycles while ensuring traceability for every model iteration and experiment.",
    },
    {
      name: "3D modelling & simulation",
      category: "Vision & NLP",
      years: 3,
      description:
        "Blender, mesh processing, and physics-aware cloth simulation to create synthetic datasets and avatar experiences.",
      impact:
        "Unlocked immersive virtual try-on and body measurement workflows without costly capture sessions.",
    },
  ]

  const categories = ["All", "AI/ML", "Vision & NLP", "Backend & APIs", "Data & Cloud", "Tools"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>("[data-animate]")
            cards.forEach((card, index) => {
              card.style.animationDelay = `${0.1 + index * 0.05}s`
              card.classList.add("reveal-up")
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [filteredSkills])

  return (
    <section id="skills" ref={sectionRef} className="relative overflow-hidden py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="container mx-auto px-5">
        <div className="text-center">
          <p data-animate className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/70">
            Expertise
          </p>
          <h2 data-animate data-delay="0.08" className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            A toolkit built for complex, high-stakes AI delivery.
          </h2>
          <p data-animate data-delay="0.16" className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Years of cross-disciplinary practice across research labs, startups, and industrial partners—deploying
            models that balance interpretability, performance, and operational simplicity.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border-transparent bg-white/70 text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredSkills.map((skill) => {
            const gradient = {
              background: `conic-gradient(from 90deg at 50% 50%, rgba(99,102,241,0.45), rgba(14,165,233,0.35), rgba(244,114,182,0.4), rgba(99,102,241,0.45))`,
            }
            return (
              <Card
                key={skill.name}
                data-animate
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-md backdrop-blur transition hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-6 rounded-[1.35rem] bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                </div>

                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/60">
                        {skill.category}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-slate-900">{skill.name}</h3>
                    </div>
                    <div className="relative grid size-16 place-content-center rounded-full bg-primary/5 text-center font-semibold text-primary">
                      <div
                        aria-hidden
                        className="absolute inset-0 rounded-full opacity-70"
                        style={gradient}
                      />
                      <span className="relative text-base">{skill.years}y</span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>

                  <div className="flex items-center justify-between text-sm font-medium text-primary/80">
                    <span>See impact</span>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Detail
                      <span className="h-[2px] w-8 rounded-full bg-primary/60" />
                    </span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="max-w-xl rounded-[1.75rem] border border-white/40 bg-white/85 p-8 shadow-2xl backdrop-blur">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-slate-900">{selectedSkill?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-sm text-muted-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/60">Years in craft</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{selectedSkill?.years} years</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/60">How it shows up</p>
              <p className="mt-2 leading-relaxed text-foreground">{selectedSkill?.description}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/60">Impact</p>
              <p className="mt-2 leading-relaxed text-foreground">{selectedSkill?.impact}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
