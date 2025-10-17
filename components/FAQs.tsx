export default function FAQs() {
  const faqs = [
    {
      q: "How does 0% commission work?",
      a: "XpertTask charges no commission for your first year. After that, a minimal fee may apply.",
    },
    {
      q: "How are freelancers ranked?",
      a: "Freelancers are ranked based on referrals, reviews, and project success.",
    },
    {
      q: "Is my payment secure?",
      a: "Yes, all payments are held in escrow and released only when work is delivered.",
    },
    // Add more as needed
  ];
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-white rounded-xl shadow p-4">
            <summary className="font-semibold cursor-pointer">{faq.q}</summary>
            <p className="text-slate-600 mt-2">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
} 