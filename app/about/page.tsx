'use client';

import { useState, useEffect } from 'react';
import { Eye, Target, Zap, Shield, Brain, Quote, Users, Rocket, Star, Heart, Award, Globe, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAFF] via-white to-[#F8F9FB]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-violet-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center">
            {/* Animated Logo Badge */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 animate-pulse">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] bg-clip-text text-transparent mb-2">
                  About Us
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                  The Future of Freelancing
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                We're not a marketplace — we're a <span className="text-[#8F00FF] font-bold">movement</span>.
              </p>
              <p className="text-lg text-gray-500 mt-6 max-w-3xl mx-auto leading-relaxed">
                XpertTask is redefining freelance work by using AI to empower talent, optimize project matching, and reward results — not just effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - 2 Card Layout */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8F00FF] via-[#FF66C4] to-[#8F00FF]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Card - Vision Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-2xl flex items-center justify-center shadow-xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Our Vision
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                A world where freelancers <span className="text-[#8F00FF]">thrive</span>, not just survive.
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're reshaping freelancing into a sustainable, transparent, growth-focused journey. Our platform goes beyond simple job matching to create an ecosystem where every interaction builds toward long-term success and mutual growth.
              </p>
            </div>
            
            {/* Right Card - Vision 2030 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#f8f9ff] via-[#eae6ff] to-[#f3e6ff] rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">Vision 2030</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Building the most trusted freelance ecosystem where talent meets opportunity seamlessly.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-[#8F00FF] mb-1">10M+</div>
                      <div className="text-sm text-gray-600">Active Freelancers</div>
                    </div>
                    <div className="bg-white/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-[#FF66C4] mb-1">$50B+</div>
                      <div className="text-sm text-gray-600">Project Value</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Side by Side */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#FAFAFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Mission Icon */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#f8f9ff] via-[#eae6ff] to-[#f3e6ff] rounded-3xl p-12 shadow-2xl border border-white/50">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <Target className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">Mission Focus</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Connecting talent with opportunity through intelligent matching and fair practices.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right - Mission Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8A2EFF] to-[#FF66C4] rounded-2xl flex items-center justify-center shadow-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                We build ecosystems where <span className="text-[#FF66C4]">results matter</span>.
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our platform connects freelancers and clients through smart matching, gamification, fairness policies, and meaningful feedback. We believe in rewarding outcomes, not just time spent, creating a system where everyone wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - 5 Cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at XpertTask
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Transparency */}
            <div className="bg-gradient-to-br from-white to-[#FAFAFF] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">Clear terms, fair reviews, and honest feedback in everything we do.</p>
              </div>
            </div>

            {/* Empowerment */}
            <div className="bg-gradient-to-br from-white to-[#FAFAFF] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Empowerment</h3>
                <p className="text-gray-600">AI tools that boost growth, skill-leveling, and visibility for all users.</p>
              </div>
            </div>

            {/* Innovation */}
            <div className="bg-gradient-to-br from-white to-[#FAFAFF] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">Always improving with smart features and user-first logic.</p>
              </div>
            </div>

            {/* Trust */}
            <div className="bg-gradient-to-br from-white to-[#FAFAFF] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
                <p className="text-gray-600">Verified projects, protection policies, and ethical systems.</p>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-br from-white to-[#FAFAFF] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-600">Creating meaningful change in the freelance ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#FAFAFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - AI Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-2xl flex items-center justify-center shadow-xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  AI Innovation
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                XpertTask leverages cutting-edge AI technology to revolutionize how freelancers and clients connect. Our intelligent systems handle matching, gamification, milestone tracking, dispute fairness, and growth optimization.
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Smart Matching</h4>
                      <p className="text-gray-600">AI-powered project recommendations</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Growth Tracking</h4>
                      <p className="text-gray-600">Automated skill development insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - AI Ecosystem Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-3xl p-12 shadow-2xl text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">AI Ecosystem</h4>
                  <p className="text-lg text-white/90 leading-relaxed mb-8">
                    Intelligent matching, fair disputes, and growth optimization powered by advanced AI.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">99.9%</div>
                      <div className="text-sm text-white/80">Accuracy</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-white/80">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-[#FAFAFF] via-white to-[#F8F9FB] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-gradient-to-br from-white via-[#FAFAFF] to-[#F8F9FB] rounded-3xl p-12 md:p-16 shadow-2xl border border-white/50">
            <div className="text-center mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Message from the CEO
              </h2>
            </div>
            
            <div className="relative">
              <Quote className="w-12 h-12 text-[#8F00FF] mb-6 mx-auto" />
              <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-12 italic text-center font-medium">
                "When I started XpertTask, my vision was simple: make freelancing fair, fun, and future-ready. We've seen too many platforms take too much from the people who power them. XpertTask is built differently — because we believe freelancers deserve better."
              </blockquote>
              
              <div className="flex items-center justify-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF66C4] to-[#8F00FF] rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-xl">MA</span>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">Majid Ali</p>
                  <p className="text-lg text-gray-600">Founder & CEO, XpertTask</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            We're building the next era of freelancing. Be part of it.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#8F00FF] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Join as Freelancer
            </button>
            <button className="bg-white/20 text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
              Hire Talent
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 