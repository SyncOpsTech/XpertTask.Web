"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Briefcase,
  ArrowRight,
  Heart,
  MessageCircle
} from "lucide-react"

// Mock data
const mockFreelancers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Senior Web Developer",
    avatar: "SM",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 45,
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    description: "Full-stack developer with 8+ years of experience building scalable web applications.",
    availability: "Available now",
    verified: true
  },
  {
    id: 2,
    name: "James Chen",
    title: "UI/UX Designer",
    avatar: "JC",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 35,
    location: "New York, NY",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    description: "Creative designer focused on user-centered design and beautiful interfaces.",
    availability: "Available in 2 days",
    verified: true
  },
  {
    id: 3,
    name: "Maria Lopez",
    title: "Content Writer",
    avatar: "ML",
    rating: 4.7,
    reviews: 156,
    hourlyRate: 25,
    location: "Austin, TX",
    skills: ["SEO", "Copywriting", "Blog Writing", "Social Media"],
    description: "Experienced content creator specializing in tech and business writing.",
    availability: "Available now",
    verified: false
  }
]

const mockJobs = [
  {
    id: 1,
    title: "React Developer for E-commerce Platform",
    company: "TechStart Inc.",
    budget: "$3,000 - $5,000",
    duration: "2-3 months",
    location: "Remote",
    description: "Looking for a skilled React developer to build a modern e-commerce platform with payment integration.",
    skills: ["React", "Node.js", "Stripe", "MongoDB"],
    posted: "2 hours ago",
    proposals: 12,
    urgent: true
  },
  {
    id: 2,
    title: "Logo Design for Startup",
    company: "InnovateCo",
    budget: "$500 - $1,000",
    duration: "1-2 weeks",
    location: "Remote",
    description: "Need a professional logo design for our new fintech startup. Looking for modern, clean design.",
    skills: ["Logo Design", "Branding", "Adobe Illustrator"],
    posted: "1 day ago",
    proposals: 8,
    urgent: false
  },
  {
    id: 3,
    title: "Content Marketing Strategy",
    company: "GrowthLab",
    budget: "$2,000 - $3,500",
    duration: "1 month",
    location: "Remote",
    description: "Develop a comprehensive content marketing strategy for our SaaS product.",
    skills: ["Content Strategy", "SEO", "Analytics", "Copywriting"],
    posted: "3 days ago",
    proposals: 15,
    urgent: false
  }
]

export default function DiscoverPage() {
  const [activeTab, setActiveTab] = useState<'freelancers' | 'jobs'>('freelancers')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-[#F8F9FB] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Amazing Talent & Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect freelancer for your project or discover exciting job opportunities.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for skills, jobs, or freelancers..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('freelancers')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'freelancers'
                    ? 'bg-gradient-to-r from-[#A56CF4] to-[#FEC9F2] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users className="inline h-4 w-4 mr-2" />
                Find Freelancers
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'jobs'
                    ? 'bg-gradient-to-r from-[#A56CF4] to-[#FEC9F2] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="inline h-4 w-4 mr-2" />
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Hourly Rate</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">$0 - $25</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">$25 - $50</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">$50 - $100</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">$100+</span>
                      </label>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Skills</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">React</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">Node.js</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">UI/UX Design</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">Content Writing</span>
                      </label>
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Availability</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">Available now</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-600">Available in 1 week</span>
                      </label>
                    </div>
                  </div>

                  <Button variant="gradient" className="w-full">
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:w-3/4">
              {activeTab === 'freelancers' ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Top Freelancers
                    </h2>
                    <span className="text-gray-600">Showing {mockFreelancers.length} results</span>
                  </div>

                  {mockFreelancers.map((freelancer) => (
                    <Card key={freelancer.id} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#A56CF4] to-[#FEC9F2] rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-lg">{freelancer.avatar}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">{freelancer.name}</h3>
                                {freelancer.verified && (
                                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                  </div>
                                )}
                              </div>
                              <p className="text-gray-600 mb-2">{freelancer.title}</p>
                              <div className="flex items-center space-x-4 mb-3">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                  <span className="text-sm font-medium">{freelancer.rating}</span>
                                  <span className="text-sm text-gray-500 ml-1">({freelancer.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span className="text-sm">{freelancer.location}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 mb-3">{freelancer.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {freelancer.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  <div className="flex items-center text-green-600">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span className="text-sm font-medium">{freelancer.availability}</span>
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <DollarSign className="h-4 w-4 mr-1" />
                                    <span className="text-sm font-medium">${freelancer.hourlyRate}/hr</span>
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Heart className="h-4 w-4" />
                                  </Button>
                                  <Button variant="gradient" size="sm">
                                    <MessageCircle className="h-4 w-4 mr-2" />
                                    Contact
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Latest Jobs
                    </h2>
                    <span className="text-gray-600">Showing {mockJobs.length} results</span>
                  </div>

                  {mockJobs.map((job) => (
                    <Card key={job.id} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                              {job.urgent && (
                                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                                  Urgent
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-2">{job.company}</p>
                            <p className="text-gray-600 mb-3">{job.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {job.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  <span>{job.budget}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>{job.duration}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  <span>{job.proposals} proposals</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-500">{job.posted}</span>
                                <Button variant="gradient" size="sm">
                                  Apply Now
                                  <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 