"use client";
import React from "react";

export default function WhyDifferent() {
  const differentiators = [
    {
      icon: "🛡️",
      title: "Trust-First Principles",
      description: "We prioritize transparency, fairness, and accountability for every user."
    },
    {
      icon: "📈",
      title: "Smarter Growth Paths",
      description: "Progressively level up based on skills, performance, and feedback."
    },
    {
      icon: "🔍",
      title: "Transparent Model",
      description: "No hidden fees. Clear terms, visible milestones, and open data."
    },
    {
      icon: "⭐",
      title: "Performance-Based Boosts",
      description: "Earn higher visibility through quality work — not money."
    },
    {
      icon: "🎯",
      title: "Long-Term Career Focus",
      description: "Build sustainable careers, not just gigs. Relationships matter."
    },
    {
      icon: "🌍",
      title: "Global Talent, Local Support",
      description: "Tap into worldwide opportunities while receiving dedicated support."
    },
    {
      icon: "👥",
      title: "Designed for Freelancers",
      description: "Every feature is built with freelancers' needs, habits, and feedback in mind."
    },
    {
      icon: "💡",
      title: "Community-Powered Innovation",
      description: "Users shape the roadmap through feedback, forums, and idea boards."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f9ff] via-[#f0f2ff] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why XpertTask is Different
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're building a smarter, fairer, and more empowering freelance ecosystem.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span className="text-xl text-white">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span className="text-xl">✨</span>
            Experience the Difference
          </div>
        </div>
      </div>
    </section>
  );
} 