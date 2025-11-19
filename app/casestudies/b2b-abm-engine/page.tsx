"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import CaseStudyNavigation from "@/app/components/CaseStudyNavigation";
import Image from "next/image";

export default function Page() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#0f0f0f] text-white min-h-screen">
      <Header />

      <section id="case-abm" className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADING */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-8"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 
              border border-blue-400/30 rounded-full mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-semibold">
                B2B SaaS • Account-Based Marketing
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-center 
              text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 mb-6">
              B2B ABM Engine
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
              Account-Based Funnels Powered by Webinars & Pipeline Intelligence
            </p>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16
            shadow-[0_0_60px_rgba(0,150,255,0.2)] border border-blue-400/20"
          >
            <Image
              src="/api/placeholder/1200/500"
              alt="B2B ABM webinar engagement"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            
            {/* Floating Metrics */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl font-bold text-cyan-300">3.5×</div>
                <div className="text-xs text-gray-300">Account Engagement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl font-bold text-blue-300">2×</div>
                <div className="text-xs text-gray-300">Meeting Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl font-bold text-purple-300">55%</div>
                <div className="text-xs text-gray-300">Faster Pipeline</div>
              </div>
            </div>
          </motion.div>

          {/* KEY METRICS BANNER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            {/* Your 4 metric cards here... */}
          </motion.div>

          {/* MAIN CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10
            rounded-3xl shadow-[0_0_40px_rgba(0,150,255,0.08)]
            p-8 md:p-12 space-y-16">

            {/* CLIENT OVERVIEW, CHALLENGES, SOLUTIONS, IMPACT, CONCLUSION */}
            {/* Keep all your sections as-is */}
          </div>
        </div>
      </section>

      <CaseStudyNavigation />
      <Footer />
    </main>
  );
}
