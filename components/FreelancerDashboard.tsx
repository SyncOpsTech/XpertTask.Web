"use client";
import React, { useState, useEffect } from "react";
import SuccessRate from "./SuccessRate";
import SuccessMetricsModal from "./SuccessMetricsModal";
import SuccessRateOverview from "./SuccessRateOverview";

export default function FreelancerDashboard() {
  const [showMetricsModal, setShowMetricsModal] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    successRate: 0,
    totalEarnings: 0,
    activeProjects: 0
  });
  
  // Mock data for demonstration
  const dashboardData = {
    successRate: 97,
    tier: "Pro Freelancer",
    tierDisplay: "🧠 Pro Freelancer",
    completedProjects: 24,
    totalEarnings: 18500,
    activeProjects: 3,
    averageRating: 4.8,
    reviewCount: 18,
    monthlyEarnings: 3200,
    responseTime: "2.3 hours",
    onTimeDelivery: 96,
    clientSatisfaction: 98
  };

  // Animated counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        successRate: Math.round(dashboardData.successRate * progress),
        totalEarnings: Math.round(dashboardData.totalEarnings * progress),
        activeProjects: Math.round(dashboardData.activeProjects * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, []);

  const recentProjects = [
    {
      id: 1,
      title: "React E-commerce Dashboard",
      client: "TechCorp Inc.",
      status: "Completed",
      earnings: 2500,
      rating: 5,
      completedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Mobile App UI/UX Design",
      client: "StartupXYZ",
      status: "In Progress",
      earnings: 1800,
      rating: null,
      completedAt: null
    },
    {
      id: 3,
      title: "API Integration Service",
      client: "Enterprise Solutions",
      status: "Completed",
      earnings: 3200,
      rating: 5,
      completedAt: "2024-01-10"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Freelancer Dashboard</h1>
        <p className="text-gray-600">Track your performance and success metrics</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {/* Success Rate Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-black">Success Rate</h3>
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <SuccessRate rate={animatedValues.successRate} size="lg" />
          {/* Tooltip */}
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg py-2 px-3 -mt-2 ml-2 pointer-events-none z-10">
            Your success rate is calculated from client ratings, on-time delivery, and communication quality
          </div>
        </div>

        {/* Tier Level */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-black">Tier Level</h3>
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#8A2EFF] mb-2">{dashboardData.tierDisplay}</div>
            <div className="text-sm text-gray-500">Current Tier</div>
          </div>
          {/* Tooltip */}
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg py-2 px-3 -mt-2 ml-2 pointer-events-none z-10">
            Your tier level determines your visibility and access to premium features
          </div>
        </div>

        {/* Total Earnings */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-black">Total Earnings</h3>
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF66C4] mb-2">${animatedValues.totalEarnings.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Lifetime Earnings</div>
          </div>
          {/* Tooltip */}
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg py-2 px-3 -mt-2 ml-2 pointer-events-none z-10">
            Total earnings from all completed projects on the platform
          </div>
        </div>

        {/* Active Projects */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-black">Active Projects</h3>
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">{animatedValues.activeProjects}</div>
            <div className="text-sm text-gray-500">Currently Working</div>
          </div>
          {/* Tooltip */}
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-lg py-2 px-3 -mt-2 ml-2 pointer-events-none z-10">
            Number of projects you're currently working on
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Performance Chart */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-6">
          <h3 className="text-lg font-bold text-black mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Average Rating</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-black">{dashboardData.averageRating}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Response Time</span>
              <span className="font-semibold text-black">{dashboardData.responseTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">On-Time Delivery</span>
              <span className="font-semibold text-black">{dashboardData.onTimeDelivery}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Client Satisfaction</span>
              <span className="font-semibold text-black">{dashboardData.clientSatisfaction}%</span>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
          <h3 className="text-lg font-bold text-black mb-4">Recent Projects</h3>
          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <div className="flex-1">
                  <div className="font-semibold text-black text-sm">{project.title}</div>
                  <div className="text-xs text-gray-500">{project.client}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-[#8A2EFF] text-sm">${project.earnings}</div>
                  <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  } transition-colors duration-200`}>
                    {project.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Rate Overview */}
      <SuccessRateOverview />

      {/* Success Metrics Modal */}
      <SuccessMetricsModal
        isOpen={showMetricsModal}
        onClose={() => setShowMetricsModal(false)}
        freelancerName="Sarah Chen"
        successRate={dashboardData.successRate}
      />
    </div>
  );
} 