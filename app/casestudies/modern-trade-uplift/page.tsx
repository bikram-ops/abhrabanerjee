
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

      <section id="case-moderntrade" className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* HEADING */}
  <motion.h2 
    variants={fadeUp} 
    initial="hidden" 
    whileInView="show"
    className="text-4xl md:text-5xl font-extrabold text-center
    text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 mb-8"
  >
    Case Study: Modern Trade Uplift
  </motion.h2>
  
          <motion.p 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show"
            className="text-xl md:text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto"
          >
            42% Growth in Shelf Share Through Joint Business Planning & Optimized Planograms
          </motion.p>

          {/* HERO IMAGE */}
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16
            shadow-[0_0_60px_rgba(0,150,255,0.15)] border border-white/10"
          >
            <Image
              src="/api/placeholder/1200/500"
              alt="Modern retail shelf display"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </motion.div>

          {/* STATS BANNER */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl 
              border border-cyan-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] transition-all duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-300 to-cyan-400 mb-2">
                42%
              </div>
              <div className="text-gray-300 font-medium">Shelf Share Increase</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl 
              border border-blue-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_30px_rgba(100,150,255,0.2)] transition-all duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-300 to-blue-400 mb-2">
                28%
              </div>
              <div className="text-gray-300 font-medium">Sales Growth</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl 
              border border-purple-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_30px_rgba(150,100,255,0.2)] transition-all duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-300 to-purple-400 mb-2">
                80%
              </div>
              <div className="text-gray-300 font-medium">Planogram Compliance</div>
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

              <p className="text-gray-300 text-lg leading-relaxed">
                A leading FMCG brand operating in modern trade retail struggled with declining visibility 
                and shrinking shelf presence across key retail partners. Despite strong product performance, 
                inconsistent store-level execution was limiting sales growth.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                The brand partnered with us to develop a Modern Trade Uplift Program focused on improving 
                in-store visibility, optimizing assortments, and strengthening retailer collaboration.
              </p>
            </motion.div>

            {/* CHALLENGES */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Challenges</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-500/5 to-orange-500/5 
                  border border-red-400/10 rounded-2xl p-6 
                  hover:border-red-400/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📉</div>
                    <div>
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Low & Inconsistent Shelf Share
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Poor product visibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Disorganized assortment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Reduced impulse purchases</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/5 to-yellow-500/5 
                  border border-orange-400/10 rounded-2xl p-6
                  hover:border-orange-400/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🤝</div>
                    <div>
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Limited Retailer Collaboration
                      </h4>
                      <p className="text-gray-300 mb-2">No structured JBP framework:</p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Misaligned volume targets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Inconsistent promotion strategy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Poor space allocation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/5 to-green-500/5 
                  border border-yellow-400/10 rounded-2xl p-6
                  hover:border-yellow-400/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📐</div>
                    <div>
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Weak Planogram Implementation
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Not aligned to shopper behavior</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Mismatched with store sizes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Poor category flow</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 
                  border border-green-400/10 rounded-2xl p-6
                  hover:border-green-400/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">👁️</div>
                    <div>
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        No Ground-Level Visibility
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Compliance gaps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Unreported shelf gaps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Competitor movement not tracked</span>
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
                  Solution: Modern Trade Uplift Program
                </h3>
              </div>

              {/* JBP WITH IMAGE */}
              <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 
                border border-blue-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(0,150,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🤝</span>
                      <h4 className="text-2xl font-semibold text-blue-300">
                        Joint Business Planning
                      </h4>
                    </div>

                    <p className="text-gray-300 mb-4">A structured JBP framework enabled:</p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span>Joint target setting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span>Category role analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span>Shelf space negotiation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span>Calendarized promotions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span>Quarterly business reviews</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-xl">
                      <p className="text-cyan-300 font-medium">
                        Result: Strong mutual alignment + improved shared accountability
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Joint Business Planning session"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* PLANOGRAM WITH IMAGE */}
              <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 
                border border-purple-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(150,100,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[400px] md:h-auto order-2 md:order-1">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Optimized retail planogram"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 order-1 md:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">📐</span>
                      <h4 className="text-2xl font-semibold text-blue-300">
                        Optimized Planograms
                      </h4>
                    </div>

                    <p className="text-gray-300 mb-4">Built using data-driven insights:</p>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-0.5">✓</span>
                        <span>Store-level sales data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-0.5">✓</span>
                        <span>Traffic flow analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-0.5">✓</span>
                        <span>Priority SKU mapping</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-0.5">✓</span>
                        <span>Shopper insights</span>
                      </li>
                    </ul>

                    <h5 className="text-lg font-semibold text-purple-300 mb-3">Key Improvements:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Eye-level placements for hero SKUs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Enhanced brand-blocking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Optimal facings based on velocity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EXECUTION MONITORING WITH IMAGE */}
              <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 
                border border-green-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(0,200,150,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">📱</span>
                      <h4 className="text-2xl font-semibold text-blue-300">
                        Execution & Compliance Monitoring
                      </h4>
                    </div>

                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span>Field team training on new planograms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span>Mobile execution tracking app</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span>Automated shelf-share reports</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span>Weekly compliance scorecards</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-green-500/10 border border-green-400/30 rounded-xl">
                      <p className="text-green-300 font-medium">
                        Execution quality improved significantly across all modern trade accounts
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Field execution tracking"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* COMPETITIVE BENCHMARKING */}
              <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 
                border border-orange-400/20 rounded-2xl p-8
                hover:border-orange-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📊</span>
                  <h4 className="text-2xl font-semibold text-blue-300">
                    Competitive Benchmarking
                  </h4>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl mt-0.5">✓</span>
                      <span>Shelf share comparison by category</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl mt-0.5">✓</span>
                      <span>Facing analysis</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl mt-0.5">✓</span>
                      <span>Price & offer benchmarking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl mt-0.5">✓</span>
                      <span>Placement insights for negotiation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* IMPACT WITH IMAGE */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Impact & Results</h3>
              </div>

              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-8
                shadow-[0_0_40px_rgba(0,200,255,0.2)]">
                <Image
                  src="/api/placeholder/1200/300"
                  alt="Growth metrics visualization"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
                  border border-cyan-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">📈</span>
                    <div>
                      <div className="text-3xl font-bold text-cyan-300 mb-2">42%</div>
                      <p className="text-gray-300">
                        <strong>Increase in Shelf Share</strong> — consistent planogram 
                        execution boosted visibility across all outlets
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                  border border-blue-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(100,150,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">💰</span>
                    <div>
                      <div className="text-3xl font-bold text-blue-300 mb-2">28%</div>
                      <p className="text-gray-300">
                        <strong>Sales Growth in Priority SKUs</strong> — better facings 
                        led to higher conversion rates
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
                      <div className="text-3xl font-bold text-purple-300 mb-2">80%</div>
                      <p className="text-gray-300">
                        <strong>Planogram Compliance Rate</strong> — enabled by 
                        digital tracking and real-time monitoring
                      </p>
                      </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 
                  border border-green-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(0,200,150,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🤝</span>
                    <div>
                      <div className="text-lg font-bold text-green-300 mb-2">Partnership</div>
                      <p className="text-gray-300">
                        <strong>Stronger retailer partnerships</strong> through structured 
                        JBP and collaborative planning processes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
                border border-cyan-400/30 rounded-2xl p-6 mt-6">
                <p className="text-gray-300 text-lg text-center">
                  <strong className="text-cyan-300">🏆 Category Leadership:</strong> Regained 
                  market leadership position across modern trade channels
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
                  The Modern Trade Uplift Program successfully transformed the brand's in-store presence 
                  through strategic retailer partnerships and data-backed shelf optimization.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  With a <strong className="text-cyan-300">42% uplift in shelf share</strong> and 
                  enhanced category leadership, the approach is being scaled nationwide to drive 
                  long-term visibility and growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-400/40 rounded-full">
                  <span className="text-cyan-300 font-semibold">#ModernTrade</span>
                </div>
                <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/40 rounded-full">
                  <span className="text-blue-300 font-semibold">#RetailExcellence</span>
                </div>
                <div className="px-6 py-3 bg-purple-500/20 border border-purple-400/40 rounded-full">
                  <span className="text-purple-300 font-semibold">#JointBusinessPlanning</span>
                </div>
                <div className="px-6 py-3 bg-green-500/20 border border-green-400/40 rounded-full">
                  <span className="text-green-300 font-semibold">#ShelfOptimization</span>
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