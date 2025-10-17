export default function WhyChooseUs() {
  const values = [
    {
      icon: "💸",
      title: "0% Commission",
      desc: "Keep what you earn, always.",
    },
    {
      icon: "🔍",
      title: "Transparent Contracts",
      desc: "No hidden fees or surprises.",
    },
    {
      icon: "💰",
      title: "$2M+ Paid Out",
      desc: "Trusted by thousands worldwide.",
    },
    {
      icon: "👥",
      title: "50K+ Freelancers",
      desc: "A thriving, global community.",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose XpertTask?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {values.map((v, i) => (
          <div key={i}>
            <div className="text-3xl mb-2">{v.icon}</div>
            <div className="font-bold text-lg">{v.title}</div>
            <div className="text-slate-500 text-sm">{v.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 