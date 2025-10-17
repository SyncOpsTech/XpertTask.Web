'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle, 
  DollarSign, 
  Bot, 
  MessageCircle,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  ArrowRight,
  User,
  Star,
  Zap,
  Award
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // Handle hydration mismatch from browser extensions
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (typeof value === 'string' && errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    // Clear login error when user types
    if (loginError) {
      setLoginError('');
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: ''
    };

    console.log('Validating form with:', formData);

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      console.log('Email validation failed: empty');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      console.log('Email validation failed: invalid format');
    } else {
      console.log('Email validation passed');
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      console.log('Password validation failed: empty');
    } else {
      console.log('Password validation passed');
    }

    console.log('Validation errors:', newErrors);
    setErrors(newErrors);
    const isValid = !Object.values(newErrors).some(error => error);
    console.log('Form is valid:', isValid);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    console.log('Form submitted with:', formData);
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Checking credentials:', {
        email: formData.email,
        password: formData.password,
        expectedEmail: 'test@gmail.com',
        expectedPassword: '2!OutCode',
        emailMatch: formData.email === 'test@gmail.com',
        passwordMatch: formData.password === '2!OutCode'
      });
      
      // Check for specific credentials
      if (formData.email === 'test@gmail.com' && formData.password === '2!OutCode') {
        console.log('Login successful!');
        // Success - set login state and redirect
        localStorage.setItem('isLoggedIn', 'true');
        // Dispatch custom event to notify other components immediately
        window.dispatchEvent(new Event('loginStateChanged'));
        router.push('/');
      } else {
        console.log('Login failed - invalid credentials');
        // Failed login
        setLoginError('Invalid email or password. Please try again.');
        setIsLoading(false);
      }
    } else {
      console.log('Form validation failed');
    }
  };

  // Prevent hydration mismatch by not rendering form until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Panel - Brand & Marketing */}
        <div className="lg:w-1/2 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] relative overflow-hidden">
          {/* Tech-themed Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 backdrop-blur-md"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 40 0 L 0 0 0 40\' fill=\'none\' stroke=\'white\' stroke-width=\'1\' opacity=\'0.1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'1200\' height=\'800\' fill=\'url(%23grid)\'/%3E%3Ccircle cx=\'200\' cy=\'150\' r=\'50\' fill=\'white\' opacity=\'0.05\'/%3E%3Ccircle cx=\'1000\' cy=\'650\' r=\'80\' fill=\'white\' opacity=\'0.03\'/%3E%3Ccircle cx=\'800\' cy=\'200\' r=\'30\' fill=\'white\' opacity=\'0.07\'/%3E%3C/svg%3E")'
            }}
          />
          
          <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-12 text-white">
            {/* Platform Highlights */}
            <div className="text-center space-y-12">
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Welcome Back to
                  <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    XpertTask
                  </span>
                </h1>
                
                {/* Animated Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg mx-auto">
                  <div className="text-center group">
                    <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="animate-pulse">50K+</span>
                    </div>
                    <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                      <User className="w-4 h-4" />
                      Freelancers
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="animate-pulse">$2M+</span>
                    </div>
                    <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      Paid Out
                    </div>
                  </div>
                  <div className="text-center col-span-2 lg:col-span-1 group">
                    <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="animate-pulse">24/7</span>
                    </div>
                    <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4" />
                      Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Feature Tags */}
              <div className="space-y-4 max-w-xl mx-auto">
                <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                  </div>
                  <span className="text-sm font-medium">Transparent Contracts</span>
                </div>
                <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-5 h-5 text-yellow-300" />
                  </div>
                  <span className="text-sm font-medium">0% Commission in Year 1</span>
                </div>
                <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Bot className="w-5 h-5 text-blue-300" />
                  </div>
                  <span className="text-sm font-medium">AI-based Project Matching</span>
                </div>
                <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-sm font-medium">Secure Messaging & Payments</span>
                </div>
              </div>
            </div>

            {/* Enhanced CEO Testimonial */}
            <div className="text-center mt-16">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl max-w-md mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-2xl">
                    <User className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-6 italic">
                  "At XpertTask, we're not just building a freelance platform—we're shaping a fair and AI-powered future for global talent."
                </blockquote>
                
                <div className="mb-6">
                  <div className="font-semibold text-xl">Majid Ali</div>
                  <div className="text-sm opacity-90">Founder & CEO of XpertTask</div>
                </div>

                {/* Enhanced SyncOps Badge */}
                <div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:animate-pulse">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Powered by SyncOps
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Loading State */}
        <div className="lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-1">Welcome to XpertTask</h2>
              <p className="text-lg text-gray-500">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Brand & Marketing */}
      <div className="lg:w-1/2 bg-gradient-to-br from-[#6B40FF] to-[#FF66C4] relative overflow-hidden">
        {/* Tech-themed Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 backdrop-blur-md"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 40 0 L 0 0 0 40\' fill=\'none\' stroke=\'white\' stroke-width=\'1\' opacity=\'0.1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'1200\' height=\'800\' fill=\'url(%23grid)\'/%3E%3Ccircle cx=\'200\' cy=\'150\' r=\'50\' fill=\'white\' opacity=\'0.05\'/%3E%3Ccircle cx=\'1000\' cy=\'650\' r=\'80\' fill=\'white\' opacity=\'0.03\'/%3E%3Ccircle cx=\'800\' cy=\'200\' r=\'30\' fill=\'white\' opacity=\'0.07\'/%3E%3C/svg%3E")'
          }}
        />
        
        <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-12 text-white">
          {/* Platform Highlights */}
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                Welcome Back to
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  XpertTask
                </span>
              </h1>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg mx-auto">
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="animate-pulse">50K+</span>
                  </div>
                  <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                    <User className="w-4 h-4" />
                    Freelancers
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="animate-pulse">$2M+</span>
                  </div>
                  <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    Paid Out
                  </div>
                </div>
                <div className="text-center col-span-2 lg:col-span-1 group">
                  <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="animate-pulse">24/7</span>
                  </div>
                  <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                    <Zap className="w-4 h-4" />
                    Support
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Feature Tags */}
            <div className="space-y-4 max-w-xl mx-auto">
              <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                </div>
                <span className="text-sm font-medium">Transparent Contracts</span>
              </div>
              <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-5 h-5 text-yellow-300" />
                </div>
                <span className="text-sm font-medium">0% Commission in Year 1</span>
              </div>
              <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-5 h-5 text-blue-300" />
                </div>
                <span className="text-sm font-medium">AI-based Project Matching</span>
              </div>
              <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-5 h-5 text-purple-300" />
                </div>
                <span className="text-sm font-medium">Secure Messaging & Payments</span>
              </div>
            </div>
          </div>

          {/* Enhanced CEO Testimonial */}
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl max-w-md mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-2xl">
                  <User className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <blockquote className="text-lg leading-relaxed mb-6 italic">
                "At XpertTask, we're not just building a freelance platform—we're shaping a fair and AI-powered future for global talent."
              </blockquote>
              
              <div className="mb-6">
                <div className="font-semibold text-xl">Majid Ali</div>
                <div className="text-sm opacity-90">Founder & CEO of XpertTask</div>
              </div>

              {/* Enhanced SyncOps Badge */}
              <div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:animate-pulse">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Powered by SyncOps
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Enhanced Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Welcome to XpertTask</h2>
            <p className="text-lg text-gray-500">Access your projects and earnings</p>
          </div>

          {/* Demo Credentials Info */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-sm text-blue-800 font-medium mb-2">Demo Credentials:</p>
            <p className="text-xs text-blue-700">Email: test@gmail.com</p>
            <p className="text-xs text-blue-700">Password: 2!OutCode</p>
          </div>

          {/* Enhanced Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Login Error */}
            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {loginError}
              </div>
            )}

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 w-5 h-5"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors duration-200">
                Forgot password?
              </a>
            </div>

            {/* Enhanced Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 drop-shadow-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </form>

          {/* Enhanced Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">OR</span>
            </div>
          </div>

          {/* Enhanced Social Login Buttons */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-200 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-300 group">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
            
            <button className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-200 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-300 group">
              <Shield className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>SSO Login</span>
            </button>
          </div>

          {/* Trust Element */}
          <div className="text-center py-4">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <span>Rated 4.9★ on TrustPilot</span>
            </div>
          </div>

          {/* Terms and Sign Up Link */}
          <div className="space-y-4 text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors duration-200">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors duration-200">
                Privacy Policy
              </a>.
            </p>
            <div className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors duration-200">
                Sign up for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 