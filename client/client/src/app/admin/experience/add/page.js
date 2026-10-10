"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Save,
  Sparkles,
} from "lucide-react";

import { api } from "@/lib/api";

export default function AddExperiencePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    employmentType: "Full-time",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const dataToSend = {
        ...formData,
        endDate: formData.currentlyWorking
          ? ""
          : formData.endDate,
      };

      const response = await api.createExperience(dataToSend);

      if (!response.success) {
        setError(
          response.message || "Failed to add experience."
        );
        return;
      }

      router.push("/admin/experience");
    } catch (error) {
      console.error("Create Experience Error:", error);
      setError("Unable to connect to server.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-full bg-[#080811] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => router.push("/admin/experience")}
            className="mb-5 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-violet-400"
          >
            <ArrowLeft size={17} />
            Back to Experience
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
              <BriefcaseBusiness size={20} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Sparkles
                  size={13}
                  className="text-violet-400"
                />

                <p className="text-xs font-medium uppercase tracking-[0.15em] text-violet-400">
                  Portfolio
                </p>
              </div>

              <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                Add Experience
              </h1>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Add a professional experience to your portfolio.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-white/[0.025] to-indigo-600/10 p-5 shadow-2xl shadow-violet-950/10 sm:p-8"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

          <div className="relative space-y-6">

            {/* Job Title */}
            <div>
              <label
                htmlFor="jobTitle"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Job Title
              </label>

              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="e.g. Computer Faculty"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Company / Organization
              </label>

              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Zint Institute"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Location + Employment Type */}
            <div className="grid gap-5 md:grid-cols-2">

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Gwalior, Madhya Pradesh"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              {/* Employment Type */}
              <div>
                <label
                  htmlFor="employmentType"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Employment Type
                </label>

                <select
                  id="employmentType"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#10101a] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/40 focus:ring-2 focus:ring-violet-500/10"
                >
                  <option value="Full-time">
                    Full-time
                  </option>

                  <option value="Part-time">
                    Part-time
                  </option>

                  <option value="Internship">
                    Internship
                  </option>

                  <option value="Freelance">
                    Freelance
                  </option>

                  <option value="Contract">
                    Contract
                  </option>
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="grid gap-5 md:grid-cols-2">

              {/* Start Date */}
              <div>
                <label
                  htmlFor="startDate"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Start Date
                </label>

                <input
                  id="startDate"
                  name="startDate"
                  type="text"
                  value={formData.startDate}
                  onChange={handleChange}
                  placeholder="e.g. April 2025"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              {/* End Date */}
              <div>
                <label
                  htmlFor="endDate"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  End Date
                </label>

                <input
                  id="endDate"
                  name="endDate"
                  type="text"
                  value={formData.endDate}
                  onChange={handleChange}
                  disabled={formData.currentlyWorking}
                  placeholder="e.g. August 2025"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                />
              </div>
            </div>

            {/* Currently Working */}
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-violet-500/20 hover:bg-violet-500/[0.03]">
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={formData.currentlyWorking}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-600 bg-gray-800 accent-violet-600"
              />

              <div>
                <p className="text-sm font-medium text-gray-200">
                  I currently work here
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  The experience will be displayed as Present.
                </p>
              </div>
            </label>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your responsibilities, work and achievements..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() =>
                  router.push("/admin/experience")
                }
                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.07] hover:text-white"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={17} />
                    Save Experience
                  </>
                )}
              </button>

            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

