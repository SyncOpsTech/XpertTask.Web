'use client';

import { useState, useEffect } from 'react';
import { FolderOpen, DollarSign, CheckCircle } from 'lucide-react';

export default function LiveProjectsMetrics() {
  const [activeProjects, setActiveProjects] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  // Animated counters
  useEffect(() => {
    const animateCounter = (setter: (value: number) => void, target: number, duration: number = 2000) => {
      const startTime = Date.now();
      const startValue = 0;
      
      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        setter(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      updateCounter();
    };

    // Start animations with slight delays for visual effect
    setTimeout(() => animateCounter(setActiveProjects, 150), 200);
    setTimeout(() => animateCounter(setTotalValue, 2, 2500), 600);
    setTimeout(() => animateCounter(setSuccessRate, 98), 1000);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-white via-[#FAFAFF] to-[#F8F9FB] relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-300">
              <FolderOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Live Projects
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real projects, real freelancers — building the future with XpertTask
          </p>
        </div>

        {/* Key Metrics Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Active Projects */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <FolderOpen className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-[#8F00FF] mb-3">
                {activeProjects}+
              </div>
              <div className="text-xl text-gray-900 font-semibold">
                Active Projects
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Currently in development
              </div>
            </div>
          </div>

          {/* Total Project Value */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-[#FF66C4] mb-3">
                ${totalValue}M+
              </div>
              <div className="text-xl text-gray-900 font-semibold">
                Total Project Value
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Delivered successfully
              </div>
            </div>
          </div>

          {/* Success Rate */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-[#8F00FF] mb-3">
                {successRate}%
              </div>
              <div className="text-xl text-gray-900 font-semibold">
                Success Rate
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Client satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-700 text-lg leading-relaxed">
              Projects listed here are verified and completed through XpertTask's secure freelance system.
            </p>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#8F00FF] mb-2">500+</div>
            <div className="text-gray-700">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF66C4] mb-2">1,200+</div>
            <div className="text-gray-700">Expert Freelancers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#8F00FF] mb-2">24/7</div>
            <div className="text-gray-700">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF66C4] mb-2">99.9%</div>
            <div className="text-gray-700">Uptime</div>
          </div>
        </div>
      </div>

      {/* Section Separator with Gradient */}
      <div className="mt-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#8F00FF]/20 via-[#FF66C4]/20 to-[#8F00FF]/20 h-px blur-sm"></div>
      </div>
    </section>
  );
} 