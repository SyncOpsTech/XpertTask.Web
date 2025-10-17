'use client'

import { Download, QrCode } from 'lucide-react'

export default function MobileAppSection() {
  return (
    <section 
      id="mobile-app" 
      className="relative isolate overflow-hidden bg-gradient-to-b from-white to-[#FAFAFF]"
      aria-labelledby="mobile-app-title"
    >
      {/* Subtle gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8F00FF]/[0.04] to-[#FF66C4]/[0.06] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-lg">
            {/* Eyebrow */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 text-transparent bg-clip-text bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-sm font-semibold mb-6">
              Take XpertTask Anywhere
            </div>
            
            {/* Main Heading */}
            <h2 
              id="mobile-app-title"
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Work Smarter. Anywhere. Anytime.
            </h2>
            
            {/* Subhead */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Instant job pings, one-tap proposals, and transparent payouts — all in your pocket. The XpertTask App puts your freelance career on autopilot.
            </p>
            
            {/* Features Grid - 2x3 Layout */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Row 1 */}
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Instant Job Pings</h4>
                    <p className="text-gray-600 text-xs">Get matched in seconds</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">One-Tap Proposals</h4>
                    <p className="text-gray-600 text-xs">Autofill your strengths</p>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 flex items-center justify-center">
                    <span className="text-xl">💳</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Secure Payouts</h4>
                    <p className="text-gray-600 text-xs">Transparent withdrawals</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">In-App Calls & Messages</h4>
                    <p className="text-gray-600 text-xs">Everything in one place</p>
                  </div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 flex items-center justify-center">
                    <span className="text-xl">🛡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Dispute Shield</h4>
                    <p className="text-gray-600 text-xs">Track milestones easily</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 flex items-center justify-center">
                    <span className="text-xl">🔔</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Smart Notifications</h4>
                    <p className="text-gray-600 text-xs">Never miss an opportunity</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Chips */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <span className="text-yellow-500">⭐</span>
                <span className="text-sm font-medium text-gray-700">4.9/5 User Rating</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <span className="text-blue-500">💬</span>
                <span className="text-sm font-medium text-gray-700">100K+ Messages</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <span className="text-green-500">🛡</span>
                <span className="text-sm font-medium text-gray-700">0% Fees</span>
              </div>
            </div>
            
            {/* App Store CTA Block */}
            <div className="mb-8">
              {/* Free Download Label */}
              <p className="text-sm text-gray-500 mb-3 text-center">Free Download</p>
              
              {/* Store Buttons & QR */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white font-semibold rounded-xl hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#8F00FF]/25"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download on the App Store
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white font-semibold rounded-xl hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#8F00FF]/25"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Get it on Google Play
                  </a>
                </div>
                
                {/* QR Code */}
                <div className="rounded-xl border-2 border-gradient-to-r from-[#8F00FF] to-[#FF66C4] p-4 bg-white shadow-lg">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    <QrCode className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-600 text-center font-medium">Scan to download</p>
                </div>
              </div>
              
              {/* Web Link */}
              <div className="text-center">
                <a 
                  href="#login" 
                  className="inline-flex items-center text-[#8F00FF] hover:text-[#FF66C4] font-medium transition-colors duration-300 text-sm"
                >
                  Prefer web? Continue in your browser →
                </a>
              </div>
            </div>
            
            {/* Bottom Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              <div className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-xl font-bold text-[#8F00FF] mb-1">3×</div>
                <div className="text-xs text-gray-600">Faster Responses</div>
              </div>
              <div className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100">
                <div className="text-2xl mb-1">🚀</div>
                <div className="text-xl font-bold text-[#8F00FF] mb-1">+28%</div>
                <div className="text-xs text-gray-600">Proposal Wins</div>
              </div>
              <div className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-100">
                <div className="text-2xl mb-1">⏰</div>
                <div className="text-xl font-bold text-[#8F00FF] mb-1">24/7</div>
                <div className="text-xs text-gray-600">Availability</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Brand gradient glow behind phones */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#8F00FF]/20 to-[#FF66C4]/20 rounded-[3rem] blur-3xl transform scale-110" />
            
            <div className="relative w-[320px] lg:w-[420px] h-[600px] lg:h-[700px]">
              {/* Phone Frame 1 - Main (Inbox) */}
              <div className="absolute top-0 left-0 w-full h-full rounded-[3rem] bg-gray-900 p-3 shadow-2xl ring-1 ring-white/40 transform rotate-1 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl">💬</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Job Inbox</h3>
                      <p className="text-sm text-gray-600">3 new opportunities</p>
                      <div className="mt-3 space-y-2">
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] rounded-full" style={{width: '75%'}} />
                        </div>
                        <div className="text-xs text-gray-500">75% response rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone Frame 2 - Overlapping (Job Cards) */}
              <div className="absolute top-8 -right-4 w-[280px] lg:w-[360px] h-[520px] lg:h-[600px] rounded-[3rem] bg-gray-900 p-3 shadow-2xl ring-1 ring-white/40 transform -rotate-2 z-10 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl">📋</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Job Cards</h3>
                      <p className="text-sm text-gray-600">Browse projects</p>
                      <div className="mt-3 space-y-2">
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] rounded-full" style={{width: '60%'}} />
                        </div>
                        <div className="text-xs text-gray-500">12 active listings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone Frame 3 - Background (Earnings) */}
              <div className="absolute top-16 -left-6 w-[240px] lg:w-[300px] h-[440px] lg:h-[500px] rounded-[3rem] bg-gray-900 p-3 shadow-2xl ring-1 ring-white/40 transform rotate-3 z-0 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Earnings</h3>
                      <p className="text-sm text-gray-600">Wallet balance</p>
                      <div className="mt-3">
                        <div className="text-lg font-bold text-green-600">$2,450</div>
                        <div className="text-xs text-gray-500">This month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
