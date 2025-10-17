"use client";
import React, { useState, useEffect } from "react";

interface SuccessRateProps {
  rate: number;
  size?: "sm" | "md" | "lg";
  showBadge?: boolean;
  showProgress?: boolean;
  className?: string;
}

export default function SuccessRate({ 
  rate, 
  size = "md", 
  showBadge = true, 
  showProgress = true,
  className = "" 
}: SuccessRateProps) {
  const [animatedRate, setAnimatedRate] = useState(0);

  // Animate the success rate on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedRate(rate);
    }, 100);
    return () => clearTimeout(timer);
  }, [rate]);

  // Get badge info based on success rate
  const getBadgeInfo = (rate: number) => {
    if (rate >= 95) {
      return {
        icon: "🔥",
        label: "Top Rated",
        description: "Outstanding",
        color: "from-green-500 to-emerald-600",
        bgColor: "from-green-50 to-emerald-50",
        borderColor: "border-green-200"
      };
    } else if (rate >= 85) {
      return {
        icon: "⭐",
        label: "Reliable",
        description: "Consistent",
        color: "from-blue-500 to-indigo-600",
        bgColor: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-200"
      };
    } else if (rate >= 70) {
      return {
        icon: "💪",
        label: "Improving",
        description: "Growing steadily",
        color: "from-yellow-500 to-orange-600",
        bgColor: "from-yellow-50 to-orange-50",
        borderColor: "border-yellow-200"
      };
    } else if (rate >= 50) {
      return {
        icon: "🧭",
        label: "Needs Support",
        description: "Needs coaching",
        color: "from-orange-500 to-red-600",
        bgColor: "from-orange-50 to-red-50",
        borderColor: "border-orange-200"
      };
    } else {
      return {
        icon: "⚠️",
        label: "Under Review",
        description: "May be hidden",
        color: "from-red-500 to-pink-600",
        bgColor: "from-red-50 to-pink-50",
        borderColor: "border-red-200"
      };
    }
  };

  // Size configurations
  const sizeConfig = {
    sm: {
      container: "w-16 h-16",
      text: "text-sm",
      badge: "text-xs px-2 py-1",
      progress: "w-12 h-12"
    },
    md: {
      container: "w-20 h-20",
      text: "text-lg",
      badge: "text-sm px-3 py-1",
      progress: "w-16 h-16"
    },
    lg: {
      container: "w-24 h-24",
      text: "text-xl",
      badge: "text-sm px-3 py-1.5",
      progress: "w-20 h-20"
    }
  };

  const config = sizeConfig[size];
  const badgeInfo = getBadgeInfo(rate);

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Success Rate Display */}
      <div className="relative">
        {/* Circular Progress Bar */}
        {showProgress && (
          <div className={`${config.progress} relative`}>
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              {/* Background circle */}
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="2"
              />
              {/* Progress circle */}
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray={`${animatedRate}, 100`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF66C4" />
                  <stop offset="100%" stopColor="#8A2EFF" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`font-bold text-[#8A2EFF] ${config.text}`}>
                {Math.round(animatedRate)}%
              </span>
            </div>
          </div>
        )}

        {/* Simple percentage display (when progress bar is hidden) */}
        {!showProgress && (
          <div className={`${config.container} flex items-center justify-center`}>
            <span className={`font-bold text-[#8A2EFF] ${config.text}`}>
              {Math.round(rate)}%
            </span>
          </div>
        )}
      </div>

      {/* Success Rate Badge */}
      {showBadge && (
        <div className="relative group">
          <div className={`inline-flex items-center gap-1.5 ${config.badge} rounded-full bg-gradient-to-r ${badgeInfo.bgColor} border ${badgeInfo.borderColor} font-medium`}>
            <span className="text-sm">{badgeInfo.icon}</span>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${badgeInfo.color}`}>
              {badgeInfo.label}
            </span>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-gray-900 text-white text-xs px-4 py-3 rounded-lg shadow-lg z-10 max-w-xs">
            <div className="text-center">
              <div className="font-semibold mb-2">Success Rate: {Math.round(rate)}%</div>
              <div className="text-gray-300 text-xs mb-3">
                {badgeInfo.description}
              </div>
              <div className="text-left space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>✅ Client Ratings & Reviews</span>
                  <span className="text-green-400">60%</span>
                </div>
                <div className="flex justify-between">
                  <span>📦 On-Time Delivery</span>
                  <span className="text-blue-400">30%</span>
                </div>
                <div className="flex justify-between">
                  <span>💬 Communication</span>
                  <span className="text-purple-400">5%</span>
                </div>
                <div className="flex justify-between">
                  <span>⏱ Onboarding Punctuality</span>
                  <span className="text-pink-400">5%</span>
                </div>
              </div>
            </div>
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
} 