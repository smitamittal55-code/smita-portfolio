"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Pencil,
  Trash2,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";

import { api } from "@/lib/api";

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchExperiences = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.getExperiences();

      if (!response.success) {
        setError(
          response.message || "Failed to load experiences."
        );
        return;
      }

      setExperiences(response.experiences || []);
    } catch (error) {
      console.error("Fetch Experiences Error:", error);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this experience?"
    );

    if (!confirmDelete) return;

    try {
      const response = await api.deleteExperience(id);

      if (!response.success) {
        alert(
          response.message || "Failed to delete experience."
        );
        return;
      }

      setExperiences((prev) =>
        prev.filter((experience) => experience._id !== id)
      );
    } catch (error) {
      console.error("Delete Experience Error:", error);
      alert("Unable to connect to server.");
    }
  };

  const currentExperience = experiences.find(
    (experience) => experience.currentlyWorking === true
  );

  const companiesCount = new Set(
    experiences.map((experience) => experience.company)
  ).size;

  return (
    <div className="min-h-screen bg-[#080811] p-6 text-white md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-900/20">
                <BriefcaseBusiness size={22} />
              </div>

              <h1 className="text-3xl font-bold">
                Experience
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles
                size={13}
                className="text-violet-400"
              />

              <p className="text-gray-400">
                Manage your professional experience
              </p>
            </div>
          </div>

          <Link
            href="/admin/experience/add"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 font-semibold shadow-lg shadow-violet-900/20 transition hover:from-violet-500 hover:to-indigo-500"
          >
            <Plus size={19} />
            Add Experience
          </Link>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Total */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20">
            <p className="text-sm text-gray-400">
              Total Experience
            </p>

            {loading ? (
              <div className="mt-3 h-8 w-12 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <h2 className="mt-2 text-3xl font-bold text-white">
                {experiences.length}
              </h2>
            )}
          </div>

          {/* Current Role */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20">
            <p className="text-sm text-gray-400">
              Current Role
            </p>

            {loading ? (
              <div className="mt-3 h-6 w-32 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <h2 className="mt-2 truncate text-lg font-semibold text-white">
                {currentExperience?.jobTitle || "—"}
              </h2>
            )}
          </div>

          {/* Companies */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20">
            <p className="text-sm text-gray-400">
              Companies
            </p>

            {loading ? (
              <div className="mt-3 h-8 w-12 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <h2 className="mt-2 text-3xl font-bold text-white">
                {companiesCount}
              </h2>
            )}
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="space-y-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex gap-4">
                  <div className="hidden h-12 w-12 animate-pulse rounded-xl bg-white/10 sm:block" />

                  <div className="flex-1">
                    <div className="h-6 w-48 animate-pulse rounded-lg bg-white/10" />
                    <div className="mt-3 h-4 w-32 animate-pulse rounded-lg bg-white/10" />
                    <div className="mt-4 h-4 w-64 animate-pulse rounded-lg bg-white/10" />
                    <div className="mt-4 h-16 w-full max-w-3xl animate-pulse rounded-lg bg-white/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : experiences.length === 0 ? (

          /* Empty State */
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <BriefcaseBusiness
              size={42}
              className="mx-auto mb-4 text-gray-500"
            />

            <h2 className="text-xl font-semibold">
              No Experience Added
            </h2>

            <p className="mb-6 mt-2 text-gray-400">
              Add your professional experience to display it here.
            </p>

            <Link
              href="/admin/experience/add"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 font-semibold transition hover:from-violet-500 hover:to-indigo-500"
            >
              <Plus size={18} />
              Add Experience
            </Link>
          </div>

        ) : (

          /* Experience List */
          <div className="space-y-5">
            {experiences.map((experience) => (
              <div
                key={experience._id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-violet-500/30 hover:bg-white/[0.04]"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                  {/* Left */}
                  <div className="flex gap-4">

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 sm:flex">
                      <BriefcaseBusiness
                        size={22}
                        className="text-violet-400"
                      />
                    </div>

                    <div className="min-w-0">

                      {/* Job Title */}
                      <h2 className="text-xl font-bold text-white">
                        {experience.jobTitle}
                      </h2>

                      {/* Company */}
                      <p className="mt-1 font-medium text-violet-400">
                        {experience.company}
                      </p>

                      {/* Details */}
                      <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center sm:gap-5">

                        <span className="flex items-center gap-2">
                          <CalendarDays size={16} />

                          {experience.startDate} -{" "}
                          {experience.currentlyWorking
                            ? "Present"
                            : experience.endDate || "Present"}
                        </span>

                        {experience.location && (
                          <span className="flex items-center gap-2">
                            <MapPin size={16} />
                            {experience.location}
                          </span>
                        )}

                        {experience.employmentType && (
                          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                            {experience.employmentType}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      {experience.description && (
                        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
                          {experience.description}
                        </p>
                      )}

                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2 lg:pt-1">

                    {/* Edit */}
                    <Link
                      href={`/admin/experience/edit/${experience._id}`}
                      className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-gray-300 transition hover:bg-white/5 hover:text-white"
                    >
                      <Pencil size={16} />
                      Edit
                    </Link>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(experience._id)
                      }
                      className="flex items-center gap-2 rounded-lg border border-red-500/20 px-4 py-2.5 text-red-400 transition hover:bg-red-500/10"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

