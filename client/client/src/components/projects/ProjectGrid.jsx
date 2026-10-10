"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectGrid({ projects = [] }) {
  const router = useRouter();

  const openProject = (slug) => {
    router.push(`/projects/${slug}`);
  };

  if (!projects.length) {
    return (
      <div className="py-20 text-center text-slate-400">
        No projects available.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.slug || project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: index * 0.08,
          }}
          whileHover={{ y: -7 }}
          onClick={() => openProject(project.slug)}
          className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.055]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-[80px] transition duration-500 group-hover:bg-violet-500/20" />

          {/* Project Visual */}
          <div className="relative mb-7 flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-slate-900/40 to-cyan-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                  <Code2 size={34} />
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
              {project.category}
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>

              {project.featured && (
                <span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-cyan-300">
                  Featured
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="mt-7 flex items-center gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => openProject(project.slug)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300 transition hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-white"
              >
                View Details
                <ArrowUpRight size={15} />
              </button>

              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                >
                  Live
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

