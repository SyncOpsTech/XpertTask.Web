"use client";
import React from "react";

export default function DisputeSystem() {
  const timelineSteps = [
    {
      step: "1",
      title: "Client & Freelancer Lock Scope",
      subtitle: "Both parties agree on project requirements and deliverables",
      icon: "✅"
    },
    {
      step: "2", 
      title: "1–3 Day Grace Period",
      subtitle: "Time to finalize details and ensure mutual understanding",
      icon: "⏱️"
    },
    {
      step: "3",
      title: "Work Begins", 
      subtitle: "Project execution with milestone tracking and communication",
      icon: "⚡"
    },
    {
      step: "4",
      title: "Dispute if Scope Breached",
      subtitle: "AI + human panel reviews and resolves conflicts fairly",
      icon: "🛡️"
    }
  ];

  const policyCards = [
    {
      icon: "🧠",
      title: "AI + Human Panel Logic",
      description: "Combines algorithmic analysis with human judgment for fair decisions"
    },
    {
      icon: "💵",
      title: "Penalty Applied for Major Violations", 
      description: "Fair penalties are enforced for serious violations based on severity assessment."
    },
    {
      icon: "👤",
      title: "No Profile Impact if Innocent",
      description: "Your reputation stays intact when you're in the right"
    },
    {
      icon: "🚫",
      title: "3-Strike Policy Against Abuse",
      description: "Protection against repeated violations and system gaming"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f9ff] via-[#f0f2ff] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#A56CF4] to-[#FEC9F2] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🛡️</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Dispute & Protection System
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Work With Confidence. We protect both sides with fair dispute resolution and transparent processes.
          </p>
        </div>

        {/* Dispute Resolution Timeline */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Dispute Resolution Timeline</h3>
            <p className="text-gray-600">Clear process for handling conflicts and ensuring fair outcomes</p>
          </div>
          
          <div className="relative">
            {/* Desktop: Horizontal layout with connecting line */}
            <div className="hidden md:flex md:justify-between md:items-start md:gap-8 relative">
              {/* Single horizontal connector line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] transform -translate-y-1/2 z-0"></div>
              
              {timelineSteps.map((step, index) => (
                <div key={index} className="text-center relative z-10 flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group">
                    <span className="text-2xl text-white">{step.icon}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-tight">{step.subtitle}</p>
                </div>
              ))}
            </div>
            
            {/* Mobile: Vertical stack */}
            <div className="md:hidden space-y-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
                    <span className="text-2xl text-white">{step.icon}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-tight">{step.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fairness & Trust Pillars */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Fairness & Trust Pillars</h3>
            <p className="text-gray-600">Core principles that ensure transparent and fair dispute resolution</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {policyCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300">
                    <span className="text-xl text-white">{card.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{card.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Icons Summary */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white rounded-2xl shadow-lg border border-gray-100 px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200">
                <span className="text-lg text-white">✅</span>
              </div>
              <span className="text-sm font-medium text-gray-700">No Profile Impact</span>
            </div>
            
            <div className="w-px h-6 bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200">
                <span className="text-lg text-white">⛔</span>
              </div>
              <span className="text-sm font-medium text-gray-700">3-Strike Policy</span>
            </div>
            
            <div className="w-px h-6 bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200">
                <span className="text-lg text-white">🧠</span>
              </div>
              <span className="text-sm font-medium text-gray-700">AI + Human Review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 