"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import SyncOpsDrawer from "@/components/ui/SyncOpsDrawer"

const liveProjects = [
  {
    title: "Modern E-commerce Website",
    description: "Looking for a skilled React developer to build a responsive e-commerce platform with payment integration and admin dashboard.",
    budget: "$2,500 - $4,000",
    tags: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" }
    ]
  },
  {
    title: "Mobile App UI/UX Design",
    description: "Need a creative designer to create stunning mobile app interfaces with modern design principles and user experience focus.",
    budget: "$800 - $1,200",
    tags: [
      { name: "Figma", icon: "🎨" },
      { name: "UI/UX", icon: "✨" },
      { name: "Mobile", icon: "📱" }
    ]
  },
  {
    title: "Content Writing & SEO",
    description: "Seeking a professional content writer to create engaging blog posts and optimize content for search engines.",
    budget: "$300 - $500",
    tags: [
      { name: "Content", icon: "✍️" },
      { name: "SEO", icon: "🔍" },
      { name: "Blog", icon: "📝" }
    ]
  },
  {
    title: "Video Editing & Animation",
    description: "Looking for a talented video editor to create promotional videos and animated content for social media marketing.",
    budget: "$600 - $1,000",
    tags: [
      { name: "Premiere", icon: "🎬" },
      { name: "After Effects", icon: "🎭" },
      { name: "Animation", icon: "🎨" }
    ]
  }
];

const freelancerHighlights = [
  {
    icon: "🚀",
    headline: "Maira's Profile Just Reached Top 5%!",
    subtext: "Earned Boost Badge and featured in client searches",
    color: "from-purple-500 to-pink-500",
    animation: "animate-pulse"
  },
  {
    icon: "🥇",
    headline: "Irfan Unlocked the 'Pro Coder' Badge!",
    subtext: "Completed 5+ jobs with a 5-star rating",
    color: "from-yellow-500 to-orange-500",
    animation: "animate-bounce"
  },
  {
    icon: "💰",
    headline: "Ali Earned $420 on a Logo Gig!",
    subtext: "In under 3 days — fast + quality delivery",
    color: "from-green-500 to-emerald-500",
    animation: "animate-ping"
  },
  {
    icon: "📊",
    headline: "Video Editing is Hot Right Now!",
    subtext: "Boost your chances — learn & earn more",
    color: "from-blue-500 to-cyan-500",
    animation: "animate-pulse"
  }
];

export default function HeroSection() {
  const [index, setIndex] = React.useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login state from localStorage on component mount and when it changes
  useEffect(() => {
    const checkLoginState = () => {
      const loginState = localStorage.getItem('isLoggedIn')
      setIsLoggedIn(loginState === 'true')
    }

    // Check initial state
    checkLoginState()

    // Listen for storage changes (when login state changes in other components)
    const handleStorageChange = () => {
      checkLoginState()
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Also listen for custom event for same-tab updates
    window.addEventListener('loginStateChanged', checkLoginState)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('loginStateChanged', checkLoginState)
    }
  }, [])

  // Auto-rotate live projects for non-logged in users
  useEffect(() => {
    if (!isLoggedIn) {
    intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % liveProjects.length);
      }, 4000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isLoggedIn]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-[#E9D8FD] via-[#F8F9FF] to-white overflow-hidden pt-16">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Premium geometric patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-[#FF66C4]/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-[#8F00FF]/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#FF66C4]/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#8F00FF]/40 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FF66C4]/25 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Headline, subheadline, CTAs, logos */}
        <div className="flex-1 text-center md:text-left">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] leading-tight mb-6">
            Work Smarter.
            <span className="block bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] bg-clip-text text-transparent">
              Earn Better.
            </span>
          </h1>
          
          {/* Mission Statement */}
          <p className="text-lg md:text-xl text-[#8A2EFF]/80 font-bold mb-6 drop-shadow-sm">
            Not a marketplace — a mission, a movement, an ecosystem
          </p>
          
          {/* Subheadline */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
            An AI-augmented freelance platform made to grow your skills, match you smartly, and reward results — now with 0% commission for both clients and freelancers.
          </p>
          
          {/* Bullet Points */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Over 8,000+ successful projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>0% commission for both clients and freelancers</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <GetStartedButton />
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white border-2 border-[#8A2EFF] text-[#8A2EFF] hover:bg-[#8A2EFF] hover:text-white transition-all duration-300 font-semibold"
            >
              Hire Talent
            </Button>
          </div>
          
          {/* Trusted By Logos */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-sm text-gray-500 font-medium">Trusted by</p>
            <div className="flex items-center gap-4 flex-wrap">
              {/* Microsoft - Windows 11 Style */}
              <div className="group relative">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white/95">
                  <div className="flex items-center gap-3">
                    {/* Microsoft Logo - Windows 11 Style */}
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                        <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                          <div className="bg-white rounded-sm"></div>
                          <div className="bg-white rounded-sm"></div>
                          <div className="bg-white rounded-sm"></div>
                          <div className="bg-white rounded-sm"></div>
                        </div>
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-sm group-hover:bg-blue-500/30 transition-all duration-300"></div>
                    </div>
                    <span className="text-gray-700 font-semibold text-sm tracking-wide">Microsoft</span>
                  </div>
                </div>
              </div>
              
              {/* Google - Multi-color Ring */}
              <div className="group relative">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white/95">
                  <div className="flex items-center gap-3">
                    {/* Google Logo - Multi-color Ring */}
                    <div className="relative">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 border-2 border-gray-100">
                        <div className="w-6 h-6 relative">
                          {/* Google G with multi-color ring */}
                          <svg viewBox="0 0 24 24" className="w-6 h-6">
                            <defs>
                              <linearGradient id="googleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{stopColor: '#4285F4'}} />
                                <stop offset="25%" style={{stopColor: '#34A853'}} />
                                <stop offset="50%" style={{stopColor: '#FBBC05'}} />
                                <stop offset="75%" style={{stopColor: '#EA4335'}} />
                                <stop offset="100%" style={{stopColor: '#4285F4'}} />
                              </linearGradient>
                            </defs>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="url(#googleGradient)"/>
                            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.76 0 5.08-1.88 5.8-4.4H12v-3.2h6.8c.1.6.2 1.2.2 1.8 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6z" fill="url(#googleGradient)"/>
              </svg>
                        </div>
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-green-400/20 to-red-400/20 rounded-full blur-sm group-hover:opacity-50 transition-all duration-300"></div>
                    </div>
                    <span className="text-gray-700 font-semibold text-sm tracking-wide">Google</span>
                  </div>
                </div>
              </div>
              
              {/* Amazon - Modern Smile Arrow */}
              <div className="group relative">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white/95">
                  <div className="flex items-center gap-3">
                    {/* Amazon Logo - Modern Smile Arrow */}
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
                          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                          <path fill="currentColor" d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/>
                          <path fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                        </svg>
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-sm group-hover:bg-orange-500/30 transition-all duration-300"></div>
                    </div>
                    <span className="text-gray-700 font-semibold text-sm tracking-wide">Amazon</span>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Conditional Content Based on Login Status */}
        <div className="flex-1 flex flex-col items-center md:items-end w-full max-w-md">
          {/* Powered by SyncOps badge */}
          <div className="mb-4">
              <button
                onClick={() => setDrawerOpen(true)}
              className="group bg-gradient-to-r from-[#FF66C4] to-[#8F00FF] text-white px-6 py-3 rounded-full text-sm font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-[0_10px_25px_rgba(255,102,196,0.4)] shadow-[0_6px_20px_rgba(255,102,196,0.3)]"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span><span className="text-white/80 font-normal">Powered by</span> <span className="font-black">SyncOps</span></span>
              <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {isLoggedIn ? (
            /* Freelancer Progress Highlights for logged-in users */
            <div className="w-full bg-white/90 rounded-2xl shadow-2xl border border-white/40 p-6 flex flex-col gap-4 min-h-[280px] max-w-md backdrop-blur-md overflow-hidden">
              <h3 className="text-lg font-bold text-[#8A2EFF] mb-2 tracking-wide">Your Xpert Journey</h3>
              
              {/* Freelancer Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 flex-1">
                {freelancerHighlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-start gap-2">
                      <div className={`w-8 h-8 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 ${highlight.animation}`}>
                        <span className="text-sm text-white">{highlight.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[#222] text-xs mb-1 leading-tight">
                          {highlight.headline}
                        </h4>
                        <p className="text-[11px] text-gray-600 leading-tight">
                          {highlight.subtext}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="mt-4">
                <button className="w-full bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                    <span className="text-lg">🎮</span>
                    Start Your Xpert Journey
                </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8A2EFF] to-[#FF66C4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              </div>
            </div>
          ) : (
            /* Live Projects for non-logged-in users */
          <div className="w-full bg-white/90 rounded-2xl shadow-2xl border border-white/40 p-6 flex flex-col gap-4 min-h-[220px] max-w-md backdrop-blur-md overflow-hidden">
              <h3 className="text-lg font-bold text-[#8A2EFF] mb-2 tracking-wide">Live Projects</h3>
            {/* Auto-rotating project with fixed height */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="transition-all duration-500 ease-in-out p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#222] text-sm mb-1 truncate">
                      {liveProjects[index].title}
                    </h4>
                    <p className="text-[13px] text-gray-600 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {liveProjects[index].description}
                    </p>
                  </div>
                  <span className="bg-[#A7EFC3] text-[#222] text-xs font-medium px-3 py-1 rounded-full shadow-sm flex-shrink-0 ml-3">
                    {liveProjects[index].budget}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {liveProjects[index].tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-[#FFD6EC] text-[#222] text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                        {tag.icon} {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
      <SyncOpsDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
} 