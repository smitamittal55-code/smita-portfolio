"use client";

import { useEffect, useState } from "react";
import { Save, X } from "lucide-react";

const initialForm = {
  degree: "",
  institution: "",
  location: "",
  startYear: "",
  endYear: "",
  percentage: "",
  description: "",
};

export default function EducationForm({
  initialData = null,
  onSubmit,
  onCancel,
  loading = false,
}) {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (initialData) {
      setFormData({
        degree: initialData.degree || "",
        institution: initialData.institution || "",
        location: initialData.location || "",
        startYear: initialData.startYear || "",
        endYear: initialData.endYear || "",
        percentage: initialData.percentage || "",
        description: initialData.description || "",
      });
    } else {
      setFormData(initialForm);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          {initialData ? "Edit Education" : "Add Education"}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add your educational qualification details.
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Degree */}
        <div>
          <label
            htmlFor="degree"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Degree / Qualification
          </label>

          <input
            id="degree"
            name="degree"
            type="text"
            value={formData.degree}
            onChange={handleChange}
            placeholder="e.g. Bachelor of Computer Applications"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Institution */}
        <div>
          <label
            htmlFor="institution"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Institution
          </label>

          <input
            id="institution"
            name="institution"
            type="text"
            value={formData.institution}
            onChange={handleChange}
            placeholder="e.g. Prestige Institute of Management"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-slate-700"
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
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Percentage */}
        <div>
          <label
            htmlFor="percentage"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Percentage / CGPA
          </label>

          <input
            id="percentage"
            name="percentage"
            type="text"
            value={formData.percentage}
            onChange={handleChange}
            placeholder="e.g. 8.12 CGPA / 80%"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Start Year */}
        <div>
          <label
            htmlFor="startYear"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Start Year
          </label>

          <input
            id="startYear"
            name="startYear"
            type="text"
            value={formData.startYear}
            onChange={handleChange}
            placeholder="e.g. 2023"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* End Year */}
        <div>
          <label
            htmlFor="endYear"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            End Year
          </label>

          <input
            id="endYear"
            name="endYear"
            type="text"
            value={formData.endYear}
            onChange={handleChange}
            placeholder="e.g. 2027 or Present"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
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
            placeholder="Write a short description about your education..."
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
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
              ? "Update Education"
              : "Add Education"}
        </button>
      </div>
    </form>
  );
}

