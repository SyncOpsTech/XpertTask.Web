"use client";
import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f9ff] via-[#eae6ff] to-[#f3e6ff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Ready to Join the Freelance Future?
            </h2>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers and clients who are already experiencing the future of work. 
            Get started today and unlock your potential with smart matching and transparent growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Start Your Journey
            </button>
            <button className="px-8 py-4 border border-[#8A2EFF] text-[#8A2EFF] font-semibold rounded-xl hover:bg-[#8A2EFF] hover:text-white transition-all duration-300 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Explore Talent
            </button>
          </div>

          {/* Early Access Benefits */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-white/50 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">Early Access Benefits</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 rounded-lg">
                <div className="text-2xl font-bold text-[#8A2EFF] mb-1">Free</div>
                <div className="text-sm text-gray-600">Profile Boosts</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 rounded-lg">
                <div className="text-2xl font-bold text-[#8A2EFF] mb-1">0%</div>
                <div className="text-sm text-gray-600">Commission</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 rounded-lg">
                <div className="text-2xl font-bold text-[#8A2EFF] mb-1">VIP</div>
                <div className="text-sm text-gray-600">Priority Support</div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              Limited time offer for early adopters. Join now to secure these exclusive benefits.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 