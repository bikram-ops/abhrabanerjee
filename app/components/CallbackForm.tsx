"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CallbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/submit-callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", service: "" });
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-md mx-auto bg-[#0a0a0f] p-6 rounded-2xl shadow-lg border border-white/10 space-y-6"
    >
      {/* Success / Error Popup */}
      <AnimatePresence>
        {success && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-green-600 text-white p-4 rounded-xl text-center font-semibold shadow-lg"
          >
            ✅ Thank You! Abhra's Team will connect you shortly.
          </motion.div>
        )}

        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-red-600 text-white p-4 rounded-xl text-center font-semibold shadow-lg"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="relative">
          <svg
            className="absolute left-3 top-3 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M3 20c1-5 7-5 9-5s7 0 9 5" />
          </svg>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full pl-10 p-3 rounded-lg bg-[#111115] border border-white/20 text-white"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <svg
            className="absolute left-3 top-3 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M2 5l10 7 10-7" />
            <rect x="2" y="5" width="20" height="14" rx="2" />
          </svg>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full pl-10 p-3 rounded-lg bg-[#111115] border border-white/20 text-white"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <svg
            className="absolute left-3 top-3 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 2h12v20H6z" />
            <circle cx="12" cy="18" r="1" />
          </svg>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full pl-10 p-3 rounded-lg bg-[#111115] border border-white/20 text-white"
          />
        </div>

        {/* Service Dropdown */}
        <div className="relative">
          {/* Left Icon */}
          <svg
            className="absolute left-3 top-3 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          {/* Right Animated Arrow */}
          <svg
            className={`absolute right-3 top-4 w-4 h-4 text-gray-300 transition-all duration-300 ${
              dropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
            required
            className="w-full pl-10 pr-10 p-3 rounded-lg bg-[#111115] border border-white/20 text-white appearance-none"
          >
            <option value="">Select a Service</option>
            <option value="performance-marketing">Performance Marketing</option>
            <option value="crm-automation">CRM Automation + Martech</option>
            <option value="brand-strategy">Brand Strategy + Creative</option>
            <option value="content-creative">Content + Creative</option>
            <option value="web-development">Web + Tech Development</option>
            <option value="consulting">Consulting</option>
            <option value="marketing">Marketing</option>
            <option value="crm-implementation">CRM Implementation</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </motion.div>
  );
}
