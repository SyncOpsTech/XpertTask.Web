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
  Users, 
  Briefcase,
  Calendar,
  MessageCircle,
  Plus,
  Eye,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  FileText,
  CreditCard
} from "lucide-react"

// Mock data
const mockStats = {
  totalSpent: 28450,
  monthlySpent: 5200,
  activeProjects: 4,
  completedProjects: 23,
  totalFreelancers: 8,
  averageRating: 4.8
}

const mockActiveProjects = [
  {
    id: 1,
    title: "E-commerce Website Development",
    freelancer: "Sarah Mitchell",
    budget: 4500,
    spent: 3375,
    progress: 75,
    deadline: "2024-02-15",
    status: "In Progress",
    lastUpdate: "2 hours ago"
  },
  {
    id: 2,
    title: "Mobile App UI Design",
    freelancer: "James Chen",
    budget: 2800,
    spent: 840,
    progress: 30,
    deadline: "2024-03-01",
    status: "In Progress",
    lastUpdate: "1 day ago"
  },
  {
    id: 3,
    title: "Content Marketing Strategy",
    freelancer: "Maria Lopez",
    budget: 1800,
    spent: 1620,
    progress: 90,
    deadline: "2024-01-30",
    status: "Review",
    lastUpdate: "3 hours ago"
  },
  {
    id: 4,
    title: "Logo Design Package",
    freelancer: "Alex Johnson",
    budget: 1200,
    spent: 0,
    progress: 0,
    deadline: "2024-02-20",
    status: "Not Started",
    lastUpdate: "1 week ago"
  }
]

const mockRecentPayments = [
  {
    id: 1,
    project: "E-commerce Website Development",
    freelancer: "Sarah Mitchell",
    amount: 1125,
    date: "2024-01-25",
    status: "Completed"
  },
  {
    id: 2,
    project: "Mobile App UI Design",
    freelancer: "James Chen",
    amount: 840,
    date: "2024-01-24",
    status: "Completed"
  },
  {
    id: 3,
    project: "Content Marketing Strategy",
    freelancer: "Maria Lopez",
    amount: 540,
    date: "2024-01-23",
    status: "Pending"
  }
]

export default function ClientDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Dashboard</h1>
            <p className="text-gray-600">Manage your projects and track your spending.</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              View Reports
            </Button>
            <Button variant="gradient">
              <Plus className="h-4 w-4 mr-2" />
              Post New Job
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold text-gray-900">${mockStats.totalSpent.toLocaleString()}</p>
                  <div className="flex items-center mt-2">
                    <ArrowUp className="h-4 w-4 text-red-600 mr-1" />
                    <span className="text-sm text-red-600">+8% from last month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-red-600" />
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
                  <p className="text-sm font-medium text-gray-600">Freelancers</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.totalFreelancers}</p>
                  <div className="flex items-center mt-2">
                    <Users className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">4 currently working</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.averageRating}</p>
                  <div className="flex items-center mt-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-1" />
                    <span className="text-sm text-purple-600">Excellent</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
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
                          <p className="text-sm text-gray-600">by {project.freelancer}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${project.spent} / ${project.budget}</p>
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
                        <div className="flex items-center space-x-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            project.status === 'Review' ? 'bg-yellow-100 text-yellow-800' :
                            project.status === 'Not Started' ? 'bg-gray-100 text-gray-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {project.status}
                          </span>
                          <span className="text-xs text-gray-500">Updated {project.lastUpdate}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Payments */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentPayments.map((payment) => (
                    <div key={payment.id} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        payment.status === 'Completed' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        {payment.status === 'Completed' ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-yellow-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{payment.project}</p>
                        <p className="text-xs text-gray-600">by {payment.freelancer}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-sm font-semibold text-gray-900">${payment.amount}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            payment.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {payment.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{new Date(payment.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                        <p className="text-xs text-gray-600">Expires 12/25</p>
                      </div>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
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
                    <Plus className="h-4 w-4 mr-2" />
                    Post New Job
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Find Freelancers
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    View Contracts
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Payment History
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