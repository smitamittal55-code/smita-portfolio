"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  FolderKanban,
  ExternalLink,
  RefreshCw,
} from "lucide-react";

import { api } from "@/lib/api";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.getProjects();

      if (!response.success) {
        setError(response.message || "Failed to fetch projects");
        return;
      }

      setProjects(response.projects || []);
    } catch (error) {
      console.error("Fetch Projects Error:", error);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      setError("");

      const response = await api.deleteProject(id);

      if (!response.success) {
        setError(response.message || "Failed to delete project");
        return;
      }

      setProjects((prev) =>
        prev.filter((project) => project._id !== id)
      );
    } catch (error) {
      console.error("Delete Project Error:", error);
      setError("Unable to delete project.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#080811] px-5 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-medium text-violet-400">
              Admin Panel
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Projects
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage your portfolio projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Refresh */}
            <button
              type="button"
              onClick={fetchProjects}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-300 transition hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw
                size={17}
                className={loading ? "animate-spin" : ""}
              />
              Refresh
            </button>

            {/* Add Project */}
            <Link
              href="/admin/projects/add"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-500 hover:to-indigo-500"
            >
              <Plus size={18} />
              Add Project
            </Link>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="relative mb-8 overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-white/[0.03] to-indigo-600/10 p-5">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/10 blur-[70px]" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
              <FolderKanban size={22} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Total Projects
              </p>

              <p className="text-2xl font-bold text-white">
                {loading ? "..." : projects.length}
              </p>
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-4">
          {loading ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
              <RefreshCw
                size={32}
                className="mx-auto mb-4 animate-spin text-violet-400"
              />

              <p className="text-sm text-gray-500">
                Loading projects...
              </p>
            </div>
          ) : projects.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] py-16 text-center">
              <FolderKanban
                size={40}
                className="mx-auto mb-4 text-gray-600"
              />

              <h2 className="text-lg font-semibold text-white">
                No Projects Found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Add your first project to your portfolio.
              </p>

              <Link
                href="/admin/projects/add"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-violet-500 hover:to-indigo-500"
              >
                <Plus size={17} />
                Add Project
              </Link>
            </div>
          ) : (
            projects.map((project) => (
              <div
                key={project._id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-violet-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                  {/* Project Info */}
                  <div className="flex min-w-0 gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                      <FolderKanban size={21} />
                    </div>

                    <div className="min-w-0">
                      {/* Title */}
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg font-semibold text-white">
                          {project.title}
                        </h2>

                        {project.featured && (
                          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-400">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {project.description}
                      </p>

                      {/* Category */}
                      {project.category && (
                        <p className="mt-2 text-xs font-medium text-indigo-400">
                          {project.category}
                        </p>
                      )}

                      {/* Technologies */}
                      {project.technologies?.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={`${tech}-${index}`}
                              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2">

                    {/* Live Project */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                        title="Live Project"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}

                    {/* GitHub */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-gray-400 transition hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                        title="GitHub"
                      >
                        GH
                      </a>
                    )}

                    {/* Edit */}
                    <Link
                      href={`/admin/projects/edit/${project._id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                      title="Edit"
                    >
                      <Pencil size={17} />
                    </Link>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => handleDelete(project._id)}
                      disabled={deletingId === project._id}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-500/10 text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                      title="Delete"
                    >
                      {deletingId === project._id ? (
                        <RefreshCw
                          size={17}
                          className="animate-spin"
                        />
                      ) : (
                        <Trash2 size={17} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

