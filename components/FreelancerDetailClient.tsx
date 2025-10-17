"use client";
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Copy, 
  Bookmark, 
  Calendar, 
  DollarSign, 
  User, 
  Clock, 
  FileText,
  MessageCircle,
  Star,
  CheckCircle,
  TrendingUp,
  FolderOpen,
  Download,
  Eye,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  Target,
  Award,
  Zap,
  Heart,
  MessageSquare,
  Send
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function FreelancerDetailClient({ freelancer }: { freelancer: any }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'portfolio', label: 'Portfolio', icon: FolderOpen },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'product-reviews', label: 'Product Reviews', icon: Award },
    { id: 'education', label: 'Education', icon: Award }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: freelancer.name,
        text: freelancer.tagline,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${freelancer.name} - ${window.location.href}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(freelancer.name);
  };

  const handleHire = () => {
    alert(`Hiring ${freelancer.name}! Redirecting to hiring process...`);
  };

  const handleMessage = () => {
    alert(`Opening chat with ${freelancer.name}...`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/freelancers"
                className="p-2 text-gray-500 hover:text-[#8F00FF] hover:bg-[#8F00FF]/10 rounded-lg transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{freelancer.name}</h1>
                <p className="text-sm text-gray-600">{freelancer.tagline}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isLiked 
                    ? 'text-red-500 bg-red-50' 
                    : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
                }`}
                title="Like profile"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-[#8F00FF] hover:bg-[#8F00FF]/10 rounded-lg transition-all duration-200"
                title="Share profile"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopy}
                className="p-2 text-gray-500 hover:text-[#8F00FF] hover:bg-[#8F00FF]/10 rounded-lg transition-all duration-200"
                title="Copy name"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isBookmarked 
                    ? 'text-[#8F00FF] bg-[#8F00FF]/10' 
                    : 'text-gray-500 hover:text-[#8F00FF] hover:bg-[#8F00FF]/10'
                }`}
                title="Bookmark profile"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Freelancer Overview Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-xl flex items-center justify-center text-4xl text-white">
                    {freelancer.avatar}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{freelancer.name}</h2>
                    <p className="text-gray-600 mb-3">{freelancer.tagline}</p>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium text-green-600 bg-green-100">
                        {freelancer.availability}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium text-purple-600 bg-purple-100">
                        {freelancer.experience}
                      </span>
                      {freelancer.isVerified && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium text-green-600 bg-green-100">
                          ✅ Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{freelancer.about}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Hourly Rate</p>
                    <p className="text-lg font-bold text-green-600">${freelancer.hourlyRate.min}–${freelancer.hourlyRate.max}/hr</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Rating</p>
                    <p className="text-lg font-bold text-gray-900">{freelancer.rating} ({freelancer.reviews})</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Users className="w-5 h-5 text-[#8F00FF]" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Hired</p>
                    <p className="text-lg font-bold text-[#8F00FF]">{freelancer.hireCount}x</p>
                  </div>
                </div>
              </div>

              {/* Pricing Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing & Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <h4 className="font-semibold text-gray-900">Hourly Projects</h4>
                    </div>
                    <p className="text-2xl font-bold text-green-600 mb-1">${freelancer.pricing.hourly.min}–${freelancer.pricing.hourly.max}/hr</p>
                    <p className="text-sm text-gray-600">Perfect for ongoing work and consultations</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">Fixed Projects</h4>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 mb-1">${freelancer.pricing.fixed.min}–${freelancer.pricing.fixed.max}</p>
                    <p className="text-sm text-gray-600">Complete projects with defined scope</p>
                  </div>
                </div>
                
                {/* Package Options */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Packages</h4>
                  {freelancer.pricing.packages.map((pkg: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-[#8F00FF] transition-colors">
                      <div>
                        <h5 className="font-semibold text-gray-900">{pkg.name}</h5>
                        <p className="text-sm text-gray-600">{pkg.description}</p>
                        <p className="text-xs text-gray-500">Delivery: {pkg.delivery}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-[#8F00FF]">${pkg.price}</p>
                        <button className="text-sm text-[#8F00FF] hover:underline">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Badges & Achievements</h3>
                <div className="flex flex-wrap gap-2">
                  {freelancer.badges.map((badge: any, index: number) => (
                    <span 
                      key={index}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${badge.color}`}
                    >
                      <span className="text-sm">{badge.icon}</span>
                      <span>{badge.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
                  <div className="flex items-center gap-1 text-sm text-[#8F00FF]">
                    <Target className="w-4 h-4" />
                    <span>{freelancer.projectMatchScore}% match</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill: any, index: number) => (
                    <span key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-[#FEC9F2] text-[#8F00FF] rounded-xl text-sm font-medium">
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="border-b border-gray-100">
                <div className="flex overflow-x-auto">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'text-[#8F00FF] border-b-2 border-[#8F00FF] bg-[#8F00FF]/5'
                            : 'text-gray-600 hover:text-[#8F00FF] hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About {freelancer.name}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {freelancer.about}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Strengths</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {freelancer.experience} level expertise in {freelancer.category.toLowerCase()}
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {freelancer.hireCount}+ successful projects completed
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {freelancer.rating} star rating with {freelancer.reviews} reviews
                        </li>
                        {freelancer.isMentor && (
                          <li className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Mentor and team leader with proven track record
                          </li>
                        )}
                        <li className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {freelancer.streak}-day active streak
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {freelancer.languages.map((lang: any, index: number) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                            {lang.language} ({lang.level})
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'portfolio' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {freelancer.portfolio.map((project: any, index: number) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="text-3xl mb-3">{project.image}</div>
                          <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                          <p className="text-sm text-gray-600">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Reviews</h3>
                    <div className="space-y-4">
                      {freelancer.reviewList.map((review: any) => (
                        <div key={review.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">{review.client}</h4>
                              <p className="text-sm text-gray-600">{review.project}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">{review.comment}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'product-reviews' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Reviews</h3>
                    <div className="space-y-6">
                      {freelancer.productReviews.map((product: any) => (
                        <div key={product.id} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-lg font-semibold text-gray-900">{product.product}</h4>
                                <span className="px-2 py-1 bg-[#8F00FF]/10 text-[#8F00FF] rounded-lg text-xs font-medium">
                                  {product.category}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                              
                              {/* Features */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {product.features.map((feature: string, idx: number) => (
                                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="text-right ml-4">
                              <div className="text-2xl font-bold text-green-600 mb-1">${product.price}</div>
                              <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                              </div>
                              <div className="text-sm text-gray-500">{product.sales} sales</div>
                            </div>
                          </div>
                          
                          {/* Client Review */}
                          <div className="border-t border-gray-100 pt-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">{product.client}</span>
                              <span className="text-sm text-gray-500">{product.date}</span>
                            </div>
                            <p className="text-gray-600 text-sm italic">"{product.comment}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Education & Certifications</h3>
                    <div className="space-y-4">
                      {freelancer.education.map((edu: any, index: number) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                          <p className="text-sm text-gray-600">{edu.institution}</p>
                          <p className="text-xs text-gray-500">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Location</p>
                    <p className="text-gray-900">{freelancer.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Availability</p>
                    <p className="text-gray-900">{freelancer.availability}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-lg flex items-center justify-center">
                    <FolderOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Category</p>
                    <p className="text-gray-900">{freelancer.category}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button
                  onClick={handleHire}
                  className="w-full bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Hire Now
                </button>
                <button
                  onClick={handleMessage}
                  className="w-full border border-[#8F00FF] text-[#8F00FF] py-3 px-4 rounded-xl font-semibold hover:bg-[#8F00FF]/5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Success Rate</span>
                  <span className="font-semibold text-gray-900">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] h-2 rounded-full" style={{ width: '98%' }} />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#8F00FF]">{freelancer.hireCount}</div>
                    <div className="text-sm text-gray-600">Total Hires</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF66C4]">{freelancer.streak}</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#8F00FF] hover:border-[#8F00FF] transition-all duration-200">
                  <TrendingUp className="w-4 h-4" />
                  View Portfolio
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#8F00FF] hover:border-[#8F00FF] transition-all duration-200">
                  <FileText className="w-4 h-4" />
                  Download CV
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#8F00FF] hover:border-[#8F00FF] transition-all duration-200">
                  <Send className="w-4 h-4" />
                  Send Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 