"use client";
import React, { useState } from "react";

export default function ReferralWidget() {
  const [copied, setCopied] = useState(false);

  const copyReferralCode = () => {
    navigator.clipboard.writeText("SARAH2024");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareReferral = (platform: string) => {
    const message = `Join XpertTask using my referral code SARAH2024 and get $10 in connects! 0% real commission in year 1.`;
    const url = `https://xperttask.com/ref/SARAH2024`;
    
    switch (platform) {
      case 'email':
        window.open(`mailto:?subject=Join XpertTask&body=${encodeURIComponent(message + '\n\n' + url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#f8f9ff] via-[#f0f2ff] to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">🏆</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Referral Progress</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Earn XP, unlock badges, and climb the ranks by inviting your friends!
          </p>
        </div>

        {/* XP Progress Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl font-bold text-[#8F00FF]">1,280 XP</div>
            <div className="text-sm text-gray-500">Next: Mentor Badge</div>
          </div>
          
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] h-3 rounded-full transition-all duration-500"
                style={{ width: '85%' }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Next Reward: 'Mentor Badge' at 1500 XP</p>
          </div>
        </div>

        {/* Current Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Day 3 Streak!</p>
                <p className="text-2xl font-bold">🔥</p>
              </div>
              <div className="text-3xl">🔥</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Connector Badge</p>
                <p className="text-2xl font-bold">👥</p>
              </div>
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">👥</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Friends Invited</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <div className="text-3xl">👥</div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Achievement Badges</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-yellow-100 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">⭐</div>
              <p className="font-semibold text-gray-900">First Friend</p>
              <p className="text-xs text-gray-600">Invited your first friend</p>
            </div>
            <div className="bg-red-100 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🚀</div>
              <p className="font-semibold text-gray-900">Quick Start</p>
              <p className="text-xs text-gray-600">3 friends in 7 days</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center opacity-50">
              <div className="text-2xl mb-2">💎</div>
              <p className="font-semibold text-gray-600">Diamond Hands</p>
              <p className="text-xs text-gray-500">10 friends total</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center opacity-50">
              <div className="text-2xl mb-2">👑</div>
              <p className="font-semibold text-gray-600">Community King</p>
              <p className="text-xs text-gray-500">25 friends total</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center opacity-50">
              <div className="text-2xl mb-2">💧</div>
              <p className="font-semibold text-gray-600">Streak Master</p>
              <p className="text-xs text-gray-500">7 day streak</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center opacity-50">
              <div className="text-2xl mb-2">⭐</div>
              <p className="font-semibold text-gray-600">Top Performer</p>
              <p className="text-xs text-gray-500">50+ referrals</p>
            </div>
          </div>
        </div>

        {/* Modern Referral Code Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              💼 Invite & Earn – Share Your Referral Code
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Refer your friends and earn referral points when they join and complete their first project. 🎁 Every month, $1,000 is distributed among the Top 10 referrers based on their total referral score.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Referral Code Display */}
            <div className="max-w-md mx-auto">
              <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                Your Referral Code
              </label>
              <div className="flex items-center bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 hover:border-[#8F00FF]/30 transition-all duration-300 group">
                <input
                  type="text"
                  readOnly
                  value="SARAH2024"
                  className="flex-1 bg-transparent text-center text-xl font-mono font-bold text-gray-900 focus:outline-none"
                />
                <button
                  onClick={copyReferralCode}
                  className="ml-4 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group-hover:bg-[#8F00FF]/5"
                >
                  {copied ? (
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-sm text-green-600 text-center mt-2 font-medium">
                  ✓ Copied to clipboard!
                </p>
              )}
            </div>

            {/* Share Buttons */}
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700 mb-4">Share via:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => shareReferral('email')}
                  className="flex items-center gap-3 px-6 py-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-blue-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </button>
                <button
                  onClick={() => shareReferral('twitter')}
                  className="flex items-center gap-3 px-6 py-4 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-pink-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => shareReferral('linkedin')}
                  className="flex items-center gap-3 px-6 py-4 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-purple-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center pt-6 border-t border-gray-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 rounded-full border border-[#8F00FF]/20">
                <svg className="w-4 h-4 text-[#8F00FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-[#8F00FF] font-semibold">Pro Tip:</span>
                <span className="text-gray-600">Share your success story to increase conversion rates!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 