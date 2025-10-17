import FreelancerDetailClient from '@/components/FreelancerDetailClient';

// Mock freelancer data - in real app this would come from API
const getFreelancerData = (id: string) => ({
  id: parseInt(id),
  name: "Majid Ali",
  tagline: "Senior Full Stack Developer | React, .NET, MongoDB",
  avatar: "👨‍💻",
  rating: 4.9,
  reviews: 124,
  hourlyRate: { min: 20, max: 30 },
  pricing: {
    hourly: { min: 20, max: 30 },
    fixed: { min: 500, max: 5000 },
    packages: [
      { name: "Basic Package", price: 500, description: "Simple website or app", delivery: "5-7 days" },
      { name: "Standard Package", price: 1500, description: "Full-stack application", delivery: "10-14 days" },
      { name: "Premium Package", price: 3500, description: "Complex enterprise solution", delivery: "20-30 days" }
    ]
  },
  skills: [
    { icon: "💻", label: "React.js" },
    { icon: "⚙️", label: ".NET Core" },
    { icon: "🧠", label: "AI Prompting" },
    { icon: "☁️", label: "AWS" },
    { icon: "🗄️", label: "MongoDB" },
    { icon: "⚡", label: "TypeScript" },
    { icon: "🎨", label: "Tailwind CSS" },
    { icon: "🚀", label: "Next.js" }
  ],
  badges: [
    { icon: "🎖️", label: "Mentor Badge", color: "from-yellow-400 to-orange-500" },
    { icon: "🔥", label: "4-day Streak", color: "from-red-500 to-pink-500" },
    { icon: "✅", label: "Verified by XpertTask", color: "from-green-500 to-emerald-500" },
    { icon: "🏆", label: "Top Rated", color: "from-purple-500 to-pink-500" }
  ],
  experience: 'Expert' as const,
  availability: 'Now' as const,
  category: "Development",
  location: "Karachi, Pakistan",
  projectMatchScore: 92,
  hireCount: 47,
  isVerified: true,
  isMentor: true,
  streak: 4,
  isHiredByClient: true,
  hireCountByClient: 2,
  about: "I'm a passionate Full Stack Developer with over 5 years of experience building scalable web applications. I specialize in React, .NET Core, and cloud technologies. I love solving complex problems and delivering high-quality solutions that exceed client expectations.",
  portfolio: [
    { title: "E-commerce Platform", description: "Built a modern e-commerce platform with React and .NET Core", image: "🛒" },
    { title: "AI Chat Application", description: "Developed an AI-powered chat application with real-time messaging", image: "🤖" },
    { title: "Mobile App", description: "Created a cross-platform mobile app using React Native", image: "📱" }
  ],
  education: [
    { degree: "Bachelor's in Computer Science", institution: "University of Karachi", year: "2019" },
    { degree: "Microsoft Certified Developer", institution: "Microsoft", year: "2022" }
  ],
  languages: [
    { language: "English", level: "Fluent" },
    { language: "Urdu", level: "Native" },
    { language: "Arabic", level: "Intermediate" }
  ],
  reviewList: [
    { id: 1, client: "Sarah Johnson", rating: 5, comment: "Excellent communication and delivered exactly what we needed!", date: "2024-01-20", project: "E-commerce Platform" },
    { id: 2, client: "Mike Chen", rating: 5, comment: "Very professional and skilled developer. Highly recommended!", date: "2024-01-15", project: "AI Chat App" },
    { id: 3, client: "Emma Wilson", rating: 5, comment: "Outstanding work quality and attention to detail.", date: "2024-01-10", project: "Mobile Application" }
  ],
  productReviews: [
    { 
      id: 1, 
      product: "E-commerce Website Template", 
      category: "Web Development",
      price: 299,
      rating: 5,
      reviews: 28,
      description: "Modern, responsive e-commerce template with React and Tailwind CSS",
      features: ["Responsive Design", "Payment Integration", "Admin Dashboard", "SEO Optimized"],
      client: "TechStart Inc.",
      comment: "Perfect template for our online store. Clean code and excellent documentation!",
      date: "2024-01-25",
      sales: 156
    },
    { 
      id: 2, 
      product: "AI Chat Bot API", 
      category: "AI/ML",
      price: 199,
      rating: 4.8,
      reviews: 42,
      description: "Intelligent chatbot API with natural language processing capabilities",
      features: ["NLP Integration", "Multi-language Support", "Analytics Dashboard", "Easy Integration"],
      client: "ChatFlow Solutions",
      comment: "Great API! Easy to integrate and very reliable. Highly recommended for chatbot projects.",
      date: "2024-01-18",
      sales: 89
    },
    { 
      id: 3, 
      product: "Mobile App UI Kit", 
      category: "UI/UX Design",
      price: 149,
      rating: 4.9,
      reviews: 67,
      description: "Complete UI kit for React Native mobile applications",
      features: ["100+ Components", "Dark/Light Themes", "Customizable", "Well Documented"],
      client: "MobileDev Studio",
      comment: "Amazing UI kit! Saved us weeks of development time. Beautiful and functional components.",
      date: "2024-01-12",
      sales: 234
    }
  ]
});

export default async function FreelancerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const freelancer = getFreelancerData(resolvedParams.id);
  
  return <FreelancerDetailClient freelancer={freelancer} />;
} 