export default function About() {
  const services = [
    "Fill missing building/energy data with AI-generated synthetic data",
    "Apply computer vision to satellite imagery for urban energy planning",
    "Build multi-agent systems for automated data acquisition",
    "Create uncertainty-aware ML models that planners can trust",
  ];

  const skills = [
    "PyTorch",
    "Computer Vision",
    "LLMs",
    "MLOps",
    "Satellite Imagery",
    "Synthetic Data",
    "Multi-Agent Systems",
    "Energy Modeling",
  ];

  return (
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              AI Researcher at Karlsruhe Institute of Technology (KIT), specializing in 
              synthetic data and computer vision for energy systems and climate tech.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              I help climate tech and energy companies solve critical data availability problems:
            </p>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start text-zinc-600 dark:text-zinc-400">
                  <span className="text-[#00b894] mr-3 mt-1">→</span>
                  {service}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-zinc-500 dark:text-zinc-500">
              My work enables energy planning projects that would otherwise stall due to incomplete data.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Background
            </h3>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-[#00b894] text-white rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                2 IEEE publications (2025)
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-[#00b894] text-white rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                M.Sc. Computer Science
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-[#00b894] text-white rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                5+ years shipping ML systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
