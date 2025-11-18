"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, BarChart3, Users, Rocket, Target, Zap, Award } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallbackForm from "./components/CallbackForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
/* -------------------------------------------------------------------
 ✅ INLINE SVG ICONS
------------------------------------------------------------------- */
const Icon = {
  arrowRight: (
    <svg width="18" height="18" fill="currentColor">
      <path d="M9 3l1.4 1.4L7.8 7H14v2H7.8l2.6 2.6L9 13l-5-5 5-5z" />
    </svg>
  ),
  sparkles: (
    <svg width="18" height="18" fill="currentColor">
      <path d="M8 0l1.5 4L14 6l-4.5 2L8 12l-1.5-4L2 6l4.5-2L8 0zm7 8l1 3-1 3-3 1-3-1-1-3 1-3 3-1 3 1z" />
    </svg>
  ),
  users: (
    <svg width="18" height="18" fill="currentColor">
      <path d="M5.5 8A3.5 3.5 0 1 1 9 4.5 3.5 3.5 0 0 1 5.5 8zM11 14v-1a4 4 0 0 0-8 0v1zM11.5 8a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 11.5 8zm1.5 6v-1a3 3 0 0 0-4-2.8 5.5 5.5 0 0 1 3.5 5.8h2z" />
    </svg>
  ),
  chart: (
    <svg width="18" height="18" fill="currentColor">
      <path d="M2 14h12v-2H2v2zm2-4h2V6H4v4zm4 0h2V2H8v8zm4 0h2V4h-2z" />
    </svg>
  ),
  mail: (
    <svg width="18" height="18" fill="currentColor">
      <path d="M1 4l7 4 7-4v8H1V4zm14-2H1l7 4 7-4z" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" fill="currentColor">
      <path d="M3 1l3-1 2 5-2 1c1 2 3 4 5 5l1-2 5 2-1 3c-1 2-3 2-5 1-4-2-8-5-10-10C0 4 1 2 3 1z" />
    </svg>
  ),
  globe: (
    <svg width="18" height="18" fill="currentColor">
      <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm6 7H9a15 15 0 0 0-1-4 6 6 0 0 1 6 4z" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" fill="currentColor">
      <path d="M1 1h3v14H1V1zm4 4h3v2h.1a3.3 3.3 0 0 1 3-1.6c3 0 4 2 4 5v6h-3V11c0-1 0-3-2-3-2 0-2 2-2 3v4H5V5z" />
    </svg>
  ),
};




/* -------------------------------------------------------------------
 ✅ ANIMATION PRESETS
------------------------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

/* -------------------------------------------------------------------
 ✅ LAYOUT COMPONENTS
------------------------------------------------------------------- */
const Section = ({ id, children, className = "" }: any) => (
  <section id={id} className={`max-w-7xl mx-auto px-6 py-20 ${className}`}>
    {children}
  </section>
);

const Card = ({ children }: any) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -4, transition: { duration: 0.3 } }}
    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow hover:shadow-xl backdrop-blur transition-all"
  >
    {children}
  </motion.div>
);

/* -------------------------------------------------------------------
 ✅ NAVBAR
------------------------------------------------------------------- */
function Navbar() {
  return (
    < Header />
  );
}

/* -------------------------------------------------------------------
 ✅ MAIN PAGE
------------------------------------------------------------------- */

export default function AbhraBanerjeePage() {
  return (
    <main className="bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#0f0f0f] text-white">
      <Navbar />

      {/* ✅ HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
        {/* Floating gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* LEFT */}
          <div className="lg:col-span-7 space-y-6">
      <motion.div
  variants={fadeUp}
  className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full 
             bg-blue-500/20 border border-blue-400/40 text-blue-300 font-medium
             backdrop-blur-md"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5 flex-shrink-0"
    fill="currentColor"
  >
    {/* Knot */}
    <path d="M9 2h6l-1.2 4H10.2L9 2z" />

    {/* Tie Body */}
    <path d="M10.2 6L8 20l4 3l4-3l-2.2-14h-3.6z" />
  </svg>

  From Mad Men to Machine Learning
</motion.div>



            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Abhra Banerjee
              <span className="block text-xl mt-3 text-gray-400 font-normal">
                Founder · Cleanomatics · Fractional CMO · Martech Leader
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg max-w-xl text-gray-400">
              From global brand leadership to founding Cleanomatics - shaping the future of martech, customer experience, and digital growth.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#cta"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 hover:scale-105 transition"
              >
                Book Deep-Dive
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  {Icon.arrowRight}
                </motion.span>
              </a>
              <a
                href="#cases"
                className="border border-blue-300 text-blue-300 px-6 py-3 rounded-2xl hover:bg-blue-50/10 hover:text-white transition"
              >
                View Case Studies
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div variants={scaleFade} className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full" />
            <img
              src="/hero.jpg"
              alt="Abhra Banerjee"
              className="relative rounded-3xl shadow-2xl border border-white/10 h-[400px] w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>
<section id="abhras-story" className="py-24 bg-transparent">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* RIGHT — TEXT CONTENT (Now First on Mobile) */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="text-white order-1 md:order-2"
    >
      <h3 className="text-sm tracking-widest text-blue-400 font-semibold mb-2">
        ABHRA'S STORY
      </h3>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Corporate Veteran Turned Silicon<br />
        Valley Entrepreneur
      </h2>

      <p className="text-gray-400 leading-relaxed mb-6">
        Spanning a career of three decades, Abhra Banerjee is an alumnus of
        the <span className="text-gray-300 font-medium">Delhi School of Economics, XLRI</span> and
        <span className="text-gray-300 font-medium"> UC Berkeley - Haas School of Business</span>.
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        Abhra has worked across <span className="text-gray-300 font-medium">India, South East Asia,
        Europe, and the US</span> in multiple C-suite roles (CMO & CEO), building and scaling some of
        the world’s most prestigious brands.
      </p>

      {/* BRAND LOGOS */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        <img src="/brands/ogilvy_logo.jpg" className="opacity-80 hover:opacity-100 transition" />
        <img src="/brands/havells.jpg" className="opacity-80 hover:opacity-100 transition" />
        <img src="/brands/dulux.jpg" className="opacity-80 hover:opacity-100 transition" />
        <img src="/brands/century_plyboards_i_limited_logo.jpg" className="opacity-80 hover:opacity-100 transition" />
        <img src="/brands/dalmia_cement_logo.jpg" className="opacity-80 hover:opacity-100 transition" />
        <img src="/brands/cleanomatics_logo.jpg" className="opacity-80 hover:opacity-100 transition" />
      </div>
    </motion.div>

    {/* LEFT — IMAGE (Now Second on Mobile) */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full order-2 md:order-1"
    >
      <img
        src="/images/abhra-profile.png"
        alt="Abhra Banerjee"
        className="rounded-2xl shadow-lg object-cover w-full"
      />
    </motion.div>

  </div>
</section>



      
{/* ✅ JOURNEY SECTION */}
<section
  id="journey"
  className="relative bg-gradient-to-b from-[#0a0a0f] via-[#0b0b12] to-[#0f0f0f] py-24 overflow-hidden"
>
  {/* Background gradient & glow */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c11] to-[#0f0f0f]" />
    <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Journey of Growth & Transformation
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        A professional evolution from brand storytelling to digital transformation leadership.
      </p>
    </motion.div>

    {/* Two-column layout */}
    <div className="grid md:grid-cols-2 gap-10">
      {[
        {
          year: "1995 - 1996",
          company: "Ogilvy & Mather",
          role: "Account Executive",
          location: "Kolkata, India",
          details:
            "Managed Command Cellular – one of Ogilvy Kolkata’s biggest accounts. Built a foundation in strategic brand and client management.",
          skills:
            "Advertising · Brand Strategy · Client Servicing · Project Coordination",
          media: "/journey/ogilvy.mp4",
          credit: "© Ogilvy Media"
        },
        {
          year: "2003 - 2005",
          company: "Times Mobile (The Times of India Group)",
          role: "Head - Marketing (Telecom)",
          location: "Mumbai, India",
          details:
            "Led telecom content marketing for India’s largest media group. Pioneered mobile short-code ecosystem & strategic brand partnerships.",
          skills:
            "Marketing Strategy · Mobile Campaigns · Product Innovation · Media Planning",
          media: "/journey/times.mp4",
          credit: "© Times Group"
        },
        {
          year: "2005 - 2008",
          company: "Akzo Nobel / ICI Paints (Thailand)",
          role: "Channel Marketing Controller",
          location: "Bangkok, Thailand",
          details:
            "Managed ASEAN retail channel strategy. Drove color marketing innovation and channel optimization across Southeast Asia.",
          skills:
            "Channel Marketing · Retail Strategy · CRM · Regional Management",
          media: "/journey/akzonobel_logo.jpg",
          credit: "© Akzo Nobel"
        },
        {
          year: "2008 - 2013",
          company: "Century Plyboards (I) Ltd",
          role: "Vice President & Business Head",
          location: "Kolkata, India",
          details:
            "Led Decorative & Furniture divisions. Spearheaded diversification and national expansion within building materials category.",
          skills:
            "Leadership · CRM · Business Development · Sales Strategy",
          media: "/journey/century.mp4",
          credit: "© Century Ply"
        },
        {
          year: "2013 - 2016",
          company: "Dalmia Bharat Group",
          role: "Executive Director - Sales & Marketing",
          location: "Kolkata, India",
          details:
            "Drove national expansion & dealer engagement. Led breakthrough performance marketing initiatives in the cement category.",
          skills:
            "Business Growth · Channel Development · Performance Marketing · Leadership",
          media: "/journey/dalmia.jpeg",
          credit: "© Dalmia Bharat"
        },
        {
          year: "2016 - 2019",
          company: "Havells India Ltd",
          role: "Vice President & SBU Head",
          location: "New Delhi, India",
          details:
            "Headed STANDARD Electricals. Achieved record growth & diversification into consumer durables after Lloyds acquisition.",
          skills:
            "Strategy · Business Scaling · Sales Operations · Product Expansion",
          media: "/journey/havells.mp4",
          credit: "© Havells India"
        },
        {
          year: "2020 - Present",
          company: "Cleanomatics Tech Solutions",
          role: "Founder & CEO",
          location: "Gurugram, India",
          details:
            "Built India's first tech-enabled D2C laundry & textile care platform with CRM automation, logistics optimization & AI ops.",
          skills:
            "Business Leadership · CRM · Automation · Brand Strategy · Innovation",
          media: "/journey/cleanomatics.mp4",
          credit: "© Cleanomatics"
        },
        {
          year: "2022 - Present",
          company: "BNI Incredibles, Gurgaon",
          role: "Leadership Member",
          location: "Gurugram, India",
          details:
            "Former President, Education Coordinator & Mentor. Facilitated business growth through structured networking.",
          skills:
            "Networking · Mentorship · Communication · Leadership",
          media: "/journey/bni.jpeg",
          credit: "© BNI Gurgaon"
        },
      ].map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-start bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
          {/* Text Side */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-white mb-1">{exp.company}</h3>
            <p className="text-sm text-blue-400 mb-2">{exp.role}</p>
            <p className="text-gray-400 text-sm">{exp.year}</p>
            <p className="text-gray-500 text-xs mb-3">{exp.location}</p>
            <p className="text-gray-300 mb-3 leading-relaxed">{exp.details}</p>
            <p className="text-sm text-gray-400 italic">{exp.skills}</p>
          </div>

          {/* Media Side — SQUARE */}
          <div className="md:w-1/2">
            <div className="aspect-square w-full rounded-xl overflow-hidden relative group">
              {exp.media?.endsWith(".mp4") ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src={exp.media} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={exp.media}
                  alt={exp.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>

            {/* Credit */}
            <p className="text-xs text-gray-500 mt-2 text-center">
              {exp.credit}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* ✅ AWARDS */}
<section id="awards" className="py-28 bg-transparent relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full absolute top-10 left-10"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

    {/* LEFT — TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="text-white"
    >
      <h3 className="text-sm tracking-widest text-blue-400 font-semibold mb-3">
        NOTABLE AWARDS & RECOGNITION
      </h3>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
        A Career Marked by Global  
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {" "}Excellence & Impact
        </span>
      </h2>

      <ul className="space-y-4 text-gray-300 mt-6">

  <li className="flex items-start gap-3">
    {/* Award Icon */}
    <svg className="w-6 h-6 text-blue-400 mt-1 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M5.5 22 7 14h10l1.5 8L12 19l-6.5 3Z" />
    </svg>

    <a 
      href="https://bestmediainfo.com/2011/08/abhra-banerjee-of-centuryply-bags-cmo-asia-award" 
      target="_blank" 
      className="hover:text-white transition"
    >
      Marketing Person of the Year, CMO Asia (2011)
    </a>
  </li>

  <li className="flex items-start gap-3">
    {/* Star Badge */}
    <svg className="w-6 h-6 text-purple-400 mt-1 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="m12 2 3 6 6 .9-4.5 4.4 1.1 6.5L12 17l-5.6 3 1.1-6.5L3 8.9 9 8l3-6Z"/>
    </svg>

    <a 
      href="https://www.asiaretailcongress.com/about_past_2013.html" 
      target="_blank"
      className="hover:text-white transition"
    >
      Chairperson of Asian Retail Congress (2013)
    </a>
  </li>

  <li className="flex items-start gap-3">
    {/* Book / Study Icon */}
    <svg className="w-6 h-6 text-green-400 mt-1 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M4 19.5V6a2 2 0 0 1 2-2h11m3 15.5V4.5a2.5 2.5 0 0 0-2.5-2.5H6" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </svg>

    <a 
      href="https://hbsp.harvard.edu/product/W12179-PDF-ENG" 
      target="_blank" 
      className="hover:text-white transition"
    >
      “Developing a Power Brand in a Commoditized Market” (2016)
    </a>
  </li>

  <li className="flex items-start gap-3">
    {/* Graduation Cap */}
    <svg className="w-6 h-6 text-yellow-400 mt-1 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M3 10v6a9 4 0 0 0 18 0v-6" />
    </svg>

    <a 
      href="https://hbsp.harvard.edu/product/W12179-PDF-ENG" 
      target="_blank" 
      className="hover:text-white transition"
    >
      Harvard Business School Case Study - Critically Acclaimed & Taught Globally
    </a>
  </li>

  <li className="flex items-start gap-3">
    {/* Medal */}
    <svg className="w-6 h-6 text-red-400 mt-1 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="4" />
      <path d="m8 3 4 5 4-5" />
    </svg>

    <a 
      href="https://www.iafindia.com/" 
      target="_blank" 
      className="hover:text-white transition"
    >
      India Achievers’ Award (2020)
    </a>
  </li>

  <li className="flex items-start gap-3">
    {/* Berkeley Icon (Shield) */}
    <svg className="w-6 h-6 text-blue-300 mt-1 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M5 4h14l-2 14-5 3-5-3L5 4Z" />
    </svg>

    <a 
      href="https://executive.berkeley.edu/" 
      target="_blank" 
      className="hover:text-white transition"
    >
      UC Berkeley Executive MBA Mentor (2022)
    </a>
  </li>

  <li className="flex items-start gap-3">
    {/* Rocket Icon */}
    <svg className="w-6 h-6 text-pink-400 mt-1 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M14 9l-3 3m3-3 1 5-5-1m4-4-5 5m6-9.5V3h-3.5L4 10l10 10 7-7.5V9h-2.5Z" />
    </svg>

    <span>
      Three Institutional Funding Rounds Raised (2023)  
      <br />
      <span className="font-medium space-x-2">
  <a 
    
    target="_blank" 
    className="text-blue-400 hover:text-blue-300 transition"
  >
    Stadhawk Inc
  </a>

  <span className="text-gray-500">•</span>

  <a 
    href="https://www.crunchbase.com/organization/stadhawk-logistics-pvt-ltd" 
    target="_blank" 
    className="text-blue-400 hover:text-blue-300 transition"
  >
    Cleanomatics Solutions Pvt Ltd
  </a>
</span>

    </span>
  </li>

</ul>

    </motion.div>

    {/* RIGHT — HERO IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex justify-center w-full"
    >
      <img
        src="/images/Award.JPG"
        alt="Awards & Recognition"
        className="w-full max-w-lg rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-transform duration-500"
      />
    </motion.div>

  </div>
</section>
{/* ✅ SERVICES SECTION */}
<Section
  id="services"
  className="py-20"
>
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    className="text-4xl font-extrabold mb-14 text-center 
    text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
  >
    How Abhra Helps Businesses Grow
  </motion.h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        title: "Virtual CMO + Business Growth",
        problem: [
          "Unclear marketing direction",
          "High CAC, low-quality leads",
          "No alignment across teams",
        ],
        solution: [
          "End-to-end growth strategy",
          "Fixing funnel leaks",
          "Cross-team alignment & KPIs",
        ],
        outcome: "Predictable and scalable revenue systems.",
      },
      {
        title: "Martech, CRM & Automation",
        problem: [
          "No lead tracking or follow-ups",
          "Manual operations slow growth",
          "No visibility on performance",
        ],
        solution: [
          "CRM setup",
          "Sales & marketing automation",
          "Dashboards & analytics",
        ],
        outcome: "Faster conversions with zero operational chaos.",
      },
      {
        title: "Brand Building & Personal Branding",
        problem: [
          "Low brand recall",
          "Weak identity or positioning",
          "Crowded & competitive category",
        ],
        solution: [
          "Brand narrative + positioning",
          "Digital identity & communication",
          "Celebrity/industry-driven branding",
        ],
        outcome: "High trust and premium brand perception.",
      },
      {
        title: "GTM Strategy & Omni-Channel Growth",
        problem: [
          "No clarity on best channels",
          "Poor launch outcomes",
          "Weak market penetration",
        ],
        solution: [
          "Disruptive GTM design",
          "Channel acquisition planning",
          "Competition & category mapping",
        ],
        outcome: "Strong multi-channel presence and pipeline.",
      },
      {
        title: "HR, Leadership & Organization Systems",
        problem: [
          "Unstructured HR processes",
          "Low team motivation",
          "No KPIs, KRAs or performance system",
        ],
        solution: [
          "Talent + success planning",
          "KPI/KRA frameworks",
          "PMS, R&R & culture building",
        ],
        outcome: "A motivated team that drives revenue growth.",
      },
      {
        title: "Growth Hacking & Scaling",
        problem: [
          "Stagnant or slow growth",
          "No innovative experiments",
          "Overdependence on one channel",
        ],
        solution: [
          "High-ROI growth levers",
          "Multi-layer acquisition channels",
          "Retention + loyalty systems",
        ],
        outcome: "Compounding long-term business growth.",
      },
    ].map((s, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl 
        border border-white/10 hover:shadow-[0_0_25px_rgba(0,200,255,0.15)]
        transition"
      >
        <h3 className="font-bold text-xl text-white mb-4">{s.title}</h3>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-cyan-300 font-semibold">You face:</p>
          <ul className="list-disc ml-5 text-gray-300 text-sm">
            {s.problem.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-blue-300 font-semibold">Abhra solves by:</p>
          <ul className="list-disc ml-5 text-gray-300 text-sm">
            {s.solution.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-green-300 font-semibold">
          Outcome: <span className="text-gray-300">{s.outcome}</span>
        </p>
      </motion.div>
    ))}
  </div>
</Section>

{/* ✅ CASE STUDIES / WORK SECTION */}
<section id="cases" className="relative bg-transparent py-24 overflow-hidden">

  {/* Heading */}
  <h2
    className="text-4xl md:text-5xl font-extrabold mb-14 text-center 
               text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400"
  >
    Selected Case Studies
  </h2>

  {/* SCROLL WRAPPER */}
  <div className="relative overflow-hidden scroll-group">

    {/* SCROLL ROW */}
    <div className="flex gap-8 animate-scroll scroll-group-hover:[animation-play-state:paused]">

      {[...Array(2)].flatMap((_, repeatIndex) =>
        [
          {
            title: "Modern Trade Uplift",
            img: "/images/case-moderntrade.jpeg",
            summary:
              "Joint business planning + optimized planograms delivering 42% uplift in shelf share.",
          },
          {
            title: "Digital Enablement – Aarkay",
            img: "/images/case-aarkay.jpg",
            summary:
              "Zoho + AI automation boosted CRM efficiency and improved lead conversions by 68%.",
          },
          {
            title: "D2C Phygital – Cleanomatics",
            img: "/images/case-cleanomatics.jpg",
            summary:
              "App-first CRM segmentation with hyper-personalized journeys and luxury collaborations.",
          },
          {
            title: "B2B ABM Engine",
            img: "/images/case-abm.jpg",
            summary:
              "Account-based funnels with webinar touchpoints, SDR handoff & pipeline intelligence.",
          },
        ].map((item, i) => (
          <div key={`${repeatIndex}-${i}`} className="min-w-[350px] cursor-pointer">

            {/* Card */}
            <div
              className="relative h-[450px] rounded-3xl overflow-hidden 
                         border border-white/10 bg-[#101018]/80 backdrop-blur-xl
                         shadow-[0_0_40px_rgba(0,225,255,0.05)] 
                         transition-all duration-700 
                         hover:shadow-[0_0_55px_rgba(0,225,255,0.15)]">

              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover 
                             transition-transform duration-[1200ms] hover:scale-110"
                />
              </div>

              {/* Text Layer */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t 
                              from-black/70 via-black/30 to-transparent">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-snug mb-4">
                  {item.summary}
                </p>

                {/* Read More Button */}
                <button
                  className="px-4 py-2 text-sm rounded-lg bg-cyan-500/20 
                             text-cyan-300 border border-cyan-400/30 
                             hover:bg-cyan-500/30 transition"
                >
                  Read Full Case Study →
                </button>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  </div>
</section>




<section className="py-24 bg-[#0a0a0f]">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    
    {/* LEFT COLUMN — HEADING + POINTS */}
    <div>
      <motion.h2 
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        WHY CHOOSE <span className="text-blue-500">ABHRA</span>
      </motion.h2>

      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        className="text-gray-300 leading-relaxed mb-8"
      >
        With 30+ years of hands-on experience across India, SEA, Europe and the US - 
        Abhra brings a rare combination of corporate leadership, startup execution and 
        Silicon Valley innovation.
      </motion.p>

      <ul className="space-y-8">

        {/* PROPOSITION */}
        <motion.li 
          initial={{opacity:0, x:-20}}
          whileInView={{opacity:1, x:0}}
          className="flex items-start gap-4"
        >
          {/* Animated SVG */}
          <svg className="w-10 h-10 text-blue-500 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-5a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <div>
            <h3 className="text-xl font-semibold text-white">PROPOSITION</h3>
            <p className="text-gray-400 leading-relaxed">
              Startups and small enterprises are usually up against large conglomerates.  
              With limited resources, they must adopt the smartest marketing practices 
              to win by <span className="text-blue-400 font-medium">changing the game</span>.
            </p>
          </div>
        </motion.li>

        {/* VALUE FOR MONEY */}
        <motion.li 
          initial={{opacity:0, x:-20}}
          whileInView={{opacity:1, x:0}}
          className="flex items-start gap-4"
        >
          {/* Animated SVG */}
          <svg className="w-10 h-10 text-blue-500 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4m8 0a4 4 0 00-4-4m0 0V4m0 8a4 4 0 004 4m-4 0v4m0-4a4 4 0 01-4-4" />
          </svg>

          <div>
            <h3 className="text-xl font-semibold text-white">VALUE FOR MONEY</h3>
            <p className="text-gray-400 leading-relaxed">
              Abhra’s approach is extremely result-oriented. Backed by core marketing 
              principles, he works in phases - first <span className="font-medium text-blue-400">
              test the waters</span>, and if it works, go <span className="text-white font-bold">
              ALL IN</span>.
            </p>
          </div>
        </motion.li>

      </ul>
    </div>

    {/* RIGHT COLUMN — HERO IMAGE */}
    <motion.div 
      initial={{opacity:0, scale:0.9}}
      whileInView={{opacity:1, scale:1}}
      className="flex justify-center"
    >
      <img 
        src="/images/Abhra-sir-with-Bollywood.png" 
        alt="Abhra Banerjee" 
        className="w-full max-w-md rounded-2xl shadow-lg shadow-blue-900/30"
      />
    </motion.div>

  </div>
</section>

{/* CTA Section */}
<section
  id="cta"
  className="py-20 bg-[#0b0e13] border-white/10 overflow-x-hidden"
>
  <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start w-full">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 leading-snug">
        Let’s Build Something Exceptional
      </h2>

      <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
        Whether you need marketing, CRM automation, brand strategy or
        performance-driven growth — we create solutions that deliver measurable impact.
      </p>

      {/* Highlights */}
      <div className="space-y-3">
        {[
          "Performance Marketing & Funnels",
          "CRM Automation + Martech",
          "Brand Strategy + Creative Production",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <svg width="22" height="22" fill="none" stroke="cyan" strokeWidth="2">
              <circle cx="11" cy="11" r="10" />
              <path d="M6 11l3 3 6-6" stroke="cyan" />
            </svg>
            <span className="text-gray-300 text-sm md:text-base">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT FORM */}
    <div className="bg-[#10141d] p-6 md:p-10 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl w-full">

      <h3 className="flex items-center text-xl md:text-2xl font-semibold text-white mb-4 gap-3">
        Get a Callback
        <motion.span
          animate={{ rotate: [0, -12, 12, -12, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
          className="inline-flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3a2 2 0 012 2v2a2 2 0 01-.586 1.414l-2 2a16 16 0 006 6l2-2A2 2 0 0115 13h2a2 2 0 012 2v3a2 2 0 01-2 2c-8.837 0-16-7.163-16-16z"
            />
          </svg>
        </motion.span>
      </h3>

      {/* Contact Info */}
      <div className="text-gray-300 mb-5 space-y-1 text-sm md:text-base">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:abhra.banerjee@cleanomatics.com"
            className="text-cyan-400 hover:underline"
          >
            abhra.banerjee@cleanomatics.com
          </a>
        </p>
        <p>
          📞 Phone:{" "}
          <a href="tel:+919874917772" className="text-cyan-400 hover:underline">
            +91 98749 17772
          </a>
        </p>
      </div>

      {/* Form */}
      <div className="scale-[0.97] md:scale-100 transform origin-top">
        <CallbackForm />
      </div>
    </div>
  </div>
</section>

{/* ✅ FOOTER SECTION */}
< Footer />


    </main>
  );
}
