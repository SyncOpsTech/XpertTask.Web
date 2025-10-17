export default function TrustedByLogos() {
  // Placeholder SVG logos with XpertTask theme colors
  const logos = [
    {
      name: "Meta",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Airbnb",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Microsoft",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      name: "Netflix",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M5 4l14 8-14 8V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Google",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 2a10 10 0 0 1 0 20" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      name: "Apple",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 6v12" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-slate-500 mb-6 font-medium">Trusted by companies worldwide</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center w-32 max-h-10 text-gray-400 hover:text-[#6B40FF] transition-all duration-300 transform hover:scale-110 animate-fadeIn"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 