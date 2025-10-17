"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  title: string
  description: string
  achievements: string[]
  challenges: string[]
  techStack: string[]
  image: string
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
    {
      title: "Disease Information Retrieval-Augmented Q&A System",
      description:
        "Developed a Q&A system to provide precise information about diseases by integrating a retrieval mechanism with large language models (LLMs).",
      achievements: [
        "Created a retrieval-based Q&A system that provides accurate disease-related information using medical documents.",
        "Applied DocArrayInMemorySearch and RecursiveCharacterTextSplitter to efficiently retrieve disease-specific information.",
        "Used Ollama's Llama3 model to generate answers based on the context provided by retrieved documents.",
      ],
      challenges: [
        "Minimized incorrect model responses by refining prompts and ensuring retrieval of the most relevant content.",
        "Enhanced document splitting to retain critical information while ensuring efficient retrieval.",
      ],
      techStack: ["FastAPI", "LangChain", "Ollama", "GPT4AllEmbeddings"],
      image: "/llm.gif",
    },
    {
      title: "Human Cloth Generation for Different Pose Sequences",
      description:
        "Developed a system that generates realistic human clothes for different poses using advanced machine learning techniques.",
      achievements: [
        "Developed a Generative Adversarial Network (GAN) with a unique mesh patch-wise discriminator.",
        "Trained a Graph Convolution Conditional Variational Autoencoder GAN (CVAE-GAN).",
        "Utilized graph neural networks to effectively model the complex relationships within cloth meshes.",
      ],
      challenges: [],
      techStack: ["Python", "PyTorch", "Graph Neural Networks", "GANs", "VAE"],
      image: "/anime.gif",
    },
    {
      title: "Estimation of 3D Avatar and Clothing Measurements",
      description:
        "Developed a simple and efficient system for estimating 3D avatar and clothing measurements from front- and side-view images.",
      achievements: [
        "Proposed a simple yet effective architecture to estimate shape and measures from front- and side-view images.",
        "Designed an auto-encoder network to learn low-dimensional features from segmented human silhouettes.",
        "The model can estimate 3D shape and clothing measures with a model size of 25 MB, easy to embed into mobile apps.",
      ],
      challenges: [],
      techStack: ["Python", "Auto-encoder Networks", "Kernel-based Regression"],
      image: "/3d-avatar-body-measurement-visualization.jpg",
    },
    {
      title: "Pairs Trading Strategy with News Sentiment Analysis",
      description:
        "Enhanced the traditional pairs trading strategy by incorporating news sentiment analysis to predict correlation discrepancies between stock pairs.",
      achievements: [
        "Conducted correlation tests to identify pairs of stocks with high historical correlation.",
        "Analyzed news sentiment using sources like News-API and GDELT to gauge market perception.",
        "Created trading signals based on sentiment and popularity data with back-tested strategies.",
      ],
      challenges: [],
      techStack: ["Python", "NLP", "Sentiment Analysis", "Web Scraping", "Back Testing"],
      image: "/stock-trading-dashboard-with-sentiment-analysis.jpg",
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>("[data-animate]")
            items.forEach((el, index) => {
              el.style.animationDelay = `${0.1 + index * 0.05}s`
              el.classList.add("reveal-up")
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
    <section id="projects" ref={sectionRef} className="relative py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[540px] bg-gradient-to-b from-white via-transparent to-transparent" />
      <div className="container mx-auto px-5">
        <div className="text-center">
          <p data-animate className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/70">
            Projects
          </p>
          <h2 data-animate data-delay="0.08" className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            Machine learning products I’ve shipped across health, fashion, and finance.
          </h2>
          <p data-animate data-delay="0.16" className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Each build pairs research-grade modeling with thoughtful delivery—diagnostic copilots, generative design
            tools, and market intelligence systems that made it into the hands of real users.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.7fr)] lg:items-start">
          <Card
            data-animate
            className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/90 p-6 shadow-lift sm:p-8 lg:p-10"
          >
            <div className="absolute -right-24 top-24 hidden h-72 w-72 rounded-full bg-primary/10 blur-3xl lg:block" />
            <div className="relative flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,0.95fr)] lg:gap-12">
              <div className="order-2 space-y-6 lg:order-1">
                <Badge className="w-full max-w-full rounded-2xl bg-primary/10 px-4 py-2 text-center text-sm font-semibold tracking-tight text-primary shadow-sm backdrop-blur-sm whitespace-normal text-balance sm:w-fit sm:px-5 sm:py-2 sm:text-left sm:text-base lg:text-lg">
                  {currentProject.title}
                </Badge>
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{currentProject.description}</h3>
                <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">Why it matters</p>
                    <ul className="mt-3 space-y-2">
                      {currentProject.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <span className="mt-1 inline-flex size-1.5 rounded-full bg-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentProject.challenges.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">Challenges</p>
                      <ul className="mt-3 space-y-2">
                        {currentProject.challenges.map((challenge) => (
                          <li key={challenge} className="flex gap-3">
                            <span className="mt-1 inline-flex size-1.5 rounded-full bg-emerald-400" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                  {currentProject.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-primary/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between lg:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevProject}
                    className="rounded-full border border-primary/20 bg-white/80 text-primary shadow-sm"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2">
                    {projects.map((_, index) => (
                      <span
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentIndex ? "w-8 bg-primary" : "w-3 bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextProject}
                    className="rounded-full border border-primary/20 bg-white/80 text-primary shadow-sm"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="order-1 overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-lg lg:order-2">
                <div className="relative h-64 w-full overflow-hidden sm:h-72 lg:h-full">
                  <img
                    key={currentProject.image}
                    src={currentProject.image || "/placeholder.svg"}
                    alt={currentProject.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </Card>

          <Card
            data-animate
            data-delay="0.12"
            className="hidden rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-md backdrop-blur lg:block"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">Next project</p>
              <Button variant="ghost" size="icon" onClick={nextProject} className="rounded-full text-primary">
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-6 space-y-6">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                    index === currentIndex
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "border-transparent bg-white/70 text-slate-700 hover:border-primary/20 hover:bg-primary/5"
                  }`}
                >
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span>{project.title}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">View</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{project.description}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevProject}
                className="rounded-full border border-primary/20 text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                {projects.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-primary" : "w-3 bg-muted"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextProject}
                className="rounded-full border border-primary/20 text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
