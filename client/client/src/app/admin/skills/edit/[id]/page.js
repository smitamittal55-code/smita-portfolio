"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Code2,
  Sparkles,
} from "lucide-react";

import { api } from "@/lib/api";

export default function EditSkillPage() {
  const params = useParams();
  const router = useRouter();

  const skillId = params?.id;

  const [formData, setFormData] = useState({
    name: "",
    category: "Frontend",
    level: "Intermediate",
    percentage: 70,
    icon: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch existing skill
  useEffect(() => {
    if (!skillId) return;

    const fetchSkill = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.getSkillById(skillId);

        if (!response.success) {
          setError(
            response.message || "Failed to load skill."
          );
          return;
        }

        const skill = response.skill;

        setFormData({
          name: skill.name || "",
          category: skill.category || "Frontend",
          level: skill.level || "Intermediate",
          percentage:
            typeof skill.percentage === "number"
              ? skill.percentage
              : 70,
          icon: skill.icon || "",
          description: skill.description || "",
        });
      } catch (error) {
        console.error("Fetch Skill Error:", error);
        setError("Unable to connect to server.");
      } finally {
        setLoading(false);
      }
    };

    fetchSkill();
  }, [skillId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "percentage"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!skillId) {
      setError("Skill ID is missing.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const response = await api.updateSkill(
        skillId,
        formData
      );

      if (!response.success) {
        setError(
          response.message || "Failed to update skill."
        );
        return;
      }

      router.push("/admin/skills");
    } catch (error) {
      console.error("Update Skill Error:", error);
      setError("Unable to connect to server.");
    } finally {
      setSaving(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <main className="flex min-h-full items-center justify-center bg-[#080811] px-4 py-10 text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-violet-500/30 border-t-violet-400" />

          <p className="text-sm text-gray-500">
            Loading skill...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-full bg-[#080811] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => router.push("/admin/skills")}
            className="mb-5 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-violet-400"
          >
            <ArrowLeft size={17} />
            Back to Skills
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
              <Code2 size={20} />
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

              <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Edit Skill
              </h1>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Update your skill details and save the changes.
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
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

          <div className="relative space-y-6">

            {/* Skill Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Skill Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Category + Level */}
            <div className="grid gap-5 md:grid-cols-2">

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#10101a] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/40 focus:ring-2 focus:ring-violet-500/10"
                >
                  <option value="Frontend">
                    Frontend
                  </option>

                  <option value="Backend">
                    Backend
                  </option>

                  <option value="Database">
                    Database
                  </option>

                  <option value="Tools">
                    Tools
                  </option>

                  <option value="Programming">
                    Programming
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Level */}
              <div>
                <label
                  htmlFor="level"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Skill Level
                </label>

                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#10101a] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/40 focus:ring-2 focus:ring-violet-500/10"
                >
                  <option value="Beginner">
                    Beginner
                  </option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">
                    Advanced
                  </option>

                  <option value="Expert">
                    Expert
                  </option>
                </select>
              </div>
            </div>

            {/* Percentage */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="percentage"
                  className="text-sm font-medium text-gray-300"
                >
                  Proficiency Percentage
                </label>

                <span className="text-sm font-semibold text-violet-400">
                  {formData.percentage}%
                </span>
              </div>

              <input
                id="percentage"
                name="percentage"
                type="range"
                min="0"
                max="100"
                value={formData.percentage}
                onChange={handleChange}
                className="w-full accent-violet-600"
              />

              <div className="mt-2 flex justify-between text-[11px] text-gray-600">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Icon */}
            <div>
              <label
                htmlFor="icon"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Icon
              </label>

              <input
                id="icon"
                name="icon"
                type="text"
                value={formData.icon}
                onChange={handleChange}
                placeholder="e.g. react, node, mongodb"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
              />

              <p className="mt-2 text-xs text-gray-600">
                Optional. You can add an icon name for future use.
              </p>
            </div>

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
                rows={4}
                placeholder="Short description about this skill..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() =>
                  router.push("/admin/skills")
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
                    Updating...
                  </>
                ) : (
                  <>
                    <Save size={17} />
                    Update Skill
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

