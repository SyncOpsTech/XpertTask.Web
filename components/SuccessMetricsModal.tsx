"use client";
import React, { useState } from "react";

interface SuccessMetricsModalProps {
  isOpen: boolean;
  onClose: () => void;
  freelancerName?: string;
  successRate?: number;
}

export default function SuccessMetricsModal({ 
  isOpen, 
  onClose, 
  freelancerName = "Freelancer",
  successRate = 92 
}: SuccessMetricsModalProps) {
  if (!isOpen) return null;

  const metrics = [
    {
      icon: "✅",
      title: "Client Ratings & Reviews",
      weight: "60%",
      description: "Based on average star ratings and written feedback from completed projects.",
      details: [
        "5-star ratings contribute positively",
        "Written reviews are analyzed for sentiment",
        "Updated after every project completion",
        "Weighted by project value and recency"
      ]
    },
    {
      icon: "📦",
      title: "On-Time Project Delivery",
      weight: "30%",
      description: "Measures whether work is delivered before or on the agreed deadline.",
      details: [
        "Early delivery gets bonus points",
        "On-time delivery maintains score",
        "Late delivery reduces score",
        "Extensions are considered with valid reasons"
      ]
    },
    {
      icon: "💬",
      title: "Responsive Communication",
      weight: "5%",
      description: "Tracks timely replies, message clarity, and professional communication.",
      details: [
        "Response time within 24 hours",
        "Clear and professional messaging",
        "Proactive project updates",
        "Professional tone and approach"
      ]
    },
    {
      icon: "⏱",
      title: "Onboarding & Kickoff Punctuality",
      weight: "5%",
      description: "Time taken to accept job and respond after being matched.",
      details: [
        "Quick job acceptance (within 48 hours)",
        "Prompt initial communication",
        "Timely project kickoff meetings",
        "Professional onboarding process"
      ]
    }
  ];

  const tiers = [
    { range: "95–100%", badge: "🔥", label: "Top Rated", description: "Outstanding performance across all metrics" },
    { range: "85–94%", badge: "⭐", label: "Reliable", description: "Consistent delivery and communication" },
    { range: "70–84%", badge: "💪", label: "Improving", description: "Growing steadily with room for enhancement" },
    { range: "50–69%", badge: "🧭", label: "Needs Support", description: "Requires coaching and improvement areas" },
    { range: "<50%", badge: "⚠️", label: "Under Review", description: "May be hidden from search results" }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-black">Success Rate Metrics</h2>
              <p className="text-gray-600">How {freelancerName}'s success rate is calculated</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Current Success Rate */}
          <div className="bg-gradient-to-r from-[#f8f9ff] to-[#eae6ff] rounded-xl p-6 border border-[#8A2EFF]/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-black mb-2">Current Success Rate</h3>
                <p className="text-gray-600">Based on recent project performance</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#8A2EFF]">{successRate}%</div>
                <div className="text-sm text-gray-500">Overall Score</div>
              </div>
            </div>
          </div>

          {/* Calculation Methodology */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Calculation Methodology</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{metric.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-black">{metric.title}</h4>
                        <span className="text-sm font-bold text-[#8A2EFF] bg-[#8A2EFF]/10 px-2 py-1 rounded-full">
                          {metric.weight}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
                      <ul className="space-y-1">
                        {metric.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-xs text-gray-500 flex items-start gap-2">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Rate Tiers */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Success Rate Tiers</h3>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-gray-200">
                {tiers.map((tier, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tier.badge}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-black">{tier.label}</span>
                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {tier.range}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{tier.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fairness Policy */}
          <div className="bg-gradient-to-r from-[#fff5f5] to-[#fef7ff] rounded-xl p-6 border border-red-200">
            <h3 className="text-xl font-bold text-black mb-4">🏛️ Fairness Policy</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-black mb-3">Protection Measures</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    Flag suspicious reviews for moderation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    Notify users before a significant drop
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    Allow dispute on reviews that violate terms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    Human review for edge cases and appeals
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-3">Transparency</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    Real-time calculation updates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    Detailed breakdown of all metrics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    Clear explanation of weight distribution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    Historical performance tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 rounded-b-2xl">
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 