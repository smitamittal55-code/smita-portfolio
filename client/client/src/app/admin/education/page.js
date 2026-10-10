"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Pencil,
  Trash2,
  Plus,
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  Sparkles,
} from "lucide-react";

import { api } from "@/lib/api";

export default function EducationPage() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEducation = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.getEducation();

      if (!response.success) {
        setError(
          response.message || "Failed to load education."
        );
        return;
      }

      setEducation(response.education || []);
    } catch (error) {
      console.error("Fetch Education Error:", error);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this education record?"
    );

    if (!confirmDelete) return;

    try {
      const response = await api.deleteEducation(id);

      if (!response.success) {
        alert(
          response.message || "Failed to delete education."
        );
        return;
      }

      setEducation((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error("Delete Education Error:", error);
      alert("Unable to connect to server.");
    }
  };

  const currentDegree =
    education.find((item) =>
      item.degree?.toLowerCase().includes("bca")
    ) || education[0];

  const academicScore =
    currentDegree?.percentage || "—";

  return (
    <div className="min-h-screen bg-[#080811] p-6 text-white md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-900/20">
                <GraduationCap size={23} />
              </div>

              <h1 className="text-3xl font-bold">
                Education
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles
                size={13}
                className="text-violet-400"
              />

              <p className="text-gray-400">
                Manage your educational background
              </p>
            </div>
          </div>

          <Link
            href="/admin/education/add"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 font-semibold shadow-lg shadow-violet-900/20 transition hover:from-violet-500 hover:to-indigo-500"
          >
            <Plus size={19} />
            Add Education
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

          {/* Total Education */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20">
            <p className="text-sm text-gray-400">
              Total Education
            </p>

            {loading ? (
              <div className="mt-3 h-8 w-12 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <h2 className="mt-2 text-3xl font-bold">
                {education.length}
              </h2>
            )}
          </div>

          {/* Current Degree */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20">
            <p className="text-sm text-gray-400">
              Current Degree
            </p>

            {loading ? (
              <div className="mt-3 h-6 w-24 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <h2 className="mt-2 text-lg font-semibold">
                {currentDegree?.degree
                  ? currentDegree.degree
                      .replace(
                        "Bachelor of Computer Applications (BCA)",
                        "BCA"
                      )
                      .substring(0, 35)
                  : "—"}
              </h2>
            )}
          </div>

          {/* Academic Score */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20">
            <p className="text-sm text-gray-400">
              Academic Score
            </p>

            {loading ? (
              <div className="mt-3 h-6 w-24 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <h2 className="mt-2 text-lg font-semibold">
                {academicScore || "—"}
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
                    <div className="h-6 w-72 animate-pulse rounded-lg bg-white/10" />
                    <div className="mt-3 h-4 w-52 animate-pulse rounded-lg bg-white/10" />
                    <div className="mt-4 h-4 w-64 animate-pulse rounded-lg bg-white/10" />
                    <div className="mt-4 h-16 w-full max-w-3xl animate-pulse rounded-lg bg-white/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : education.length === 0 ? (

          /* Empty State */
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <GraduationCap
              size={42}
              className="mx-auto mb-4 text-gray-500"
            />

            <h2 className="text-xl font-semibold">
              No Education Added
            </h2>

            <p className="mb-6 mt-2 text-gray-400">
              Add your educational background to display
              it here.
            </p>

            <Link
              href="/admin/education/add"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 font-semibold transition hover:from-violet-500 hover:to-indigo-500"
            >
              <Plus size={18} />
              Add Education
            </Link>
          </div>

        ) : (

          /* Education Cards */
          <div className="space-y-5">
            {education.map((item) => (
              <div
                key={item._id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-violet-500/30 hover:bg-white/[0.04]"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                  {/* Education Info */}
                  <div className="flex gap-4">

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 sm:flex">
                      <GraduationCap
                        size={23}
                        className="text-violet-400"
                      />
                    </div>

                    <div className="min-w-0">

                      {/* Degree */}
                      <h2 className="text-xl font-bold">
                        {item.degree}
                      </h2>

                      {/* Institution */}
                      <p className="mt-1 font-medium text-violet-400">
                        {item.institution}
                      </p>

                      {/* Year + Location */}
                      <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center sm:gap-5">

                        <span className="flex items-center gap-2">
                          <CalendarDays size={16} />

                          {item.startYear || "—"} -{" "}
                          {item.endYear || "Present"}
                        </span>

                        {item.location && (
                          <span className="flex items-center gap-2">
                            <MapPin size={16} />
                            {item.location}
                          </span>
                        )}
                      </div>

                      {/* Score */}
                      {item.percentage && (
                        <div className="mt-4 flex items-center gap-2">
                          <Award
                            size={17}
                            className="text-violet-400"
                          />

                          <span className="font-medium text-gray-300">
                            {item.percentage}
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      {item.description && (
                        <p className="mt-3 max-w-3xl leading-7 text-gray-400">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2 lg:pt-1">

                    {/* Edit */}
                    <Link
                      href={`/admin/education/edit/${item._id}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-gray-300 transition hover:bg-white/5 hover:text-white"
                    >
                      <Pencil size={16} />
                      Edit
                    </Link>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(item._id)
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500/20 px-4 py-2.5 text-red-400 transition hover:bg-red-500/10"
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

