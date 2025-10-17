"use client";
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  Star, 
  MapPin, 
  Clock, 
  TrendingUp,
  Award,
  Zap,
  CheckCircle,
  Eye,
  MessageCircle,
  Bookmark,
  Share2,
  Users,
  DollarSign,
  Target,
  Sparkles,
  Grid,
  List,
  Trophy,
  Crown,
  Flame
} from 'lucide-react';
import Link from 'next/link';
import FreelancerDrawer from '@/components/FreelancerDrawer';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface Freelancer {
  id: number;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  reviews: number;
  hourlyRate: { min: number; max: number };
  skills: Array<{ icon: string; label: string }>;
  badges: Array<{ icon: string; label: string; color: string }>;
  level: 'Rising Xpert' | 'Pro Xpert' | 'Elite Xpert';
  availability: 'Available' | 'Usually Responds in 1-2 days';
  category: string;
  location: string;
  successScore: number;
  projectMatchScore: number;
  hireCount: number;
  isVerified: boolean;
  isMentor: boolean;
  streak: number;
  isHiredByClient: boolean;
  hireCountByClient: number;
}

export default function FreelancersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    level: 'All',
    availability: 'All',
    sort: 'Best Match'
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [clientHireCount, setClientHireCount] = useState(2); // Mock: client has hired 2 freelancers
  const [selectedFreelancer, setSelectedFreelancer] = useState<Freelancer | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const categories = ["All", "Design", "Writing", "Development", "Marketing", "Data Science", "AI/ML"];
  const levelOptions = ["All", "Rising Xpert", "Pro Xpert", "Elite Xpert"];
  const availabilityOptions = ["All", "Available", "Usually Responds in 1-2 days"];
  const sortOptions = ["Best Match", "Success Score", "Most Hired", "Price Low to High", "Price High to Low"];

  const sampleFreelancers: Freelancer[] = [
    {
      id: 1,
      name: "Majid Ali",
      title: "Senior Full Stack Developer",
      avatar: "👨‍💻",
      rating: 4.9,
      reviews: 124,
      hourlyRate: { min: 20, max: 30 },
      skills: [
        { icon: "💻", label: "React.js" },
        { icon: "⚙️", label: ".NET Core" },
        { icon: "🧠", label: "AI Prompting" },
        { icon: "☁️", label: "AWS" },
        { icon: "🗄️", label: "MongoDB" }
      ],
      badges: [
        { icon: "🎖️", label: "Mentor Badge", color: "from-yellow-400 to-orange-500" },
        { icon: "🔥", label: "4-day Streak", color: "from-red-500 to-pink-500" },
        { icon: "✅", label: "Verified by XpertTask", color: "from-green-500 to-emerald-500" }
      ],
      level: 'Elite Xpert',
      availability: 'Available',
      category: 'Development',
      location: 'Karachi, Pakistan',
      successScore: 98,
      projectMatchScore: 92,
      hireCount: 47,
      isVerified: true,
      isMentor: true,
      streak: 4,
      isHiredByClient: true,
      hireCountByClient: 2
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "UI/UX Designer & Creative Director",
      avatar: "👩‍🎨",
      rating: 4.8,
      reviews: 89,
      hourlyRate: { min: 25, max: 40 },
      skills: [
        { icon: "🎨", label: "Figma" },
        { icon: "✨", label: "UI/UX" },
        { icon: "📱", label: "Mobile Design" },
        { icon: "🎭", label: "Branding" }
      ],
      badges: [
        { icon: "🏆", label: "Top Rated", color: "from-purple-500 to-pink-500" },
        { icon: "✅", label: "Verified by XpertTask", color: "from-green-500 to-emerald-500" }
      ],
      level: 'Pro Xpert',
      availability: 'Usually Responds in 1-2 days',
      category: 'Design',
      location: 'New York, USA',
      successScore: 95,
      projectMatchScore: 88,
      hireCount: 34,
      isVerified: true,
      isMentor: false,
      streak: 2,
      isHiredByClient: false,
      hireCountByClient: 0
    },
    {
      id: 3,
      name: "Alex Chen",
      title: "Content Writer & SEO Specialist",
      avatar: "👨‍💼",
      rating: 4.7,
      reviews: 156,
      hourlyRate: { min: 15, max: 25 },
      skills: [
        { icon: "✍️", label: "Content Writing" },
        { icon: "🔍", label: "SEO" },
        { icon: "📝", label: "Copywriting" },
        { icon: "📊", label: "Analytics" }
      ],
      badges: [
        { icon: "🔥", label: "7-day Streak", color: "from-red-500 to-pink-500" },
        { icon: "✅", label: "Verified by XpertTask", color: "from-green-500 to-emerald-500" }
      ],
      level: 'Rising Xpert',
      availability: 'Available',
      category: 'Writing',
      location: 'Toronto, Canada',
      successScore: 92,
      projectMatchScore: 85,
      hireCount: 23,
      isVerified: true,
      isMentor: false,
      streak: 7,
      isHiredByClient: false,
      hireCountByClient: 0
    },
    {
      id: 4,
      name: "Maria Garcia",
      title: "Data Scientist & ML Engineer",
      avatar: "👩‍🔬",
      rating: 4.9,
      reviews: 67,
      hourlyRate: { min: 35, max: 50 },
      skills: [
        { icon: "🐍", label: "Python" },
        { icon: "🧠", label: "TensorFlow" },
        { icon: "📈", label: "Data Analysis" },
        { icon: "🤖", label: "Machine Learning" }
      ],
      badges: [
        { icon: "🎖️", label: "Mentor Badge", color: "from-yellow-400 to-orange-500" },
        { icon: "✅", label: "Verified by XpertTask", color: "from-green-500 to-emerald-500" }
      ],
      level: 'Elite Xpert',
      availability: 'Usually Responds in 1-2 days',
      category: 'Data Science',
      location: 'Madrid, Spain',
      successScore: 97,
      projectMatchScore: 95,
      hireCount: 19,
      isVerified: true,
      isMentor: true,
      streak: 1,
      isHiredByClient: false,
      hireCountByClient: 0
    },
    {
      id: 5,
      name: "David Kim",
      title: "Digital Marketing & Growth Hacker",
      avatar: "👨‍💻",
      rating: 4.6,
      reviews: 98,
      hourlyRate: { min: 20, max: 35 },
      skills: [
        { icon: "📱", label: "Social Media" },
        { icon: "📈", label: "Google Ads" },
        { icon: "📊", label: "Analytics" },
        { icon: "🚀", label: "Growth Hacking" }
      ],
      badges: [
        { icon: "🔥", label: "3-day Streak", color: "from-red-500 to-pink-500" },
        { icon: "✅", label: "Verified by XpertTask", color: "from-green-500 to-emerald-500" }
      ],
      level: 'Pro Xpert',
      availability: 'Available',
      category: 'Marketing',
      location: 'Seoul, South Korea',
      successScore: 89,
      projectMatchScore: 82,
      hireCount: 31,
      isVerified: true,
      isMentor: false,
      streak: 3,
      isHiredByClient: false,
      hireCountByClient: 0
    },
    {
      id: 6,
      name: "Emma Wilson",
      title: "Frontend Developer & React Specialist",
      avatar: "👩‍💻",
      rating: 4.8,
      reviews: 112,
      hourlyRate: { min: 18, max: 28 },
      skills: [
        { icon: "⚛️", label: "React" },
        { icon: "🎨", label: "TypeScript" },
        { icon: "📱", label: "Next.js" },
        { icon: "🎯", label: "Tailwind CSS" }
      ],
      badges: [
        { icon: "🏆", label: "Top Rated", color: "from-purple-500 to-pink-500" },
        { icon: "✅", label: "Verified by XpertTask", color: "from-green-500 to-emerald-500" }
      ],
      level: 'Pro Xpert',
      availability: 'Usually Responds in 1-2 days',
      category: 'Development',
      location: 'London, UK',
      successScore: 94,
      projectMatchScore: 90,
      hireCount: 28,
      isVerified: true,
      isMentor: false,
      streak: 5,
      isHiredByClient: false,
      hireCountByClient: 0
    }
  ];

  const filteredFreelancers = sampleFreelancers
    .filter(freelancer => {
      const matchesSearch = freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           freelancer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           freelancer.skills.some(skill => skill.label.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = filters.category === 'All' || freelancer.category === filters.category;
      const matchesLevel = filters.level === 'All' || freelancer.level === filters.level;
      const matchesAvailability = filters.availability === 'All' || freelancer.availability === filters.availability;
      
      return matchesSearch && matchesCategory && matchesLevel && matchesAvailability;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case 'Success Score':
          return b.successScore - a.successScore;
        case 'Most Hired':
          return b.hireCount - a.hireCount;
        case 'Price Low to High':
          return a.hourlyRate.min - b.hourlyRate.min;
        case 'Price High to Low':
          return b.hourlyRate.max - a.hourlyRate.max;
        default:
          return b.projectMatchScore - a.projectMatchScore; // Best Match
      }
    });

  // Calculate summary stats
  const totalFreelancers = sampleFreelancers.length;
  const avgRating = (sampleFreelancers.reduce((sum, f) => sum + f.rating, 0) / totalFreelancers).toFixed(1);
  const avgSuccessScore = Math.round(sampleFreelancers.reduce((sum, f) => sum + f.successScore, 0) / totalFreelancers);
  const freeHiresLeft = 3 - clientHireCount;

  const handleHire = (freelancer: Freelancer) => {
    const newHireCount = clientHireCount + 1;
    setClientHireCount(newHireCount);
    
    if (newHireCount > 3) {
      alert(`Hiring ${freelancer.name}! Note: This hire will incur a 1% client fee and 2% freelancer fee.`);
    } else {
      alert(`Hiring ${freelancer.name}! You have ${3 - newHireCount} free hires remaining.`);
    }
  };

  const handleFreelancerClick = (freelancer: Freelancer) => {
    setSelectedFreelancer(freelancer);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedFreelancer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />

      {/* Page Header & Success Summary */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] bg-clip-text text-transparent mb-4">
              Find Your Perfect Freelancer
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              First 3 hires are free. Then only 1% client + 2% freelancer service fee.
            </p>
          </div>

          {/* Success Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-purple-100 shadow-sm">
              <div className="text-2xl font-bold text-[#8F00FF]">{totalFreelancers}</div>
              <div className="text-sm text-gray-600">Total Freelancers</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-purple-100 shadow-sm">
              <div className="text-2xl font-bold text-[#FF66C4]">{avgRating}★</div>
              <div className="text-sm text-gray-600">Avg. Rating</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-purple-100 shadow-sm">
              <div className="text-2xl font-bold text-green-600">{avgSuccessScore}%</div>
              <div className="text-sm text-gray-600">Avg. Success Score</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-purple-100 shadow-sm">
              <div className="text-2xl font-bold text-[#8F00FF]">{freeHiresLeft}/3</div>
              <div className="text-sm text-gray-600">Free Hires Left</div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search freelancers by skill, name, or title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-[#8F00FF] focus:border-transparent transition-all duration-200 text-sm bg-white/50 backdrop-blur-sm"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="flex items-center gap-3">
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="appearance-none bg-white/50 backdrop-blur-sm border border-purple-200 rounded-xl px-4 py-3 pr-8 text-sm focus:ring-2 focus:ring-[#8F00FF] focus:border-transparent transition-all duration-200"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={filters.level}
                  onChange={(e) => setFilters({...filters, level: e.target.value})}
                  className="appearance-none bg-white/50 backdrop-blur-sm border border-purple-200 rounded-xl px-4 py-3 pr-8 text-sm focus:ring-2 focus:ring-[#8F00FF] focus:border-transparent transition-all duration-200"
                >
                  {levelOptions.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>

                <select
                  value={filters.availability}
                  onChange={(e) => setFilters({...filters, availability: e.target.value})}
                  className="appearance-none bg-white/50 backdrop-blur-sm border border-purple-200 rounded-xl px-4 py-3 pr-8 text-sm focus:ring-2 focus:ring-[#8F00FF] focus:border-transparent transition-all duration-200"
                >
                  {availabilityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>

                <select
                  value={filters.sort}
                  onChange={(e) => setFilters({...filters, sort: e.target.value})}
                  className="appearance-none bg-white/50 backdrop-blur-sm border border-purple-200 rounded-xl px-4 py-3 pr-8 text-sm focus:ring-2 focus:ring-[#8F00FF] focus:border-transparent transition-all duration-200"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-white/50 backdrop-blur-sm rounded-xl p-1 shadow-sm border border-purple-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white shadow-md scale-105' 
                      : 'text-gray-600 hover:text-[#8F00FF] hover:bg-white/50'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white shadow-md scale-105' 
                      : 'text-gray-600 hover:text-[#8F00FF] hover:bg-white/50'
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
                    placeholder="Search freelancers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-purple-200/50 rounded-xl focus:ring-2 focus:ring-[#8F00FF] focus:border-transparent transition-all duration-200 text-sm bg-white/50 backdrop-blur-sm"
                  />
                </div>
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="p-3 bg-white/50 backdrop-blur-sm border border-purple-200/50 rounded-xl hover:bg-white/70 transition-all duration-200"
                >
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {showMobileFilters && (
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                    className="bg-white/50 backdrop-blur-sm border border-purple-200/50 rounded-lg px-3 py-2 text-sm"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <select
                    value={filters.level}
                    onChange={(e) => setFilters({...filters, level: e.target.value})}
                    className="bg-white/50 backdrop-blur-sm border border-purple-200/50 rounded-lg px-3 py-2 text-sm"
                  >
                    {levelOptions.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600 mt-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8F00FF]" />
              <span>Showing {filteredFreelancers.length} freelancers</span>
              <span className="text-[#8F00FF] font-medium">
                • {clientHireCount}/3 free hires used
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Contextual Message */}
        {clientHireCount >= 3 && (
          <div className="bg-gradient-to-r from-[#8F00FF]/10 to-[#FF66C4]/10 border border-[#8F00FF]/20 rounded-2xl p-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Next hire will incur fees</h3>
                <p className="text-sm text-gray-600">
                  You've used all 3 free hires. Additional hires: 1% client fee + 2% freelancer fee.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Freelancers Grid */}
        {filteredFreelancers.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No freelancers found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className={viewMode === 'list' ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {filteredFreelancers.map((freelancer) => (
              <FreelancerCard 
                key={freelancer.id} 
                freelancer={freelancer}
                onHire={handleHire}
                onCardClick={handleFreelancerClick}
                clientHireCount={clientHireCount}
                viewMode={viewMode}
              />
            ))}
          </div>
        )}

        {/* Freelancer Drawer */}
        {selectedFreelancer && (
          <FreelancerDrawer 
            freelancer={selectedFreelancer}
            isOpen={isDrawerOpen}
            onClose={handleCloseDrawer}
            onHire={handleHire}
            clientHireCount={clientHireCount}
          />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Freelancer Card Component
function FreelancerCard({ 
  freelancer, 
  onHire, 
  onCardClick,
  clientHireCount,
  viewMode
}: { 
  freelancer: Freelancer; 
  onHire: (freelancer: Freelancer) => void;
  onCardClick: (freelancer: Freelancer) => void;
  clientHireCount: number;
  viewMode: 'grid' | 'list';
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Elite Xpert': return 'from-purple-500 to-pink-500';
      case 'Pro Xpert': return 'from-blue-500 to-purple-500';
      case 'Rising Xpert': return 'from-green-500 to-blue-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Elite Xpert': return <Crown className="w-3 h-3" />;
      case 'Pro Xpert': return <Trophy className="w-3 h-3" />;
      case 'Rising Xpert': return <TrendingUp className="w-3 h-3" />;
      default: return <Award className="w-3 h-3" />;
    }
  };

    if (viewMode === 'list') {
    return (
      <div
        className="relative group cursor-pointer transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 shadow-lg hover:shadow-xl hover:scale-[1.01] -translate-y-0.5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onCardClick(freelancer)}
      >
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="w-16 h-16 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-xl flex items-center justify-center text-3xl text-white flex-shrink-0">
            {freelancer.avatar}
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Top Row - Name, Level, Success Score */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${getLevelColor(freelancer.level)}`}>
                  {getLevelIcon(freelancer.level)}
                  <span>{freelancer.level}</span>
                </span>
                <h3 className="text-xl font-bold text-gray-900">{freelancer.name}</h3>
              </div>
              
              {/* Success Score - Top Right */}
              <div className="bg-gradient-to-r from-[#FF66C4]/10 to-[#8F00FF]/10 border border-[#FF66C4]/20 rounded-xl p-2">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <span className="text-xs text-[#FF66C4] font-semibold">
                    🎯 {freelancer.successScore}%
                  </span>
                  <span className="text-xs text-[#8F00FF] font-medium">
                    {freelancer.successScore >= 95 ? 'Elite' : 
                     freelancer.successScore >= 90 ? 'Pro' : 'Rising'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <p className="text-sm text-gray-600 mb-4">{freelancer.title}</p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {freelancer.badges.map((badge, index) => (
                <span 
                  key={index}
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${badge.color}`}
                >
                  <span className="text-xs">{badge.icon}</span>
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>

            {/* Rating, Hire Count & Match Score */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">{freelancer.rating}</span>
                  <span className="text-sm text-gray-600">({freelancer.reviews})</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#8F00FF]" />
                  <span className="text-sm text-gray-600">Hired {freelancer.hireCount}×</span>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#8F00FF]">
                  <Target className="w-3 h-3" />
                  <span>{freelancer.projectMatchScore}% Match</span>
                </div>
              </div>
            </div>

            {/* Hired by Client Badge */}
            {freelancer.isHiredByClient && (
              <div className="mb-4 p-2 bg-[#8F00FF]/10 rounded-lg border border-[#8F00FF]/20">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#8F00FF]" />
                  <span className="text-[#8F00FF] font-medium">
                    Hired {freelancer.hireCountByClient}× by you
                  </span>
                </div>
              </div>
            )}

            {/* Skills */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700">Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {freelancer.skills.slice(0, 4).map((skill, index) => (
                  <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-[#8F00FF] rounded-lg text-xs font-medium">
                    <span className="text-xs">{skill.icon}</span>
                    <span>{skill.label}</span>
                  </span>
                ))}
                {freelancer.skills.length > 4 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                    +{freelancer.skills.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Row - Location, Rate & Action */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">{freelancer.location}</span>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Hourly Rate</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-semibold">
                    ${freelancer.hourlyRate.min}–${freelancer.hourlyRate.max}/hr
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onHire(freelancer);
                }}
                className="bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                title={clientHireCount >= 3 ? "Next hire: 1% client fee, 2% freelancer fee" : "Free hire"}
              >
                <Users className="w-4 h-4" />
                Hire Now
                {clientHireCount >= 3 && (
                  <span className="text-xs opacity-75">(Fees apply)</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div
      className="relative group cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(freelancer)}
    >
      <div className={`
        relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-100
        transition-all duration-300 ease-out
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        ${isHovered 
          ? 'shadow-[0_12px_40px_rgba(139,0,255,0.15)] scale-[1.02] -translate-y-1 border-[#8F00FF]/30' 
          : ''
        }
      `}>
        
                {/* Top Section */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-xl flex items-center justify-center text-2xl text-white">
                {freelancer.avatar}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{freelancer.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-1">{freelancer.title}</p>
              </div>
            </div>
            
            {/* Success Score - Top Right */}
            <div className="bg-gradient-to-r from-[#FF66C4]/10 to-[#8F00FF]/10 border border-[#FF66C4]/20 rounded-xl p-2">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <span className="text-xs text-[#FF66C4] font-semibold">
                  🎯 {freelancer.successScore}%
                </span>
                <span className="text-xs text-[#8F00FF] font-medium">
                  {freelancer.successScore >= 95 ? 'Elite' : 
                   freelancer.successScore >= 90 ? 'Pro' : 'Rising'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges & Level */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${getLevelColor(freelancer.level)}`}>
            {getLevelIcon(freelancer.level)}
            <span>{freelancer.level}</span>
          </span>
          {freelancer.badges.map((badge, index) => (
            <span 
              key={index}
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${badge.color}`}
            >
              <span className="text-xs">{badge.icon}</span>
              <span>{badge.label}</span>
            </span>
          ))}
        </div>

        {/* Rating & Hire Count */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-semibold text-gray-900">{freelancer.rating}</span>
              <span className="text-sm text-gray-600">({freelancer.reviews})</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#8F00FF]" />
            <span className="text-sm text-gray-600">Hired {freelancer.hireCount}×</span>
          </div>
        </div>

        {/* Hired by Client Badge */}
        {freelancer.isHiredByClient && (
          <div className="mb-4 p-2 bg-[#8F00FF]/10 rounded-lg border border-[#8F00FF]/20">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-[#8F00FF]" />
              <span className="text-[#8F00FF] font-medium">
                Hired {freelancer.hireCountByClient}× by you
              </span>
            </div>
          </div>
        )}

        {/* Skills */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-gray-700">Skills</span>
            <div className="flex items-center gap-1 text-xs text-[#8F00FF]">
              <Target className="w-3 h-3" />
              <span>{freelancer.projectMatchScore}% Match</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {freelancer.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-[#8F00FF] rounded-lg text-xs font-medium">
                <span className="text-xs">{skill.icon}</span>
                <span>{skill.label}</span>
              </span>
            ))}
            {freelancer.skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                +{freelancer.skills.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Hourly Rate */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">Hourly Rate</span>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-semibold">
            ${freelancer.hourlyRate.min}–${freelancer.hourlyRate.max}/hr
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onHire(freelancer);
          }}
          className="w-full bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
          title={clientHireCount >= 3 ? "Next hire: 1% client fee, 2% freelancer fee" : "Free hire"}
        >
          <Users className="w-4 h-4" />
          Hire Now
          {clientHireCount >= 3 && (
            <span className="text-xs opacity-75">(Fees apply)</span>
          )}
        </button>

        {/* Hover Actions */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/5 via-transparent to-[#FF66C4]/5 rounded-2xl flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCardClick(freelancer);
              }}
              className="bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 