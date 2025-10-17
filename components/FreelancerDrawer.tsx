"use client";
import React, { useState } from 'react';
import { 
  X, 
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
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

interface Freelancer {
  id: number;
  name: string;
  tagline: string;
  avatar: string;
  rating: number;
  reviews: number;
  hourlyRate: { min: number; max: number };
  skills: Array<{ icon: string; label: string }>;
  badges: Array<{ icon: string; label: string; color: string }>;
  experience: 'Beginner' | 'Intermediate' | 'Expert';
  availability: 'Now' | 'This Week' | 'Booked';
  category: string;
  location: string;
  projectMatchScore: number;
  hireCount: number;
  isVerified: boolean;
  isMentor: boolean;
  streak: number;
  isHiredByClient: boolean;
  hireCountByClient: number;
  portfolio: Array<{ title: string; description: string; image: string }>;
  education: Array<{ degree: string; institution: string; year: string }>;
  languages: Array<{ language: string; level: string }>;
}

interface FreelancerDrawerProps {
  freelancer: Freelancer;
  isOpen: boolean;
  onClose: () => void;
  onHire: (freelancer: Freelancer) => void;
  clientHireCount: number;
}

export default function FreelancerDrawer({ 
  freelancer, 
  isOpen, 
  onClose, 
  onHire,
  clientHireCount 
}: FreelancerDrawerProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

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
    onHire(freelancer);
    onClose();
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Now': return 'text-green-600 bg-green-100';
      case 'This Week': return 'text-yellow-600 bg-yellow-100';
      case 'Booked': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'Expert': return 'text-purple-600 bg-purple-100';
      case 'Intermediate': return 'text-blue-600 bg-blue-100';
      case 'Beginner': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Top Section - Fixed Header */}
        <div className="relative h-48 bg-gradient-to-br from-[#8F00FF]/10 via-[#A56CF4]/8 to-[#FF66C4]/10 border-b border-gray-100">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-[#8F00FF] hover:bg-white/50 rounded-lg transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Freelancer Icon & Title */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-xl flex items-center justify-center text-3xl text-white">
                {freelancer.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-gray-900 truncate">{freelancer.name}</h2>
                <p className="text-sm text-gray-600 truncate">{freelancer.tagline}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getAvailabilityColor(freelancer.availability)}`}>
                    {freelancer.availability}
                  </span>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getExperienceColor(freelancer.experience)}`}>
                    {freelancer.experience}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body Content - Scrollable */}
        <div className="h-[calc(100%-12rem)] overflow-y-auto">
          <div className="p-6 space-y-6">
            
            {/* Rating & Stats */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-gray-900">{freelancer.rating}</span>
                  <span className="text-sm text-gray-600">({freelancer.reviews})</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#8F00FF]">{freelancer.hireCount}</div>
                  <div className="text-xs text-gray-600">Hires</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#FF66C4]">{freelancer.streak}</div>
                  <div className="text-xs text-gray-600">Day Streak</div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Badges & Achievements</h3>
              <div className="flex flex-wrap gap-2">
                {freelancer.badges.map((badge, index) => (
                  <span 
                    key={index}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${badge.color}`}
                  >
                    <span className="text-xs">{badge.icon}</span>
                    <span>{badge.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">Skills</h3>
                <div className="flex items-center gap-1 text-xs text-[#8F00FF]">
                  <Target className="w-3 h-3" />
                  <span>{freelancer.projectMatchScore}% match</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {freelancer.skills.slice(0, 4).map((skill, index) => (
                  <span key={index} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#FEC9F2] text-[#8F00FF] rounded-lg text-sm font-medium">
                    <span className="text-sm">{skill.icon}</span>
                    <span>{skill.label}</span>
                  </span>
                ))}
                {freelancer.skills.length > 4 && (
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                    +{freelancer.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Hourly Rate</span>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-semibold">
                  ${freelancer.hourlyRate.min}–${freelancer.hourlyRate.max}/hr
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8F00FF]" />
                  <span className="text-sm font-medium text-gray-700">Location</span>
                </div>
                <span className="text-sm text-gray-600">{freelancer.location}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-[#8F00FF]" />
                  <span className="text-sm font-medium text-gray-700">Category</span>
                </div>
                <span className="text-sm text-gray-600">{freelancer.category}</span>
              </div>
            </div>

            {/* Hired by Client Badge */}
            {freelancer.isHiredByClient && (
              <div className="p-3 bg-[#8F00FF]/10 rounded-xl border border-[#8F00FF]/20">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#8F00FF]" />
                  <span className="text-[#8F00FF] font-medium">
                    Hired {freelancer.hireCountByClient}x by you
                  </span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href={`/freelancers/${freelancer.id}`}
                className="w-full bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                onClick={onClose}
              >
                <Eye className="w-4 h-4" />
                View Full Profile
                <ExternalLink className="w-4 h-4" />
              </Link>

              <button
                onClick={handleHire}
                className="w-full border border-[#8F00FF] text-[#8F00FF] py-3 px-4 rounded-xl font-semibold hover:bg-[#8F00FF]/5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                Hire Now
                {clientHireCount >= 3 && (
                  <span className="text-xs opacity-75">(Fees apply)</span>
                )}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handleShare}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#8F00FF] hover:border-[#8F00FF] transition-all duration-200"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#8F00FF] hover:border-[#8F00FF] transition-all duration-200"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 border rounded-xl transition-all duration-200 ${
                    isBookmarked 
                      ? 'border-[#8F00FF] text-[#8F00FF] bg-[#8F00FF]/10' 
                      : 'border-gray-200 text-gray-600 hover:text-[#8F00FF] hover:border-[#8F00FF]'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 