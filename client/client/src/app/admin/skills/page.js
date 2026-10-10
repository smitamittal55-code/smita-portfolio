"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Code2,
  Layers,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import { api } from "@/lib/api";

export default function SkillsAdmin() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.getSkills();

      if (!response.success) {
        setError(response.message || "Failed to fetch skills.");
        return;
      }

      setSkills(response.skills || []);
    } catch (error) {
      console.error("Fetch Skills Error:", error);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this skill?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      setError("");

      const response = await api.deleteSkill(id);

      if (!response.success) {
        setError(response.message || "Failed to delete skill.");
        return;
      }

      setSkills((prev) =>
        prev.filter((skill) => skill._id !== id)
      );
    } catch (error) {
      console.error("Delete Skill Error:", error);
      setError("Unable to delete skill.");
    } finally {
      setDeletingId(null);
    }
  };

  const categories = new Set(
    skills.map((skill) => skill.category).filter(Boolean)
  ).size;

  return (
    <main className="min-h-full bg-[#080811] px-5 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Sparkles size={14} className="text-violet-400" />

              <p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-400">
                Portfolio
              </p>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Skills
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage your technical skills and expertise.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={fetchSkills}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw
                size={17}
                className={loading ? "animate-spin" : ""}
              />
              Refresh
            </button>

            <Link
              href="/admin/skills/add"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:from-violet-500 hover:to-indigo-500"
            >
              <Plus size={18} />
              Add Skill
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
        <div className="mb-8 grid gap-4 sm:grid-cols-2">

          {/* Total Skills */}
          <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.10] via-[#11111d] to-[#0b0b14] p-5">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-600/15 blur-[60px]" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                <Code2 size={22} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                  Total Skills
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  {loading ? "..." : skills.length}
                </p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.10] via-[#11111d] to-[#0b0b14] p-5">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-600/15 blur-[60px]" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                <Layers size={22} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                  Categories
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  {loading ? "..." : categories}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-20 text-center">
            <RefreshCw
              size={32}
              className="mx-auto mb-4 animate-spin text-violet-400"
            />

            <p className="text-sm text-gray-500">
              Loading skills...
            </p>
          </div>
        ) : skills.length === 0 ? (

          /* Empty State */
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] py-20 text-center">
            <Code2
              size={40}
              className="mx-auto mb-4 text-gray-600"
            />

            <h2 className="text-lg font-semibold text-white">
              No Skills Found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Add your first technical skill.
            </p>

            <Link
              href="/admin/skills/add"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-500 hover:to-indigo-500"
            >
              <Plus size={17} />
              Add Skill
            </Link>
          </div>

        ) : (

          /* Skills Grid */
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill) => {

              const percentage =
                typeof skill.percentage === "number"
                  ? skill.percentage
                  : skill.level === "Expert"
                  ? 100
                  : skill.level === "Advanced"
                  ? 90
                  : skill.level === "Intermediate"
                  ? 70
                  : 40;

              return (
                <div
                  key={skill._id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-violet-950/20"
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-600/10 blur-[60px] transition-all duration-500 group-hover:bg-violet-600/20" />

                  <div className="relative">

                    {/* Icon + Category */}
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                        <Code2 size={20} />
                      </div>

                      {skill.category && (
                        <span className="max-w-[120px] truncate rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                          {skill.category}
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h2 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h2>

                    {/* Level */}
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        {skill.level || "Intermediate"}
                      </p>

                      <span className="text-xs font-medium text-gray-600">
                        {percentage}%
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 transition-all duration-700"
                        style={{
                          width: `${Math.min(
                            Math.max(percentage, 0),
                            100
                          )}%`,
                        }}
                      />
                    </div>

                    {/* Description */}
                    {skill.description && (
                      <p className="mt-3 line-clamp-2 text-xs leading-5 text-gray-600">
                        {skill.description}
                      </p>
                    )}

                    {/* Actions */}
                    <div className="mt-5 flex gap-2 border-t border-white/[0.07] pt-4">
                      <Link
                        href={`/admin/skills/edit/${skill._id}`}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] py-2 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-400"
                      >
                        <Pencil size={15} />
                        Edit
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(skill._id)
                        }
                        disabled={
                          deletingId === skill._id
                        }
                        className="flex h-9 w-10 items-center justify-center rounded-lg border border-red-500/10 bg-red-500/[0.02] text-red-400 transition-all duration-300 hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                        title="Delete"
                      >
                        {deletingId === skill._id ? (
                          <RefreshCw
                            size={15}
                            className="animate-spin"
                          />
                        ) : (
                          <Trash2 size={15} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

