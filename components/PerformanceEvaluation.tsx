"use client";
import React, { useEffect, useRef } from 'react';

export default function PerformanceEvaluation() {
  const stepCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepCardRef.current) {
      observer.observe(stepCardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="grid" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8F00FF" />
              <stop offset="100%" stopColor="#FF66C4" />
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="2" fill="url(#grid)" />
          <circle cx="80" cy="30" r="1.5" fill="url(#grid)" />
          <circle cx="40" cy="70" r="1" fill="url(#grid)" />
          <circle cx="90" cy="80" r="2.5" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">📈</span>
            </div>
          </div>
          
          {/* Micro-headline */}
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Performance, Evolved.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📊 Built to Understand You Better
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlike traditional freelance platforms that rely on rigid, outdated formulas, XpertTask adapts to how you grow.
          </p>
        </div>

        {/* Main Content - Completely New Design */}
        <div className="space-y-12">
          {/* Top Row: Main Message */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              We've designed a smarter, more flexible system that considers various aspects of your performance — not just a single metric.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              As you complete projects and build trust, the platform naturally understands your strengths, consistency, and value — helping you unlock better matches, visibility, and opportunities over time.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 rounded-full border border-[#8F00FF]/20">
              <span className="text-[#8F00FF] font-semibold">No pressure. Just progress.</span>
            </div>
          </div>

          {/* Middle Row: Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Adaptive Learning</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our system learns from your work patterns, communication style, and project outcomes to provide increasingly accurate matches.
              </p>
              <div className="flex items-center text-sm text-[#8F00FF] font-medium">
                <span>Grows with you</span>
                <span className="ml-2">→</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Trust Building</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every successful project, on-time delivery, and positive review builds your trust score and unlocks new opportunities.
              </p>
              <div className="flex items-center text-sm text-[#8F00FF] font-medium">
                <span>Build reputation</span>
                <span className="ml-2">→</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Natural Growth</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                As you demonstrate consistency and quality, the platform automatically increases your visibility and project recommendations.
              </p>
              <div className="flex items-center text-sm text-[#8F00FF] font-medium">
                <span>Unlock opportunities</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Interactive Journey Timeline */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100" ref={stepCardRef}>
            <div className="text-center mb-12">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Your Growth Journey</h4>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how your performance evolves and unlocks new possibilities on the platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-3">Start Your Journey</h5>
                <p className="text-gray-600 mb-4">Complete your first project and establish your baseline performance metrics.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-green-700 font-medium">Completed</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-3">Build Trust</h5>
                <p className="text-gray-600 mb-4">Deliver consistent quality and build your reputation through successful projects.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-sm text-yellow-700 font-medium">In Progress</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🔒</span>
                  </div>
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-3">Unlock Opportunities</h5>
                <p className="text-gray-600 mb-4">Access premium projects, higher visibility, and exclusive platform features.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="text-sm text-gray-600 font-medium">Locked</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <button className="group bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg mx-auto">
                <span>Start Your Growth Journey</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <p className="text-sm text-gray-500 mt-4">
                <a href="/scoring" className="text-[#8F00FF] hover:text-[#FF66C4] transition-colors duration-200 font-medium">
                  Learn more about our performance system →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
} 