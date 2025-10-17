"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Star, 
  Users, 
  Briefcase,
  Calendar,
  MessageCircle,
  Award,
  Target,
  ArrowUp,
  ArrowDown,
  Eye,
  Heart,
  Share2
} from "lucide-react"

// Mock data
const mockStats = {
  totalEarnings: 15420,
  monthlyEarnings: 3200,
  activeProjects: 3,
  completedProjects: 47,
  rating: 4.9,
  totalReviews: 127,
  discoveryScore: 87,
  connectsRemaining: 18
}

const mockActiveProjects = [
  {
    id: 1,
    title: "E-commerce Website Development",
    client: "TechStart Inc.",
    budget: 4500,
    progress: 75,
    deadline: "2024-02-15",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Mobile App UI Design",
    client: "InnovateCo",
    budget: 2800,
    progress: 30,
    deadline: "2024-03-01",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Content Marketing Strategy",
    client: "GrowthLab",
    budget: 1800,
    progress: 90,
    deadline: "2024-01-30",
    status: "Review"
  }
]

const mockRecentActivity = [
  {
    id: 1,
    type: "payment",
    message: "Payment received for E-commerce Website project",
    amount: 2250,
    date: "2024-01-25"
  },
  {
    id: 2,
    type: "message",
    message: "New message from TechStart Inc.",
    date: "2024-01-24"
  },
  {
    id: 3,
    type: "review",
    message: "5-star review received from previous client",
    date: "2024-01-23"
  }
]

export default function FreelancerDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Sarah! Here's your overview.</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share Profile
            </Button>
            <Button variant="gradient">
              <Briefcase className="h-4 w-4 mr-2" />
              Find Work
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900">${mockStats.totalEarnings.toLocaleString()}</p>
                  <div className="flex items-center mt-2">
                    <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">+12% from last month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Projects</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.activeProjects}</p>
                  <div className="flex items-center mt-2">
                    <Clock className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="text-sm text-blue-600">2 due this week</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.rating}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{mockStats.totalReviews} reviews</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Discovery Score</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.discoveryScore}</p>
                  <div className="flex items-center mt-2">
                    <Target className="h-4 w-4 text-purple-600 mr-1" />
                    <span className="text-sm text-purple-600">Top 10%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Projects */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Active Projects</span>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockActiveProjects.map((project) => (
                    <div key={project.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{project.title}</h3>
                          <p className="text-sm text-gray-600">{project.client}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${project.budget}</p>
                          <p className="text-sm text-gray-600">Due {new Date(project.deadline).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#A56CF4] to-[#FEC9F2] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'Review' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {project.status}
                        </span>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message Client
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Connects */}
            <Card>
              <CardHeader>
                <CardTitle>Connects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#A56CF4] mb-2">{mockStats.connectsRemaining}</div>
                  <p className="text-sm text-gray-600 mb-4">Connects remaining this month</p>
                  <Button variant="gradient" className="w-full">
                    Buy More Connects
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'payment' ? 'bg-green-100' :
                        activity.type === 'message' ? 'bg-blue-100' :
                        'bg-yellow-100'
                      }`}>
                        {activity.type === 'payment' && <DollarSign className="h-4 w-4 text-green-600" />}
                        {activity.type === 'message' && <MessageCircle className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'review' && <Star className="h-4 w-4 text-yellow-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        {activity.amount && (
                          <p className="text-sm font-medium text-green-600">+${activity.amount}</p>
                        )}
                        <p className="text-xs text-gray-500">{new Date(activity.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Browse Jobs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Award className="h-4 w-4 mr-2" />
                    Referral Program
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 