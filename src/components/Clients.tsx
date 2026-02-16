const clients = [
  {
    title: "Climate Tech Startups",
    description: "Building energy/building analytics platforms",
  },
  {
    title: "Energy Utilities",
    description: "Planning urban heat networks and retrofits",
  },
  {
    title: "Urban Planning Agencies",
    description: "Requiring building/infrastructure data",
  },
  {
    title: "PropTech Companies",
    description: "Needing to scale property analytics",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#003566] mb-10">
          Who I Work With
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.title}
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-[#00b894] mb-2">
                {client.title}
              </h3>
              <p className="text-gray-600 text-sm">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
