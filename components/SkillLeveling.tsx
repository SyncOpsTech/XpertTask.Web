"use client";
import React from "react";

export default function SkillLeveling() {
  const growthTiers = [
    {
      icon: "🚀",
      title: "Rising Xpert",
      subtext: "Begin your journey and unlock new benefits",
      features: [
        "Access to quality projects",
        "Community support",
        "Skill-building resources",
        "Basic profile tools"
      ],
      ctaText: "Get Started",
      ctaStyle: "bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF]",
      glowColor: "from-[#FF66C4]/20 to-[#8A2EFF]/20",
      cardGradient: "from-[#FF66C4]/5 via-[#8A2EFF]/5 to-white"
    },
    {
      icon: "🧠",
      title: "Pro Xpert",
      subtext: "Build trust and grow your visibility",
      features: [
        "Priority project matching",
        "Enhanced profile features",
        "Direct client access",
        "Advanced tools"
      ],
      ctaText: "Learn More",
      ctaStyle: "bg-gradient-to-r from-[#8A2EFF] to-[#6B40FF]",
      glowColor: "from-[#8A2EFF]/20 to-[#6B40FF]/20",
      cardGradient: "from-[#8A2EFF]/5 via-[#6B40FF]/5 to-white"
    },
    {
      icon: "✨",
      title: "Elite Xpert",
      subtext: "Access premium perks and top-tier clients",
      features: [
        "Exclusive high-value projects",
        "Premium client access",
        "Mentorship opportunities",
        "Platform leadership recognition"
      ],
      ctaText: "Learn More",
      ctaStyle: "bg-gradient-to-r from-[#FFD700] to-[#FFA500]",
      glowColor: "from-[#FFD700]/20 to-[#FFA500]/20",
      cardGradient: "from-[#FFD700]/5 via-[#FFA500]/5 to-white"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-[#f8f9ff] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 Xpert Growth System
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Level up as you grow. Our smart system rewards your progress automatically.
          </h3>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 border border-[#FF66C4]/20 rounded-full">
            <span className="text-sm font-medium text-gray-700">
              Levels are automatically assigned based on your performance and milestones
            </span>
          </div>
        </div>

        {/* Growth Tiers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {growthTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${tier.cardGradient} rounded-2xl shadow-xl border border-white/50 p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col group`}
            >
              {/* Glowing Icon */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${tier.glowColor} rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300`}>
                  <span className="text-4xl drop-shadow-lg">{tier.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                <p className="text-lg font-medium text-gray-700 leading-relaxed">{tier.subtext}</p>
              </div>

              {/* Features Checklist */}
              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <button className={`w-full ${tier.ctaStyle} text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform`}>
                  {tier.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            💡 Your level automatically adjusts based on your performance, client feedback, and platform activity
          </p>
        </div>
      </div>
    </section>
  );
} 