export default function TopFreelancers() {
  const freelancers = [
    {
      name: "Jane Doe",
      role: "UI/UX Designer",
      avatar: "/avatar1.png",
      skills: ["Figma", "Mobile"],
      rating: 4.9,
      reviews: 120,
    },
    {
      name: "John Smith",
      role: "Full Stack Dev",
      avatar: "/avatar2.png",
      skills: ["React", "Node.js"],
      rating: 4.8,
      reviews: 98,
    },
    {
      name: "Sara Lee",
      role: "AI Engineer",
      avatar: "/avatar3.png",
      skills: ["AI", "Python"],
      rating: 5.0,
      reviews: 75,
    },
    // Add more as needed
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Top Freelancers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {freelancers.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-lg border border-white/30 flex flex-col items-center text-center hover:scale-105 transition"
          >
            <img src={f.avatar} alt={f.name} className="w-16 h-16 rounded-full mb-3" />
            <div className="font-bold text-lg">{f.name}</div>
            <div className="text-slate-500 text-sm mb-2">{f.role}</div>
            <div className="flex gap-2 mb-2">
              {f.skills.map((skill, j) => (
                <span
                  key={j}
                  className="bg-[#D0B3FF] text-[#222] text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              ★ {f.rating} <span className="text-slate-400">({f.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 