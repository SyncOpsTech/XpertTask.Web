"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay ahead in the freelance world</h2>
      <form 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        onSubmit={handleSubmit}
        suppressHydrationWarning
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 shadow focus:outline-none focus:ring-2 focus:ring-[#6B40FF] focus:border-transparent"
          required
        />
        <button 
          type="submit"
          className="bg-gradient-to-r from-[#6B40FF] to-[#FF66C4] text-white font-bold px-8 py-3 rounded-xl shadow hover:scale-105 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
} 