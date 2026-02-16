const credentials = [
  "2 IEEE publications (2025)",
  "M.Sc. Computer Science",
  "5+ years shipping ML systems across energy, supply chain, and mobility",
  "Expertise: PyTorch, Computer Vision, LLMs, MLOps, Satellite Imagery Analysis",
];

export default function Background() {
  return (
    <section id="background" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#003566] mb-6">
          Background
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          AI Researcher at Karlsruhe Institute of Technology (KIT)
        </p>

        <div className="space-y-4">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-sm"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-[#00b894] text-white rounded-full flex items-center justify-center font-bold mr-4">
                ✓
              </span>
              <span className="text-gray-700">{credential}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
