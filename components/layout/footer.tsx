"use client";
import React from "react";
import { XpertTaskLogo } from "@/components/ui/XpertTaskLogo";

export default function Footer() {
  const freelancerLinks = [
    { name: "Find Work", href: "#" },
    { name: "Create Profile", href: "#" },
    { name: "Submit Proposals", href: "#" },
    { name: "Dashboard", href: "#" },
    { name: "Referral Program", href: "#" }
  ];

  const clientLinks = [
    { name: "Post a Job", href: "#" },
    { name: "Find Talent", href: "#" },
    { name: "Dashboard", href: "#" },
    { name: "Manage Contracts", href: "#" },
    { name: "Payments", href: "#" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Dispute Resolution", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  const socialLinks = [
    { 
      name: "Twitter", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: "#" 
    },
    { 
      name: "LinkedIn", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      href: "#" 
    },
    { 
      name: "Facebook", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: "#" 
    },
    { 
      name: "Instagram", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.907-.175-1.254-.49-.347-.315-.49-.732-.49-1.254s.143-.939.49-1.254c.347-.315.764-.49 1.254-.49s.907.175 1.254.49c.347.315.49.732.49 1.254s-.143.939-.49 1.254c-.347.315-.764.49-1.254.49z"/>
        </svg>
      ), 
      href: "#" 
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="mb-4">
                <XpertTaskLogo size="lg" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                The modern freelance marketplace connecting top talent with amazing opportunities. 0% commission for both freelancers and clients, secure contracts, and flexible payments.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gradient-to-r hover:from-[#6B40FF] hover:to-[#FF66C4] hover:text-white transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* For Freelancers */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">For Freelancers</h4>
            <ul className="space-y-3">
              {freelancerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#6B40FF] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">For Clients</h4>
            <ul className="space-y-3">
              {clientLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#6B40FF] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#6B40FF] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2025. All Rights Reserved. Designed, Built, and Proudly Owned in Pakistan by{' '}
                <a 
                  href="https://www.syncops.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#6B40FF] hover:text-[#FF66C4] transition-colors duration-200 font-medium"
                >
                  SyncOps
                </a>
                .
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              <a
                href="mailto:support@example.com"
                className="flex items-center gap-2 text-gray-500 hover:text-[#6B40FF] transition-colors duration-200"
              >
                <span className="text-lg">📧</span>
                <span>support@example.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-gray-500 hover:text-[#6B40FF] transition-colors duration-200"
              >
                <span className="text-lg">📞</span>
                <span>+1 (555) 123–4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 