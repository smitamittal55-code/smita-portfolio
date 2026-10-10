
"use client";

import { useState } from "react";
import Link from "next/link";

import {
  BriefcaseBusiness,
  Code2,
  FileText,
  Mail,
  X,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function RecruiterMode() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          RECRUITER MODE SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#050816] py-24">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="pointer-events-none absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

        <div className="relative mx-auto flex max-w-6xl justify-center px-6">
          {/* Recruiter Button */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-violet-200 shadow-lg shadow-violet-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/[0.15] hover:text-white hover:shadow-violet-900/30"
          >
            {/* Hover Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <BriefcaseBusiness className="relative h-4 w-4 text-violet-400" />

            <span className="relative">
              Recruiter Mode
            </span>

            <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>

      {/* =====================================================
          RECRUITER MODAL
      ====================================================== */}

      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-[#02030a]/90 p-4 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        >
          {/* Modal Background Glow */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

          <div
            className="relative my-8 w-full max-w-4xl overflow-hidden rounded-[30px] border border-white/10 bg-[#070a13] shadow-2xl shadow-violet-950/50"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Decorative Glow */}

            <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />

            <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[120px]" />

            {/* =================================================
                HEADER
            ================================================== */}

            <div className="relative border-b border-white/[0.08] bg-white/[0.015] px-6 py-6 md:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {/* Recruiter Label */}

                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-300">
                    <Sparkles className="h-3.5 w-3.5" />

                    Recruiter View
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    Smita Mittal
                  </h2>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

                    <p className="text-sm text-slate-400">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* Close Button */}

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close recruiter mode"
                  className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-slate-500 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Header Gradient Line */}

              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
            </div>

            {/* =================================================
                CONTENT
            ================================================== */}

            <div className="relative max-h-[75vh] overflow-y-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 md:p-8">
              {/* =================================================
                  ABOUT
              ================================================== */}

              <div className="relative overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-r from-violet-500/[0.08] via-fuchsia-500/[0.035] to-cyan-500/[0.05] p-5">
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />

                <div className="relative flex gap-3">
                  <div className="mt-1 h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-400 to-cyan-400" />

                  <p className="text-sm leading-7 text-slate-300 md:text-base">
                    BCA student and Full Stack Developer focused on building
                    fast, responsive and scalable web applications using
                    modern JavaScript technologies.
                  </p>
                </div>
              </div>

              {/* =================================================
                  STATS
              ================================================== */}

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <StatCard
                  icon={<Code2 className="h-5 w-5" />}
                  value="10+"
                  label="Projects"
                />

                <StatCard
                  icon={<BriefcaseBusiness className="h-5 w-5" />}
                  value="3+"
                  label="Internships"
                />

                <StatCard
                  icon={<CheckCircle2 className="h-5 w-5" />}
                  value="Full Stack"
                  label="Focus"
                />
              </div>

              {/* =================================================
                  SKILLS
              ================================================== */}

              <div className="mt-9">
                <SectionTitle
                  icon={<Code2 className="h-4 w-4" />}
                  title="Core Skills"
                />

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React.js",
                    "Next.js",
                    "Tailwind CSS",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST APIs",
                    "JWT",
                    "Git & GitHub",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-xs text-slate-400 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  PROJECTS
              ================================================== */}

              <div className="mt-9">
                <SectionTitle
                  icon={<Code2 className="h-4 w-4" />}
                  title="Recommended Projects"
                />

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <ProjectItem
                    title="AI-CRM"
                    description="AI-powered CRM with lead management, customer management, activities and authentication."
                    technologies="Next.js • Node.js • MongoDB • JWT"
                    href="/projects/ai-crm"
                  />

                  <ProjectItem
                    title="Inventory Management System"
                    description="Full-stack inventory system for managing departments, items, stock and reports."
                    technologies="React • Node.js • Express • MongoDB"
                    href="/projects/inventory-management-system"
                  />
                </div>
              </div>

              {/* =================================================
                  EXPERIENCE
              ================================================== */}

              <div className="mt-9">
                <SectionTitle
                  icon={<BriefcaseBusiness className="h-4 w-4" />}
                  title="Experience"
                />

                <div className="mt-4 space-y-3">
                  <ExperienceItem
                    role="Web Development Intern"
                    company="PN Infosys"
                  />

                  <ExperienceItem
                    role="Web Development Intern"
                    company="CodSoft"
                  />

                  <ExperienceItem
                    role="Cybersecurity Intern"
                    company="Pankh Cyber Solution"
                  />
                </div>
              </div>

              {/* =================================================
                  EDUCATION
              ================================================== */}

              <div className="mt-9">
                <SectionTitle
                  icon={<FileText className="h-4 w-4" />}
                  title="Education"
                />

                <div className="group relative mt-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />

                  <div className="relative">
                    <h3 className="font-semibold text-white">
                      Bachelor of Computer Applications
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Prestige Institute of Management & Research, Gwalior
                    </p>

                    <span className="mt-4 inline-flex rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-1 text-xs text-violet-300">
                      Currently Pursuing
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  ACTION BUTTONS
              ================================================== */}

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {/* Resume */}

                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-violet-400/25 bg-gradient-to-r from-violet-500/15 to-indigo-500/10 px-5 py-3.5 text-sm font-semibold text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-white hover:shadow-lg hover:shadow-violet-950/30"
                >
                  <FileText className="h-4 w-4 text-violet-400" />

                  Download Resume

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>

                {/* Contact */}

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=smitamittal55@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-cyan-500/[0.07] hover:text-cyan-300"
                >
                  <Mail className="h-4 w-4" />

                  Contact Me
                </a>

                {/* GitHub */}

                <a
                  href="https://github.com/smitamittal55-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-violet-500/[0.07] hover:text-violet-300"
                >
                  {/* GitHub SVG */}

                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 8.24a9.2 9.2 0 0 1 2.5.35c1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.11 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.95.68 1.92v2.84c0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
                  </svg>

                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ icon, value, label }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-500/[0.04]">
      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-violet-500/[0.06] blur-2xl transition group-hover:bg-violet-500/15" />

      <div className="relative">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300">
          {icon}
        </div>

        <div className="text-xl font-bold text-white">
          {value}
        </div>

        <div className="mt-1 text-xs text-slate-500">
          {label}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-white">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
        {icon}
      </span>

      {title}
    </div>
  );
}

/* =========================================================
   PROJECT ITEM
========================================================= */

function ProjectItem({
  title,
  description,
  technologies,
  href,
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-500/[0.035] hover:shadow-lg hover:shadow-violet-950/20"
    >
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/[0.06] blur-2xl transition group-hover:bg-violet-500/10" />

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
      </div>

      <p className="relative mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

      <p className="relative mt-4 text-xs text-violet-300/80">
        {technologies}
      </p>
    </Link>
  );
}

/* =========================================================
   EXPERIENCE ITEM
========================================================= */

function ExperienceItem({ role, company }) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.035]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.07] text-violet-300">
        <BriefcaseBusiness className="h-4 w-4" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-white">
          {role}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          {company}
        </p>
      </div>

      <ArrowUpRight className="ml-auto h-4 w-4 text-slate-700 transition group-hover:text-violet-400" />
    </div>
  );
}

