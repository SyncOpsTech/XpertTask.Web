"use client";
import React from "react";

export default function UserRoles() {
  const roles = [
    {
      title: "Freelancer",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      features: [
        "Showcase your skills and portfolio",
        "Find projects that match your expertise",
        "Grow your career and earnings"
      ],
      gradient: "from-[#8F00FF] to-[#FF66C4]",
      badge: "Join 50K+ Freelancers"
    },
    {
      title: "Client",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Post your project requirements",
        "Connect with qualified professionals",
        "Get quality work delivered on time"
      ],
      gradient: "from-[#FF66C4] to-[#8F00FF]",
      badge: "Trusted by 10K+ Clients"
    },
    {
      title: "Agency",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        "Manage your team projects",
        "Scale your business efficiently",
        "Build lasting partnerships"
      ],
      gradient: "from-[#8F00FF] to-[#FF66C4]",
      badge: "500+ Agencies Active"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f9ff] via-[#eae6ff] to-[#f3e6ff] relative">
      {/* Soft divider shadow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8A2EFF]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100">
              <svg className="w-6 h-6 text-[#8A2EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              👥 Who We Serve
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for work, hiring talent, or building a team, we have the perfect solution for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-white/50 p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out group"
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${role.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {role.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{role.title}</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-all duration-300">
                  {role.badge}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {role.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-6 h-6 bg-gradient-to-br ${role.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FF66C4]/90 group-hover:to-[#8A2EFF]/90">
                  Join as {role.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 