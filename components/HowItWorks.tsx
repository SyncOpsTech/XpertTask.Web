export default function HowItWorks() {
  const steps = [
    {
      icon: "📝",
      title: "Post a Job",
      desc: "Describe your project and requirements.",
    },
    {
      icon: "🤝",
      title: "Match",
      desc: "Get matched with top freelancers.",
    },
    {
      icon: "💼",
      title: "Work",
      desc: "Collaborate and track progress easily.",
    },
    {
      icon: "💸",
      title: "Pay",
      desc: "Release payment securely on delivery.",
    },
  ];
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#8A6CFF] to-[#FF66C4] text-white text-2xl shadow-lg">{step.icon}</div>
            <h3 className="font-semibold mb-1">{step.title}</h3>
            <p className="text-sm text-slate-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 