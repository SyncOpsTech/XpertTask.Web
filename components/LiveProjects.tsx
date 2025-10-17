import React from 'react';
import { Award, Clock, CheckCircle, Star } from 'lucide-react';

const liveProjects = [
  {
    id: 1,
    title: "React SaaS Dashboard",
    description: "Modern admin dashboard with analytics, user management, and real-time data visualization",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    budget: "$3,200",
    type: "Fixed",
    status: "In Progress",
    isVerified: true,
    isActive: true,
    progress: 75
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    description: "Cross-platform mobile app with payment integration, inventory management, and push notifications",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    budget: "$4,800",
    type: "Ongoing",
    status: "In Progress",
    isVerified: true,
    isActive: true,
    progress: 60
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content creation tool with natural language processing and SEO optimization",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    budget: "$2,900",
    type: "Fixed",
    status: "Completed",
    isVerified: true,
    isActive: false,
    progress: 100
  },
  {
    id: 4,
    title: "Video Editing Platform",
    description: "Web-based video editor with cloud storage, collaboration tools, and export options",
    technologies: ["Vue.js", "WebRTC", "AWS S3", "FFmpeg"],
    budget: "$5,500",
    type: "Ongoing",
    status: "In Progress",
    isVerified: false,
    isActive: true,
    progress: 40
  },
  {
    id: 5,
    title: "Blockchain Wallet Integration",
    description: "Secure cryptocurrency wallet with multi-chain support and transaction history",
    technologies: ["Solidity", "Web3.js", "React", "MetaMask"],
    budget: "$3,800",
    type: "Fixed",
    status: "Completed",
    isVerified: true,
    isActive: false,
    progress: 100
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description: "Scalable chat platform with video calls, file sharing, and message encryption",
    technologies: ["Socket.io", "Express.js", "Redis", "WebRTC"],
    budget: "$2,700",
    type: "Fixed",
    status: "In Progress",
    isVerified: true,
    isActive: true,
    progress: 85
  }
];

export default function LiveProjects() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#8F00FF] to-[#FF66C4] rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Live Projects
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See what's being built right now — real projects by real freelancers
          </p>
          
          {/* Powered by SyncOps Badge */}
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Award className="w-4 h-4" />
              Powered by SyncOps
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8F00FF] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.isVerified && (
                      <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 fill-current" />
                        Verified
                      </div>
                    )}
                    {project.isActive && (
                      <div className="flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Active Now
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Project Status and Budget */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'In Progress' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {project.status === 'In Progress' ? (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          In Progress
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Completed
                        </div>
                      )}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#8F00FF]">
                      {project.budget}
                    </div>
                    <div className="text-xs text-gray-500">Budget</div>
                  </div>
                </div>

                {/* Progress Bar for In Progress Projects */}
                {project.status === 'In Progress' && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#8F00FF] to-[#FF66C4] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-[#8F00FF] rounded-full text-xs font-medium border border-purple-200 hover:from-purple-100 hover:to-pink-100 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8F00FF] mb-2">150+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8F00FF] mb-2">$2.5M+</div>
              <div className="text-gray-600">Total Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8F00FF] mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 