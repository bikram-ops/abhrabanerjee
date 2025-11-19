// "use client";

// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import { motion } from "framer-motion";
// import CaseStudyNavigation from "@/app/components/CaseStudyNavigation";

// export default function Page(): JSX.Element {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <main className="bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#0f0f0f] text-white min-h-screen">
//       <Header />

//       <section id="case-cleanomatics-bigin" className="py-24 bg-transparent">
//         <div className="max-w-5xl mx-auto px-6">

//           {/* HEADING */}
//           <h2
//             className="text-4xl md:text-5xl font-extrabold text-center 
//             text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-14"
//           >
//             Case Study: How Cleanomatics Boosted Sales & Customer Service Productivity 
//             by 45% with MyOperator X Bigin by Zoho CRM
//           </h2>

//           {/* CARD */}
//           <div
//             className="bg-white/5 backdrop-blur-xl border border-white/10 
//             rounded-3xl shadow-[0_0_40px_rgba(0,150,255,0.08)]
//             p-10 space-y-12"
//           >

//             {/* INTRODUCTION */}
//             <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-4">
//               <h3 className="text-3xl font-bold text-white">Introduction</h3>

//               <p className="text-gray-300 leading-relaxed">
//                 This success story highlights how Cleanomatics transformed its sales, customer 
//                 communication, and operational workflows using the integrated power of MyOperator 
//                 and Bigin by Zoho CRM.
//               </p>

//               <p className="text-gray-300 leading-relaxed">
//                 The seamless integration enabled Cleanomatics to streamline customer interactions, 
//                 track communication end-to-end, and increase productivity across sales and service teams.
//               </p>
//             </motion.div>

//             {/* ABOUT CLEANOMATICS */}
//             <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-4">
//               <h3 className="text-3xl font-bold text-white">About Cleanomatics</h3>

//               <p className="text-gray-300 leading-relaxed">
//                 Cleanomatics is a leading on-demand cleaning and laundry service provider operating 
//                 across five cities, offering premium doorstep pickup and drop-off convenience.
//               </p>

//               <p className="text-gray-300 leading-relaxed">
//                 Founded at UC Berkeley’s SkyDeck and backed by MARL Accelerator LLC and India Accelerator, 
//                 Cleanomatics has grown rapidly into one of India's fastest-growing service tech companies.
//               </p>
//             </motion.div>

//             {/* CHALLENGES */}
//             <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-6">
//               <h3 className="text-3xl font-bold text-white">Business Challenges Before Implementation</h3>

//               {/* Challenge 1 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-300">1. Disorganized Sales Operations</h4>
//                 <p className="text-gray-300 mt-2">
//                   No centralized system to track sales activities or performance.
//                 </p>
//               </div>

//               {/* Challenge 2 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-300">2. No End-to-End Communication Tracking</h4>
//                 <p className="text-gray-300 mt-2">This resulted in:</p>
//                 <ul className="list-disc ml-6 text-gray-300 mt-2">
//                   <li>Miscommunication</li>
//                   <li>Missed follow-ups</li>
//                   <li>Poor response times</li>
//                 </ul>
//               </div>

//               {/* Challenge 3 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-300">3. No KPI or Performance Visibility</h4>
//                 <ul className="list-disc ml-6 text-gray-300 mt-2">
//                   <li>Unclear sales funnel movement</li>
//                   <li>No call performance tracking</li>
//                   <li>No analytics for customer service teams</li>
//                 </ul>
//               </div>

//               {/* Challenge 4 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-300">4. Lack of Transparency for Customers</h4>
//                 <ul className="list-disc ml-6 text-gray-300 mt-2">
//                   <li>Unclear contact points</li>
//                   <li>No clarity on request status</li>
//                   <li>No communication history</li>
//                 </ul>
//               </div>

//               {/* Challenge 5 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-blue-300">5. Scattered Call Management</h4>
//                 <p className="text-gray-300 mt-2">
//                   No unified view of inbound or outbound call activity across departments.
//                 </p>
//               </div>
//             </motion.div>

//             {/* SOLUTION IMPLEMENTED */}
//             <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-6">
//               <h3 className="text-3xl font-bold text-white">The Solution: MyOperator X Bigin by Zoho CRM</h3>

//               <p className="text-gray-300">
//                 A fully integrated CRM + call management ecosystem was deployed to unify communication, 
//                 sales processes, and customer interactions.
//               </p>

//               {/* Feature 1 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-cyan-300">1. Unified CRM Dashboard Inside Bigin</h4>
//                 <ul className="list-disc ml-6 text-gray-300 mt-2">
//                   <li>Complete call logs</li>
//                   <li>Centralized customer records</li>
//                   <li>Full communication timeline</li>
//                 </ul>
//               </div>

//               {/* Feature 2 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-cyan-300">2. Seamless Data Sync Across Apps</h4>
//                 <p className="text-gray-300 mt-2">Synced across:</p>
//                 <ul className="list-disc ml-6 text-gray-300 mt-2">
//                   <li>Bigin CRM</li>
//                   <li>MyOperator call center</li>
//                   <li>WhatsApp automation</li>
//                   <li>Internal operations tools</li>
//                 </ul>
//               </div>

//               {/* Feature 3 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-cyan-300">3. Automated Call-Based Workflows</h4>
//                 <ul className="list-disc ml-6 text-gray-300 mt-2">
//                   <li>Missed call → Auto-create follow-up task</li>
//                   <li>Inbound call → Auto-update pipeline stage</li>
//                   <li>IVR selection → Route to correct department</li>
//                 </ul>
//               </div>

//               {/* Feature 4 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-cyan-300">4. Sales Reporting & KPI Tracking</h4>
//                 <ul className="list-disc ml-6 text-gray-300 mt-2">
//                   <li>Sales performance dashboards</li>
//                   <li>Call conversion analytics</li>
//                   <li>Agent productivity reports</li>
//                   <li>Marketing campaign ROI</li>
//                 </ul>
//               </div>

//               {/* Feature 5 */}
//               <div>
//                 <h4 className="text-xl font-semibold text-cyan-300">5. Marketing ROI Intelligence</h4>
//                 <p className="text-gray-300 mt-2">
//                   MyOperator provided deep insights into:
//                 </p>
//                 <ul className="list-disc ml-6 text-gray-300 mt-2">
//                   <li>Top-performing campaigns</li>
//                   <li>City-wise call distribution</li>
//                   <li>Cost-per-call metrics</li>
//                 </ul>
//               </div>
//             </motion.div>

//             {/* IMPACT SECTION */}
//             <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-6">
//               <h3 className="text-3xl font-bold text-white">Results & Impact</h3>

//               <ul className="list-disc ml-6 text-gray-300 space-y-3">
//                 <li>
//                   <b className="text-cyan-300">📞 23% increase</b> in inbound customer calls
//                 </li>
//                 <li>
//                   <b className="text-cyan-300">⚡ 45% jump</b> in sales & customer service productivity
//                 </li>
//                 <li>🔗 Streamlined end-to-end communication pipeline</li>
//                 <li>💼 Faster & clearer customer experience</li>
//                 <li>📊 Data-backed business decisions</li>
//               </ul>
//             </motion.div>

//             {/* TESTIMONIAL */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10"
//             >
//               <h3 className="text-xl font-semibold text-cyan-300">Customer Testimonial</h3>

//               <p className="text-gray-300 italic">
//                 “This is an amazing integrated solution that helped us track all customer communication 
//                 activities through one platform. Customer data management has never been simpler. 
//                 We look forward to a successful partnership in the days to come.”
//               </p>

//               <p className="text-gray-400">— Apratim Banerjee, CTO, Cleanomatics</p>
//             </motion.div>

//             {/* CONCLUSION */}
//             <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-4 pb-4">
//               <h3 className="text-3xl font-bold text-white">Conclusion</h3>

//               <p className="text-gray-300 leading-relaxed">
//                 With MyOperator X Bigin, Cleanomatics built a scalable, efficient, and 
//                 customer-centric communication ecosystem that improved productivity by 45% 
//                 and strengthened customer trust.
//               </p>

//               <p className="text-gray-300 leading-relaxed">
//                 This integration showcases how powerful CRM + communication automation can drive 
//                 measurable business impact for fast-growing service companies.
//               </p>
//             </motion.div>

//           </div>
//         </div>
//       </section>
//       <CaseStudyNavigation />
//       <Footer />
//     </main>
//   );
// }
"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import CaseStudyNavigation from "@/app/components/CaseStudyNavigation";
import Image from "next/image";

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

      <section id="case-cleanomatics-bigin" className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADING */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-8"
          >
            <div className="inline-block px-6 py-2 bg-cyan-500/10 border border-cyan-400/30 
              rounded-full mb-6">
              <span className="text-cyan-300 font-semibold">MyOperator × Bigin by Zoho CRM</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-center 
              text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 mb-6">
              Cleanomatics Success Story
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
              How Cleanomatics Boosted Sales & Customer Service Productivity by 45% 
              with Integrated CRM & Call Management
            </p>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16
            shadow-[0_0_60px_rgba(0,150,255,0.2)] border border-white/10"
          >
            <Image
              src="/api/placeholder/1200/500"
              alt="Cleanomatics customer service operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
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
                  45%
                </div>
                <div className="text-gray-300 font-medium text-lg">Productivity Increase</div>
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
                  23%
                </div>
                <div className="text-gray-300 font-medium text-lg">More Inbound Calls</div>
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
                  100%
                </div>
                <div className="text-gray-300 font-medium text-lg">Unified Communication</div>
              </div>
            </div>
          </motion.div>

          {/* MAIN CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl shadow-[0_0_40px_rgba(0,150,255,0.08)]
            p-8 md:p-12 space-y-16">

            {/* INTRODUCTION */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Introduction</h3>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
                border border-cyan-400/20 rounded-2xl p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  This success story highlights how Cleanomatics transformed its sales, customer 
                  communication, and operational workflows using the integrated power of <strong className="text-cyan-300">MyOperator</strong> 
                  and <strong className="text-blue-300">Bigin by Zoho CRM</strong>.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  The seamless integration enabled Cleanomatics to streamline customer interactions, 
                  track communication end-to-end, and increase productivity across sales and service teams.
                </p>
              </div>
            </motion.div>

            {/* ABOUT CLEANOMATICS WITH IMAGE */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">About Cleanomatics</h3>
              </div>

              <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                border border-blue-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(0,150,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      Cleanomatics is a leading <strong className="text-cyan-300">on-demand cleaning and laundry service</strong> provider 
                      operating across five cities, offering premium doorstep pickup and drop-off convenience.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Founded at UC Berkeley's SkyDeck and backed by MARL Accelerator LLC and India Accelerator, 
                      Cleanomatics has grown rapidly into one of India's fastest-growing service tech companies.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <div className="px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full">
                        <span className="text-blue-300 font-semibold text-sm">🏢 5 Cities</span>
                      </div>
                      <div className="px-4 py-2 bg-purple-500/20 border border-purple-400/40 rounded-full">
                        <span className="text-purple-300 font-semibold text-sm">🚀 Fast-Growing</span>
                      </div>
                      <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full">
                        <span className="text-cyan-300 font-semibold text-sm">🎓 UC Berkeley</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-[350px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Cleanomatics service operations"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CHALLENGES */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Business Challenges Before Implementation
                </h3>
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
                        Disorganized Sales Operations
                      </h4>
                      <p className="text-gray-300">
                        No centralized system to track sales activities or performance, leading to 
                        inefficiencies and missed opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Challenge 2 */}
                <div className="bg-gradient-to-br from-orange-500/5 to-yellow-500/5 
                  border border-orange-400/10 rounded-2xl p-6
                  hover:border-orange-400/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">💬</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        No Communication Tracking
                      </h4>
                      <p className="text-gray-300 mb-2">This resulted in:</p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Miscommunication between teams</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Missed follow-ups with customers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Poor response times</span>
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
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📈</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        No KPI or Performance Visibility
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Unclear sales funnel movement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>No call performance tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>No analytics for customer service</span>
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
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">👥</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-3">
                        Lack of Customer Transparency
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Unclear contact points</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>No clarity on request status</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>No communication history</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge 5 - Full Width */}
              <div className="bg-gradient-to-br from-teal-500/5 to-cyan-500/5 
                border border-teal-400/10 rounded-2xl p-6
                hover:border-teal-400/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📞</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-blue-300 mb-3">
                      Scattered Call Management
                    </h4>
                    <p className="text-gray-300">
                      No unified view of inbound or outbound call activity across departments, 
                      leading to fragmented customer interactions and inefficient resource allocation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SOLUTION WITH IMAGES */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  The Solution: MyOperator × Bigin by Zoho CRM
                </h3>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
                border border-cyan-400/20 rounded-2xl p-8 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  A fully integrated <strong className="text-cyan-300">CRM + call management ecosystem</strong> was 
                  deployed to unify communication, sales processes, and customer interactions across all touchpoints.
                </p>
              </div>

              {/* Feature 1 - CRM Dashboard */}
              <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 
                border border-blue-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(0,150,255,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[350px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Unified CRM dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">📊</span>
                      <h4 className="text-2xl font-semibold text-cyan-300">
                        Unified CRM Dashboard
                      </h4>
                    </div>

                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span>Complete call logs with recordings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span>Centralized customer records</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span>Full communication timeline</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                        <span>Real-time activity tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Data Sync */}
              <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 
                border border-purple-400/20 rounded-2xl p-8
                hover:border-purple-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🔄</span>
                  <h4 className="text-2xl font-semibold text-purple-300">
                    Seamless Data Sync Across Apps
                  </h4>
                </div>

                <p className="text-gray-300 mb-4 text-lg">Synchronized across all platforms:</p>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-purple-500/10 border border-purple-400/30 rounded-xl p-4 text-center
                    hover:bg-purple-500/20 transition-all duration-300">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-purple-300 font-semibold">Bigin CRM</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-4 text-center
                    hover:bg-blue-500/20 transition-all duration-300">
                    <div className="text-2xl mb-2">☎️</div>
                    <div className="text-blue-300 font-semibold">MyOperator</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-4 text-center
                    hover:bg-green-500/20 transition-all duration-300">
                    <div className="text-2xl mb-2">💬</div>
                    <div className="text-green-300 font-semibold">WhatsApp</div>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-4 text-center
                    hover:bg-cyan-500/20 transition-all duration-300">
                    <div className="text-2xl mb-2">⚙️</div>
                    <div className="text-cyan-300 font-semibold">Operations</div>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Automated Workflows */}
              <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 
                border border-green-400/20 rounded-2xl p-8
                hover:border-green-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚡</span>
                  <h4 className="text-2xl font-semibold text-green-300">
                    Automated Call-Based Workflows
                  </h4>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-6">
                    <div className="text-2xl mb-3">📞</div>
                    <div className="text-gray-300">
                      <strong className="text-green-300">Missed Call</strong>
                      <br />→ Auto-create follow-up task
                    </div>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-400/20 rounded-xl p-6">
                    <div className="text-2xl mb-3">📥</div>
                    <div className="text-gray-300">
                      <strong className="text-teal-300">Inbound Call</strong>
                      <br />→ Auto-update pipeline stage
                    </div>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-6">
                    <div className="text-2xl mb-3">🎯</div>
                    <div className="text-gray-300">
                      <strong className="text-cyan-300">IVR Selection</strong>
                      <br />→ Route to correct team
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 - KPI Tracking */}
              <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 
                border border-orange-400/20 rounded-3xl overflow-hidden
                hover:shadow-[0_0_40px_rgba(255,150,0,0.15)] transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">📊</span>
                      <h4 className="text-2xl font-semibold text-orange-300">
                        Sales Reporting & KPI Tracking
                      </h4>
                    </div>

                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 text-xl mt-0.5">✓</span>
                        <span>Sales performance dashboards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 text-xl mt-0.5">✓</span>
                        <span>Call conversion analytics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 text-xl mt-0.5">✓</span>
                        <span>Agent productivity reports</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-400 text-xl mt-0.5">✓</span>
                        <span>Marketing campaign ROI</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative h-[350px] md:h-auto">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Sales KPI dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 5 - Marketing ROI */}
              <div className="bg-gradient-to-br from-pink-500/5 to-purple-500/5 
                border border-pink-400/20 rounded-2xl p-8
                hover:border-pink-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">💡</span>
                  <h4 className="text-2xl font-semibold text-pink-300">
                    Marketing ROI Intelligence
                  </h4>
                </div>

                <p className="text-gray-300 mb-4 text-lg">
                  MyOperator provided deep insights into campaign performance:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl mt-0.5">✓</span>
                    <span className="text-gray-300">Top-performing campaigns by channel</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl mt-0.5">✓</span>
                    <span className="text-gray-300">City-wise call distribution analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl mt-0.5">✓</span>
                    <span className="text-gray-300">Cost-per-call and conversion metrics</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* IMPACT & RESULTS */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Results & Impact</h3>
              </div>

              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-8
                shadow-[0_0_60px_rgba(0,200,255,0.25)] border border-cyan-400/30">
                <Image
                  src="/api/placeholder/1200/300"
                  alt="Success and growth metrics"
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
                    <span className="text-4xl">📞</span>
                    <div>
                      <div className="text-3xl font-bold text-cyan-300 mb-2">23%</div>
                      <p className="text-gray-300">
                        <strong>Increase in Inbound Calls</strong> — improved customer reach 
                        and engagement across all channels
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
                      <div className="text-3xl font-bold text-blue-300 mb-2">45%</div>
                      <p className="text-gray-300">
                        <strong>Jump in Productivity</strong> — sales & customer service teams 
                        became significantly more efficient
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                  border border-purple-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(150,100,255,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🔗</span>
                    <div>
                      <p className="text-gray-300">
                        <strong className="text-purple-300 text-lg">Streamlined Communication Pipeline</strong>
                        <br />End-to-end visibility of all customer touchpoints
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 
                  border border-green-400/30 rounded-2xl p-6
                  hover:shadow-[0_0_30px_rgba(0,200,150,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">💼</span>
                    <div>
                      <p className="text-gray-300">
                        <strong className="text-green-300 text-lg">Enhanced Customer Experience</strong>
                        <br />Faster response times and clearer communication
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
                border border-cyan-400/30 rounded-2xl p-6 mt-6">
                <p className="text-gray-300 text-lg text-center">
                  <strong className="text-cyan-300">📊 Data-Backed Decisions:</strong> Leadership 
                  gained real-time insights for strategic planning and resource allocation
                </p>
              </div>
            </motion.div>

            {/* TESTIMONIAL */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/10 to-purple-500/5 rounded-3xl blur-xl" />
              
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                border border-blue-400/30 rounded-3xl p-10
                hover:shadow-[0_0_50px_rgba(0,150,255,0.2)] transition-all duration-300">
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                  <h3 className="text-2xl font-bold text-white">Customer Testimonial</h3>
                </div>

                <div className="text-6xl text-cyan-400/20 mb-4">"</div>

                <p className="text-gray-300 text-lg italic leading-relaxed mb-6 pl-4">
                  This is an amazing integrated solution that helped us track all customer communication 
                  activities through one platform. Customer data management has never been simpler. 
                  We look forward to a successful partnership in the days to come.
                </p>

                <div className="flex items-center gap-4 pl-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 
                    flex items-center justify-center text-white text-2xl font-bold">
                    A
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Apratim Banerjee</div>
                    <div className="text-cyan-300">CTO, Cleanomatics</div>
                  </div>
                </div>
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
                  With <strong className="text-cyan-300">MyOperator × Bigin</strong>, Cleanomatics 
                  built a scalable, efficient, and customer-centric communication ecosystem that improved 
                  productivity by <strong className="text-blue-300">45%</strong> and strengthened customer trust.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  This integration showcases how powerful CRM + communication automation can drive 
                  measurable business impact for fast-growing service companies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-400/40 rounded-full">
                  <span className="text-cyan-300 font-semibold">#CRMIntegration</span>
                </div>
                <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/40 rounded-full">
                  <span className="text-blue-300 font-semibold">#CallManagement</span>
                </div>
                <div className="px-6 py-3 bg-purple-500/20 border border-purple-400/40 rounded-full">
                  <span className="text-purple-300 font-semibold">#ZohoCRM</span>
                </div>
                <div className="px-6 py-3 bg-green-500/20 border border-green-400/40 rounded-full">
                  <span className="text-green-300 font-semibold">#CustomerSuccess</span>
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
