export default function FeaturedProjects() {
  const projects = [
    {
      title: "AI Chatbot for E-commerce",
      desc: "Develop a smart chatbot to boost sales and support.",
      budget: "$3,000",
      tags: ["🤖 AI", "🛡️ Trusted Client"],
    },
    {
      title: "Mobile App Redesign",
      desc: "Revamp our iOS/Android app for better UX.",
      budget: "$2,200",
      tags: ["📱 Mobile", "🎨 Figma"],
    },
    {
      title: "SaaS Dashboard",
      desc: "Build a scalable analytics dashboard for B2B clients.",
      budget: "$4,500",
      tags: ["💼 SaaS", "📊 Data"],
    },
    // Add more as needed
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="min-w-[300px] bg-white rounded-2xl p-6 shadow-lg border border-white/30 hover:scale-105 transition"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-[#222]">{p.title}</span>
              <span className="bg-[#A7EFC3] text-[#222] text-xs font-medium px-3 py-1 rounded-full shadow-sm">{p.budget}</span>
            </div>
            <p className="text-xs text-[#555] mb-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-[#FFD6EC] text-[#222] text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 