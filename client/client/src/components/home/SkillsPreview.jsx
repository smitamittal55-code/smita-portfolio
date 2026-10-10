"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  Server,
  ArrowUpRight,
} from "lucide-react";

const skills = [
  {
    name: "HTML & CSS",
    category: "Frontend",
    level: "Advanced",
    icon: Code2,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Advanced",
    icon: Code2,
  },
  {
    name: "React.js",
    category: "Frontend",
    level: "Advanced",
    icon: Layers3,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    icon: Layers3,
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    icon: Server,
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Intermediate",
    icon: Server,
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Advanced",
    icon: Database,
  },
];

export default function SkillsPreview() {
  return (
    <section className="relative overflow-hidden bg-[#080811] px-6 py-24 lg:px-8">
      <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

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
              My Skills
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Technologies I Work With
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              I work with modern technologies to create fast, responsive
              and scalable web applications.
            </p>
          </div>

          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition hover:text-violet-300"
          >
            View all skills
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">

                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {skill.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {skill.category}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-violet-400">
                    {skill.level}
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width:
                        skill.level === "Advanced"
                          ? "90%"
                          : "70%",
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
