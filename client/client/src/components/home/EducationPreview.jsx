"use client";

import {
  GraduationCap,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Prestige Institute of Management, Gwalior",
    year: "2024 – Present",
    status: "Currently Pursuing",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Pragati Vidhya Peeth",
    year: "2022",
    status: "Completed",
  },
  {
    degree: "Secondary (10th)",
    institution: "Pragati Vidhya Peeth",
    year: "2020",
    status: "Completed",
  },
];

export default function EducationPreview() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-violet-400">
            <GraduationCap size={18} />
            <span>Education</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Academic Journey
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            My educational background and academic journey in computer
            applications.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.045]"
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

              {/* Top */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                  <GraduationCap
                    size={22}
                    className="text-violet-400"
                  />
                </div>

                <span className="text-xs font-semibold tracking-widest text-slate-600">
                  0{index + 1}
                </span>
              </div>

              {/* Degree */}
              <h3 className="relative mt-6 min-h-[64px] text-lg font-semibold leading-7 text-white">
                {item.degree}
              </h3>

              {/* Institution */}
              <div className="relative mt-5 flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-violet-400"
                />

                <span>{item.institution}</span>
              </div>

              {/* Year */}
              <div className="relative mt-3 flex items-center gap-2.5 text-sm text-slate-500">
                <CalendarDays
                  size={16}
                  className="text-indigo-400"
                />

                <span>{item.year}</span>
              </div>

              {/* Status */}
              <div className="relative mt-6 flex items-center justify-between">
                <span
                  className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-medium ${
                    item.status === "Currently Pursuing"
                      ? "border-violet-400/20 bg-violet-500/10 text-violet-300"
                      : "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                  }`}
                >
                  {item.status}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                />
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

