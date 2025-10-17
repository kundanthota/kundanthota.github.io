"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  achievements: string[]
  logo?: string
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const experiences: Experience[] = [
    {
      title: "AI Researcher",
      company: "KIT IAI",
      period: "Mar 2025 – Present",
      achievements: [
        "Contributing to the NEED project with AI-driven synthetic data generation to fill missing energy dataset signals—using computer vision on satellite/remote-sensing imagery, VLMs, and LLM-assisted enrichment for planner-ready inputs.",
       "Built a multi-agent data acquisition system that orchestrates scrapers and vision models across heterogeneous sources to estimate building age, enabling downstream energy modeling when official records are incomplete.",
      "Demonstrated that combining visual features with semantic/contextual signals (research paper) improves energy modeling fidelity, with uncertainty tracking and bias checks to keep synthetic outputs trustworthy."
    ],
    },
    {
      title: "Contributor",
      company: "Crateflow",
      period: "Aug 2024 – Mar 2025",
      achievements: [
        "Implemented a demand forecasting backend that boosts supply chain accuracy and visibility across partners.",
        "Built agentic workflows to automate inventory management, safety stock recommendations, and replenishment triggers.",
        "Integrated MLflow-driven observability for continuous model tracking, evaluation, and redeployment.",
      ],
    },
    {
      title: "Data Scientist",
      company: "Tramo Service",
      period: "Aug 2023 – Feb 2025",
      achievements: [
        "Productised image correction and normalisation pipelines so dynamic signage renders clean, high-quality visuals.",
        "Developed raw-video pedestrian detection and anonymisation services to monitor construction sites while remaining privacy-compliant.",
        "Automated document analysis with OCR and NLP classifiers for faster text extraction and routing.",
        "Fine-tuned YOLOv5 for road accident detection and deployed it within real-time safety dashboards.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "Shapematchr GmbH",
      period: "Jun 2022 – Jun 2023",
      achievements: [
        "Engineered ML pipelines that convert radar signals into 3D human avatars for fashion and fitness applications.",
        "Built feature extraction models powering image-based product recommendations at scale.",
        "Generated Blender-based synthetic datasets that accelerated cloth simulation model performance.",
        "Delivered FastAPI and Docker microservices to operationalise internal ML tooling.",
      ],
    },
    {
      title: "Research & Development",
      company: "Fraunhofer IOSB & TU Kaiserslautern",
      period: "Apr 2020 – Jun 2022",
      achievements: [
        "Built ML optimisation models that lifted industrial efficiency across sensor-rich environments.",
        "Launched a real-time web application for training, monitoring, and validating ML models with operators in the loop.",
        "Shipped Python Dash dashboards for financial time-series forecasting with automated scraping and analytics.",
        "Established Docker-based CI/CD pipelines and published research on 3D body shape estimation and virtual try-on.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "Sociovestix Labs",
      period: "Apr 2020 – Jun 2021",
      achievements: [
        "Trained machine learning models that produce portfolio management signals grounded in market sentiment.",
        "Designed interactive investor dashboards that communicate allocation shifts and risk scenarios in real time.",
        "Automated financial data ingestion and cleaning pipelines to keep portfolios and analytics current.",
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>("[data-animate]")
            items.forEach((card, index) => {
              if (card.classList.contains("reveal-up")) return
              const delayAttr = card.dataset.delay
              const sequenceAttr = card.dataset.sequence
              const sequence = sequenceAttr ? Number(sequenceAttr) : index
              const delay = delayAttr ? Number(delayAttr) : 0.12 + sequence * 0.08
              card.style.animationDelay = `${delay}s`
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
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="relative py-28">
      <div className="absolute inset-x-0 top-20 -z-10 h-72 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p data-animate className="text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
            Timeline
          </p>
          <h2 data-animate data-delay="0.08" className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            From research labs to production ML programs.
          </h2>
          <p data-animate data-delay="0.16" className="mt-6 text-lg text-muted-foreground">
            Every chapter pairs experimentation with delivery—energy transition, supply chain automation, and immersive
            customer experiences.
          </p>
        </div>

        <div className="relative mt-20">
          <span className="timeline-line absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:block md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isActive = activeIndex === index
              const isLast = index === experiences.length - 1

              return (
                <div
                  key={`${exp.title}-${exp.company}`}
                  data-animate
                  className="relative"
                >
                  <div className="flex items-start gap-5 md:block">
                    <div className="relative flex flex-col items-center md:hidden">
                      <span
                        className={`timeline-dot grid size-5 place-content-center rounded-full text-primary transition-transform duration-500 ${
                          isActive
                            ? "scale-110 bg-primary/30 shadow-[0_0_40px_rgba(79,70,229,0.45)]"
                            : "bg-primary/15 shadow-[0_0_25px_rgba(79,70,229,0.25)]"
                        }`}
                      >
                        <span
                          className={`relative inline-flex size-2.5 rounded-full bg-primary transition-transform duration-500 ${
                            isActive
                              ? "scale-110 shadow-[0_0_18px_rgba(79,70,229,0.6)]"
                              : "shadow-[0_0_10px_rgba(79,70,229,0.55)]"
                          }`}
                        />
                      </span>
                      {!isLast && (
                        <span className="mt-2 h-full w-px flex-1 bg-gradient-to-b from-primary/25 via-primary/10 to-transparent" />
                      )}
                    </div>

                    <div className="flex-1 md:relative">
                      <span
                        className={`timeline-dot hidden md:absolute md:left-1/2 md:top-7 md:grid md:size-5 md:-translate-x-1/2 md:place-content-center rounded-full text-primary transition-transform duration-500 ${
                          isActive
                            ? "scale-110 bg-primary/30 shadow-[0_0_40px_rgba(79,70,229,0.45)]"
                            : "bg-primary/15 shadow-[0_0_25px_rgba(79,70,229,0.25)]"
                        }`}
                      >
                        <span
                          className={`relative inline-flex size-2.5 rounded-full bg-primary transition-transform duration-500 ${
                            isActive
                              ? "scale-110 shadow-[0_0_18px_rgba(79,70,229,0.6)]"
                              : "shadow-[0_0_10px_rgba(79,70,229,0.55)]"
                          }`}
                        />
                      </span>

                      <div className="relative md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-12">
                        <Card
                          className={`group relative mt-0 rounded-[1.9rem] border border-white/60 bg-white/85 p-7 shadow-md backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_35px_80px_-40px_rgba(79,70,229,0.45)] md:mt-0 ${
                            index % 2 === 0
                              ? "md:col-start-1 md:mr-16 md:justify-self-end"
                              : "md:col-start-2 md:ml-16 md:justify-self-start"
                          } ${
                            isActive ? "ring-1 ring-primary/25 shadow-[0_40px_100px_-60px_rgba(79,70,229,0.5)]" : ""
                          }`}
                          tabIndex={0}
                          onMouseEnter={() => setActiveIndex(index)}
                          onMouseLeave={() => setActiveIndex((current) => (current === index ? null : current))}
                          onFocus={() => setActiveIndex(index)}
                          onBlur={(event) => {
                            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                              setActiveIndex((current) => (current === index ? null : current))
                            }
                          }}
                          onClick={() =>
                            setActiveIndex((current) => {
                              if (current === index) {
                                return null
                              }
                              return index
                            })
                          }
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault()
                              setActiveIndex((current) => (current === index ? null : index))
                            }
                          }}
                          aria-expanded={isActive}
                          aria-controls={`experience-details-${index}`}
                        >
                          <div className="absolute inset-0 rounded-[1.9rem] border border-transparent transition duration-500 group-hover:border-primary/20" />
                          <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div>
                              <Badge
                                variant="secondary"
                                className="w-fit rounded-full border border-primary/20 bg-primary/10 text-primary"
                              >
                                <Calendar className="mr-2 h-3 w-3" />
                                {exp.period}
                              </Badge>
                              <h3 className="mt-4 text-xl font-semibold text-slate-900">{exp.title}</h3>
                              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                <Building2 className="h-4 w-4 text-primary/70" />
                                <span>{exp.company}</span>
                              </div>
                            </div>
                          </div>
                          <ul
                            id={`experience-details-${index}`}
                            className={`experience-panel relative mt-0 max-h-0 space-y-3 overflow-hidden text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 ease-out ${
                              isActive
                                ? "pointer-events-auto mt-6 max-h-[420px] translate-y-0 opacity-100"
                                : "pointer-events-none -translate-y-4"
                            }`}
                            aria-hidden={!isActive}
                          >
                            {exp.achievements.map((achievement) => (
                              <li
                                key={achievement}
                                className="flex gap-3 rounded-2xl border border-transparent p-2 transition duration-500 hover:border-primary/20 hover:bg-primary/5 hover:text-slate-900"
                              >
                                <span className="mt-1 inline-flex size-1.5 rounded-full bg-primary" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 flex items-center gap-3">
                            <div className="relative h-[1px] flex-1 overflow-hidden rounded-full bg-primary/10">
                              <span
                                className={`absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-500 ${
                                  isActive ? "scale-x-100" : ""
                                }`}
                              />
                            </div>
                            <span
                              className={`flex size-8 items-center justify-center rounded-full border border-primary/20 text-[10px] font-semibold uppercase tracking-[0.32em] text-primary/70 transition-all duration-500 ${
                                isActive ? "bg-primary/10 shadow-[0_0_15px_rgba(79,70,229,0.35)]" : "bg-white/80"
                              }`}
                            >
                              ✳︎
                            </span>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
