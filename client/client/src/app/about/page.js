"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Rocket,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, modern and interactive interfaces using React, Next.js and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Creating scalable APIs and backend systems with Node.js, Express.js and MongoDB.",
  },
  {
    icon: Layers3,
    title: "Full Stack Solutions",
    description:
      "Connecting frontend, backend and databases to create complete real-world applications.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Turning ideas and requirements into clean, practical and user-focused digital solutions.",
  },
];

const strengths = [
  "Responsive Web Development",
  "REST API Development",
  "Database Integration",
  "Authentication & Authorization",
  "Modern UI Development",
  "Git & GitHub",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#050816] pt-[73px] text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-150px] top-[-200px] h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[130px]" />

        <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-36">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={15} />
              Get to know me
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              About{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              I&apos;m Smita Mittal, a passionate Full Stack Developer who
              enjoys turning ideas into modern, functional and meaningful
              digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction + Photo */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              My Journey
            </p>

            <h2 className="text-3xl font-semibold md:text-5xl">
              Building with curiosity.
              <br />
              <span className="text-slate-500">
                Learning with purpose.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-400">
              <p>
                My journey in technology started with curiosity about how
                websites and applications work. Over time, that curiosity
                developed into a strong interest in web development and
                software engineering.
              </p>

              <p>
                I enjoy working across the stack — from designing clean user
                interfaces to developing APIs, connecting databases and
                building complete applications.
              </p>

              <p>
                I believe good development is not only about writing code. It
                is about understanding the problem, creating a simple
                solution and continuously improving the final experience.
              </p>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-2xl" />

              {/* Photo Card */}
              <div className="relative overflow-hidden rounded-full border border-violet-400/20 bg-white/[0.04] p-2">
                <img
                  src="/profile.jpg"
                  alt="Smita Mittal"
                  className="h-[340px] w-[340px] rounded-full object-cover object-top"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#0b1020]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Focus
                </p>

                <p className="mt-1 font-semibold text-white">
                  Full Stack Development
                </p>
              </div>

              {/* Small Badge */}
              <div className="absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 backdrop-blur-xl">
                <Code2 size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              What I Do
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Turning concepts into{" "}
              <span className="text-slate-500">
                working products.
              </span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all hover:border-violet-400/30 hover:bg-white/[0.055]"
                >
                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              My Strengths
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Skills that help me
              <br />
              <span className="text-slate-500">
                build better.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              I focus on writing maintainable code, creating responsive
              experiences and understanding the complete development
              lifecycle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-slate-300"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-cyan-400"
                />

                {strength}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-cyan-500/10 p-10 md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/20 blur-[90px]" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
                Let&apos;s build
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Have an idea?
                <br />

                <span className="text-slate-500">
                  Let&apos;s make it real.
                </span>
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Contact Me
              <ArrowUpRight size={18} />
            </a>

          </div>
        </motion.div>
      </section>

      </main>
    </>
  );
}
