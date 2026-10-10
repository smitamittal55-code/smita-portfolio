"use client";

export default function ProjectFilter({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900"
              : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}