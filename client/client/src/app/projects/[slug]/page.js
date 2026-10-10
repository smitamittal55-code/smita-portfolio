import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projects = {
  "ai-crm": {
    title: "AI-CRM",
    category: "Full Stack",
    description:
      "A full-stack CRM application for managing leads, customers, activities and follow-ups with an AI-powered assistant.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/smitamittal55-code/AI-CRM",
    live: "https://ai-crm-dusky.vercel.app",
  },

  "inventory-management-system": {
    title: "Inventory Management System",
    category: "Full Stack",
    description:
      "A modern inventory management application with authentication, dashboard, item management and department-based organization.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    github: "#",
    live: "#",
  },

  "student-portal": {
    title: "Student Portal",
    category: "Full Stack",
    description:
      "A student management portal designed to manage student information through a clean and responsive interface.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "#",
    live: "#",
  },

  "college-erp-management-system": {
    title: "College ERP Management System",
    category: "Web Application",
    description:
      "A college ERP application focused on managing academic information, students, teachers and institutional workflows.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
    ],
    github: "#",
    live: "#",
  },

  "job-portal-ui": {
    title: "Job Portal UI",
    category: "Frontend",
    description:
      "A responsive job portal interface designed with modern layouts, reusable components and an intuitive user experience.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
    ],
    github: "#",
    live: "#",
  },

  "finance-dashboard": {
    title: "Finance Dashboard",
    category: "Frontend",
    description:
      "A modern finance dashboard for presenting financial data, statistics and visual insights through an interactive interface.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Recharts",
      "Vite",
    ],
    github: "https://github.com/smitamittal55-code/finance-dashboard-2026-smita",
    live: "#",
  },
};

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07070a] px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Project Not Found</h1>

          <p className="mt-4 text-zinc-500">
            The project you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold transition hover:bg-violet-500"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#07070a] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Back */}

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

        {/* Hero */}

        <div className="mt-12">

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
            {project.category}
          </span>

          <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-500">
            {project.description}
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium transition hover:border-violet-500/30 hover:text-violet-300"
            >
              View GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold transition hover:bg-violet-500"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>

          </div>
        </div>

        {/* Preview */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10">

          <div className="flex h-[420px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] text-3xl font-bold text-violet-400">
                {project.title.charAt(0)}
              </div>

              <p className="mt-5 text-sm text-zinc-600">
                Project Preview
              </p>

            </div>

          </div>

        </div>

        {/* Details */}

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px]">

          {/* Overview */}

          <div>

            <h2 className="text-3xl font-bold">
              Project Overview
            </h2>

            <p className="mt-5 leading-8 text-zinc-500">
              This project was built to solve real-world problems through
              modern web technologies. The application focuses on clean UI,
              responsive design, reusable components and practical
              functionality.
            </p>

            <p className="mt-5 leading-8 text-zinc-500">
              The architecture was designed with scalability and
              maintainability in mind, allowing additional features and
              improvements to be added easily.
            </p>

          </div>

          {/* Technologies */}

          <div>

            <h2 className="text-xl font-bold">
              Technologies
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">

              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">

          <h2 className="text-3xl font-bold">
            Interested in this project?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            Explore more projects or get in touch to discuss a new idea.
          </p>

          <Link
            href="/#projects"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Explore More Projects
            <ArrowLeft size={16} />
          </Link>

        </div>

      </div>
    </main>
  );
}