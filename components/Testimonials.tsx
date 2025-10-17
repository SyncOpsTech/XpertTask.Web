export default function Testimonials() {
  const testimonials = [
    {
      name: "Acme Corp",
      role: "Client",
      avatar: "/avatar2.png",
      text: "XpertTask made hiring seamless and transparent. The 0% commission is a game changer!",
    },
    {
      name: "Jane Doe",
      role: "Freelancer",
      avatar: "/avatar1.png",
      text: "I love the referral-based visibility and fair contracts. XpertTask is the future of freelancing.",
    },
    // Add more as needed
  ];
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-lg border border-white/30"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
            <p className="text-slate-600 italic mb-2">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
} 