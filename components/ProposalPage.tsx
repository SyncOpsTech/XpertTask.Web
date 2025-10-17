"use client";
import React from "react";
import SuccessRate from "./SuccessRate";

export default function ProposalPage() {
  // Mock data for demonstration
  const projectData = {
    title: "React E-commerce Dashboard Development",
    description: "Build a modern, responsive e-commerce dashboard with React, TypeScript, and Tailwind CSS. Include user management, product catalog, order processing, and analytics dashboard.",
    budget: 2500,
    duration: "3-4 weeks",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    client: {
      name: "TechCorp Inc.",
      rating: 4.8,
      completedProjects: 15,
      totalSpent: 45000
    }
  };

  const proposals = [
    {
      id: 1,
      freelancer: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        title: "Senior React Developer",
        tier: "Elite Xpert",
        tierDisplay: "🌟 Elite Xpert",
        successRate: 98,
        hourlyRate: 45,
        location: "San Francisco, CA",
        rating: 4.9,
        reviewCount: 127,
        completedProjects: 89,
        totalEarnings: 125000,
        responseTime: "1.2 hours",
        onTimeDelivery: 99,
        skills: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
        portfolio: "https://sarahchen.dev"
      },
      proposal: {
        coverLetter: "I have extensive experience building e-commerce platforms and dashboards. I've delivered similar projects for Fortune 500 companies and can ensure your dashboard will be scalable, performant, and user-friendly.",
        estimatedDuration: "3 weeks",
        proposedBudget: 2400,
        milestones: [
          { name: "Project Setup & Architecture", days: 3, amount: 400 },
          { name: "Core Dashboard Development", days: 10, amount: 1200 },
          { name: "E-commerce Integration", days: 5, amount: 600 },
          { name: "Testing & Deployment", days: 2, amount: 200 }
        ],
        attachments: ["Portfolio.pdf", "Previous_Project_Demo.mp4"]
      }
    },
    {
      id: 2,
      freelancer: {
        name: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        title: "Full-Stack Developer",
        tier: "Pro Freelancer",
        tierDisplay: "🧠 Pro Freelancer",
        successRate: 87,
        hourlyRate: 35,
        location: "Austin, TX",
        rating: 4.7,
        reviewCount: 45,
        completedProjects: 32,
        totalEarnings: 68000,
        responseTime: "3.5 hours",
        onTimeDelivery: 94,
        skills: ["React", "JavaScript", "Node.js", "PostgreSQL", "Docker"],
        portfolio: "https://mikejohnson.dev"
      },
      proposal: {
        coverLetter: "I specialize in React development and have built several e-commerce solutions. I can deliver a robust dashboard that meets your requirements within the specified timeline.",
        estimatedDuration: "4 weeks",
        proposedBudget: 2200,
        milestones: [
          { name: "Requirements Analysis", days: 2, amount: 200 },
          { name: "UI/UX Design", days: 5, amount: 500 },
          { name: "Frontend Development", days: 12, amount: 1000 },
          { name: "Backend Integration", days: 5, amount: 400 },
          { name: "Testing & Launch", days: 2, amount: 100 }
        ],
        attachments: ["Resume.pdf", "Code_Samples.zip"]
      }
    },
    {
      id: 3,
      freelancer: {
        name: "Emma Davis",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        title: "Frontend Developer",
        tier: "Rising Talent",
        tierDisplay: "🚀 Rising Talent",
        successRate: 92,
        hourlyRate: 25,
        location: "Seattle, WA",
        rating: 4.8,
        reviewCount: 23,
        completedProjects: 18,
        totalEarnings: 32000,
        responseTime: "2.1 hours",
        onTimeDelivery: 96,
        skills: ["React", "JavaScript", "CSS", "HTML", "Git"],
        portfolio: "https://emmadavis.dev"
      },
      proposal: {
        coverLetter: "I'm passionate about creating beautiful and functional user interfaces. I can build a modern e-commerce dashboard that provides an excellent user experience.",
        estimatedDuration: "4-5 weeks",
        proposedBudget: 2000,
        milestones: [
          { name: "Design & Planning", days: 3, amount: 200 },
          { name: "Component Development", days: 15, amount: 1200 },
          { name: "Integration & Testing", days: 7, amount: 500 },
          { name: "Final Review", days: 2, amount: 100 }
        ],
        attachments: ["Design_Portfolio.pdf"]
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
      {/* Project Header */}
      <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-6 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-black mb-2">{projectData.title}</h1>
            <p className="text-gray-600 mb-4">{projectData.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Budget: ${projectData.budget}</span>
              <span>Duration: {projectData.duration}</span>
              <span>Posted by: {projectData.client.name}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#8A2EFF]">${projectData.budget}</div>
            <div className="text-sm text-gray-500">Project Budget</div>
          </div>
        </div>
        
        {/* Required Skills */}
        <div className="flex flex-wrap gap-2">
          {projectData.skills.map((skill, index) => (
            <span 
              key={index}
              className="bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 text-[#8A2EFF] text-sm font-medium px-3 py-1 rounded-full border border-[#8A2EFF]/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Proposals List */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-black mb-4">Proposals ({proposals.length})</h2>
        
        {proposals.map((proposal) => (
          <div key={proposal.id} className="bg-white rounded-2xl shadow-xl border border-white/50 p-6">
            {/* Freelancer Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <img 
                  src={proposal.freelancer.avatar} 
                  alt={proposal.freelancer.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-black">{proposal.freelancer.name}</h3>
                    <span className="text-sm text-gray-500">• {proposal.freelancer.tierDisplay}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{proposal.freelancer.title}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{proposal.freelancer.location}</span>
                    <span>${proposal.freelancer.hourlyRate}/hr</span>
                    <div className="flex items-center gap-1">
                      <span>{proposal.freelancer.rating}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span>({proposal.freelancer.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Rate */}
              <div className="flex flex-col items-end">
                <SuccessRate rate={proposal.freelancer.successRate} size="md" />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {proposal.freelancer.successRate >= 95 ? "🔥 Top Rated" :
                   proposal.freelancer.successRate >= 85 ? "⭐ Reliable" :
                   proposal.freelancer.successRate >= 70 ? "💪 Improving" :
                   proposal.freelancer.successRate >= 50 ? "🧭 Needs Support" : "⚠️ Under Review"}
                </div>
              </div>
            </div>

            {/* Freelancer Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#8A2EFF]">{proposal.freelancer.completedProjects}</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#FF66C4]">${proposal.freelancer.totalEarnings.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Earned</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-green-500">{proposal.freelancer.onTimeDelivery}%</div>
                <div className="text-xs text-gray-500">On Time</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-blue-500">{proposal.freelancer.responseTime}</div>
                <div className="text-xs text-gray-500">Response</div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h4 className="font-semibold text-black mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {proposal.freelancer.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-[#FF66C4]/10 to-[#8A2EFF]/10 text-[#8A2EFF] text-xs font-medium px-2 py-1 rounded-full border border-[#8A2EFF]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Proposal Details */}
            <div className="border-t border-gray-100 pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-black mb-3">Cover Letter</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{proposal.proposal.coverLetter}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-black">Proposal Details</h4>
                    <div className="text-right">
                      <div className="text-xl font-bold text-[#8A2EFF]">${proposal.proposal.proposedBudget}</div>
                      <div className="text-sm text-gray-500">Proposed Budget</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{proposal.proposal.estimatedDuration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Savings:</span>
                      <span className="font-medium text-green-600">
                        ${projectData.budget - proposal.proposal.proposedBudget}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div className="mt-6">
                <h4 className="font-semibold text-black mb-3">Project Milestones</h4>
                <div className="space-y-2">
                  {proposal.proposal.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">{milestone.name}</div>
                        <div className="text-xs text-gray-500">{milestone.days} days</div>
                      </div>
                      <div className="font-semibold text-[#8A2EFF]">${milestone.amount}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Accept Proposal
                </button>
                <button className="px-6 py-3 border border-[#8A2EFF] text-[#8A2EFF] font-semibold rounded-xl hover:bg-[#8A2EFF] hover:text-white transition-all duration-300">
                  Message
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 