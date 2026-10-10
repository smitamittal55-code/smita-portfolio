"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  GraduationCap,
  Save,
  Sparkles,
} from "lucide-react";

import Link from "next/link";
import { api } from "@/lib/api";

export default function AddEducationPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    degree: "",
    institution: "",
    location: "",
    startYear: "",
    endYear: "",
    percentage: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      if (!formData.degree.trim()) {
        setError("Degree is required.");
        setLoading(false);
        return;
      }

      if (!formData.institution.trim()) {
        setError("Institution is required.");
        setLoading(false);
        return;
      }

      const response = await api.createEducation(formData);

      if (!response.success) {
        setError(
          response.message || "Failed to add education."
        );
        return;
      }

      router.push("/admin/education");
    } catch (error) {
      console.error("Add Education Error:", error);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080811] p-6 text-white md:p-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/education"
            className="mb-5 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-violet-400"
          >
            <ArrowLeft size={17} />
            Back to Education
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-900/20">
              <GraduationCap size={23} />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Add Education
              </h1>

              <div className="mt-1 flex items-center gap-2">
                <Sparkles
                  size={13}
                  className="text-violet-400"
                />

                <p className="text-sm text-gray-400">
                  Add a new educational qualification
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/10 md:p-8">

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Degree */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Degree / Qualification
                <span className="ml-1 text-violet-400">
                  *
                </span>
              </label>

              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="e.g. Bachelor of Computer Applications (BCA)"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.04]"
              />
            </div>

            {/* Institution */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Institution
                <span className="ml-1 text-violet-400">
                  *
                </span>
              </label>

              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="e.g. Prestige Institute of Management and Research"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.04]"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Gwalior, Madhya Pradesh"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.04]"
              />
            </div>

            {/* Years */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Start Year
                </label>

                <input
                  type="text"
                  name="startYear"
                  value={formData.startYear}
                  onChange={handleChange}
                  placeholder="e.g. 2023"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.04]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  End Year
                </label>

                <input
                  type="text"
                  name="endYear"
                  value={formData.endYear}
                  onChange={handleChange}
                  placeholder="e.g. 2026 or Present"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.04]"
                />
              </div>
            </div>

            {/* Score */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Academic Score
              </label>

              <input
                type="text"
                name="percentage"
                value={formData.percentage}
                onChange={handleChange}
                placeholder="e.g. CGPA: 8.12 or 80%"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.04]"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your education, specialization, achievements, etc."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.04]"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:justify-end">

              <Link
                href="/admin/education"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-violet-900/20 transition hover:from-violet-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Save size={18} />

                {loading
                  ? "Saving..."
                  : "Save Education"}
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

