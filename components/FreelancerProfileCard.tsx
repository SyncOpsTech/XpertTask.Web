"use client";
import React from "react";
import SuccessRate from "./SuccessRate";

interface FreelancerProfileCardProps {
  freelancer: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    tier: "Rising Talent" | "Pro Freelancer" | "Elite Xpert";
    tierDisplay: string;
    successRate: number;
    hourlyRate: number;
    skills: string[];
    location: string;
    completedProjects: number;
    totalEarnings: number;
    rating: number;
    reviewCount: number;
  };
  showDetails?: boolean;
  onSelect?: (freelancerId: string) => void;
}

export default function FreelancerProfileCard({ 
  freelancer, 
  showDetails = false,
  onSelect 
}: FreelancerProfileCardProps) {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Elite Xpert":
        return "from-purple-500 to-pink-500";
      case "Pro Freelancer":
        return "from-blue-500 to-purple-500";
      case "Rising Talent":
        return "from-green-500 to-blue-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative">
            <img 
              src={freelancer.avatar} 
              alt={freelancer.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
            />
            {/* Tier Badge */}
            <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br ${getTierColor(freelancer.tier)} rounded-full flex items-center justify-center shadow-lg`}>
              <span className="text-white text-xs">
                {freelancer.tier === "Rising Talent" ? "🚀" : 
                 freelancer.tier === "Pro Freelancer" ? "🧠" : "🌟"}
              </span>
            </div>
          </div>
          
          {/* Basic Info */}
          <div>
            <h3 className="text-lg font-bold text-black mb-1">{freelancer.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{freelancer.title}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{freelancer.location}</span>
            </div>
          </div>
        </div>

        {/* Success Rate */}
        <div className="flex flex-col items-end">
          <SuccessRate rate={freelancer.successRate} size="sm" />
          <div className="text-xs text-gray-500 mt-1 text-right">
            {freelancer.successRate >= 95 ? "🔥 Top Rated" :
             freelancer.successRate >= 85 ? "⭐ Reliable" :
             freelancer.successRate >= 70 ? "💪 Improving" :
             freelancer.successRate >= 50 ? "🧭 Needs Support" : "⚠️ Under Review"}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {freelancer.skills.slice(0, 3).map((skill, index) => (
            <span 
              key={index}
              className="bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 text-[#8A2EFF] text-xs font-medium px-3 py-1 rounded-full border border-[#8A2EFF]/20"
            >
              {skill}
            </span>
          ))}
          {freelancer.skills.length > 3 && (
            <span className="text-gray-500 text-xs font-medium px-2 py-1">
              +{freelancer.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-[#8A2EFF]">{freelancer.completedProjects}</div>
          <div className="text-xs text-gray-500">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-[#FF66C4]">${freelancer.totalEarnings.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Earned</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-500">{freelancer.rating.toFixed(1)}</div>
          <div className="text-xs text-gray-500">Rating</div>
        </div>
      </div>

      {/* Extended Details */}
      {showDetails && (
        <div className="border-t border-gray-100 pt-4 mb-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500 mb-1">Hourly Rate</div>
              <div className="font-semibold text-black">${freelancer.hourlyRate}/hr</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Reviews</div>
              <div className="font-semibold text-black">{freelancer.reviewCount} reviews</div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button 
          onClick={() => onSelect?.(freelancer.id)}
          className="flex-1 bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          View Profile
        </button>
        <button className="px-4 py-2 border border-[#8A2EFF] text-[#8A2EFF] font-semibold rounded-xl hover:bg-[#8A2EFF] hover:text-white transition-all duration-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
} 