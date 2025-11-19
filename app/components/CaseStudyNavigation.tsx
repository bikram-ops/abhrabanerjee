
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CaseStudyNavigation() {
  const pathname = usePathname();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const items = [
    {
      title: "Modern Trade Uplift",
      subtitle: "42% Growth in Shelf Share",
      link: "/casestudies/modern-trade",
      icon: "📊",
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Aarkay Digital Enablement",
      subtitle: "68% Conversion Increase",
      link: "/casestudies/aarkay",
      icon: "🤖",
      color: "from-blue-400 to-purple-500",
    },
    {
      title: "Cleanomatics D2C Phygital",
      subtitle: "52% Higher Engagement",
      link: "/casestudies/cleanomatics",
      icon: "📱",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "B2B ABM Engine",
      subtitle: "3.5× Account Engagement",
      link: "/casestudies/abm",
      icon: "🎯",
      color: "from-pink-400 to-red-500",
    },
    {
      title: "Cleanomatics CRM Integration",
      subtitle: "45% Productivity Boost",
      link: "/casestudies/bigin",
      icon: "📞",
      color: "from-green-400 to-teal-500",
    },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background Gradient Orbs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

          {/* Main Container */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl shadow-[0_0_40px_rgba(0,150,255,0.08)] p-8 md:p-12">
            
            {/* Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400/20 to-blue-500/20 
                  rounded-2xl flex items-center justify-center border border-cyan-400/30">
                  <span className="text-3xl">📚</span>
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
                Explore Other Case Studies
              </h3>
              <p className="text-gray-400 text-lg">
                Discover more success stories and transformations
              </p>
            </div>

            {/* Case Study Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4 mb-8"
            >
              {items.map((item, i) => {
                const isActive = pathname === item.link;
                
                return (
                  <motion.div
                    key={i}
                    variants={itemVariant}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.link}
                      className={`block group relative overflow-hidden rounded-2xl 
                        ${isActive 
                          ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/50' 
                          : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                        } 
                        border backdrop-blur-sm transition-all duration-300
                        hover:shadow-[0_0_30px_rgba(0,150,255,0.15)]`}
                    >
                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 
                        group-hover:opacity-5 transition-opacity duration-300`} />

                      <div className="relative p-6">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} 
                            bg-opacity-10 flex items-center justify-center flex-shrink-0
                            group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-2xl">{item.icon}</span>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-semibold text-white mb-1 
                              group-hover:text-transparent group-hover:bg-clip-text 
                              group-hover:bg-gradient-to-r group-hover:${item.color} 
                              transition-all duration-300">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-400 group-hover:text-gray-300 
                              transition-colors duration-300">
                              {item.subtitle}
                            </p>
                          </div>

                          {/* Arrow Icon */}
                          <div className="text-gray-500 group-hover:text-cyan-400 
                            group-hover:translate-x-1 transition-all duration-300">
                            <svg 
                              className="w-5 h-5" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-[#0a0a0a] text-gray-500 text-sm">or</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group relative inline-flex items-center gap-2 px-8 py-4 
                  rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 
                  text-white font-semibold overflow-hidden
                  hover:shadow-[0_0_30px_rgba(0,150,255,0.4)] transition-all duration-300"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative flex items-center gap-2">
                  <svg 
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                    />
                  </svg>
                  Back to Home
                </span>
              </Link>

              <Link
                href="/#cta"
                className="group inline-flex items-center gap-2 px-8 py-4 
                  rounded-xl bg-white/5 border border-white/10
                  text-white font-semibold
                  hover:bg-white/10 hover:border-white/20
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] 
                  transition-all duration-300"
              >
                <span className="relative flex items-center gap-2">
                  Start Your Transformation
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats Footer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-300 to-cyan-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Case Studies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-300 to-blue-400">
                    100+
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-300 to-purple-400">
                    50+
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
