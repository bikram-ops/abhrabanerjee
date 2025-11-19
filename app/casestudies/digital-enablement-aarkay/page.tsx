"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import CaseStudyNavigation from "@/app/components/CaseStudyNavigation";
import Image from "next/image";
import { JSX } from "react";

export default function Page(): JSX.Element {
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

      <section id="case-aarkay" className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADING */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-8"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
              border border-cyan-400/30 rounded-full mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-semibold">
                Zoho CRM + AI Automation
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-center 
              text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 mb-6">
              Digital Enablement for Aarkay
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
              Transforming Manual Sales Operations into an AI-Powered Revenue Engine
            </p>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16
            shadow-[0_0_60px_rgba(0,200,255,0.2)] border border-cyan-400/20"
          >
            <Image
              src="/api/placeholder/1200/500"
              alt="Digital sales enablement transformation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 
              rounded-2xl px-6 py-3">
              <div className="text-cyan-300 font-bold text-sm">Sales Automation</div>
            </div>
          </motion.div>

          {/* KEY METRICS BANNER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
              backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_40px_rgba(0,200,255,0.25)] transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl 
                group-hover:bg-cyan-400/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-6xl font-black text-transparent bg-clip-text 
                  bg-gradient-to-r from-cyan-300 to-cyan-400 mb-2">
                  68%
                </div>
                <div className="text-gray-300 font-medium text-lg">Conversion Increase</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 
              backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_40px_rgba(100,150,255,0.25)] transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl
                group-hover:bg-blue-400/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-6xl font-black text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-300 to-blue-400 mb-2">
                  70%
                </div>
                <div className="text-gray-300 font-medium text-lg">Faster Response</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 
              backdrop-blur-xl border border-purple-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_40px_rgba(150,100,255,0.25)] transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/5 rounded-full blur-3xl
                group-hover:bg-purple-400/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-6xl font-black text-transparent bg-clip-text 
                  bg-gradient-to-r from-purple-300 to-purple-400 mb-2">
                  95%
                </div>
                <div className="text-gray-300 font-medium text-lg">Follow-Up Consistency</div>
              </div>
            </div>
          </motion.div>

          {/* MAIN CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10
            rounded-3xl shadow-[0_0_40px_rgba(0,150,255,0.08)]
            p-8 md:p-12 space-y-16">

            {/* CLIENT OVERVIEW */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Client Overview</h2>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
                border border-cyan-400/20 rounded-2xl p-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  <strong className="text-cyan-300">Aarkay</strong> is a growing organization focused 
                  on sales-driven services. With increasing inquiries and prospects, the team struggled 
                  to manage lead flow, follow-ups, and customer engagement effectively. Manual processes 
                  slowed the sales cycle and led to <strong className="text-blue-300">missed opportunities</strong>.
                </p>
              </div>
            </motion.div>

            {/* CHALLENGES */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Challenges</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Challenge 1 */}
                <div className="bg-gradient-to-br from-red-500/5 to-orange-500/5 
                  border border-red-400/10 rounded-2xl p-6
                  hover:border-red-400/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📥</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-300 mb-3">
                        Inefficient Lead Management
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Scattered lead sources (WhatsApp, website, email, calls)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Delayed responses to inquiries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Lead misplacement and poor tracking</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Challenge 2 */}
                <div className="bg-gradient-to-br from-orange-500/5 to-yellow-500/5 
                  border border-orange-400/10 rounded-2xl p-6
                  hover:border-orange-400/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">⏱️</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-300 mb-3">
                        Manual Follow-Up Process
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Long response times hurting conversions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Missed follow-up cycles causing leakage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Inconsistent lead nurturing approach</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Challenge 3 */}
                <div className="bg-gradient-to-br from-yellow-500/5 to-green-500/5 
                  border border-yellow-400/10 rounded-2xl p-6
                  hover:border-yellow-400/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📊</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-300 mb-3">
                        Lack of Real-Time Insights
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>No lead status visibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Unclear sales performance metrics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Poor team productivity tracking</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Challenge 4 */}
                <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 
                  border border-green-400/10 rounded-2xl p-6
                  hover:border-green-400/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📉</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-300 mb-3">
                        Low Conversion Rates
                      </h3>
                      <p className="text-gray-300">
                        Due to all the above issues, the conversion rate remained 
                        <strong className="text-green-300"> low and unpredictable</strong>, 
                        making revenue forecasting difficult and limiting growth potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SOLUTION */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Solution Implemented
                </h2>
              </div>

              {/* Solution 1 - CRM Setup with Image */}
              <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 
                border border-blue-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(0,150,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">⚙️</span>
                      <h3 className="text-2xl font-semibold text-cyan-300">
                        Zoho CRM Setup & Customization
                      </h3>
                    </div>

                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span><strong>Centralized all lead sources:</strong> Website, WhatsApp, 
                        Facebook Ads, Email, Phone Calls</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span><strong>Custom CRM modules</strong> matching Aarkay's unique workflow</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span><strong>Lead scoring model</strong> configured for prioritization</span>
                      </li>
                    </ul>

                    <div className="p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-xl">
                      <p className="text-cyan-300 font-medium text-sm">
                        Single source of truth for all customer interactions
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Multi-channel lead sources"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Solution 2 - AI Automation with Image */}
              <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 
                border border-purple-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(150,100,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[450px] md:h-auto order-2 md:order-1">
                    <Image
                      src="/api/placeholder/600/450"
                      alt="AI-powered automation"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 flex flex-col justify-center order-1 md:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🤖</span>
                      <h3 className="text-2xl font-semibold text-purple-300">
                        AI-Powered Automation
                      </h3>
                    </div>

                    <ul className="space-y-3 text-gray-300 mb-4">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-0.5">✓</span>
                        <span><strong>Automated lead assignment</strong> based on rules</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-0.5">✓</span>
                        <span><strong>AI-based follow-up reminders</strong> and scheduling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-0.5">✓</span>
                        <span><strong>Automated nurturing sequences</strong> via email</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-0.5">✓</span>
                        <span><strong>Auto alerts</strong> for inactive or cold leads</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-0.5">✓</span>
                        <span><strong>AI-generated summaries</strong> for faster decision-making</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution 3 - Follow-Up Flow */}
              <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 
                border border-green-400/20 rounded-2xl p-8
                hover:border-green-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📅</span>
                  <h3 className="text-2xl font-semibold text-green-300">
                    Follow-Up Flow Creation
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 text-lg">
                  Structured, automated follow-up cadence for consistent engagement:
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 
                    border border-green-400/30 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-green-300 font-bold">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-green-300 mb-1">Day 1: Instant Response</div>
                        <div className="text-sm text-gray-300">
                          Instant auto-response + automated call reminder sent to sales rep
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 
                    border border-teal-400/30 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-300 font-bold">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-teal-300 mb-1">Day 2-5: Nurture Phase</div>
                        <div className="text-sm text-gray-300">
                          WhatsApp messages + email drip automation with relevant content
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                    border border-cyan-400/30 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-cyan-300 font-bold">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-cyan-300 mb-1">Weekly: Reactivation</div>
                        <div className="text-sm text-gray-300">
                          AI-based check-ins for cold leads with personalized messaging
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution 4 - Analytics Dashboard with Image */}
              <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 
                border border-orange-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(255,150,0,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">📊</span>
                      <h3 className="text-2xl font-semibold text-orange-300">
                        Analytics & Dashboard
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-6">Real-time visibility into:</p>

                    <div className="grid gap-3 mb-6">
                      <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-4">
                        <div className="font-semibold text-orange-300 mb-1">Lead Funnel Insights</div>
                        <div className="text-sm text-gray-400">
                          Track lead progression through each stage
                        </div>
                      </div>
                      <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-4">
                        <div className="font-semibold text-red-300 mb-1">Team Performance Analytics</div>
                        <div className="text-sm text-gray-400">
                          Individual and team productivity metrics
                        </div>
                      </div>
                      <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg p-4">
                        <div className="font-semibold text-pink-300 mb-1">Conversion & Follow-Up Metrics</div>
                        <div className="text-sm text-gray-400">
                          Response times and conversion rates by stage
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Analytics dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* IMPACT */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Impact & Results</h2>
              </div>

              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-8
                shadow-[0_0_60px_rgba(0,200,255,0.25)] border border-cyan-400/30">
                <Image
                  src="/api/placeholder/1200/300"
                  alt="Growth and results visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
                  border border-cyan-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">📈</span>
                    <div>
                      <div className="text-3xl font-bold text-cyan-300 mb-2">68%</div>
                      <p className="text-gray-300">
                        <strong>Increase in Lead Conversions</strong> — better tracking and 
                        timely follow-ups dramatically improved close rates
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                  border border-blue-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(100,150,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">⚡</span>
                    <div>
                      <div className="text-3xl font-bold text-blue-300 mb-2">70%</div>
                      <p className="text-gray-300">
                        <strong>Faster Response Time</strong> — automation eliminated delays 
                        in initial lead engagement
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                  border border-purple-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(150,100,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">✅</span>
                    <div>
                      <div className="text-3xl font-bold text-purple-300 mb-2">95%</div>
                      <p className="text-gray-300">
                        <strong>Consistent Follow-Up Cycle</strong> — AI-powered reminders 
                        ensured no lead fell through the cracks
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 
                  border border-green-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(0,200,150,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">👥</span>
                    <div>
                      <div className="text-lg font-bold text-green-300 mb-2">Team Empowerment</div>
                      <p className="text-gray-300">
                        <strong>Higher productivity</strong> with complete visibility for 
                        managers and automated workflows for reps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CONCLUSION */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" 
              className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Conclusion</h2>
              </div>

              <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 
                border border-purple-400/20 rounded-2xl p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  The <strong className="text-cyan-300">Zoho + AI digital enablement program</strong> transformed 
                  Aarkay's sales operations into a highly efficient, automated, and scalable system.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  With AI assistance and streamlined workflows, the team now closes 
                  <strong className="text-blue-300"> more leads with less effort</strong>, 
                  creating a sustainable foundation for continued growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-400/40 rounded-full">
                  <span className="text-cyan-300 font-semibold">#DigitalTransformation</span>
                </div>
                <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/40 rounded-full">
                  <span className="text-blue-300 font-semibold">#ZohoCRM</span>
                </div>
                <div className="px-6 py-3 bg-purple-500/20 border border-purple-400/40 rounded-full">
                  <span className="text-purple-300 font-semibold">#AIAutomation</span>
                </div>
                <div className="px-6 py-3 bg-green-500/20 border border-green-400/40 rounded-full">
                  <span className="text-green-300 font-semibold">#SalesEnablement</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CaseStudyNavigation />
      <Footer />
    </main>
  );
}
