"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07070a] px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-violet-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              About Me
            </span>
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid gap-14 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-zinc-300">
              I&apos;m{" "}
              <span className="font-semibold text-white">
                Smita Mittal
              </span>
              , a passionate Full Stack Developer who enjoys building
              modern and meaningful web applications.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              I work across the frontend and backend, creating responsive
              interfaces, REST APIs and database-driven applications.
              I enjoy turning ideas into clean, functional and
              user-friendly digital products.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              My development stack includes React.js, Next.js, Node.js,
              Express.js and MongoDB. I&apos;m continuously learning new
              technologies and improving my problem-solving skills.
            </p>

            <a
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-cyan-400"
            >
              More About Me

              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >

            {/* Frontend */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/40">
              <Code2
                size={28}
                className="text-violet-400 transition group-hover:scale-110"
              />

              <h3 className="mt-5 font-semibold">
                Frontend
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                React.js, Next.js, Tailwind CSS and modern UI development.
              </p>
            </div>

            {/* Backend */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
              <Database
                size={28}
                className="text-cyan-400 transition group-hover:scale-110"
              />

              <h3 className="mt-5 font-semibold">
                Backend
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Node.js, Express.js, REST APIs and server-side development.
              </p>
            </div>

            {/* UI / UX */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/40">
              <Layout
                size={28}
                className="text-violet-400 transition group-hover:scale-110"
              />

              <h3 className="mt-5 font-semibold">
                UI / UX
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Responsive interfaces focused on usability and clean design.
              </p>
            </div>

            {/* Problem Solving */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
              <Rocket
                size={28}
                className="text-cyan-400 transition group-hover:scale-110"
              />

              <h3 className="mt-5 font-semibold">
                Problem Solving
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Building practical solutions and continuously learning.
              </p>
            </div>

          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      </div>
    </section>
  );
}