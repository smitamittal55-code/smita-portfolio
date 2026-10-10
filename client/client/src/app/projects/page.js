"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "AI-CRM",
    slug: "ai-crm",
    category: "Full Stack",
    description:
      "An AI-powered CRM application designed to manage leads, customers, activities and follow-ups through a modern dashboard.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AI",
    ],
    featured: true,
    github: "https://github.com/smitamittal55-code/AI-CRM.git",
    live: "https://ai-crm-dusky.vercel.app/login",
  },
  {
    title: "Inventory Management System",
    slug: "inventory-management-system",
    category: "Full Stack",
    description:
      "A complete inventory management application with authentication, dashboard, inventory operations and department management.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    featured: true,
    github: "#",
    live: "#",
  },
  {
    title: "Student Portal",
    slug: "student-portal",
    category: "Full Stack",
    description:
      "A student management portal for organizing student information with a clean and responsive interface.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    featured: false,
    github: "#",
    live: "#",
  },
  {
    title: "College ERP Management System",
    slug: "college-erp-management-system",
    category: "Web Application",
    description:
      "A college-focused ERP concept designed to manage academic information and provide a structured digital experience.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
    ],
    featured: false,
    github: "#",
    live: "#",
  },
  {
    title: "Job Portal UI",
    slug: "job-portal-ui",
    category: "Frontend",
    description:
      "A modern job portal interface focused on clean layouts, responsive design and an intuitive user experience.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
    ],
    featured: false,
    github: "#",
    live: "#",
  },
  {
    title: "Finance Dashboard",
    slug: "finance-dashboard",
    category: "Frontend",
    description:
      "A modern finance dashboard for presenting financial data, statistics and insights through interactive UI components.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Recharts",
      "JavaScript",
    ],
    featured: false,
    github: "https://github.com/smitamittal55-code/finance-dashboard-2026-smita.git",
    live: "#",
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#050816] pt-[73px] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-180px] top-[-150px] h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[130px]" />

        <div className="absolute right-[-180px] top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Header */}
      <section className="px-6 pb-16 pt-36">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={15} />
              Selected Work
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Projects that turn
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                ideas into reality.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              A collection of applications and interfaces I&apos;ve built
              while exploring full-stack development, modern UI and
              real-world problem solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                Featured
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Selected projects
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                featured
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
              More Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Other projects
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
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

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Have a project?
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Let&apos;s build something
                <br />
                <span className="text-slate-500">
                  meaningful together.
                </span>
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Start a Conversation
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>
      </main>
    </>
  );
}

/* =========================
   Project Card
========================= */

function ProjectCard({ project, index, featured = false }) {
  const router = useRouter();

  const openProject = () => {
    router.push(`/projects/${project.slug}`);
  };

  return (
    <motion.article
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProject();
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.title} project details`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -7 }}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.055] ${
        featured ? "p-7 md:p-8" : "p-6"
      }`}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-[80px] transition duration-500 group-hover:bg-violet-500/20" />

      {/* Project visual */}
      <div
        className={`relative mb-7 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-slate-900/40 to-cyan-500/10 ${
          featured ? "h-56" : "h-44"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
              <Code2 size={34} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`font-semibold tracking-tight ${
              featured ? "text-2xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>

          {project.featured && (
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-cyan-300">
              Featured
            </span>
          )}
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex items-center gap-3" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            onClick={openProject}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300 transition hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-white"
          >
            <GithubIcon />
            View Details
          </button>

          <button
            type="button"
            onClick={openProject}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
          >
            View Project
            <ExternalLink size={15} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================
   GitHub Icon
   Custom SVG because
   lucide-react Github export
   is unavailable in your setup
========================= */

function GithubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.17 9.17 0 0 1 12 7.01c.85 0 1.7.12 2.5.37 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}
