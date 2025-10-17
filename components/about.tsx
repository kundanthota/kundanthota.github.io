"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { BrainCircuit, Compass, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>("[data-animate]")
            items.forEach((child, index) => {
              child.style.animationDelay = `${Number(child.dataset.delay ?? index * 0.08).toFixed(2)}s`
              child.classList.add("reveal-up")
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

  const traits = [
    {
      icon: BrainCircuit,
      title: "ML & deep learning systems",
      description: "Scikit-Learn, PyTorch, MLflow, and time-series pipelines that move from notebooks into resilient services.",
    },
    {
      icon: Compass,
      title: "Vision & language intelligence",
      description: "Object detection, VAEs, OCR, LLMs, and RAG workflows for analysis, monitoring, and copilots.",
    },
    {
      icon: Lightbulb,
      title: "Backend & API engineering",
      description: "FastAPI and Django microservices, Dockerized deployments, and CI/CD for ML-powered products.",
    },
    {
      icon: Rocket,
      title: "Data & operations",
      description: "PostgreSQL, Redis, Linux servers, and synthetic data generation to keep models trustworthy in production.",
    },
  ]

  const milestones = [
    {
      year: "2025",
      headline: "Energy transition intelligence",
      detail:
        "Advancing synthetic data pipelines that recover missing planning signals and delivering uncertainty-aware outputs energy planners can trust.",
    },
    {
      year: "2024",
      headline: "Supply chain forecasting",
      detail:
        "Launched a demand forecasting backbone with autonomous agents that surface safety stock actions and keep inventory plans adaptive.",
    },
    {
      year: "2023",
      headline: "Vision-first safety systems",
      detail:
        "Built image correction, anonymisation, and incident detection services so mobility analytics stay privacy-safe and reliable in real time.",
    },
    {
      year: "2022-2023",
      headline: "Generative avatars & simulation",
      detail:
        "Engineered radar-to-3D avatar pipelines, recommendation models, and synthetic datasets that power immersive fashion and fitness experiences.",
    },
    {
      year: "2020-2021",
      headline: "Financial analytics & portfolio intelligence",
      detail:
        "Developed ML optimisation pipelines, interactive dashboards, and time-series tooling that translate market signals into allocation moves.",
    },
    {
      year: "2019-2022",
      headline: "Master's in computer science",
      detail:
        "Specialised in machine learning systems design, trustworthy automation, and explainable tooling across research-led projects.",
    },
    {
      year: "2014-2018",
      headline: "Bachelor's in computer science",
      detail:
        "Built core strengths in algorithms, distributed systems, and human-computer interaction that anchor today’s applied AI work.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-18">
      <div className="container mx-auto px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p data-animate className="text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
            About
          </p>
          <h2
            data-animate
            data-delay="0.1"
            className="mt-4 text-balance text-4xl font-semibold text-slate-900 sm:text-5xl"
          >
            Designing trustworthy AI ecosystems that keep people at the helm.
          </h2>
          <p
            data-animate
            data-delay="0.18"
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            I bridge research and shipping realities, partnering with product, data, and ops teams to launch ML systems
            that stay reliable in the wild.
          </p>
        </div>
        <div className="relative mt-20 space-y-10">
          <Card
            data-animate
            data-delay="0.1"
            className="section-divider relative overflow-hidden rounded-[2.2rem] border border-transparent bg-gradient-to-br from-primary/10 via-white/80 to-white/90 p-8 shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/70">Trajectory</p>
            <div className="mt-6 space-y-6">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="grid gap-3 text-left sm:grid-cols-[120px_minmax(0,1fr)] sm:items-start sm:gap-4"
                >
                  <div className="text-sm font-semibold text-primary/80 sm:text-right sm:leading-6">
                    {milestone.year}
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-slate-900">{milestone.headline}</p>
                    <p className="text-sm text-muted-foreground">{milestone.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
            {traits.map((trait, index) => (
              <Card
                key={trait.title}
                data-animate
                data-delay={`${0.18 + index * 0.08}`}
                className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="grid size-10 place-content-center rounded-2xl bg-primary/10 text-primary">
                    <trait.icon className="h-5 w-5" />
                  </span>
                  <div className="space-y-1.5 text-left">
                    <h3 className="text-base font-semibold text-slate-900">{trait.title}</h3>
                    <p className="text-sm text-muted-foreground">{trait.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
