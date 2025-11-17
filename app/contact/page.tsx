"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Building2 } from "lucide-react";
import { fadeUp, scaleFade } from "../lib/animations";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", category: "", message: "" });

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <>
    <Header/>
    <section className="relative bg-[#0a0a0f] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Get in Touch
        </motion.h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Have a question or project in mind? Let’s discuss how we can collaborate to bring your vision to life.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Building2 className="text-cyan-300" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Our Office</h4>
                <p className="text-gray-400">Nakshy Tower, Berhampore, West Bengal, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Phone className="text-cyan-300" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-400">+91 62828 93208</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Mail className="text-cyan-300" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-400">bigbeup@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <MapPin className="text-cyan-300" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Hours</h4>
                <p className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-[#101018] border border-white/10 text-white focus:border-cyan-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-[#101018] border border-white/10 text-white focus:border-cyan-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Service Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#101018] border border-white/10 text-white focus:border-cyan-400 outline-none"
              >
                <option value="">Select a category</option>
                <option value="web">Web Development</option>
                <option value="marketing">Digital Marketing</option>
                <option value="crm">CRM / SaaS</option>
                <option value="design">Design & Branding</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 rounded-lg bg-[#101018] border border-white/10 text-white focus:border-cyan-400 outline-none resize-none"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
