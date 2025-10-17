export default function PricingTransparency() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Transparent Pricing</h2>
      <p className="text-center text-slate-500 mb-6">
        No commissions for your first year. Compare with other platforms:
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-white/30 text-center">
          <div className="font-bold text-lg mb-2">XpertTask</div>
          <div className="text-3xl font-extrabold text-[#6B40FF] mb-2">0%</div>
          <div className="text-slate-500 text-sm">Commission</div>
        </div>
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-white/30 text-center">
          <div className="font-bold text-lg mb-2">Other Platforms</div>
          <div className="text-3xl font-extrabold text-[#FF66C4] mb-2">10–20%</div>
          <div className="text-slate-500 text-sm">Commission</div>
        </div>
      </div>
    </section>
  );
} 