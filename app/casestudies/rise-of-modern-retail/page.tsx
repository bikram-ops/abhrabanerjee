"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RiseOfModernRetail() {
  return (
    <>
      <Header />

      {/* ===========================
          HERO
      ============================ */}
      <section className="pt-32 pb-20 bg-[#0b0e13] text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-extrabold leading-snug"
          >
            The Rise of Modern Retail & Trade Marketing
          </motion.h1>

          <p className="text-gray-400 mt-5 md:mt-6 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            How organized retail reshaped shopper behavior and transformed the
            role of trade marketing forever.
          </p>
        </div>
      </section>

      {/* ===========================
          FEATURED IMAGE
      ============================ */}
      <section className="bg-[#0f131a] py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/casestudies/modern-retail-banner.jpg"
            width={1400}
            height={700}
            alt="Modern Retail"
            className="rounded-2xl shadow-xl border border-white/10"
          />
        </div>
      </section>

      {/* ===========================
          SECTION 1: MARKET SHIFT
      ============================ */}
      <section className="bg-[#0f131a] py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-snug">
            Organized Retail Changed Everything
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            With the rise of modern trade formats such as supermarkets, hypermarkets,
            and large-format retail stores, shopper behavior underwent a dramatic shift.
            The buying journey became more planned, more visual, and more influenced by
            in-store visibility than ever before.
          </p>

          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex gap-3">
              <span className="text-cyan-400">•</span>  
              Organized retail changed shopper behavior
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">•</span>  
              Trade schemes & planograms became vital
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">•</span>  
              CMOs added retail marketing to their scope
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400">•</span>  
              Collaboration with key accounts became critical
            </li>
          </ul>
        </div>
      </section>

      {/* ===========================
          SECTION 2: NEW TRADE ERA
      ============================ */}
      <section className="bg-[#0b0e13] py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/casestudies/modern-retail-inside.jpg"
              width={650}
              height={450}
              alt="Instore Retail"
              className="rounded-2xl shadow-xl border border-white/10"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
              The New Role of Retail Marketing
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              As brands doubled down on retail visibility, planograms and
              category intelligence became must-haves—not optional.  
              CMOs now owned trade marketing, a function once limited to sales teams.
            </p>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <span className="text-cyan-400">✔</span> Data-driven planograms
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">✔</span> Shelf-share optimization
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">✔</span> Key account partnerships
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===========================
          SECTION 3: CONCLUSION
      ============================ */}
      <section className="bg-[#0f131a] py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            Modern Retail Completely Reshaped the CPG Landscape
          </h3>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
            Shopper journeys, trade schemes, retail analytics, and account
            collaborations now define brand competitiveness.  
            Companies that mastered this early are today’s category leaders.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
