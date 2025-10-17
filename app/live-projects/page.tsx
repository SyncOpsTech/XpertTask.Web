"use client";
import React from 'react';
import { Header } from "@/components/layout/header";
import { LiveProjectsSection } from "@/components/LiveProjectsCard";

export default function LiveProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      <LiveProjectsSection />
    </div>
  );
} 