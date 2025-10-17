"use client";
import React from "react";

export default function SuccessRateOverview() {
  const successTiers = [
    {
      icon: "🔥",
      range: "95–100%",
      label: "Elite Performer",
      description: "Exceptional quality and consistent excellence",
      color: "from-[#FF66C4] to-[#8A2EFF]",
      bgColor: "bg-gradient-to-br from-[#FF66C4]/5 to-[#8A2EFF]/5",
      borderColor: "border-[#FF66C4]/20",
      status: "Outstanding"
    },
    {
      icon: "⭐",
      range: "90–94%",
      label: "Top Rated",
      description: "Strong performance with excellent reviews",
      color: "from-[#8A2EFF] to-[#6B40FF]",
      bgColor: "bg-gradient-to-br from-[#8A2EFF]/5 to-[#6B40FF]/5",
      borderColor: "border-[#8A2EFF]/20",
      status: "Excellent"
    },
    {
      icon: "📈",
      range: "85–89%",
      label: "Trusted Pro",
      description: "Reliable contributor with great feedback",
      color: "from-[#6B40FF] to-[#4F46E5]",
      bgColor: "bg-gradient-to-br from-[#6B40FF]/5 to-[#4F46E5]/5",
      borderColor: "border-[#6B40FF]/20",
      status: "Very Good"
    },
    {
      icon: "💪",
      range: "80–84%",
      label: "Solid Performer",
      description: "Steady growth and consistent delivery",
      color: "from-[#4F46E5] to-[#7C3AED]",
      bgColor: "bg-gradient-to-br from-[#4F46E5]/5 to-[#7C3AED]/5",
      borderColor: "border-[#4F46E5]/20",
      status: "Good"
    },
    {
      icon: "🛠️",
      range: "75–79%",
      label: "Growing",
      description: "On the right path with room to improve",
      color: "from-[#7C3AED] to-[#A855F7]",
      bgColor: "bg-gradient-to-br from-[#7C3AED]/5 to-[#A855F7]/5",
      borderColor: "border-[#7C3AED]/20",
      status: "Developing"
    },
    {
      icon: "⚠️",
      range: "Below 75%",
      label: "Needs Focus",
      description: "Opportunities to enhance performance",
      color: "from-[#A855F7] to-[#DC2626]",
      bgColor: "bg-gradient-to-br from-[#A855F7]/5 to-[#DC2626]/5",
      borderColor: "border-[#A855F7]/20",
      status: "Improving"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Success Rate</h2>
          <p className="text-gray-600 max-w-2xl">
            Track your performance across all client projects and see where you excel
          </p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
          View Details
        </button>
      </div>

      {/* Success Tiers Grid - 3x2 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {successTiers.map((tier, index) => (
          <div
            key={index}
            className={`${tier.bgColor} ${tier.borderColor} border rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group h-full flex flex-col justify-between`}
          >
            {/* Top Section */}
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {tier.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-700">{tier.range}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium bg-gradient-to-r ${tier.color} text-white`}>
                    {tier.status}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{tier.label}</h3>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tier.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          💡 Success rates are updated regularly based on your project performance and client feedback
        </p>
      </div>
    </div>
  );
} 