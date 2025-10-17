"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  Gift, 
  Share2, 
  Copy, 
  CheckCircle, 
  Clock,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Mail,
  MessageCircle,
  Link as LinkIcon
} from "lucide-react"

// Mock data
const mockReferralStats = {
  totalReferrals: 12,
  successfulReferrals: 8,
  pendingReferrals: 4,
  totalEarnings: 80,
  monthlyEarnings: 25,
  referralCode: "SARAH2024"
}

const mockReferrals = [
  {
    id: 1,
    name: "James Wilson",
    email: "james.wilson@email.com",
    type: "freelancer",
    status: "completed",
    joinedDate: "2024-01-15",
    completedDate: "2024-01-20",
    earnings: 10,
    avatar: "JW"
  },
  {
    id: 2,
    name: "Emily Chen",
    email: "emily.chen@email.com",
    type: "client",
    status: "completed",
    joinedDate: "2024-01-10",
    completedDate: "2024-01-18",
    earnings: 10,
    avatar: "EC"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    email: "michael.r@email.com",
    type: "freelancer",
    status: "pending",
    joinedDate: "2024-01-25",
    completedDate: null,
    earnings: 0,
    avatar: "MR"
  },
  {
    id: 4,
    name: "Lisa Thompson",
    email: "lisa.t@email.com",
    type: "client",
    status: "pending",
    joinedDate: "2024-01-28",
    completedDate: null,
    earnings: 0,
    avatar: "LT"
  }
]

export default function ReferralsPage() {
  const [copied, setCopied] = useState(false)

  const copyReferralCode = () => {
    navigator.clipboard.writeText(mockReferralStats.referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareReferral = (platform: string) => {
    const message = `Join XpertTask using my referral code ${mockReferralStats.referralCode} and get $10 in connects! 0% commission in year 1.`
    const url = `https://xperttask.com/ref/${mockReferralStats.referralCode}`
    
    switch (platform) {
      case 'email':
        window.open(`mailto:?subject=Join XpertTask&body=${encodeURIComponent(message + '\n\n' + url)}`)
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Referral Program</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Invite friends to XpertTask and earn $10 in connects for every successful referral. 
            Help them start their freelance journey with 0% commission in year 1!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Referrals</p>
                  <p className="text-2xl font-bold text-gray-900">{mockReferralStats.totalReferrals}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">+3 this month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Successful</p>
                  <p className="text-2xl font-bold text-gray-900">{mockReferralStats.successfulReferrals}</p>
                  <div className="flex items-center mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">67% success rate</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">{mockReferralStats.pendingReferrals}</p>
                  <div className="flex items-center mt-2">
                    <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                    <span className="text-sm text-yellow-600">Awaiting completion</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900">${mockReferralStats.totalEarnings}</p>
                  <div className="flex items-center mt-2">
                    <DollarSign className="h-4 w-4 text-purple-600 mr-1" />
                    <span className="text-sm text-purple-600">in connects</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Gift className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Referral Code Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Your Referral Code
                </CardTitle>
                <CardDescription>
                  Share your unique referral code with friends and earn $10 in connects when they join and complete their first project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Referral Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Referral Code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        readOnly
                        value={mockReferralStats.referralCode}
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-l-lg bg-gray-50"
                      />
                      <Button
                        onClick={copyReferralCode}
                        variant="outline"
                        className="rounded-l-none border-l-0"
                      >
                        {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {copied ? "Copied to clipboard!" : "Click to copy your referral code"}
                    </p>
                  </div>

                  {/* Share Buttons */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Share via
                    </label>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        onClick={() => shareReferral('email')}
                        variant="outline"
                        className="flex items-center"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                      <Button
                        onClick={() => shareReferral('twitter')}
                        variant="outline"
                        className="flex items-center"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Twitter
                      </Button>
                      <Button
                        onClick={() => shareReferral('linkedin')}
                        variant="outline"
                        className="flex items-center"
                      >
                        <LinkIcon className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>

                  {/* Referral Link */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Referral Link
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        readOnly
                        value={`https://xperttask.com/ref/${mockReferralStats.referralCode}`}
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-l-lg bg-gray-50 text-sm"
                      />
                      <Button
                        onClick={() => {
                          navigator.clipboard.writeText(`https://xperttask.com/ref/${mockReferralStats.referralCode}`)
                          setCopied(true)
                          setTimeout(() => setCopied(false), 2000)
                        }}
                        variant="outline"
                        className="rounded-l-none border-l-0"
                      >
                        {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#A56CF4] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Share Your Code</p>
                      <p className="text-xs text-gray-600">Send your referral code to friends</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#A56CF4] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">They Join</p>
                      <p className="text-xs text-gray-600">Friends sign up using your code</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#A56CF4] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Complete Project</p>
                      <p className="text-xs text-gray-600">They finish their first project</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#A56CF4] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Earn Rewards</p>
                      <p className="text-xs text-gray-600">You both get $10 in connects</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Referrals List */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Referrals</CardTitle>
              <CardDescription>
                Track the status of your referrals and earnings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Joined</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Earnings</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockReferrals.map((referral) => (
                      <tr key={referral.id} className="border-b border-gray-100">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#A56CF4] to-[#FEC9F2] rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">{referral.avatar}</span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{referral.name}</p>
                              <p className="text-sm text-gray-600">{referral.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            referral.type === 'freelancer' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {referral.type === 'freelancer' ? 'Freelancer' : 'Client'}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">
                          {new Date(referral.joinedDate).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            referral.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {referral.status === 'completed' ? 'Completed' : 'Pending'}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-medium text-gray-900">
                            ${referral.earnings}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
} 