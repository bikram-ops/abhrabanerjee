
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
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
              backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_40px_rgba(0,200,255,0.25)] transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl 
                group-hover:bg-cyan-400/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-5xl font-black text-transparent bg-clip-text 
                  bg-gradient-to-r from-cyan-300 to-cyan-400 mb-2">
                  3.5×
                </div>
                <div className="text-gray-300 font-medium">Account Engagement</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 
              backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_40px_rgba(100,150,255,0.25)] transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl
                group-hover:bg-blue-400/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-5xl font-black text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-300 to-blue-400 mb-2">
                  2×
                </div>
                <div className="text-gray-300 font-medium">Meeting Bookings</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 
              backdrop-blur-xl border border-purple-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_40px_rgba(150,100,255,0.25)] transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/5 rounded-full blur-3xl
                group-hover:bg-purple-400/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-5xl font-black text-transparent bg-clip-text 
                  bg-gradient-to-r from-purple-300 to-purple-400 mb-2">
                  55%
                </div>
                <div className="text-gray-300 font-medium">Faster Pipeline</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-pink-500/10 to-red-500/10 
              backdrop-blur-xl border border-pink-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_40px_rgba(255,100,150,0.25)] transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/5 rounded-full blur-3xl
                group-hover:bg-pink-400/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-5xl font-black text-transparent bg-clip-text 
                  bg-gradient-to-r from-pink-300 to-pink-400 mb-2">
                  40%
                </div>
                <div className="text-gray-300 font-medium">More T1 Opps</div>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white">Client Overview</h3>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 
                border border-blue-400/20 rounded-2xl p-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  A growing <strong className="text-cyan-300">B2B SaaS enterprise</strong> targeting 
                  mid-market and enterprise companies wanted to accelerate demand generation and improve 
                  pipeline quality. Traditional lead-generation tactics brought volume but not high-quality 
                  accounts. The company needed a more strategic, <strong className="text-blue-300">account-focused 
                  growth engine</strong>.
                </p>
              </div>
            </motion.div>

            {/* CHALLENGES */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Challenges</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Challenge 1 */}
                <div className="bg-gradient-to-br from-red-500/5 to-orange-500/5 
                  border border-red-400/10 rounded-2xl p-6
                  hover:border-red-400/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">🎯</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Low Engagement from High-Value Accounts
                      </h4>
                      <p className="text-gray-300">
                        ICP (Ideal Customer Profile) accounts were not converting into active 
                        opportunities despite outreach efforts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge 2 */}
                <div className="bg-gradient-to-br from-orange-500/5 to-yellow-500/5 
                  border border-orange-400/10 rounded-2xl p-6
                  hover:border-orange-400/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📊</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        No Structured Account-Based Funnel
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>No target account prioritization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>No structured nurture sequences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>No workflow alignment across teams</span>
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
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">🤝</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Weak SDR Handoff Process
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Delayed response times</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Repetitive conversations with prospects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Poor meeting-booking conversion rate</span>
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
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📈</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Lack of Pipeline Intelligence
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>No visibility on hot accounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Unclear funnel drop-off points</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>No engagement scoring system</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SOLUTION */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Solution: B2B ABM Engine
                </h3>
              </div>

              {/* Solution 1 - Account Tiering with Image */}
              <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 
                border border-blue-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(0,150,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🎯</span>
                      <h4 className="text-2xl font-semibold text-cyan-300">
                        Target Account Identification & Tiering
                      </h4>
                    </div>

                    <p className="text-gray-300 mb-6">Segmented into 3 strategic tiers:</p>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                        border border-cyan-400/30 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                            <span className="text-cyan-300 font-bold">1</span>
                          </div>
                          <div>
                            <div className="font-semibold text-cyan-300">Tier 1: Enterprise</div>
                            <div className="text-sm text-gray-400">1:1 personalized campaigns</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                        border border-blue-400/30 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <span className="text-blue-300 font-bold">2</span>
                          </div>
                          <div>
                            <div className="font-semibold text-blue-300">Tier 2: Mid-Market</div>
                            <div className="text-sm text-gray-400">1:Few targeted programs</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                        border border-purple-400/30 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <span className="text-purple-300 font-bold">3</span>
                          </div>
                          <div>
                            <div className="font-semibold text-purple-300">Tier 3: Scalable SMB</div>
                            <div className="text-sm text-gray-400">1:Many automated touchpoints</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Account tiering structure"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Solution 2 - Webinar Funnel with Image */}
              <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 
                border border-purple-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(150,100,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[500px] md:h-auto order-2 md:order-1">
                    <Image
                      src="/api/placeholder/600/500"
                      alt="Webinar ABM funnel"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 order-1 md:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🎥</span>
                      <h4 className="text-2xl font-semibold text-purple-300">
                        Account-Based Webinar Funnel
                      </h4>
                    </div>

                    <h5 className="text-lg font-semibold text-purple-300 mb-3">Funnel Stages:</h5>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold mt-1">1.</span>
                        <div>
                          <span className="font-semibold text-gray-200">Awareness:</span>
                          <span className="text-gray-300"> Personalized ads + warming emails</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold mt-1">2.</span>
                        <div>
                          <span className="font-semibold text-gray-200">Interest:</span>
                          <span className="text-gray-300"> Industry-specific webinar invites</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold mt-1">3.</span>
                        <div>
                          <span className="font-semibold text-gray-200">Engagement:</span>
                          <span className="text-gray-300"> Summaries, recordings & case studies</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold mt-1">4.</span>
                        <div>
                          <span className="font-semibold text-gray-200">Consideration:</span>
                          <span className="text-gray-300"> Intent signals → SDR routing</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold mt-1">5.</span>
                        <div>
                          <span className="font-semibold text-gray-200">Conversion:</span>
                          <span className="text-gray-300"> Outreach → demo → opportunity</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-pink-500/10 border border-pink-400/30 rounded-xl p-4">
                      <h5 className="text-pink-300 font-semibold mb-2">Why Webinars?</h5>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div>✓ High intent signals from attendees</div>
                        <div>✓ Multi-stakeholder engagement</div>
                        <div>✓ Scalable & repurposable content</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution 3 - SDR Automation with Image */}
              <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 
                border border-green-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(0,200,150,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">⚡</span>
                      <h4 className="text-2xl font-semibold text-green-300">
                        SDR Handoff Automation
                      </h4>
                    </div>

                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span><strong>Real-time routing</strong> of webinar + website leads</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span><strong>Auto-enriched profiles</strong> with role, tier & engagement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span><strong>SDR playbooks</strong> with personalized sequences</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span><strong>Industry-specific messaging</strong> templates</span>
                      </li>
                    </ul>

                    <div className="p-4 bg-green-500/10 border border-green-400/30 rounded-xl">
                      <p className="text-green-300 font-medium">
                        SDRs reached the right accounts at the perfect moments with full context
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="SDR automation system"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Solution 4 - Pipeline Intelligence with Image */}
              <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 
                border border-orange-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(255,150,0,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[400px] md:h-auto order-2 md:order-1">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Pipeline intelligence dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 flex flex-col justify-center order-1 md:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">📊</span>
                      <h4 className="text-2xl font-semibold text-orange-300">
                        Pipeline Intelligence Dashboard
                      </h4>
                    </div>

                    <p className="text-gray-300 mb-4">Real-time visibility into:</p>

                    <div className="grid gap-3">
                      <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-3">
                        <div className="font-semibold text-orange-300 text-sm">Account Engagement Scoring</div>
                        <div className="text-xs text-gray-400">Multi-touchpoint weighted scoring</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-3">
                        <div className="font-semibold text-red-300 text-sm">Multi-Channel Intent Tracking</div>
                        <div className="text-xs text-gray-400">Web, email, webinar, content signals</div>
                      </div>
                      <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg p-3">
                        <div className="font-semibold text-pink-300 text-sm">Funnel Stage Movement</div>
                        <div className="text-xs text-gray-400">Real-time progression tracking</div>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-3">
                        <div className="font-semibold text-purple-300 text-sm">SDR Performance Analytics</div>
                        <div className="text-xs text-gray-400">Activity, conversion & velocity metrics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* IMPACT */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Impact & Results</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
                  border border-cyan-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">📈</span>
                    <div>
                      <div className="text-3xl font-bold text-cyan-300 mb-2">3.5×</div>
                      <p className="text-gray-300">
                        <strong>Increase in Target Account Engagement</strong> — better targeting 
                        and relevance drove meaningful interactions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                  border border-blue-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(100,150,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">📅</span>
                    <div>
                      <div className="text-3xl font-bold text-blue-300 mb-2">2×</div>
                      <p className="text-gray-300">
                        <strong>Boost in SDR Meeting Booking Rate</strong> — automation and 
                        enrichment improved qualification
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                  border border-purple-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(150,100,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">⚡</span>
                    <div>
                      <div className="text-3xl font-bold text-purple-300 mb-2">55%</div>
                      <p className="text-gray-300">
                        <strong>Faster Pipeline Velocity</strong> — streamlined processes 
                        accelerated deal progression
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 
                  border border-pink-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(255,100,150,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🎯</span>
                    <div>
                      <div className="text-3xl font-bold text-pink-300 mb-2">40%</div>
                      <p className="text-gray-300">
                        <strong>More Tier-1 Opportunities</strong> — focused efforts on 
                        high-value enterprise accounts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
                border border-cyan-400/30 rounded-2xl p-6 mt-6">
                <p className="text-gray-300 text-lg text-center">
                  <strong className="text-cyan-300">🤝 Team Alignment:</strong> Dramatically 
                  improved marketing-sales collaboration and shared accountability
                </p>
              </div>
            </motion.div>

            {/* CONCLUSION */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" 
              className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Conclusion</h3>
              </div>

              <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 
                border border-purple-400/20 rounded-2xl p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  The <strong className="text-cyan-300">ABM Engine</strong>—powered by webinars, 
                  automated SDR workflows, and pipeline intelligence—transformed their demand generation 
                  into a <strong className="text-blue-300">predictable revenue system</strong>.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  The company now activates the right accounts at the right time, identifies buying intent 
                  early, and scales opportunity creation through a repeatable and data-driven ABM model.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-400/40 rounded-full">
                  <span className="text-cyan-300 font-semibold">#ABMStrategy</span>
                </div>
                <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/40 rounded-full">
                  <span className="text-blue-300 font-semibold">#B2BSaaS</span>
                </div>
                <div className="px-6 py-3 bg-purple-500/20 border border-purple-400/40 rounded-full">
                  <span className="text-purple-300 font-semibold">#WebinarMarketing</span>
                </div>
                <div className="px-6 py-3 bg-pink-500/20 border border-pink-400/40 rounded-full">
                  <span className="text-pink-300 font-semibold">#PipelineIntelligence</span>
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
