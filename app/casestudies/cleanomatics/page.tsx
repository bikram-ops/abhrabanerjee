"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import CaseStudyNavigation from "@/app/components/CaseStudyNavigation";
import Image from "next/image";

export default function Page() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.8 } } };
  const scaleIn = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

  return (
    <main className="bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#0f0f0f] text-white min-h-screen">
      <Header />

      <section id="case-cleanomatics" className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADING */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-8"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 
              border border-purple-400/30 rounded-full mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-semibold">
                D2C Transformation
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-center 
              text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 mb-6">
              Phygital Transformation for Cleanomatics
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
              Building an App-First Premium D2C Ecosystem with Advanced Segmentation & Luxury Partnerships
            </p>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16
            shadow-[0_0_60px_rgba(150,0,255,0.2)] border border-purple-400/20"
          >
            <Image
              src="/api/placeholder/1200/500"
              alt="Premium D2C app experience"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 
              rounded-2xl px-6 py-3">
              <div className="text-cyan-300 font-bold text-sm">App-First Strategy</div>
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
                  34%
                </div>
                <div className="text-gray-300 font-medium text-lg">Repeat Order Growth</div>
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
                  52%
                </div>
                <div className="text-gray-300 font-medium text-lg">Higher Engagement</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-pink-500/10 to-red-500/10 
              backdrop-blur-xl border border-pink-400/20 rounded-2xl p-6 text-center
              hover:shadow-[0_0_40px_rgba(255,100,150,0.25)] transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/5 rounded-full blur-3xl
                group-hover:bg-pink-400/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-6xl font-black text-transparent bg-clip-text 
                  bg-gradient-to-r from-pink-300 to-pink-400 mb-2">
                  40%
                </div>
                <div className="text-gray-300 font-medium text-lg">Premium Ticket Growth</div>
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
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Client Overview</h3>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 
                border border-purple-400/20 rounded-2xl p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  <strong className="text-purple-300">Cleanomatics</strong>, a premium home-services 
                  and laundry brand, wanted to strengthen its direct-to-consumer (D2C) presence while 
                  standing out in a competitive market.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  The brand needed stronger segmentation, improved customer engagement, and premium 
                  positioning — built around a robust <strong className="text-cyan-300">phygital 
                  (physical + digital) ecosystem</strong> with the mobile app as the central customer touchpoint.
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
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📊</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Weak CRM Segmentation & Low Repeat Usage
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>No detailed customer segmentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>No personalized campaign targeting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>No lifecycle visibility or tracking</span>
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
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">🎯</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Limited Personalization
                      </h4>
                      <p className="text-gray-300 mb-2">All customers received identical messaging:</p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Low notification open rates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Low campaign relevance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Poor off-season conversions</span>
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
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">👑</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        No Premium Differentiator
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>No luxury brand partnerships</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>No premium experience layer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Weak premium market positioning</span>
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
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">🔀</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Offline & Online Systems Misaligned
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Order status mismatches</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Frequent delivery issues</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Disjointed customer experience</span>
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
                  Solution: D2C Phygital Engine
                </h3>
              </div>

              {/* Solution 1 - App-First Segmentation with Image */}
              <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 
                border border-blue-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(0,150,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🎯</span>
                      <h4 className="text-2xl font-semibold text-cyan-300">
                        App-First CRM Segmentation
                      </h4>
                    </div>

                    <p className="text-gray-300 mb-4">A deep segmentation model was created:</p>

                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-cyan-300 mb-3">Customer Segments:</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-3 py-2 text-sm text-gray-300">
                          New users
                        </div>
                        <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg px-3 py-2 text-sm text-gray-300">
                          High-frequency
                        </div>
                        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-3 py-2 text-sm text-gray-300">
                          Dormant users
                        </div>
                        <div className="bg-pink-500/10 border border-pink-400/30 rounded-lg px-3 py-2 text-sm text-gray-300">
                          Premium fabric
                        </div>
                        <div className="bg-green-500/10 border border-green-400/30 rounded-lg px-3 py-2 text-sm text-gray-300">
                          Large orders
                        </div>
                        <div className="bg-orange-500/10 border border-orange-400/30 rounded-lg px-3 py-2 text-sm text-gray-300">
                          Weekend shoppers
                        </div>
                      </div>
                    </div>

                    <h5 className="text-lg font-semibold text-blue-300 mb-3">Based On:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Order history & ticket size</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>App behavior patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Location & outlet proximity</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Customer segmentation model"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Solution 2 - Hyper-Personalization */}
              <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 
                border border-purple-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(150,100,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[450px] md:h-auto order-2 md:order-1">
                    <Image
                      src="/api/placeholder/600/450"
                      alt="Personalized customer journeys"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 order-1 md:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">✨</span>
                      <h4 className="text-2xl font-semibold text-purple-300">
                        Hyper-Personalized Journeys
                      </h4>
                    </div>

                    <p className="text-gray-300 mb-4">Automation-driven customer journeys:</p>

                    <div className="space-y-3 mb-6">
                      <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-3">
                        <div className="font-semibold text-purple-300 mb-1">Journey Types:</div>
                        <div className="text-sm text-gray-300">
                          Welcome • Reactivation • Premium care • Fabric reminders • VIP early-access
                        </div>
                      </div>
                    </div>

                    <h5 className="text-lg font-semibold text-pink-300 mb-3">Cross-Channel Delivery:</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-pink-400">📱</span>
                        <span>App notifications</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-purple-400">💬</span>
                        <span>WhatsApp automation</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-cyan-400">🎨</span>
                        <span>In-app banners</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-blue-400">🎟️</span>
                        <span>Dynamic coupons</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution 3 - Luxury Collaborations with Image */}
              <div className="bg-gradient-to-br from-pink-500/5 to-red-500/5 
                border border-pink-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(255,100,150,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">👑</span>
                      <h4 className="text-2xl font-semibold text-pink-300">
                        Luxury Brand Collaborations
                      </h4>
                    </div>

                    <p className="text-gray-300 text-lg mb-6">
                      Exclusive high-end partnerships strengthened Cleanomatics' premium positioning.
                    </p>

                    <h5 className="text-lg font-semibold text-pink-300 mb-3">Partnership Examples:</h5>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-pink-400 text-xl mt-0.5">✓</span>
                        <span>Premium fabric-care collection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-pink-400 text-xl mt-0.5">✓</span>
                        <span>Luxury membership tiers with benefits</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-pink-400 text-xl mt-0.5">✓</span>
                        <span>Seasonal premium-care offers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-pink-400 text-xl mt-0.5">✓</span>
                        <span>Exclusive co-branded hampers</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-pink-500/10 border border-pink-400/30 rounded-xl">
                      <p className="text-pink-300 font-medium">
                        Elevated brand perception in the premium segment
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Luxury brand partnerships"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Solution 4 - Phygital Sync with Image */}
              <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 
                border border-green-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(0,200,150,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[400px] md:h-auto order-2 md:order-1">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Phygital integration"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 flex flex-col justify-center order-1 md:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🔄</span>
                      <h4 className="text-2xl font-semibold text-green-300">
                        Phygital Sync: Online + Offline
                      </h4>
                    </div>

                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span>Unified app + outlet order synchronization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span>Real-time service updates across channels</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span>Digital-first staff workflow integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 text-xl mt-0.5">✓</span>
                        <span>Automated customer feedback loops</span>
                      </li>
                    </ul>

                    <div className="p-4 bg-green-500/10 border border-green-400/30 rounded-xl">
                      <p className="text-green-300 font-medium">
                        Physical experience now perfectly complements the app experience
                      </p>
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
                      <div className="text-3xl font-bold text-cyan-300 mb-2">34%</div>
                      <p className="text-gray-300">
                        <strong>Increase in Repeat Orders</strong> via advanced segmentation 
                        and targeted reactivation campaigns
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                  border border-purple-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(150,100,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🔔</span>
                    <div>
                      <div className="text-3xl font-bold text-purple-300 mb-2">52%</div>
                      <p className="text-gray-300">
                        <strong>Higher Notification Engagement</strong> due to hyper-personalized 
                        messaging and timing
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 
                  border border-pink-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(255,100,150,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">👑</span>
                    <div>
                      <div className="text-3xl font-bold text-pink-300 mb-2">40%</div>
                      <p className="text-gray-300">
                        <strong>Growth in Premium Ticket Size</strong> from luxury partnerships 
                        and elevated service offerings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 
                  border border-green-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(0,200,150,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🔄</span>
                    <div>
                      <div className="text-lg font-bold text-green-300 mb-2">Seamless Experience</div>
                      <p className="text-gray-300">
                        <strong>Far smoother phygital experience</strong> across all outlets 
                        and app touchpoints
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 
                border border-purple-400/30 rounded-2xl p-6 mt-6">
                <p className="text-gray-300 text-lg text-center">
                  <strong className="text-purple-300">✨ Brand Elevation:</strong> Significant 
                  improvement in premium brand perception and market positioning
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
                  The <strong className="text-purple-300">D2C Phygital Transformation</strong> created 
                  a unified, app-first digital ecosystem that strengthened retention, improved brand loyalty, 
                  and enabled scalable premium growth.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  With hyper-personalized journeys, advanced segmentation, and luxury collaborations,
                  Cleanomatics now operates a sustainable, premium D2C model ready for 
                  <strong className="text-cyan-300"> multi-city expansion</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <div className="px-6 py-3 bg-purple-500/20 border border-purple-400/40 rounded-full">
                  <span className="text-purple-300 font-semibold">#D2CTransformation</span>
                </div>
                <div className="px-6 py-3 bg-pink-500/20 border border-pink-400/40 rounded-full">
                  <span className="text-pink-300 font-semibold">#PhygitalRetail</span>
                </div>
                <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-400/40 rounded-full">
                  <span className="text-cyan-300 font-semibold">#AppFirst</span>
                </div>
                <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/40 rounded-full">
                  <span className="text-blue-300 font-semibold">#PremiumBranding</span>
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
