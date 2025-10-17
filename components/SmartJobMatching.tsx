"use client";
import React from "react";

export default function SmartJobMatching() {
  const matchingFeatures = [
    {
      icon: "🎯",
      title: "Personalized Job Discovery",
      description: "Find opportunities that align with your skills, interests, and career stage."
    },
    {
      icon: "🔍",
      title: "Meaningful Filters",
      description: "Easily explore relevant projects by area of focus, project type, and goals."
    },
    {
      icon: "⏰",
      title: "Timely Recommendations",
      description: "Get notified when great-fit projects open up — without endless searching."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#f8f9ff] via-[#f0f2ff] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🔍</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Smart Matching</h2>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 max-w-3xl mx-auto">
            Jobs That Find You. XpertTask helps you connect with high-fit opportunities as you grow.
          </h3>
        </div>

        {/* Matching Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {matchingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF66C4]/10 to-[#8A2EFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-xl">🔍</span>
            Start Getting Matched
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            💡 Connect with opportunities that match your expertise and growth goals
          </p>
        </div>
      </div>
    </section>
  );
} 