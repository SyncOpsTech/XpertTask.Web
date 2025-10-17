"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Briefcase, 
  DollarSign, 
  Clock, 
  MapPin, 
  FileText,
  Plus,
  X,
  Save,
  Eye,
  ArrowLeft
} from "lucide-react"

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    skills: [] as string[],
    budget: {
      type: "fixed",
      min: "",
      max: "",
      hourly: ""
    },
    duration: "",
    experience: "intermediate",
    location: "remote",
    attachments: [] as File[]
  })

  const [newSkill, setNewSkill] = useState("")

  const categories = [
    "Web Development",
    "Mobile Development", 
    "Design & Creative",
    "Writing & Translation",
    "Digital Marketing",
    "Data Science",
    "Admin Support",
    "Customer Service"
  ]

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      })
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(s => s !== skill)
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        attachments: [...formData.attachments, ...Array.from(e.target.files!)]
      })
    }
  }

  const removeFile = (index: number) => {
    setFormData({
      ...formData,
      attachments: formData.attachments.filter((_, i) => i !== index)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Job posted:", formData)
    // Handle job posting logic here
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Post a New Job</h1>
            <p className="text-gray-600">Create a detailed job posting to attract the best freelancers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Job Details
                </CardTitle>
                <CardDescription>
                  Provide comprehensive information about your project to attract qualified freelancers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                  {/* Job Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                      placeholder="e.g., React Developer for E-commerce Platform"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                      placeholder="Describe your project in detail. Include requirements, goals, and any specific technologies or tools needed."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  {/* Skills */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Required Skills
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-[#A56CF4] text-white rounded-full text-sm flex items-center"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="ml-2 hover:text-gray-200"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-l-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                        placeholder="Add a skill"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-l-none border-l-0"
                        onClick={addSkill}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget *
                    </label>
                    <div className="space-y-4">
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="budgetType"
                            value="fixed"
                            checked={formData.budget.type === "fixed"}
                            onChange={(e) => setFormData({
                              ...formData, 
                              budget: {...formData.budget, type: e.target.value}
                            })}
                            className="mr-2"
                          />
                          Fixed Price
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="budgetType"
                            value="hourly"
                            checked={formData.budget.type === "hourly"}
                            onChange={(e) => setFormData({
                              ...formData, 
                              budget: {...formData.budget, type: e.target.value}
                            })}
                            className="mr-2"
                          />
                          Hourly Rate
                        </label>
                      </div>
                      
                      {formData.budget.type === "fixed" ? (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Minimum Budget</label>
                            <input
                              type="number"
                              required
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                              placeholder="$500"
                              value={formData.budget.min}
                              onChange={(e) => setFormData({
                                ...formData, 
                                budget: {...formData.budget, min: e.target.value}
                              })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Maximum Budget</label>
                            <input
                              type="number"
                              required
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                              placeholder="$2000"
                              value={formData.budget.max}
                              onChange={(e) => setFormData({
                                ...formData, 
                                budget: {...formData.budget, max: e.target.value}
                              })}
                            />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Hourly Rate (USD)</label>
                          <input
                            type="number"
                            required
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                            placeholder="$25"
                            value={formData.budget.hourly}
                            onChange={(e) => setFormData({
                              ...formData, 
                              budget: {...formData.budget, hourly: e.target.value}
                            })}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Duration
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    >
                      <option value="">Select duration</option>
                      <option value="less-than-1-week">Less than 1 week</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="2-4-weeks">2-4 weeks</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="more-than-6-months">More than 6 months</option>
                    </select>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    >
                      <option value="entry">Entry Level</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Location
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A56CF4] focus:border-transparent"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    >
                      <option value="remote">Remote</option>
                      <option value="onsite">On-site</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>

                  {/* Attachments */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Attachments
                    </label>
                    <div className="space-y-3">
                      {formData.attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-gray-600" />
                            <span className="text-sm text-gray-900">{file.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Click to upload files</p>
                          <p className="text-xs text-gray-500">PDF, DOC, images up to 10MB</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex space-x-4 pt-6">
                    <Button type="submit" variant="gradient" className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      Post Job
                    </Button>
                    <Button type="button" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Tips for a Great Job Post</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#A56CF4] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Be Specific</p>
                      <p className="text-xs text-gray-600">Clearly describe what you need and your expectations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#A56CF4] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Set Realistic Budget</p>
                      <p className="text-xs text-gray-600">Research market rates to attract quality freelancers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#A56CF4] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Include Timeline</p>
                      <p className="text-xs text-gray-600">Set clear deadlines and milestone expectations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Job Posting Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#A56CF4] mb-2">Free</div>
                  <p className="text-sm text-gray-600 mb-4">Post unlimited jobs with no upfront cost</p>
                  <div className="text-xs text-gray-500">
                    <p>• 0% commission in year 1</p>
                    <p>• Only pay when you hire</p>
                    <p>• Secure payment protection</p>
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