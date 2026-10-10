"use client";

import { useEffect, useState } from "react";
import { Save, X, Plus, Trash2 } from "lucide-react";

const initialForm = {
  title: "",
  description: "",
  category: "",
  image: "",
  liveUrl: "",
  githubUrl: "",
  technologies: [],
  featured: false,
};

export default function ProjectForm({
  initialData = null,
  onSubmit,
  onCancel,
  loading = false,
}) {
  const [formData, setFormData] = useState(initialForm);
  const [technology, setTechnology] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        category: initialData.category || "",
        image: initialData.image || "",
        liveUrl: initialData.liveUrl || "",
        githubUrl: initialData.githubUrl || "",
        technologies: Array.isArray(initialData.technologies)
          ? initialData.technologies
          : [],
        featured: initialData.featured || false,
      });
    } else {
      setFormData(initialForm);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addTechnology = () => {
    const value = technology.trim();

    if (!value) return;

    if (
      formData.technologies.some(
        (item) => item.toLowerCase() === value.toLowerCase()
      )
    ) {
      setTechnology("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      technologies: [...prev.technologies, value],
    }));

    setTechnology("");
  };

  const removeTechnology = (index) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter(
        (_, itemIndex) => itemIndex !== index
      ),
    }));
  };

  const handleTechnologyKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;
    if (!formData.description.trim()) return;

    onSubmit?.(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          {initialData ? "Edit Project" : "Add Project"}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add your portfolio project details.
        </p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Project Title */}
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Project Title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. AI CRM Dashboard"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Category
          </label>

          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">Select category</option>
            <option value="Web Development">Web Development</option>
            <option value="Frontend">Frontend</option>
            <option value="Full Stack">Full Stack</option>
            <option value="React">React</option>
            <option value="Next.js">Next.js</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Image URL */}
        <div className="md:col-span-2">
          <label
            htmlFor="image"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Project Image URL
          </label>

          <input
            id="image"
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/project-image.jpg"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />

          <p className="mt-1 text-xs text-slate-400">
            Add a public image URL for your project.
          </p>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project, features and purpose..."
            required
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Technologies */}
        <div className="md:col-span-2">
          <label
            htmlFor="technology"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Technologies
          </label>

          <div className="flex gap-2">
            <input
              id="technology"
              type="text"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
              onKeyDown={handleTechnologyKeyDown}
              placeholder="e.g. React.js"
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            <button
              type="button"
              onClick={addTechnology}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              <Plus size={17} />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>

          {/* Technology Tags */}
          {formData.technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {formData.technologies.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700"
                >
                  <span>{item}</span>

                  <button
                    type="button"
                    onClick={() => removeTechnology(index)}
                    className="text-indigo-400 transition hover:text-red-500"
                    aria-label={`Remove ${item}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Live URL */}
        <div>
          <label
            htmlFor="liveUrl"
            className="mb-2 block text-sm font-medium text-slate-700"
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
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* GitHub URL */}
        <div>
          <label
            htmlFor="githubUrl"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            GitHub URL
          </label>

          <input
            id="githubUrl"
            name="githubUrl"
            type="url"
            value={formData.githubUrl}
            onChange={handleChange}
            placeholder="https://github.com/username/project"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Featured */}
        <div className="md:col-span-2">
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />

            <div>
              <p className="text-sm font-medium text-slate-700">
                Featured Project
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Show this project in the featured projects section.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={17} />
            Cancel
          </button>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save size={17} />

          {loading
            ? "Saving..."
            : initialData
              ? "Update Project"
              : "Add Project"}
        </button>
      </div>
    </form>
  );
}

