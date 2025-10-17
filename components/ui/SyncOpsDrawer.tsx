"use client";
import React from 'react';
import { X, Rocket, Brain, Cloud, BarChart3, Shield, Palette, Code, ExternalLink } from 'lucide-react';

interface SyncOpsDrawerProps {
  open: boolean;
  onClose: () => void;
}

const services = [
  {
    icon: Brain,
    title: "AI-Powered SaaS",
    subtitle: "Intelligent web & mobile applications with ML",
    tag: "AI/ML",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Cloud,
    title: "Web Applications",
    subtitle: "Responsive SaaS platforms & progressive web apps",
    tag: "Web",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Mobile Apps",
    subtitle: "Native & cross-platform AI-enhanced mobile apps",
    tag: "Mobile",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Advanced threat detection & security solutions",
    tag: "Security",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: Palette,
    title: "Cloud Infrastructure",
    subtitle: "AWS, Azure & Google Cloud deployment",
    tag: "Cloud",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Code,
    title: "DevOps & CI/CD",
    subtitle: "Automated deployment & infrastructure management",
    tag: "DevOps",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Brain,
    title: "Blockchain Solutions",
    subtitle: "Smart contracts & decentralized applications",
    tag: "Web3",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: BarChart3,
    title: "AI-Enhanced UX",
    subtitle: "Smart interfaces with intelligent interactions",
    tag: "UX/AI",
    gradient: "from-pink-500 to-rose-500"
  }
];

export default function SyncOpsDrawer({ open, onClose }: SyncOpsDrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] rounded-xl flex items-center justify-center shadow-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] bg-clip-text text-transparent">
                  Powered by SyncOps
                </h2>
                <p className="text-sm text-gray-600">Your Technology Partner in Digital Innovation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                We specialize in building AI-powered SaaS applications that transform businesses. From intelligent automation and machine learning solutions to scalable cloud-native platforms, we create cutting-edge applications that drive innovation and growth.
              </p>
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 border border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#6B40FF]">AI-First Approach:</span> We build intelligent SaaS applications with AI at the core — 
                  from predictive analytics and natural language processing to automated workflows and smart decision-making systems.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h3>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-4 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
                          <span className={`px-2 py-1 text-xs font-medium text-white bg-gradient-to-r ${service.gradient} rounded-full shadow-sm`}>
                            {service.tag}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-100 text-center">
                <div className="text-2xl font-bold text-[#6B40FF] mb-1">50+</div>
                <div className="text-xs text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-100 text-center">
                <div className="text-2xl font-bold text-[#FF66C4] mb-1">99%</div>
                <div className="text-xs text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <a
              href="https://syncops.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] text-white py-3 px-6 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Visit SyncOps.tech</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <p className="text-center text-xs text-gray-500 mt-3">
              Transforming ideas into digital reality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 