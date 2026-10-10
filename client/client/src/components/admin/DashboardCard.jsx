"use client";

import { ArrowUpRight } from "lucide-react";

export default function DashboardCard({
  title,
  value,
  description,
  icon: Icon,
  accent = "violet",
}) {
  const violet = accent === "violet";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
        violet
          ? "border-violet-500/20 bg-gradient-to-br from-violet-500/[0.10] via-[#11111d] to-[#0b0b14] hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/30"
          : "border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.10] via-[#11111d] to-[#0b0b14] hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/30"
      }`}
    >
      {/* Glow */}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-[60px] transition-all duration-500 ${
          violet
            ? "bg-violet-600/15 group-hover:bg-violet-600/25"
            : "bg-indigo-600/15 group-hover:bg-indigo-600/25"
        }`}
      />

      {/* Content */}
      <div className="relative">
        {/* Top Section */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
              {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              {value}
            </h2>
          </div>

          {/* Icon */}
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
              violet
                ? "border-violet-500/20 bg-violet-500/10 text-violet-400"
                : "border-indigo-500/20 bg-indigo-500/10 text-indigo-400"
            }`}
          >
            {Icon && <Icon size={20} />}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
          <p className="text-xs text-gray-500">
            {description}
          </p>

          <div
            className={`flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.04] transition-all duration-300 ${
              violet
                ? "text-gray-600 group-hover:bg-violet-500/10 group-hover:text-violet-400"
                : "text-gray-600 group-hover:bg-indigo-500/10 group-hover:text-indigo-400"
            }`}
          >
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

