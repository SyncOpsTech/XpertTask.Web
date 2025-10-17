"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { XpertTaskLogo } from "@/components/ui/XpertTaskLogo"
import { 
  Menu, 
  X, 
  ChevronDown,
  User,
  LogOut,
  Search,
  Briefcase,
  Users,
  HelpCircle,
  Info,
  Trophy,
  Map,
  Settings,
  Home,
  Award,
  Clock,
  Bell
} from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)

  // Check login state from localStorage on component mount and when it changes
  useEffect(() => {
    const checkLoginState = () => {
      const loginState = localStorage.getItem('isLoggedIn')
      setIsLoggedIn(loginState === 'true')
    }

    // Check initial state
    checkLoginState()

    // Listen for storage changes (when login state changes in other components)
    const handleStorageChange = () => {
      checkLoginState()
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Also listen for custom event for same-tab updates
    window.addEventListener('loginStateChanged', checkLoginState)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('loginStateChanged', checkLoginState)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    setShowProfileDropdown(false)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('loginStateChanged'))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="group">
            <XpertTaskLogo size="lg" className="group-hover:scale-105 transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Links visible to both logged in and logged out users */}
            <Link 
              href="/discover" 
              className="flex items-center gap-2 text-[#222222] font-medium hover:text-[#6B40FF] transition-all duration-300 relative group"
            >
              <Search className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              Discover
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/live-projects"
              className="flex items-center gap-2 text-[#222222] font-medium hover:text-[#6B40FF] transition-all duration-200 relative group"
            >
              <Clock className="h-4 w-4" />
              Live Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/freelancers" 
              className="flex items-center gap-2 text-[#222222] font-medium hover:text-[#6B40FF] transition-all duration-200 relative group"
            >
              <Users className="h-4 w-4" />
              Freelancers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/how-it-works" 
              className="flex items-center gap-2 text-[#222222] font-medium hover:text-[#6B40FF] transition-all duration-200 relative group"
            >
              <HelpCircle className="h-4 w-4" />
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {!isLoggedIn && (
              <Link
                href="/about"
                className="flex items-center gap-2 text-[#222222] font-medium hover:text-[#6B40FF] transition-all duration-200 relative group"
              >
                <Info className="h-4 w-4" />
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )}
          </nav>

          {/* Right side - CTA Buttons & User Menu */}
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
            <Link href="/login">
                   <button className="hidden sm:block px-6 py-2 rounded-xl font-semibold text-[#6B40FF] bg-white border border-[#6B40FF] hover:bg-[#6B40FF] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
                Sign In
              </button>
            </Link>
                <GetStartedButton />
              </>
            ) : (
              <>
                <Link href="/post-job">
                  <button className="hidden sm:block px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#FF66C4] to-[#8A2EFF] text-white hover:shadow-lg transition-all duration-300">
                    Post Job
                  </button>
                </Link>
                
                {/* Notification Bell */}
                <div className="relative">
                  <button className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 relative">
                    <Bell className="h-5 w-5 text-gray-600" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>

                {/* User Avatar Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#FF66C4] to-[#8A2EFF] rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-600" />
                  </button>

                  {showProfileDropdown && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#6B40FF] hover:bg-gray-50 transition-all duration-200"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <Home className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <Link
                        href="/notifications"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#6B40FF] hover:bg-gray-50 transition-all duration-200"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <Bell className="h-4 w-4" />
                        Notifications
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                      </Link>
                      <Link
                        href="/my-journey"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#6B40FF] hover:bg-gray-50 transition-all duration-200"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <Map className="h-4 w-4" />
                        My Journey
                      </Link>
                      <Link
                        href="/referral-progress"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#6B40FF] hover:bg-gray-50 transition-all duration-200"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <Trophy className="h-4 w-4" />
                        Referral Progress
                      </Link>
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#6B40FF] hover:bg-gray-50 transition-all duration-200"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <User className="h-4 w-4" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#6B40FF] hover:bg-gray-50 transition-all duration-200"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <Settings className="h-4 w-4" />
                        Settings
                      </Link>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 w-full text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Notification Bell */}
              {isLoggedIn && (
                <div className="flex items-center gap-3 py-3 border-b border-gray-50">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span className="text-lg font-medium text-[#222222]">Notifications</span>
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                </div>
              )}
              
              {/* Links visible to both logged in and logged out users */}
              <Link
                href="/discover"
                className="flex items-center gap-3 py-3 text-lg font-medium text-[#222222] hover:text-[#6B40FF] transition-all duration-200 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="h-5 w-5" />
                Discover
              </Link>
              <Link
                href="/live-projects"
                className="flex items-center gap-3 py-3 text-lg font-medium text-[#222222] hover:text-[#6B40FF] transition-all duration-200 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Clock className="h-5 w-5" />
                Live Projects
              </Link>
              <Link
                href="/freelancers"
                className="flex items-center gap-3 py-3 text-lg font-medium text-[#222222] hover:text-[#6B40FF] transition-all duration-200 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="h-5 w-5" />
                Freelancers
              </Link>
              <Link
                href="/how-it-works"
                className="flex items-center gap-3 py-3 text-lg font-medium text-[#222222] hover:text-[#6B40FF] transition-all duration-200 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle className="h-5 w-5" />
                How It Works
              </Link>
              {!isLoggedIn && (
                <Link
                  href="/about"
                  className="flex items-center gap-3 py-3 text-lg font-medium text-[#222222] hover:text-[#6B40FF] transition-all duration-200 border-b border-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Info className="h-5 w-5" />
                  About Us
                </Link>
              )}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                {!isLoggedIn ? (
                  <>
                <Link href="/login">
                      <button
                        className="w-full py-3 rounded-xl font-semibold text-[#6B40FF] bg-white border border-[#6B40FF] hover:bg-[#6B40FF] hover:text-white transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                    Sign In
                  </button>
                </Link>
                    <GetStartedButton />
                  </>
                ) : (
                  <div className="space-y-3">
                    <Link href="/post-job">
                      <button
                        className="w-full py-3 rounded-xl font-semibold text-[#6B40FF] bg-white border border-[#6B40FF] hover:bg-[#6B40FF] hover:text-white transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Post Job
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout()
                        setIsMenuOpen(false)
                      }}
                      className="w-full py-3 rounded-xl font-semibold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 