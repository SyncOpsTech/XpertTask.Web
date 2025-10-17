"use client";
import React from "react";

export default function CoreVision() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-[#FAFAFF] relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're building a world where work is fair, opportunities are abundant, and everyone can thrive on their own terms.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Connect great talent with meaningful work</h3>
                  <p className="text-gray-600">We help professionals find projects that align with their skills and goals.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Reward growth, trust, and outcomes</h3>
                  <p className="text-gray-600">We value your contributions and support continuous progress and reliability.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Smarter connections for faster hiring</h3>
                  <p className="text-gray-600">Our system supports efficient discovery of projects and talent without the noise.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Community-first: invite, grow, collaborate</h3>
                  <p className="text-gray-600">Join a trusted network where professionals support and grow together.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#f8f9ff] via-[#eae6ff] to-[#f3e6ff] rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="relative">
                {/* Dashboard mockup */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-black">Smart Matching Preview</h4>
                        <p className="text-sm text-gray-500">Opportunity highlights tailored to your profile</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Categories */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#8A2EFF]">Top Matches</div>
                      <div className="text-xs text-gray-500">Best fits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#FF66C4]">Verified Projects</div>
                      <div className="text-xs text-gray-500">Trusted clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-500">Skill-Based</div>
                      <div className="text-xs text-gray-500">Suggestions</div>
                    </div>
                  </div>

                  {/* Project cards */}
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-[#f8f9ff] to-[#eae6ff] rounded-xl p-3 border border-[#8A2EFF]/20">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-semibold text-black text-sm">React Dashboard UI</h5>
                            <span className="bg-[#8A2EFF] text-white text-xs px-2 py-0.5 rounded-full">Great Fit</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">💰 $2,500</span>
                            <span className="text-xs text-gray-500">⭐ Frontend</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#f8f9ff] to-[#eae6ff] rounded-xl p-3 border border-[#FF66C4]/20">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-semibold text-black text-sm">Mobile App Design</h5>
                            <span className="bg-[#FF66C4] text-white text-xs px-2 py-0.5 rounded-full">Popular</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">💰 $1,800</span>
                            <span className="text-xs text-gray-500">⭐ Creative</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 