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
  MessageSquare,
  Star,
  CheckCircle,
  TrendingUp,
  FolderOpen,
  Download,
  Eye,
  MapPin,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import Link from 'next/link';

// Mock project data - in real app this would come from API
const getProjectData = (id: string) => ({
  id: parseInt(id),
  title: "AI-Powered E-commerce Platform",
  description: "Build a modern e-commerce platform with AI-driven product recommendations, real-time inventory management, and seamless payment processing with advanced analytics. This comprehensive solution will revolutionize online shopping experiences through intelligent personalization and predictive analytics.",
  budget: "$3,500",
  technologies: [
    { icon: "⚛️", label: "React" },
    { icon: "🌿", label: "Node.js" },
    { icon: "🍃", label: "MongoDB" },
    { icon: "🤖", label: "TensorFlow" },
    { icon: "☁️", label: "AWS" }
  ],
  status: 'verified_active' as const,
  progress: 85,
  category: "Web Development",
  postedDate: "2 days ago",
  client: {
    name: "TechCorp Solutions",
    avatar: "🏢",
    location: "San Francisco, CA",
    rating: 4.8,
    completedProjects: 24,
    memberSince: "2021"
  },
  milestones: [
    { id: 1, title: "Project Planning & Requirements", status: "completed", date: "2024-01-15" },
    { id: 2, title: "UI/UX Design & Prototyping", status: "completed", date: "2024-01-25" },
    { id: 3, title: "Frontend Development", status: "in-progress", date: "2024-02-10" },
    { id: 4, title: "Backend API Development", status: "pending", date: "2024-02-20" },
    { id: 5, title: "AI Integration & Testing", status: "pending", date: "2024-03-05" },
    { id: 6, title: "Deployment & Launch", status: "pending", date: "2024-03-15" }
  ],
  attachments: [
    { name: "Project Requirements.pdf", size: "2.4 MB", type: "pdf" },
    { name: "UI Design Mockups.fig", size: "15.7 MB", type: "figma" },
    { name: "Technical Specifications.docx", size: "1.8 MB", type: "document" }
  ],
  reviews: [
    { id: 1, client: "Sarah Johnson", rating: 5, comment: "Excellent communication and delivered exactly what we needed!", date: "2024-01-20" },
    { id: 2, client: "Mike Chen", rating: 5, comment: "Very professional and skilled developer. Highly recommended!", date: "2024-01-15" }
  ]
});

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const project = getProjectData(params.id);
  
  const statusConfig = {
    verified: { icon: '✅', label: 'Verified', color: '#8F00FF', gradient: 'from-[#8F00FF] to-[#A56CF4]' },
    active: { icon: '🔴', label: 'Active', color: '#FF66C4', gradient: 'from-[#FF66C4] to-[#FF8E8E]' },
    verified_active: { icon: '⭐', label: 'Verified & Active', color: '#FF66C4', gradient: 'from-[#FF66C4] to-[#A56CF4]' }
  };

  const status = statusConfig[project.status];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'milestones', label: 'Milestones', icon: CheckCircle },
    { id: 'client', label: 'Client History', icon: User },
    { id: 'attachments', label: 'Attachments', icon: FileText },
    { id: 'reviews', label: 'Reviews', icon: Star }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${project.title} - ${window.location.href}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(project.title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAFF] via-white to-[#F8F9FF]">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/jobs"
                className="p-2 text-gray-500 hover:text-[#A56CF4] hover:bg-[#A56CF4]/10 rounded-lg transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{project.title}</h1>
                <p className="text-sm text-gray-600">Project Details</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-[#A56CF4] hover:bg-[#A56CF4]/10 rounded-lg transition-all duration-200"
                title="Share project"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopy}
                className="p-2 text-gray-500 hover:text-[#A56CF4] hover:bg-[#A56CF4]/10 rounded-lg transition-all duration-200"
                title="Copy project title"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isBookmarked 
                    ? 'text-[#A56CF4] bg-[#A56CF4]/10' 
                    : 'text-gray-500 hover:text-[#A56CF4] hover:bg-[#A56CF4]/10'
                }`}
                title="Bookmark project"
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
            
            {/* Project Overview Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/20">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8F00FF]/20 to-[#FF66C4]/20 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">{project.technologies[0]?.icon || '📁'}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-bold text-white shadow-md bg-gradient-to-r ${status.gradient}`}>
                        <span className="text-sm">{status.icon}</span>
                        <span>{status.label}</span>
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-4 h-4 rounded-full bg-[#A56CF4] flex items-center justify-center">
                          <span className="text-[10px] text-white font-bold">{project.progress}</span>
                        </div>
                        <span>{project.progress}% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Budget</p>
                    <p className="text-lg font-bold text-green-600">{project.budget}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl">
                  <Calendar className="w-5 h-5 text-[#A56CF4]" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Posted</p>
                    <p className="text-lg font-bold text-gray-900">🚀 {project.postedDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl">
                  <FolderOpen className="w-5 h-5 text-[#A56CF4]" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Category</p>
                    <p className="text-lg font-bold text-gray-900">{project.category}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-[#FEC9F2] text-[#A56CF4] rounded-xl text-sm font-medium shadow-sm">
                      <span className="text-lg">{tech.icon}</span>
                      <span>{tech.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/20">
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
                            ? 'text-[#A56CF4] border-b-2 border-[#A56CF4] bg-[#A56CF4]/5'
                            : 'text-gray-600 hover:text-[#A56CF4] hover:bg-gray-50/50'
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h3>
                      <p className="text-gray-600 leading-relaxed">
                        This AI-powered e-commerce platform represents a cutting-edge solution that combines modern web technologies with advanced machine learning capabilities. The project aims to create a seamless shopping experience through intelligent product recommendations, real-time inventory management, and sophisticated payment processing systems.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          AI-driven product recommendations
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Real-time inventory management
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Seamless payment processing
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Advanced analytics dashboard
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'milestones' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Milestones</h3>
                    {project.milestones.map((milestone, index) => (
                      <div key={milestone.id} className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          milestone.status === 'completed' ? 'bg-green-500' :
                          milestone.status === 'in-progress' ? 'bg-[#A56CF4]' : 'bg-gray-300'
                        }`}>
                          {milestone.status === 'completed' ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : milestone.status === 'in-progress' ? (
                            <Clock className="w-5 h-5 text-white" />
                          ) : (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                          <p className="text-sm text-gray-600">{milestone.date}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          milestone.status === 'completed' ? 'bg-green-100 text-green-700' :
                          milestone.status === 'in-progress' ? 'bg-[#A56CF4]/10 text-[#A56CF4]' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {milestone.status.replace('-', ' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'client' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50/50 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#8F00FF]/20 to-[#FF66C4]/20 rounded-xl flex items-center justify-center">
                            <span className="text-2xl">{project.client.avatar}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{project.client.name}</h4>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600">{project.client.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {project.client.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            {project.client.completedProjects} projects completed
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Member since {project.client.memberSince}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'attachments' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Attachments</h3>
                    {project.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#A56CF4]/10 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-[#A56CF4]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{attachment.name}</h4>
                            <p className="text-sm text-gray-600">{attachment.size}</p>
                          </div>
                        </div>
                        <button className="p-2 text-gray-500 hover:text-[#A56CF4] hover:bg-[#A56CF4]/10 rounded-lg transition-all duration-200">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Reviews</h3>
                    {project.reviews.map((review) => (
                      <div key={review.id} className="p-4 bg-gray-50/50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{review.client}</h4>
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
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Client Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8F00FF]/20 to-[#FF66C4]/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{project.client.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{project.client.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{project.client.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {project.client.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4" />
                    {project.client.completedProjects} projects completed
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Member since {project.client.memberSince}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                    Contact Client
                  </button>
                </div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="font-semibold text-gray-900">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#A56CF4]">{project.milestones.length}</div>
                    <div className="text-sm text-gray-600">Milestones</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {project.milestones.filter(m => m.status === 'completed').length}
                    </div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#A56CF4] hover:border-[#A56CF4] transition-all duration-200">
                  <MessageSquare className="w-4 h-4" />
                  Send Message
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#A56CF4] hover:border-[#A56CF4] transition-all duration-200">
                  <TrendingUp className="w-4 h-4" />
                  Track Progress
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#A56CF4] hover:border-[#A56CF4] transition-all duration-200">
                  <FileText className="w-4 h-4" />
                  View Documents
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 