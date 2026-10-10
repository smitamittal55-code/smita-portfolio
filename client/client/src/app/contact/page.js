"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import { api } from "@/lib/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await api.sendMessage(formData);

      if (response.success) {
        setSuccess(
          "Message sent successfully! I will get back to you soon."
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError(response.message || "Failed to send message.");
      }
    } catch (err) {
      console.error("Contact Form Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#05050f] px-6 pb-20 pt-[153px] text-white sm:px-10 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Contact <span className="text-violet-400">Me</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a project, opportunity, or just want to say hello?
            Feel free to get in touch with me.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-violet-500" />
        </motion.div>

        {/* Main Content */}
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-violet-400/20 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold">
              Let&apos;s{" "}
              <span className="text-violet-400">Connect</span>
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              I&apos;m always open to discussing new projects,
              development opportunities, collaborations, and
              interesting ideas.
            </p>

            {/* Email */}
            <a
              href="mailto:smitamittal55@gmail.com"
              className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Mail size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-white">
                  smitamittal55@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Phone size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-white">
                  Available on request
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-white">
                  Gwalior, Madhya Pradesh, India
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-4 text-sm text-gray-500">
                Connect with me
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-gray-300 transition hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-400"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-gray-300 transition hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-violet-400/20 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <h2 className="mb-6 text-3xl font-bold">
              Send Me a{" "}
              <span className="text-violet-400">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-400/60"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-400/60"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-400/60"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-400/60"
                />
              </div>

              {/* Success */}
              {success && (
                <div className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <p>{success}</p>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  );
}
