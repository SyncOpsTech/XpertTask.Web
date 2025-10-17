"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  AlertTriangle, 
  FileText, 
  Upload, 
  MessageCircle, 
  Clock,
  CheckCircle,
  X,
  Plus,
  Download,
  Eye,
  Send,
  Calendar,
  User,
  DollarSign
} from "lucide-react"

// Mock data
const mockDisputes = [
  {
    id: 1,
    projectTitle: "E-commerce Website Development",
    client: "TechStart Inc.",
    freelancer: "Sarah Mitchell",
    amount: 4500,
    status: "open",
    type: "payment",
    description: "Client claims the delivered work doesn't match the requirements. Freelancer disputes this claim.",
    createdAt: "2024-01-20",
    lastUpdate: "2024-01-25",
    evidence: [
      { id: 1, name: "contract.pdf", type: "contract", uploadedBy: "client" },
      { id: 2, name: "deliverables.zip", type: "deliverable", uploadedBy: "freelancer" },
      { id: 3, name: "communication_log.pdf", type: "communication", uploadedBy: "client" }
    ],
    messages: [
      { id: 1, sender: "client", message: "The website doesn't include the payment integration as specified in the contract.", timestamp: "2024-01-20 14:30" },
      { id: 2, sender: "freelancer", message: "Payment integration was completed and tested. I can provide screenshots and demo.", timestamp: "2024-01-21 09:15" },
      { id: 3, sender: "mediator", message: "I've reviewed the evidence. Please provide additional screenshots of the payment integration.", timestamp: "2024-01-25 11:00" }
    ]
  },
  {
    id: 2,
    projectTitle: "Logo Design Package",
    client: "InnovateCo",
    freelancer: "James Chen",
    amount: 1200,
    status: "resolved",
    type: "quality",
    description: "Client was satisfied with the final resolution. Payment was released to freelancer.",
    createdAt: "2024-01-10",
    lastUpdate: "2024-01-18",
    resolution: "Payment released to freelancer after client confirmed satisfaction with revised design.",
    evidence: [
      { id: 1, name: "original_brief.pdf", type: "contract", uploadedBy: "client" },
      { id: 2, name: "final_designs.ai", type: "deliverable", uploadedBy: "freelancer" }
    ],
    messages: []
  }
]

export default function DisputesPage() {
  const [selectedDispute, setSelectedDispute] = useState(mockDisputes[0])
  const [newMessage, setNewMessage] = useState("")
  const [showNewDispute, setShowNewDispute] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'payment': return 'bg-red-100 text-red-800'
      case 'quality': return 'bg-blue-100 text-blue-800'
      case 'timeline': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dispute Resolution</h1>
            <p className="text-gray-600">Fair and transparent resolution for project disputes</p>
          </div>
          <Button 
            variant="gradient" 
            onClick={() => setShowNewDispute(true)}
            className="mt-4 md:mt-0"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Dispute
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Disputes List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Your Disputes</CardTitle>
                <CardDescription>
                  {mockDisputes.length} total disputes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockDisputes.map((dispute) => (
                    <div
                      key={dispute.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedDispute?.id === dispute.id
                          ? 'border-[#A56CF4] bg-[#A56CF4]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedDispute(dispute)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-gray-900 text-sm">
                          {dispute.projectTitle}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(dispute.status)}`}>
                          {dispute.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">
                        ${dispute.amount} • {dispute.type}
                      </p>
                      <p className="text-xs text-gray-500">
                        Updated {new Date(dispute.lastUpdate).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dispute Details */}
          <div className="lg:col-span-2">
            {selectedDispute ? (
              <div className="space-y-6">
                {/* Dispute Header */}
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{selectedDispute.projectTitle}</CardTitle>
                        <CardDescription>
                          Dispute between {selectedDispute.client} and {selectedDispute.freelancer}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedDispute.status)}`}>
                          {selectedDispute.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(selectedDispute.type)}`}>
                          {selectedDispute.type}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">Amount: ${selectedDispute.amount}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">
                          Created: {new Date(selectedDispute.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">
                          Updated: {new Date(selectedDispute.lastUpdate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700">{selectedDispute.description}</p>
                    {selectedDispute.resolution && (
                      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-800">Resolution</span>
                        </div>
                        <p className="text-sm text-green-700">{selectedDispute.resolution}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Evidence */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Evidence & Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedDispute.evidence.map((file) => (
                        <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-gray-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{file.name}</p>
                              <p className="text-xs text-gray-600">
                                {file.type} • Uploaded by {file.uploadedBy}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Upload additional evidence</p>
                        <p className="text-xs text-gray-500">PDF, images, or documents up to 10MB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Messages */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-4">
                      {selectedDispute.messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === 'mediator' ? 'justify-center' : 'justify-start'}`}>
                          <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                            message.sender === 'client' ? 'bg-blue-100 text-blue-900' :
                            message.sender === 'freelancer' ? 'bg-green-100 text-green-900' :
                            'bg-gray-100 text-gray-900'
                          }`}>
                            <div className="flex items-center space-x-2 mb-1">
                              <User className="h-3 w-3" />
                              <span className="text-xs font-medium capitalize">{message.sender}</span>
                            </div>
                            <p className="text-sm">{message.message}</p>
                            <p className="text-xs opacity-75 mt-1">{message.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <Button variant="gradient">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Dispute Selected</h3>
                  <p className="text-gray-600">Select a dispute from the list to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 