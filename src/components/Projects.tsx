interface Project {
  title: string;
  description: string;
  technologies: string[];
  publicationUrl?: string;
  venue?: string;
}

const projects: Project[] = [
  {
    title: "Building Age Prediction",
    description:
      "Built multi-agent system to predict building age from satellite imagery — enabled €50M municipal energy renovation program that was blocked by missing data.",
    technologies: ["PyTorch", "Computer Vision", "Multi-Agent Systems"],
    venue: "IEEE GreenTech 2025",
    publicationUrl: "#",
  },
  {
    title: "Heat Demand Prediction",
    description:
      "Developed zero-shot vision-language model for heat demand prediction — cut data collection costs by 95% and reduced planning timeline from 6 months to 2 weeks.",
    technologies: ["Vision-Language Models", "Zero-Shot Learning", "MLOps"],
    venue: "IEEE SusTech 2025",
    publicationUrl: "#",
  },
  {
    title: "Automated Data Acquisition",
    description:
      "Created multi-agent pipeline that reduced manual data collection from 80 hours to 8 hours per planning area.",
    technologies: ["LLMs", "Multi-Agent", "Automation"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Recent Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                <span className="text-white/80 text-sm font-medium">
                  {project.venue || "Research Project"}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded text-xs text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
