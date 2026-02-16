const availabilityItems = [
  "Satellite/aerial imagery analysis for infrastructure",
  "Building energy modeling and heat demand prediction",
  "Filling sparse or incomplete energy/building datasets",
  "Computer vision for urban planning and climate applications",
];

export default function Availability() {
  return (
    <section id="availability" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6">Available for Consulting</h3>
          <p className="text-lg mb-6">
            I work with startups and scale-ups{" "}
            <strong>8-12 hours per week</strong> on:
          </p>

          <ul className="space-y-4">
            {availabilityItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#00b894] font-bold text-xl mr-3">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-lg">
            Based in Germany, working with clients globally.
          </p>
        </div>
      </div>
    </section>
  );
}
