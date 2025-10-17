export default function BlogPreview() {
  const posts = [
    {
      title: "How to Succeed as a Freelancer in 2024",
      desc: "Tips and strategies for building your freelance career on XpertTask.",
      link: "#",
    },
    {
      title: "Why 0% Commission Matters",
      desc: "A deep dive into the XpertTask fee model and how it benefits you.",
      link: "#",
    },
    {
      title: "Building Trust with Transparent Contracts",
      desc: "How XpertTask ensures fairness for all parties.",
      link: "#",
    },
  ];
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest from Our Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-white/30">
            <div className="font-bold text-lg mb-2">{post.title}</div>
            <p className="text-slate-500 text-sm mb-2">{post.desc}</p>
            <a href={post.link} className="text-[#6B40FF] font-semibold hover:underline">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
} 