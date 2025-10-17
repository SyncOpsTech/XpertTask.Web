import { Header } from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/HeroSection"
import LiveProjectsMetrics from "@/components/LiveProjectsMetrics"
import CoreVision from "@/components/CoreVision"
import UserRoles from "@/components/UserRoles"
import SkillLeveling from "@/components/SkillLeveling"
import SmartJobMatching from "@/components/SmartJobMatching"
import CommissionModel from "@/components/CommissionModel"
import ReferralWidget from "@/components/ReferralWidget"
import DisputeSystem from "@/components/DisputeSystem"
import WhyDifferent from "@/components/WhyDifferent"
import PerformanceEvaluation from "@/components/PerformanceEvaluation"
import FreelancerDashboard from "@/components/FreelancerDashboard"
import ProposalPage from "@/components/ProposalPage"
import MobileAppSection from "@/components/MobileAppSection"
import FinalCTA from "@/components/FinalCTA"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LiveProjectsMetrics />
      <CoreVision />
      <PerformanceEvaluation />
      <UserRoles />
      <FreelancerDashboard />
      <SkillLeveling />
      <SmartJobMatching />
      <CommissionModel />
      <ReferralWidget />
      <DisputeSystem />
      <WhyDifferent />
      <MobileAppSection />
      <FinalCTA />
      {/* <ProposalPage /> */}
      <Footer />
    </div>
  )
}
