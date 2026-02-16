const services = [
  {
    title: "Fill missing building/energy data",
    description: "with AI-generated synthetic data",
  },
  {
    title: "Apply computer vision to satellite imagery",
    description: "for urban energy planning",
  },
  {
    title: "Build multi-agent systems",
    description: "for automated data acquisition",
  },
  {
    title: "Create uncertainty-aware ML models",
    description: "that planners can trust",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#003566] mb-8">
          What I Do
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          I help climate tech and energy companies solve critical data availability problems:
        </p>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border-l-4 border-[#00b894] shadow-sm hover:shadow-md hover:translate-x-1 transition-all"
            >
              <strong className="text-[#003566] text-lg">{service.title}</strong>{" "}
              <span className="text-gray-600">{service.description}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-lg text-gray-500">
          My work enables energy planning projects that would otherwise stall due to incomplete data.
        </p>
      </div>
    </section>
  );
}
