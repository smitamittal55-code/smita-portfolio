"use client";

import { X, ExternalLink, Github } from "lucide-react";

export default function ProjectDetails({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
        >
          <X size={20} />
        </button>

        {/* Project Image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="mb-6 h-56 w-full rounded-xl object-cover"
          />
        )}

        {/* Category */}
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {project.category}
        </span>

        {/* Title */}
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h2>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
          {project.longDescription || project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6">
          <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Live Demo
              <ExternalLink size={17} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300"
            >
              <Github size={17} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}