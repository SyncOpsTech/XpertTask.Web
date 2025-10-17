export default function RealTimeStats() {
  const stats = [
    { label: "Active Jobs Now", value: "128", color: "#6B40FF" },
    { label: "Funds Paid Today", value: "$12,500", color: "#FF66C4" },
    // Add more as needed
  ];
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-center gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-slate-500 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 