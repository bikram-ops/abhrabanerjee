"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="pt-28 md:pt-32 pb-20 md:pb-24 bg-[#0b0e13] text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-extrabold leading-snug"
          >
            Real Results.{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Proven Growth.
            </span>
          </motion.h1>

          <p className="text-gray-400 mt-5 md:mt-6 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            See how we build growth frameworks, automate operations, and drive
            measurable ROI across D2C, Real Estate, FMCG, B2B, and more.
          </p>
        </div>
      </section>

      {/* ============================
          MAIN CASE STUDIES
      ============================= */}
      <div className="bg-[#0f131a] py-16 md:py-24 space-y-20 md:space-y-28">

        {/* --- CASE 1 --- */}
        <Link href="/casestudies/modern-trade-uplift">
<section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 
gap-12 md:gap-16 items-center group cursor-pointer py-6 md:py-10">
            
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group-hover:scale-[1.02] transition duration-300"
            >
              <Image
                src="/casestudies/case-moderntrade.png"
                width={650}
                height={450}
                alt="Modern Trade Case"
                className="rounded-2xl shadow-xl border border-white/10"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white group-hover:text-cyan-300 transition">
                Modern Trade Uplift
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
                Joint business planning + optimized planograms delivering a
                42% uplift in shelf-share & top-line efficiency.
              </p>

              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li>✔ Smart Planogram Optimization</li>
                <li>✔ Retail Intelligence + Data Models</li>
                <li>✔ 42% Increase in Shelf Share</li>
              </ul>
            </motion.div>
          </section>
        </Link>

        {/* --- CASE 2 (REVERSED) --- */}
        <Link href="/casestudies/digital-enablement-aarkay">
<section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 
gap-12 md:gap-16 items-center group cursor-pointer py-6 md:py-10">

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white group-hover:text-cyan-300 transition">
                Digital Enablement – Aarkay
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
                Automated CRM + WhatsApp journeys with AI scoring improved
                conversion by 68% within 60 days.
              </p>

              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li>✔ Zoho + AI Automation</li>
                <li>✔ Predictive Lead Scoring</li>
                <li>✔ 68% Increase in Sales Efficiency</li>
              </ul>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 group-hover:scale-[1.02] transition duration-300"
            >
              <Image
                src="/casestudies/case-aarkay.png"
                width={650}
                height={450}
                alt="Aarkay Case"
                className="rounded-2xl shadow-xl border border-white/10"
              />
            </motion.div>

          </section>
        </Link>

        {/* --- CASE 3 --- */}
        <Link href="/casestudies/d2c-phygital-cleanomatics">
<section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 
gap-12 md:gap-16 items-center group cursor-pointer py-6 md:py-10">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group-hover:scale-[1.02] transition duration-300"
            >
              <Image
                src="/casestudies/d2c.png"
                width={650}
                height={450}
                alt="Cleanomatics Case"
                className="rounded-2xl shadow-xl border border-white/10"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white group-hover:text-cyan-300 transition">
                D2C Phygital – Cleanomatics
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
                Built a full phygital CRM with segmentation + automated journeys +
                luxury collabs to scale retention.
              </p>

              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li>✔ Phygital CRM + App Integration</li>
                <li>✔ Hyper-personalized Automations</li>
                <li>✔ Luxury Collab Funnel Growth</li>
              </ul>
            </motion.div>
          </section>
        </Link>

        {/* --- CASE 4 (REVERSED) --- */}
        <Link href="/casestudies/b2b-abm-engine">
<section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 
gap-12 md:gap-16 items-center group cursor-pointer py-6 md:py-10">

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white group-hover:text-cyan-300 transition">
                B2B ABM Engine
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
                Account-based funnels with webinar touchpoints, SDR automations &
                pipeline intelligence at scale.
              </p>

              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li>✔ ABM Funnel + Webinars</li>
                <li>✔ SDR Handoff Automations</li>
                <li>✔ Pipeline Intelligence Dashboard</li>
              </ul>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 group-hover:scale-[1.02] transition duration-300"
            >
              <Image
                src="/casestudies/abm.png"
                width={650}
                height={450}
                alt="ABM Case"
                className="rounded-2xl shadow-xl border border-white/10"
              />
            </motion.div>
          </section>
        </Link>

      </div>

     {/* ============================
      LATEST NEWS - SLIDER
=============================== */}
<section className="bg-[#0b0e13] py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
      Latest <span className="text-cyan-400">News & Insights</span>
    </h2>

    {/* Swiper Slider */}
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      effect="fade"
      className="rounded-2xl overflow-hidden"
    >
      {[
        {
          title: "UAE Buyers Fuel Surge in Gurgaon Luxury Segment",
          date: "Nov 2025",
          img: "/images/news1.jpg",
        },
        {
          title: "AI Funnels Cut CAC by 40% for D2C Brands",
          date: "Oct 2025",
          img: "/images/news2.jpg",
        },
        {
          title: "Automation Becomes Non-Negotiable for Scaling Brands",
          date: "Sept 2025",
          img: "/images/news3.jpg",
        },
      ].map((news, i) => (
        <SwiperSlide key={i}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#10141d] rounded-2xl border border-white/10 shadow-xl overflow-hidden"
          >
            <Image
              src={news.img}
              alt={news.title}
              width={1000}
              height={500}
              className="w-full h-64 md:h-96 object-cover"
            />

            <div className="p-6 md:p-8">
              <p className="text-gray-400 text-sm">{news.date}</p>
              <h3 className="text-xl md:text-2xl font-semibold text-white mt-2 leading-snug">
                {news.title}
              </h3>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

      <Footer />
    </>
  );
}
