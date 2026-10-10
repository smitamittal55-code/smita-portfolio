"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI CRM",
    description:
      "AI-powered customer relationship management system for managing leads, customers, activities and follow-ups.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "College Inventory Management",
    description:
      "Full-stack inventory management application with authentication, item management and dashboard functionality.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Student Portal",
    description:
      "Student management portal with student records, teacher management and CRUD functionality.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-[#080811] px-6 py-24 lg:px-8">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-violet-400">
              Featured Work
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Projects I've Built
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Here are some of my recent projects built using modern
              frontend and backend technologies.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition hover:text-violet-300"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/[0.05]"
            >
              {/* Project Preview */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-transparent">
                <div className="absolute inset-0 bg-grid-white/[0.03]" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <Code2 className="h-9 w-9 text-violet-400" />
                </div>

                {/* Number */}
                <span className="absolute right-5 top-4 text-5xl font-bold text-white/[0.05]">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white transition group-hover:text-violet-300">
                    {project.title}
                  </h3>

                  <Link
                    href={`/projects/${project.id}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition hover:text-violet-300"
                >
                  View project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}