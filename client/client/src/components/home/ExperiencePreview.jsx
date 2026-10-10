"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    role: "Fullstack Developer",
    company: "Pninfosys",
    location: "Gwalior, Madhya Pradesh",
    duration: "2025 – Present",
    description:
      "Turning ideas into fast, scalable, and impactful web experiences.",
  },
  {
    role: "Cybersecurity Intern",
    company: "Pankh Cyber Solution",
    location: "Gwalior, Madhya Pradesh",
    duration: "2025",
    description:
      "Gained practical experience in cybersecurity, ethical hacking, vulnerability assessment, and basic security practices."

  },
  {
    role: "Web Development Intern",
    company: "CodSoft",
    location: "Remote",
    duration: "2025",
    description:
      "Completed a web development internship focused on building responsive and interactive web applications.",
  },
];

export default function ExperiencePreview() {
  return (
    <section className="relative overflow-hidden bg-[#080811] px-6 py-24 lg:px-8">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

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
              Experience
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              My Professional Journey
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              My experience across teaching and web development has helped
              me build both technical and communication skills.
            </p>
          </div>

          <Link
            href="/experience"
            className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition hover:text-violet-300"
          >
            View full experience
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/20 to-transparent md:block" />

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[9px] top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-violet-500 bg-[#080811] md:block" />

                {/* Card */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.05]">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                    {/* Left */}
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {experience.role}
                        </h3>

                        <p className="mt-1 font-medium text-violet-400">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays className="h-4 w-4" />
                      {experience.duration}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-400">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
