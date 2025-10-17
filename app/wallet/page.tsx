"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Wallet, 
  DollarSign, 
  CreditCard, 
  ArrowUp, 
  ArrowDown,
  Plus,
  Download,
  Eye,
  EyeOff,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Banknote,
  TrendingUp,
  Filter
} from "lucide-react"

// Mock data
const mockWalletData = {
  balance: 2847.50,
  pendingBalance: 1250.00,
  totalEarnings: 15420.00,
  monthlyEarnings: 3200.00,
  connects: 18,
  isBalanceVisible: true
}

const mockTransactions = [
  {
    id: 1,
    type: "credit",
    amount: 2250.00,
    description: "Payment received - E-commerce Website",
    project: "E-commerce Website Development",
    client: "TechStart Inc.",
    date: "2024-01-25",
    status: "completed",
    reference: "TXN-2024-001"
  },
  {
    id: 2,
    type: "debit",
    amount: -150.00,
    description: "Withdrawal to Bank Account",
    method: "Bank Transfer",
    date: "2024-01-24",
    status: "completed",
    reference: "TXN-2024-002"
  },
  {
    id: 3,
    type: "credit",
    amount: 840.00,
    description: "Payment received - Mobile App Design",
    project: "Mobile App UI Design",
    client: "InnovateCo",
    date: "2024-01-23",
    status: "completed",
    reference: "TXN-2024-003"
  },
  {
    id: 4,
    type: "credit",
    amount: 540.00,
    description: "Payment received - Content Strategy",
    project: "Content Marketing Strategy",
    client: "GrowthLab",
    date: "2024-01-22",
    status: "pending",
    reference: "TXN-2024-004"
  },
  {
    id: 5,
    type: "debit",
    amount: -25.00,
    description: "Connects Purchase",
    quantity: "25 connects",
    date: "2024-01-21",
    status: "completed",
    reference: "TXN-2024-005"
  }
]

const mockPaymentMethods = [
  {
    id: 1,
    type: "card",
    name: "Visa ending in 4242",
    last4: "4242",
    expiry: "12/25",
    isDefault: true
  },
  {
    id: 2,
    type: "bank",
    name: "Chase Bank",
    account: "****1234",
    isDefault: false
  }
]

export default function WalletPage() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(mockWalletData.isBalanceVisible)
  const [selectedPeriod, setSelectedPeriod] = useState('all')
  const [showAddPayment, setShowAddPayment] = useState(false)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600'
      case 'pending': return 'text-yellow-600'
      case 'failed': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />
      case 'pending': return <Clock className="h-4 w-4" />
      case 'failed': return <AlertCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Wallet & Payments</h1>
            <p className="text-gray-600">Manage your earnings, payments, and payment methods</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="gradient">
              <Plus className="h-4 w-4 mr-2" />
              Withdraw
            </Button>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Balance</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-2xl font-bold text-gray-900">
                      {isBalanceVisible ? formatCurrency(mockWalletData.balance) : '••••'}
                    </p>
                    <button
                      onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {isBalanceVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">+12% this month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Balance</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {isBalanceVisible ? formatCurrency(mockWalletData.pendingBalance) : '••••'}
                  </p>
                  <div className="flex items-center mt-2">
                    <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                    <span className="text-sm text-yellow-600">2 payments pending</span>
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
                  <p className="text-2xl font-bold text-gray-900">
                    {isBalanceVisible ? formatCurrency(mockWalletData.totalEarnings) : '••••'}
                  </p>
                  <div className="flex items-center mt-2">
                    <DollarSign className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="text-sm text-blue-600">Lifetime earnings</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Connects</p>
                  <p className="text-2xl font-bold text-gray-900">{mockWalletData.connects}</p>
                  <div className="flex items-center mt-2">
                    <Banknote className="h-4 w-4 text-purple-600 mr-1" />
                    <span className="text-sm text-purple-600">Available connects</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Banknote className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transactions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>
                      {mockTransactions.length} transactions
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Filter className="h-4 w-4 text-gray-600" />
                    <select
                      className="px-3 py-1 border border-gray-200 rounded-lg text-sm"
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                    >
                      <option value="all">All Time</option>
                      <option value="month">This Month</option>
                      <option value="week">This Week</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.type === 'credit' ? (
                            <ArrowDown className="h-5 w-5 text-green-600" />
                          ) : (
                            <ArrowUp className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          {transaction.project && (
                            <p className="text-sm text-gray-600">{transaction.project} • {transaction.client}</p>
                          )}
                          <p className="text-xs text-gray-500">{transaction.reference}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'credit' ? '+' : ''}{formatCurrency(transaction.amount)}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          {getStatusIcon(transaction.status)}
                          <span className={`text-xs ${getStatusColor(transaction.status)}`}>
                            {transaction.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPaymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{method.name}</p>
                          <p className="text-xs text-gray-600">
                            {method.type === 'card' ? `•••• ${method.last4}` : method.account}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {method.isDefault && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            Default
                          </span>
                        )}
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setShowAddPayment(true)}
                  >
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
                    <ArrowUp className="h-4 w-4 mr-2" />
                    Withdraw Funds
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Banknote className="h-4 w-4 mr-2" />
                    Buy Connects
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Statement
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Payment Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Info */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-medium">1-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minimum Withdrawal:</span>
                    <span className="font-medium">$25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Withdrawal Fee:</span>
                    <span className="font-medium">$2.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Currency:</span>
                    <span className="font-medium">USD</span>
                  </div>
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