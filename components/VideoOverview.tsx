export default function VideoOverview() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">See XpertTask in Action</h2>
      <p className="text-slate-500 mb-6 text-center">
        Watch our quick explainer to see how XpertTask empowers freelancers and clients.
      </p>
      <div className="w-full max-w-2xl aspect-video bg-slate-200 rounded-2xl shadow-lg flex items-center justify-center">
        {/* Replace with actual video or animated demo */}
        <span className="text-4xl text-slate-400">🎬</span>
      </div>
    </section>
  );
} 