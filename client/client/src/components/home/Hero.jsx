"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Code2,
  Sparkles,
} from "lucide-react";

import RecruiterMode from "@/components/home/RecruiterMode";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#080811] px-6 pt-24 lg:px-8">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-indigo-600/10 blur-[100px]" />

      {/* Main Container */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <Sparkles className="h-4 w-4" />

            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Smita Mittal
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            I build modern, responsive and user-friendly web applications
            using React, Next.js, Node.js and MongoDB. I love turning ideas
            into clean and functional digital experiences.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {/* View Projects */}
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-500 hover:to-indigo-500"
            >
              View My Projects

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
            >
              <Download className="h-4 w-4" />

              Download Resume
            </a>

            {/* Recruiter Mode */}
            <RecruiterMode />
          </div>

          {/* ================= QUICK STATS ================= */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            {/* Projects */}
            <div>
              <p className="text-2xl font-bold text-white">10+</p>

              <p className="mt-1 text-sm text-gray-500">
                Projects
              </p>
            </div>

            {/* Internships */}
            <div>
              <p className="text-2xl font-bold text-white">3+</p>

              <p className="mt-1 text-sm text-gray-500">
                Internships
              </p>
            </div>

            {/* Education */}
            <div>
              <p className="text-2xl font-bold text-white">
                BCA
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Computer Applications
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* ================= MAIN CARD ================= */}
            <div className="relative w-[300px] rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:w-[360px]">
              {/* Icon + Status */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-indigo-600/30 text-violet-300">
                  <Code2 className="h-7 w-7" />
                </div>

                <div className="h-3 w-3 animate-pulse rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
              </div>

              {/* Code Lines */}
              <div className="space-y-4 font-mono text-sm">
                {/* Line 01 */}
                <div className="flex gap-3">
                  <span className="text-violet-400">
                    01
                  </span>

                  <span className="text-gray-500">
                    {"<"}developer{">"}
                  </span>
                </div>

                {/* Line 02 */}
                <div className="flex gap-3 pl-5">
                  <span className="text-violet-400">
                    02
                  </span>

                  <span className="text-indigo-300">
                    const{" "}
                    <span className="text-purple-300">
                      name
                    </span>
                    {" = "}
                    <span className="text-green-300">
                      "Smita"
                    </span>
                  </span>
                </div>

                {/* Line 03 */}
                <div className="flex gap-3 pl-5">
                  <span className="text-violet-400">
                    03
                  </span>

                  <span className="text-indigo-300">
                    const{" "}
                    <span className="text-purple-300">
                      role
                    </span>
                    {" = "}
                    <span className="text-green-300">
                      "Full Stack"
                    </span>
                  </span>
                </div>

                {/* Line 04 */}
                <div className="flex gap-3 pl-5">
                  <span className="text-violet-400">
                    04
                  </span>

                  <span className="text-indigo-300">
                    const{" "}
                    <span className="text-purple-300">
                      passion
                    </span>
                    {" = "}
                    <span className="text-green-300">
                      "Building"
                    </span>
                  </span>
                </div>

                {/* Line 05 */}
                <div className="flex gap-3">
                  <span className="text-violet-400">
                    05
                  </span>

                  <span className="text-gray-500">
                    {"</"}developer{">"}
                  </span>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-gray-500">
                    Currently building
                  </span>

                  <span className="text-right text-xs font-medium text-violet-400">
                    Digital Experiences
                  </span>
                </div>
              </div>
            </div>

            {/* ================= FLOATING TOP CARD ================= */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-5 -top-6 rounded-2xl border border-white/10 bg-[#11111d] px-4 py-3 shadow-xl sm:-right-8"
            >
              <p className="text-xs text-gray-500">
                Tech Stack
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                React • Next.js
              </p>
            </motion.div>

            {/* ================= FLOATING BOTTOM CARD ================= */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-[#11111d] px-4 py-3 shadow-xl sm:-left-8"
            >
              <p className="text-xs text-gray-500">
                Focus
              </p>

              <p className="mt-1 text-sm font-semibold text-violet-300">
                Full Stack Development
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}