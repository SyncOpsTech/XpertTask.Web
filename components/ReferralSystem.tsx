"use client";
import React from "react";

export default function ReferralSystem() {
  const topReferrers = [
    { rank: "🥇", username: "Sarah Chen", badge: "🚀" },
    { rank: "🥈", username: "Alex Rodriguez", badge: "🌟" },
    { rank: "🥉", username: "Maria Garcia", badge: "🎖️" },
    { rank: "4", username: "David Kim", badge: "⭐" },
    { rank: "5", username: "Lisa Thompson", badge: "⭐" },
    { rank: "6", username: "James Wilson", badge: "⭐" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#f8f9ff] via-[#f0f2ff] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">👥</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Referral & Boost Program</h2>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 max-w-3xl mx-auto">
            Invite. Earn Recognition. Boost Your Visibility. The more you share, the more you grow.
          </h3>
        </div>

                 {/* Main Cards Grid */}
         <div className="grid md:grid-cols-2 gap-8 mb-12">
           {/* Referral Overview Card */}
           <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
             <div className="text-center mb-6">
               <div className="w-16 h-16 bg-gradient-to-br from-[#FF66C4]/10 to-[#8A2EFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                 <span className="text-3xl">🧑‍🤝‍🧑</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Refer & Rise</h3>
               <p className="text-gray-600 leading-relaxed mb-6">
                 Invite friends to join and earn as they grow. You grow too.
               </p>
             </div>
             
                           <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Get rewarded for every successful referral</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Boost your visibility as referrals grow</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expand your professional network</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Unlock extra perks as you climb ranks</span>
                </li>
              </ul>
           </div>

           {/* Rewards & Perks Card */}
           <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
             <div className="text-center mb-6">
               <div className="w-16 h-16 bg-gradient-to-br from-[#8A2EFF]/10 to-[#6B40FF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                 <span className="text-3xl">💸</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">What You Unlock</h3>
             </div>
             
                           <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Earn real rewards or bonus payouts per referral</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Top Referrers get monthly leaderboard bonuses</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Profile Boost for visibility</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Featured in Leaderboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Dashboard Listing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Referral Badge on your profile</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-105 transition-transform duration-200 group">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Access to exclusive community spaces</span>
                </li>
              </ul>
           </div>
         </div>

                 {/* How It Works Section */}
         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
           <div className="text-center mb-8">
             <div className="w-16 h-16 bg-gradient-to-br from-[#FF66C4]/10 to-[#8A2EFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
               <span className="text-3xl">⚡</span>
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-2">How It Works</h3>
           </div>
           
                       <div className="relative">
              {/* Desktop: Horizontal layout with connecting line */}
              <div className="hidden md:flex md:justify-between md:items-start md:gap-8 relative">
                {/* Single horizontal connector line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF66C4] to-[#A56CF4] transform -translate-y-1/2 z-0"></div>
                
                {/* Step 1 */}
                <div className="text-center relative z-10 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform duration-200">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-tight">Refer qualified freelancers or clients</p>
                </div>
                
                {/* Step 2 */}
                <div className="text-center relative z-10 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform duration-200">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-tight">They sign up and complete a milestone</p>
                </div>
                
                {/* Step 3 */}
                <div className="text-center relative z-10 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform duration-200">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-tight">You earn rewards and increase visibility</p>
                </div>
                
                {/* Step 4 */}
                <div className="text-center relative z-10 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform duration-200">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-tight">Monthly bonus features for top referrers</p>
                </div>
              </div>
             
             {/* Mobile: Vertical stack */}
             <div className="md:hidden space-y-6">
               {/* Step 1 */}
               <div className="text-center">
                 <div className="w-10 h-10 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md hover:scale-105 transition-transform duration-200">
                   <span className="text-white font-bold text-lg">1</span>
                 </div>
                 <p className="text-gray-700 font-medium text-sm leading-tight">Refer qualified freelancers or clients</p>
               </div>
               
               {/* Step 2 */}
               <div className="text-center">
                 <div className="w-10 h-10 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md hover:scale-105 transition-transform duration-200">
                   <span className="text-white font-bold text-lg">2</span>
                 </div>
                 <p className="text-gray-700 font-medium text-sm leading-tight">They sign up and complete a milestone</p>
               </div>
               
               {/* Step 3 */}
               <div className="text-center">
                 <div className="w-10 h-10 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md hover:scale-105 transition-transform duration-200">
                   <span className="text-white font-bold text-lg">3</span>
                 </div>
                 <p className="text-gray-700 font-medium text-sm leading-tight">You earn rewards and increase visibility</p>
               </div>
               
               {/* Step 4 */}
               <div className="text-center">
                 <div className="w-10 h-10 bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md hover:scale-105 transition-transform duration-200">
                   <span className="text-white font-bold text-lg">4</span>
                 </div>
                 <p className="text-gray-700 font-medium text-sm leading-tight">Monthly bonus features for top referrers</p>
               </div>
             </div>
           </div>
         </div>

         {/* Leaderboard Preview */}
         <div className="bg-gradient-to-br from-[#f8f9ff] via-[#f0f2ff] to-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Top Referrers of the Month</h3>
             <p className="text-gray-600">Celebrating our community champions</p>
           </div>
           
           {/* 2-Row Grid Layout */}
           <div className="space-y-6">
             {/* Top 3 - Highlighted Row */}
             <div className="grid md:grid-cols-3 gap-4">
               {/* 1st Place */}
               <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                 <div className="text-center">
                   <div className="text-4xl mb-3">🥇</div>
                   <div className="w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                     <span className="text-2xl">👑</span>
                   </div>
                   <div className="font-bold text-lg text-gray-900 mb-1">Sarah Chen</div>
                   <div className="text-sm text-gray-500 mb-3">Community Champion</div>
                   <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 px-3 py-1 rounded-full">
                     <span className="text-lg">🚀</span>
                     <span className="text-xs font-medium text-gray-700">Top Performer</span>
                   </div>
                 </div>
               </div>
               
               {/* 2nd Place */}
               <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                 <div className="text-center">
                   <div className="text-4xl mb-3">🥈</div>
                   <div className="w-16 h-16 bg-gradient-to-r from-[#C0C0C0] to-[#A0A0A0] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                     <span className="text-2xl">☀️</span>
                   </div>
                   <div className="font-bold text-lg text-gray-900 mb-1">Alex Rodriguez</div>
                   <div className="text-sm text-gray-500 mb-3">Community Champion</div>
                   <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 px-3 py-1 rounded-full">
                     <span className="text-lg">✨</span>
                     <span className="text-xs font-medium text-gray-700">Rising Star</span>
                   </div>
                 </div>
               </div>
               
               {/* 3rd Place */}
               <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                 <div className="text-center">
                   <div className="text-4xl mb-3">🥉</div>
                   <div className="w-16 h-16 bg-gradient-to-r from-[#CD7F32] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                     <span className="text-2xl">🎖️</span>
                   </div>
                   <div className="font-bold text-lg text-gray-900 mb-1">Maria Garcia</div>
                   <div className="text-sm text-gray-500 mb-3">Community Champion</div>
                   <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 px-3 py-1 rounded-full">
                     <span className="text-lg">🏅</span>
                     <span className="text-xs font-medium text-gray-700">Achiever</span>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* 4-6 - Subtle Row */}
             <div className="grid md:grid-cols-3 gap-4">
               {/* 4th Place */}
               <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                 <div className="text-center">
                   <div className="text-3xl mb-3">4</div>
                   <div className="w-14 h-14 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                     <span className="text-xl">⭐</span>
                   </div>
                   <div className="font-semibold text-base text-gray-900 mb-1">David Kim</div>
                   <div className="text-sm text-gray-500 mb-3">Community Champion</div>
                   <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                     <span className="text-sm">⭐</span>
                     <span className="text-xs font-medium text-gray-600">Contributor</span>
                   </div>
                 </div>
               </div>
               
               {/* 5th Place */}
               <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                 <div className="text-center">
                   <div className="text-3xl mb-3">5</div>
                   <div className="w-14 h-14 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                     <span className="text-xl">⭐</span>
                   </div>
                   <div className="font-semibold text-base text-gray-900 mb-1">Lisa Thompson</div>
                   <div className="text-sm text-gray-500 mb-3">Community Champion</div>
                   <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                     <span className="text-sm">⭐</span>
                     <span className="text-xs font-medium text-gray-600">Contributor</span>
                   </div>
                 </div>
               </div>
               
               {/* 6th Place */}
               <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                 <div className="text-center">
                   <div className="text-3xl mb-3">6</div>
                   <div className="w-14 h-14 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                     <span className="text-xl">⭐</span>
                   </div>
                   <div className="font-semibold text-base text-gray-900 mb-1">James Wilson</div>
                   <div className="text-sm text-gray-500 mb-3">Community Champion</div>
                   <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                     <span className="text-sm">⭐</span>
                     <span className="text-xs font-medium text-gray-600">Contributor</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-xl">👥</span>
            Start Referring
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            💡 Build your network and unlock exclusive platform benefits as you help others grow
          </p>
        </div>
      </div>
    </section>
  );
} 