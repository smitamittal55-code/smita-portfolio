"use client";

import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      
      {/* Image / Number */}
      <div className="mb-5 flex h-48 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          <span className="text-5xl font-bold text-slate-300 dark:text-slate-600">
            {project.number}
          </span>
        )}
      </div>

      {/* Category */}
      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
        {project.category}
      </span>

      {/* Title */}
      <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies?.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={() => onViewDetails(project)}
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-500 dark:hover:text-white"
        >
          View Details
          <ArrowUpRight size={16} />
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300"
          >
            <Github size={16} />
            Code
          </a>
        )}
      </div>
    </div>
  );
}