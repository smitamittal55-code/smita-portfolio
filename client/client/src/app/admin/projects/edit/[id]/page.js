"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  X,
  FolderKanban,
  Sparkles,
} from "lucide-react";

import { api } from "@/lib/api";

export default function EditProjectPage() {
  const params = useParams();
  const router = useRouter();

  const projectId = params?.id;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Web Development",
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  });

  const [technologies, setTechnologies] = useState([]);
  const [technologyInput, setTechnologyInput] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch existing project
  useEffect(() => {
    if (!projectId) return;

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.getProjectById(projectId);

        if (!response.success) {
          setError(
            response.message || "Failed to load project."
          );
          return;
        }

        const project = response.project;

        setFormData({
          title: project.title || "",
          description: project.description || "",
          category: project.category || "Web Development",
          image: project.image || "",
          liveUrl: project.liveUrl || "",
          githubUrl: project.githubUrl || "",
          featured: Boolean(project.featured),
        });

        setTechnologies(project.technologies || []);
      } catch (error) {
        console.error("Fetch Project Error:", error);
        setError("Unable to connect to server.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addTechnology = () => {
    const technology = technologyInput.trim();

    if (!technology) return;

    if (
      technologies.some(
        (item) =>
          item.toLowerCase() === technology.toLowerCase()
      )
    ) {
      setTechnologyInput("");
      return;
    }

    setTechnologies((prev) => [...prev, technology]);
    setTechnologyInput("");
  };

  const removeTechnology = (technologyToRemove) => {
    setTechnologies((prev) =>
      prev.filter(
        (technology) => technology !== technologyToRemove
      )
    );
  };

  const handleTechnologyKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectId) {
      setError("Project ID is missing.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const response = await api.updateProject(projectId, {
        ...formData,
        technologies,
      });

      if (!response.success) {
        setError(
          response.message || "Failed to update project."
        );
        return;
      }

      router.push("/admin/projects");
    } catch (error) {
      console.error("Update Project Error:", error);
      setError("Unable to connect to server.");
    } finally {
      setSaving(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <main className="flex min-h-full items-center justify-center bg-[#080811] px-4 py-10 text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-violet-500/30 border-t-violet-400" />

          <p className="text-sm text-gray-500">
            Loading project...
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
            onClick={() => router.push("/admin/projects")}
            className="mb-5 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-violet-400"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
              <FolderKanban size={20} />
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
                Edit Project
              </h1>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Update your project details and save the changes.
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

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Project Title
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
              />
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
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

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
                className="w-full rounded-xl border border-white/10 bg-[#10101a] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/40 focus:ring-2 focus:ring-violet-500/10"
              >
                <option value="Web Development">
                  Web Development
                </option>

                <option value="Frontend Development">
                  Frontend Development
                </option>

                <option value="Backend Development">
                  Backend Development
                </option>

                <option value="Full Stack Development">
                  Full Stack Development
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Project Image URL
              </label>

              <input
                id="image"
                name="image"
                type="url"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* URLs */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label
                  htmlFor="liveUrl"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Live Project URL
                </label>

                <input
                  id="liveUrl"
                  name="liveUrl"
                  type="url"
                  value={formData.liveUrl}
                  onChange={handleChange}
                  placeholder="https://your-project.com"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="githubUrl"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  GitHub URL
                </label>

                <input
                  id="githubUrl"
                  name="githubUrl"
                  type="url"
                  value={formData.githubUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/username/repository"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

            </div>

            {/* Technologies */}
            <div>
              <label
                htmlFor="technology"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Technologies
              </label>

              <div className="flex gap-2">

                <input
                  id="technology"
                  type="text"
                  value={technologyInput}
                  onChange={(e) =>
                    setTechnologyInput(e.target.value)
                  }
                  onKeyDown={handleTechnologyKeyDown}
                  placeholder="e.g. React"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/40 focus:bg-violet-500/[0.04] focus:ring-2 focus:ring-violet-500/10"
                />

                <button
                  type="button"
                  onClick={addTechnology}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/10 transition hover:from-violet-500 hover:to-indigo-500"
                >
                  +
                </button>

              </div>

              {technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="inline-flex items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300"
                    >
                      {technology}

                      <button
                        type="button"
                        onClick={() =>
                          removeTechnology(technology)
                        }
                        className="text-violet-400 transition hover:text-red-400"
                      >
                        <X size={13} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Featured */}
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-violet-500/20 hover:bg-violet-500/[0.04]">

              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 accent-violet-600"
              />

              <div>
                <p className="text-sm font-medium text-gray-200">
                  Featured Project
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Show this project in the featured projects section.
                </p>
              </div>

            </label>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() =>
                  router.push("/admin/projects")
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
                    Update Project
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

