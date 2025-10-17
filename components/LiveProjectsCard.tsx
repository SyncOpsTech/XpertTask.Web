"use client";
import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  List, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Sparkles,
  FolderOpen,
  X,
  Share2,
  Copy,
  Bookmark,
  Calendar,
  DollarSign,
  ExternalLink
} from 'lucide-react';

interface LiveProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    budget: string;
    technologies: Array<{
      icon: string;
      label: string;
    }>;
    status: 'verified' | 'active' | 'verified_active';
    progress: number;
    category: string;
  };
  viewMode: 'grid' | 'list';
  onProjectClick?: (project: any) => void;
}

// Project Drawer Component
function ProjectDrawer({ project, isOpen, onClose }: { project: any; isOpen: boolean; onClose: () => void }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const statusConfig = {
    verified: { icon: '✅', label: 'Verified', color: '#8F00FF', gradient: 'from-[#8F00FF] to-[#A56CF4]' },
    active: { icon: '🔴', label: 'Active', color: '#FF66C4', gradient: 'from-[#FF66C4] to-[#FF8E8E]' },
    verified_active: { icon: '⭐', label: 'Verified & Active', color: '#FF66C4', gradient: 'from-[#FF66C4] to-[#A56CF4]' }
  };

  const status = statusConfig[project.status];

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

  const handleViewDetails = () => {
    // Navigate to full project details page
    window.open(`/projects/${project.id}`, '_blank');
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
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Top Section - Fixed Header */}
        <div className="relative h-48 bg-gradient-to-br from-[#8F00FF]/10 via-[#A56CF4]/8 to-[#FF66C4]/10 border-b border-white/20">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-[#A56CF4] hover:bg-white/50 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Icon & Title */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8F00FF]/20 to-[#FF66C4]/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">{project.technologies[0]?.icon || '📁'}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-gray-900 truncate">{project.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold text-white shadow-md bg-gradient-to-r ${status.gradient}`}>
                    <span className="text-xs">{status.icon}</span>
                    <span>{status.label}</span>
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <div className="w-3 h-3 rounded-full bg-[#A56CF4] flex items-center justify-center">
                      <span className="text-[8px] text-white font-bold">{project.progress}</span>
                    </div>
                    <span>{project.progress}% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body Content - Scrollable */}
        <div className="h-[calc(100%-12rem)] overflow-y-auto">
          <div className="p-6 space-y-6">
            
            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#FEC9F2] text-[#A56CF4] rounded-lg text-sm font-medium shadow-sm">
                    <span className="text-sm">{tech.icon}</span>
                    <span>{tech.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Budget</span>
                </div>
                <div className="bg-[#A4E8A3] text-[#1a4d2e] px-3 py-1 rounded-lg text-sm font-semibold">
                  {project.budget}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A56CF4]" />
                  <span className="text-sm font-medium text-gray-700">Posted</span>
                </div>
                <span className="text-sm text-gray-600">🚀 2 days ago</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-[#A56CF4]" />
                  <span className="text-sm font-medium text-gray-700">Category</span>
                </div>
                <span className="text-sm text-gray-600">{project.category}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleViewDetails}
                className="w-full bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Project Details
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handleShare}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#A56CF4] hover:border-[#A56CF4] transition-all duration-200"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl text-gray-600 hover:text-[#A56CF4] hover:border-[#A56CF4] transition-all duration-200"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 border rounded-xl transition-all duration-200 ${
                    isBookmarked 
                      ? 'border-[#A56CF4] text-[#A56CF4] bg-[#A56CF4]/10' 
                      : 'border-gray-200 text-gray-600 hover:text-[#A56CF4] hover:border-[#A56CF4]'
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

export default function LiveProjectCard({ project, viewMode, onProjectClick }: LiveProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);
  const [showMoreTech, setShowMoreTech] = useState(false);

  const statusConfig = {
    verified: { icon: '✅', label: 'Verified', color: '#8F00FF', gradient: 'from-[#8F00FF] to-[#A56CF4]' },
    active: { icon: '🔴', label: 'Active', color: '#FF66C4', gradient: 'from-[#FF66C4] to-[#FF8E8E]' },
    verified_active: { icon: '⭐', label: 'Verified & Active', color: '#FF66C4', gradient: 'from-[#FF66C4] to-[#A56CF4]' }
  };

  const status = statusConfig[project.status];

  // Animate progress bar when card comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgressVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const card = document.getElementById(`project-${project.id}`);
    if (card) observer.observe(card);

    return () => observer.disconnect();
  }, [project.id]);

  const handleCardClick = () => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  if (viewMode === 'list') {
    return (
      <div
        id={`project-${project.id}`}
        className="relative group cursor-pointer transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(165,108,244,0.15)] hover:scale-[1.01] -translate-y-0.5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <div className="flex items-center gap-4">
          {/* Project Type Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-[#8F00FF]/10 to-[#FF66C4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">{project.technologies[0]?.icon || '📁'}</span>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold text-white shadow-md bg-gradient-to-r ${status.gradient}`}>
                <span className="text-xs">{status.icon}</span>
                <span>{status.label}</span>
              </span>
              <h3 className="text-lg font-bold text-gray-900 truncate">{project.title}</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-1">{project.description}</p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-100/60 rounded-lg h-1.5 overflow-hidden mb-3">
              <div 
                className="h-full bg-gradient-to-r from-[#FF66C4] to-[#A56CF4] rounded-lg transition-all duration-1000 ease-out"
                style={{ width: progressVisible ? `${project.progress}%` : '0%' }}
              />
            </div>

            {/* Tech Stack & Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {project.technologies.slice(0, 2).map((tech, index) => (
                  <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-[#FEC9F2] text-[#A56CF4] rounded-lg text-xs font-medium">
                    <span className="text-xs">{tech.icon}</span>
                    <span>{tech.label}</span>
                  </span>
                ))}
                {project.technologies.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                    +{project.technologies.length - 2}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">🚀 2 days ago</span>
                <div className="bg-[#A4E8A3] text-[#1a4d2e] px-3 py-1 rounded-lg text-sm font-semibold">
                  {project.budget}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1">
            {/* Copy Button */}
            <button 
              className="p-2 text-gray-500 hover:text-[#A56CF4] hover:bg-[#A56CF4]/10 transition-all duration-200 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(project.title);
              }}
              title="Copy project title"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            
            {/* Share Button */}
            <button 
              className="p-2 text-gray-500 hover:text-[#A56CF4] hover:bg-[#A56CF4]/10 transition-all duration-200 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                if (navigator.share) {
                  navigator.share({
                    title: project.title,
                    text: project.description,
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(`${project.title} - ${window.location.href}`);
                }
              }}
              title="Share project"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Card View
  return (
    <div
      id={`project-${project.id}`}
      className="relative group cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className={`
        relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-white/30
        transition-all duration-300 ease-out
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        ${isHovered 
          ? 'shadow-[0_12px_40px_rgba(165,108,244,0.15)] scale-[1.02] -translate-y-1 border-[#A56CF4]/30' 
          : ''
        }
      `}>
        
        {/* Header: Status & Progress Ring */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-white shadow-lg bg-gradient-to-r ${status.gradient}`}>
            <span className="text-xs">{status.icon}</span>
            <span>{status.label}</span>
          </span>
          
          {/* Progress Ring */}
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-gray-200" stroke="currentColor" strokeWidth="2" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
              <path className="text-[#A56CF4]" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray={`${project.progress}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">{project.progress}%</span>
            </div>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 2).map((tech, index) => (
            <span key={index} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FEC9F2] text-[#A56CF4] rounded-lg text-xs font-medium shadow-sm hover:bg-[#F5D4FF] hover:scale-105 transition-all duration-200">
              <span className="text-xs">{tech.icon}</span>
              <span>{tech.label}</span>
            </span>
          ))}
          {project.technologies.length > 2 && (
            <div className="relative">
              <button 
                className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                onMouseEnter={() => setShowMoreTech(true)}
                onMouseLeave={() => setShowMoreTech(false)}
              >
                +{project.technologies.length - 2}
              </button>
              {showMoreTech && (
                <div className="absolute bottom-full left-0 mb-2 p-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  {project.technologies.slice(2).map((tech, index) => (
                    <div key={index} className="text-xs text-gray-700 whitespace-nowrap">
                      {tech.icon} {tech.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer: Price & Launch Date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>🚀 2 days ago</span>
          </div>
          <div className="bg-[#A4E8A3] text-[#1a4d2e] px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">
            {project.budget}
          </div>
        </div>

        {/* Hover Glow */}
        <div className={`
          absolute inset-0 bg-gradient-to-br from-[#A56CF4]/5 via-transparent to-[#FEC9F2]/5 rounded-2xl 
          transition-opacity duration-300 pointer-events-none
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} />
      </div>
    </div>
  );
}

// Enhanced Filter Component
function FilterSection({ 
  filters, 
  setFilters, 
  searchTerm, 
  setSearchTerm, 
  viewMode, 
  setViewMode,
  filteredCount 
}: any) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = ["All", "Web Development", "Mobile Development", "AI/ML", "Blockchain", "DevOps", "Cybersecurity"];
  const budgetRanges = ["All", "$1K-$5K", "$5K-$10K", "$10K-$25K", "$25K+"];
  const statusOptions = ["All", "Active", "Verified", "Verified & Active"];
  const sortOptions = ["Latest", "Budget High → Low", "Progress"];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/20 mb-8">
      {/* Desktop Filters */}
      <div className="hidden lg:flex items-center gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search projects, technologies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent transition-all duration-200 text-sm bg-white/50 backdrop-blur-sm"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex items-center gap-3">
          {/* Category Filter */}
          <div className="relative">
            <select
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
              className="appearance-none bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl px-4 py-3 pr-8 text-sm focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent transition-all duration-200"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
          </div>

          {/* Budget Filter */}
          <div className="relative">
            <select
              value={filters.budget}
              onChange={(e) => setFilters({...filters, budget: e.target.value})}
              className="appearance-none bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl px-4 py-3 pr-8 text-sm focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent transition-all duration-200"
            >
              {budgetRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="appearance-none bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl px-4 py-3 pr-8 text-sm focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent transition-all duration-200"
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={filters.sort}
              onChange={(e) => setFilters({...filters, sort: e.target.value})}
              className="appearance-none bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl px-4 py-3 pr-8 text-sm focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent transition-all duration-200"
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-white/50 backdrop-blur-sm rounded-xl p-1 shadow-sm border border-white/30">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'grid' 
                ? 'bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] text-white shadow-md scale-105' 
                : 'text-gray-600 hover:text-[#A56CF4] hover:bg-white/50'
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'list' 
                ? 'bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] text-white shadow-md scale-105' 
                : 'text-gray-600 hover:text-[#A56CF4] hover:bg-white/50'
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden">
        <div className="flex items-center gap-2 mb-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent transition-all duration-200 text-sm bg-white/50 backdrop-blur-sm"
            />
          </div>
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="p-3 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white/70 transition-all duration-200"
          >
            <Filter className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {showMobileFilters && (
          <div className="grid grid-cols-2 gap-3">
            <select
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
              className="bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-lg px-3 py-2 text-sm"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={filters.budget}
              onChange={(e) => setFilters({...filters, budget: e.target.value})}
              className="bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-lg px-3 py-2 text-sm"
            >
              {budgetRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600 mt-4 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#A56CF4]" />
        <span>Showing {filteredCount} projects</span>
      </div>
    </div>
  );
}

// Enhanced Pagination Component
function Pagination({ currentPage, totalPages, onPageChange }: any) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-3 rounded-xl border border-gray-200/50 hover:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 bg-white/30 backdrop-blur-sm"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-3 rounded-xl transition-all duration-300 ${
            currentPage === page
              ? 'bg-gradient-to-r from-[#A56CF4] to-[#FF66C4] text-white shadow-lg scale-105'
              : 'border border-gray-200/50 hover:bg-white/50 bg-white/30 backdrop-blur-sm hover:scale-105'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-3 rounded-xl border border-gray-200/50 hover:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 bg-white/30 backdrop-blur-sm"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// Main Section Component
export function LiveProjectsSection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: 'All',
    budget: 'All',
    status: 'All',
    sort: 'Latest'
  });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedProject(null);
  };

  const sampleProjects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      description: "Build a modern e-commerce platform with AI-driven product recommendations, real-time inventory management, and seamless payment processing with advanced analytics.",
      budget: "$3,500",
      technologies: [
        { icon: "⚛️", label: "React" },
        { icon: "🌿", label: "Node.js" },
        { icon: "🍃", label: "MongoDB" }
      ],
      status: 'verified_active' as const,
      progress: 85,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Mobile App UI/UX Design",
      description: "Create stunning mobile app interfaces with modern design principles, user experience focus, and accessibility compliance for cross-platform applications.",
      budget: "$1,200",
      technologies: [
        { icon: "🎨", label: "Figma" },
        { icon: "📱", label: "Mobile" },
        { icon: "✨", label: "UI/UX" }
      ],
      status: 'active' as const,
      progress: 45,
      category: "Mobile Development"
    },
    {
      id: 3,
      title: "Content Writing & SEO",
      description: "Professional content writing with SEO optimization, keyword research, and on-page optimization for better search rankings and organic traffic growth.",
      budget: "$450",
      technologies: [
        { icon: "✍️", label: "Content" },
        { icon: "🔍", label: "SEO" },
        { icon: "📰", label: "Blog" }
      ],
      status: 'verified' as const,
      progress: 92,
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Blockchain Smart Contracts",
      description: "Develop secure smart contracts for decentralized applications with comprehensive testing and audit-ready code.",
      budget: "$6,500",
      technologies: [
        { icon: "⛓️", label: "Solidity" },
        { icon: "🔗", label: "Web3" },
        { icon: "🛡️", label: "Security" }
      ],
      status: 'verified_active' as const,
      progress: 67,
      category: "Blockchain"
    },
    {
      id: 5,
      title: "Machine Learning Chatbot",
      description: "Develop an intelligent chatbot using natural language processing and machine learning for customer support automation.",
      budget: "$2,800",
      technologies: [
        { icon: "🤖", label: "Python" },
        { icon: "🧠", label: "TensorFlow" },
        { icon: "💬", label: "NLP" }
      ],
      status: 'verified_active' as const,
      progress: 78,
      category: "AI/ML"
    },
    {
      id: 6,
      title: "Cybersecurity Audit System",
      description: "Create a comprehensive cybersecurity auditing platform with vulnerability scanning and compliance reporting.",
      budget: "$4,200",
      technologies: [
        { icon: "🔒", label: "Security" },
        { icon: "🐍", label: "Python" },
        { icon: "📊", label: "Analytics" }
      ],
      status: 'verified' as const,
      progress: 88,
      category: "Cybersecurity"
    },
    {
      id: 7,
      title: "DevOps CI/CD Pipeline",
      description: "Set up automated deployment pipelines with Docker, Kubernetes, and cloud infrastructure management.",
      budget: "$3,800",
      technologies: [
        { icon: "🐳", label: "Docker" },
        { icon: "☸️", label: "Kubernetes" },
        { icon: "☁️", label: "AWS" }
      ],
      status: 'active' as const,
      progress: 62,
      category: "DevOps"
    },
    {
      id: 8,
      title: "React Native Mobile App",
      description: "Build a cross-platform mobile application with React Native for iOS and Android platforms.",
      budget: "$2,500",
      technologies: [
        { icon: "⚛️", label: "React Native" },
        { icon: "📱", label: "Mobile" },
        { icon: "🔥", label: "Firebase" }
      ],
      status: 'verified_active' as const,
      progress: 73,
      category: "Mobile Development"
    },
    {
      id: 9,
      title: "Data Analytics Dashboard",
      description: "Create interactive data visualization dashboards with real-time analytics and reporting capabilities.",
      budget: "$1,800",
      technologies: [
        { icon: "📈", label: "Tableau" },
        { icon: "🐍", label: "Python" },
        { icon: "🗄️", label: "SQL" }
      ],
      status: 'verified' as const,
      progress: 95,
      category: "AI/ML"
    },
    {
      id: 10,
      title: "NFT Marketplace Platform",
      description: "Develop a decentralized NFT marketplace with minting, trading, and auction functionality.",
      budget: "$5,500",
      technologies: [
        { icon: "🖼️", label: "NFT" },
        { icon: "⛓️", label: "Ethereum" },
        { icon: "🔗", label: "Web3" }
      ],
      status: 'verified_active' as const,
      progress: 58,
      category: "Blockchain"
    },
    {
      id: 11,
      title: "Flutter E-commerce App",
      description: "Build a modern e-commerce mobile application using Flutter with payment integration and user management.",
      budget: "$2,200",
      technologies: [
        { icon: "🦋", label: "Flutter" },
        { icon: "💳", label: "Stripe" },
        { icon: "📱", label: "Mobile" }
      ],
      status: 'active' as const,
      progress: 41,
      category: "Mobile Development"
    },
    {
      id: 12,
      title: "Penetration Testing Tool",
      description: "Develop automated penetration testing tools for web application security assessment.",
      budget: "$3,200",
      technologies: [
        { icon: "🔍", label: "Security" },
        { icon: "🐍", label: "Python" },
        { icon: "🌐", label: "Web" }
      ],
      status: 'verified' as const,
      progress: 82,
      category: "Cybersecurity"
    },
    {
      id: 13,
      title: "Vue.js Admin Dashboard",
      description: "Create a comprehensive admin dashboard with Vue.js, featuring user management and analytics.",
      budget: "$1,900",
      technologies: [
        { icon: "💚", label: "Vue.js" },
        { icon: "📊", label: "Charts" },
        { icon: "🎨", label: "Tailwind" }
      ],
      status: 'verified_active' as const,
      progress: 69,
      category: "Web Development"
    },
    {
      id: 14,
      title: "AI Image Recognition API",
      description: "Build a machine learning API for image recognition and classification using computer vision.",
      budget: "$4,800",
      technologies: [
        { icon: "👁️", label: "OpenCV" },
        { icon: "🧠", label: "TensorFlow" },
        { icon: "🔌", label: "API" }
      ],
      status: 'verified' as const,
      progress: 76,
      category: "AI/ML"
    },
    {
      id: 15,
      title: "DeFi Yield Farming Platform",
      description: "Develop a decentralized finance platform for yield farming and liquidity provision.",
      budget: "$7,200",
      technologies: [
        { icon: "💰", label: "DeFi" },
        { icon: "⛓️", label: "Solidity" },
        { icon: "📊", label: "Analytics" }
      ],
      status: 'verified_active' as const,
      progress: 54,
      category: "Blockchain"
    },
    {
      id: 16,
      title: "Kubernetes Cluster Management",
      description: "Set up and manage Kubernetes clusters with monitoring, logging, and auto-scaling capabilities.",
      budget: "$3,600",
      technologies: [
        { icon: "☸️", label: "Kubernetes" },
        { icon: "📊", label: "Prometheus" },
        { icon: "☁️", label: "GCP" }
      ],
      status: 'active' as const,
      progress: 48,
      category: "DevOps"
    },
    {
      id: 17,
      title: "Swift iOS App Development",
      description: "Create a native iOS application using Swift with Core Data and advanced UI components.",
      budget: "$2,800",
      technologies: [
        { icon: "🍎", label: "Swift" },
        { icon: "📱", label: "iOS" },
        { icon: "💾", label: "Core Data" }
      ],
      status: 'verified_active' as const,
      progress: 71,
      category: "Mobile Development"
    },
    {
      id: 18,
      title: "Threat Intelligence Platform",
      description: "Build a cybersecurity threat intelligence platform with real-time monitoring and alerting.",
      budget: "$4,500",
      technologies: [
        { icon: "🚨", label: "Threat Intel" },
        { icon: "🐍", label: "Python" },
        { icon: "📡", label: "Real-time" }
      ],
      status: 'verified' as const,
      progress: 89,
      category: "Cybersecurity"
    },
    {
      id: 19,
      title: "Next.js Full-Stack App",
      description: "Develop a full-stack web application using Next.js with server-side rendering and API routes.",
      budget: "$2,400",
      technologies: [
        { icon: "⚡", label: "Next.js" },
        { icon: "🗄️", label: "PostgreSQL" },
        { icon: "🔐", label: "Auth" }
      ],
      status: 'active' as const,
      progress: 66,
      category: "Web Development"
    },
    {
      id: 20,
      title: "AI Content Generation Tool",
      description: "Create an AI-powered content generation tool for marketing and social media automation.",
      budget: "$3,100",
      technologies: [
        { icon: "✍️", label: "GPT" },
        { icon: "🤖", label: "AI" },
        { icon: "📱", label: "Social Media" }
      ],
      status: 'verified_active' as const,
      progress: 81,
      category: "AI/ML"
    }
  ];

  // Filter and sort projects
  const filteredProjects = sampleProjects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.label.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = filters.category === 'All' || project.category === filters.category;
      const matchesStatus = filters.status === 'All' || 
        (filters.status === 'Verified & Active' && project.status === 'verified_active') ||
        (filters.status === 'Verified' && project.status === 'verified') ||
        (filters.status === 'Active' && project.status === 'active');
      
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case 'Budget High → Low':
          return parseInt(b.budget.replace('$', '').replace(',', '')) - parseInt(a.budget.replace('$', '').replace(',', ''));
        case 'Progress':
          return b.progress - a.progress;
        default:
          return 0; // Latest (already sorted)
      }
    });

  // Pagination
  const projectsPerPage = 8;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

    return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#FAFAFF] via-white to-[#F8F9FF] relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/5 via-transparent to-[#FF66C4]/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#8F00FF]/8 to-[#FF66C4]/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#FF66C4]/6 to-[#8F00FF]/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#8F00FF]/3 to-[#FF66C4]/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Ultra Premium Header */}
        <div className="text-center mb-16">
          {/* Enhanced Animated Logo Badge */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="relative group">
              <div className="w-24 h-24 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-[2rem] flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 animate-pulse group-hover:scale-110">
                <Sparkles className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#8F00FF] via-[#A56CF4] to-[#FF66C4] bg-clip-text text-transparent mb-4 tracking-tight leading-tight">
                Live Projects
              </h1>
              <p className="text-2xl md:text-3xl text-gray-800 font-semibold tracking-wide">
                Real Projects in Action
              </p>
            </div>
          </div>
          
          {/* Premium separator */}
          <div className="w-32 h-1 bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] rounded-full mx-auto shadow-lg"></div>
        </div>

        {/* Enhanced Filters */}
        <FilterSection 
          filters={filters}
          setFilters={setFilters}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          viewMode={viewMode}
          setViewMode={setViewMode}
          filteredCount={filteredProjects.length}
        />

        {/* Projects Grid/List */}
        {paginatedProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className={`
            ${viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5' 
              : 'space-y-5'
            }
          `}>
            {paginatedProjects.map((project) => (
              <LiveProjectCard 
                key={project.id} 
                project={project} 
                viewMode={viewMode}
                onProjectClick={handleProjectClick}
              />
            ))}
          </div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* Project Drawer */}
        {selectedProject && (
          <ProjectDrawer 
            project={selectedProject}
            isOpen={isDrawerOpen}
            onClose={handleCloseDrawer}
          />
        )}
      </div>
    </section>
  );
} 