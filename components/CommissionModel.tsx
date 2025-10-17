"use client";
import React from "react";

export default function CommissionModel() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-[#f8f9ff] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">💰</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Commission & Transparency</h2>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 max-w-3xl mx-auto">
            A freelance platform that works with you — simple, fair, and open for everyone.
          </h3>
        </div>

        {/* Commission Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Freelancers Card */}
          <div className="bg-gradient-to-br from-[#f8f9ff] via-[#f0f2ff] to-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF66C4]/10 to-[#8A2EFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Freelancers</h3>
              <p className="text-lg font-medium text-gray-700">Keep more of what you earn. Flat, fair, and visible.</p>
            </div>

            {/* Commission Info */}
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF66C4] mb-2">0%</div>
                <div className="text-gray-600 font-medium">Current Commission</div>
              </div>
            </div>

                         {/* Trust Highlight */}
             <div className="bg-gradient-to-r from-[#FF66C4]/5 to-[#8A2EFF]/5 rounded-xl p-6 border border-[#FF66C4]/20">
               <div className="flex items-start gap-3">
                 <div className="w-8 h-8 bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] rounded-full flex items-center justify-center flex-shrink-0">
                   <span className="text-white text-sm">📣</span>
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 mb-1">Advance Notice for Any Changes</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     If commission changes in the future, you'll receive clear alerts and early notification.
                   </p>
                 </div>
               </div>
             </div>
          </div>

          {/* Clients Card */}
          <div className="bg-gradient-to-br from-[#f8f9ff] via-[#f0f2ff] to-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8A2EFF]/10 to-[#6B40FF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Clients</h3>
              <p className="text-lg font-medium text-gray-700">Transparent costs, clear outcomes.</p>
            </div>

            {/* Commission Info */}
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8A2EFF] mb-2">0%</div>
                <div className="text-gray-600 font-medium">Current Commission</div>
              </div>
            </div>

            {/* Trust Highlight */}
            <div className="bg-gradient-to-r from-[#8A2EFF]/5 to-[#6B40FF]/5 rounded-xl p-6 border border-[#8A2EFF]/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#8A2EFF] to-[#6B40FF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📣</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Advance Notice for Any Changes</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If commission changes in the future, you'll receive clear alerts and early notification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 border border-[#FF66C4]/20 rounded-full">
            <span className="text-sm font-medium text-gray-700">
              💡 We believe in transparency and will always communicate changes clearly and in advance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 