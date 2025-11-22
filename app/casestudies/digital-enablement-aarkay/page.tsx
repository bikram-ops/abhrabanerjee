"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AarkayDigitalEnablement() {
  return (
    <>
      <Header />

      {/* ============================
          HERO
      ============================= */}
      <section className="relative pt-28 pb-24 bg-[#0b0e13] text-white px-6 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-700/10 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-extrabold leading-snug"
          >
            Digital Enablement for{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Aarkay Foods
            </span>
          </motion.h1>

          <p className="text-gray-400 mt-6 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            We built an AI-driven CRM ecosystem that automated lead journeys,
            improved conversions, streamlined sales operations and increased
            pipeline visibility across the organisation.
          </p>
        </div>
      </section>

      {/* ============================
            INTRO STORY
      ============================= */}
      <section className="bg-[#0f131a] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/casestudies/case-aarkay.png"
              alt="Aarkay Project"
              width={650}
              height={500}
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Disconnected Systems Were Slowing Down Sales
            </h2>

            <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-4">
              Aarkay Foods handles inquiries from 40+ countries. But before
              digital enablement, their workflows relied on manual handoffs,
              inconsistent follow-ups and no real scoring model.
            </p>

            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              The result? Missed opportunities, long sales cycles and limited
              visibility into pipeline quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================
            THE CHALLENGE
      ============================= */}
      <section className="bg-[#0b0e13] py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            The Challenge
          </h2>

          <ul className="space-y-5 text-gray-300 text-lg">
            <li>• No automated follow-up or multi-touch lead journeys</li>
            <li>• Sales teams spending 40% time on manual tasks</li>
            <li>• Lack of standardized lead scoring & qualification</li>
            <li>• No AI-based prioritization for global inbound leads</li>
            <li>• No unified view of customer lifecycle</li>
          </ul>
        </div>
      </section>

      {/* ============================
            OUR STRATEGY
      ============================= */}
      <section className="bg-[#0f131a] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Strategy
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              We rebuilt the entire lead-to-sale journey using Zoho CRM +
              automation + AI scoring.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              With custom modules, country-based routing, predictive scoring and
              WhatsApp journeys—Aarkay achieved 68% improvement in sales
              efficiency.
            </p>
          </div>

          {/* QUOTE BOX */}
          <div className="bg-[#121820] border border-white/10 p-8 rounded-2xl shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed italic">
              “For the first time, our global inquiries feel structured.
              Prioritized. Predictable. We finally know which leads matter and
              how to move them faster.”
            </p>

            <p className="text-cyan-400 mt-4 font-medium">
              — Head of Global Sales, Aarkay Foods
            </p>
          </div>

        </div>
      </section>

      {/* ============================
            DELIVERABLES
      ============================= */}
      <section className="bg-[#0b0e13] py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Deliverables
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              "AI-Powered Lead Scoring System",
              "Automated WhatsApp + Email Sequences",
              "Custom Zoho CRM Architecture",
              "Sales Playbook + Tiger Sheet",
              "Predictive Funnel Dashboard",
              "Country-Based Auto Routing",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-[#10141d] rounded-2xl border border-white/10 shadow-xl"
              >
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================
            THE IMPACT
      ============================= */}
      <section className="bg-[#0f131a] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Impact in 60 Days
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { metric: "68%", label: "Higher Sales Efficiency" },
              { metric: "4.2x", label: "Faster Lead Qualification" },
              { metric: "3 Countries", label: "Auto-Routing Implemented" },
            ].map((d, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#131920] border border-white/10 shadow-lg">
                <h3 className="text-cyan-300 text-5xl font-extrabold mb-3">
                  {d.metric}
                </h3>
                <p className="text-gray-300 text-lg">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
