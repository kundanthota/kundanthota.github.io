import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-32">
      <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[720px] bg-gradient-to-b from-primary/15 via-background to-background" />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-3xl" />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
