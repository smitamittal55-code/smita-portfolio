"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  Code2,
  Briefcase,
  GraduationCap,
  MessageSquare,
  User,
  LogOut,
  Plus,
  ArrowUpRight,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    name: "Skills",
    href: "/admin/skills",
    icon: Code2,
  },
  {
    name: "Experience",
    href: "/admin/experience",
    icon: Briefcase,
  },
  {
    name: "Education",
    href: "/admin/education",
    icon: GraduationCap,
  },
  {
    name: "Messages",
    href: "/admin/messages",
    icon: MessageSquare,
  },
  {
    name: "Profile",
    href: "/admin/profile",
    icon: User,
  },
];

const stats = [
  {
    title: "Projects",
    value: "0",
    icon: FolderKanban,
    href: "/admin/projects",
  },
  {
    title: "Skills",
    value: "0",
    icon: Code2,
    href: "/admin/skills",
  },
  {
    title: "Experience",
    value: "0",
    icon: Briefcase,
    href: "/admin/experience",
  },
  {
    title: "Messages",
    value: "0",
    icon: MessageSquare,
    href: "/admin/messages",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#080811] text-white">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 border-r border-white/10 bg-[#0d0d18] lg:block">

          {/* Logo */}
          <div className="flex h-20 items-center border-b border-white/10 px-6">
            <div>
              <h1 className="text-xl font-bold">
                Smita<span className="text-violet-500">.</span>
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                Admin Panel
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-4 py-6">
            <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Management
            </p>

            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      item.name === "Dashboard"
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={19} />

                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Bottom */}
          <div className="absolute bottom-0 left-0 w-full border-t border-white/10 p-4">
            <Link
              href="/"
              className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              <ArrowUpRight size={18} />
              View Portfolio
            </Link>

            <button
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/10"
              onClick={() => {
                console.log("Logout clicked");
              }}
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* MAIN */}
        <main className="w-full lg:ml-64">

          {/* TOPBAR */}
          <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#080811]/90 px-6 backdrop-blur-xl lg:px-10">

            <div>
              <h2 className="text-xl font-bold">
                Dashboard
              </h2>

              <p className="text-sm text-gray-500">
                Manage your portfolio
              </p>
            </div>

            <div className="flex items-center gap-3">

              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium">
                  Smita Mittal
                </p>

                <p className="text-xs text-gray-500">
                  Administrator
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 font-bold">
                S
              </div>

            </div>
          </header>

          {/* CONTENT */}
          <section className="p-6 lg:p-10">

            {/* Welcome */}
            <div className="mb-8 rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 p-6">

              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                <div>
                  <p className="mb-2 text-sm font-medium text-violet-400">
                    Welcome back 👋
                  </p>

                  <h1 className="text-2xl font-bold md:text-3xl">
                    Manage Your Portfolio
                  </h1>

                  <p className="mt-2 max-w-xl text-sm text-gray-400">
                    Add and manage your projects, skills, experience,
                    education and messages from one place.
                  </p>
                </div>

                <Link
                  href="/admin/projects/add"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold transition hover:bg-violet-500"
                >
                  <Plus size={18} />
                  Add Project
                </Link>

              </div>
            </div>

            {/* STATS */}
            <div className="mb-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <Link
                    key={stat.title}
                    href={stat.href}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                        <Icon size={21} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-gray-600 transition group-hover:text-violet-400"
                      />

                    </div>

                    <div className="mt-5">
                      <p className="text-sm text-gray-500">
                        {stat.title}
                      </p>

                      <h3 className="mt-1 text-3xl font-bold">
                        {stat.value}
                      </h3>
                    </div>

                  </Link>
                );
              })}

            </div>

            {/* QUICK ACTIONS */}
            <div className="mb-8">

              <div className="mb-5">
                <h2 className="text-xl font-bold">
                  Quick Actions
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Quickly manage your portfolio content
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

                <Link
                  href="/admin/projects/add"
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Plus size={20} />
                  </div>

                  <h3 className="font-semibold">
                    Add Project
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Add a new project to your portfolio.
                  </p>
                </Link>

                <Link
                  href="/admin/skills/add"
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Code2 size={20} />
                  </div>

                  <h3 className="font-semibold">
                    Add Skill
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Add a new technical skill.
                  </p>
                </Link>

                <Link
                  href="/admin/experience/add"
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Briefcase size={20} />
                  </div>

                  <h3 className="font-semibold">
                    Add Experience
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Add your latest work experience.
                  </p>
                </Link>

              </div>
            </div>

            {/* MANAGEMENT */}
            <div>

              <div className="mb-5">
                <h2 className="text-xl font-bold">
                  Manage Content
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Open any section to manage its content.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                <Link
                  href="/admin/projects"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30"
                >
                  <FolderKanban className="text-violet-400" />
                  <span className="font-medium">
                    Manage Projects
                  </span>
                </Link>

                <Link
                  href="/admin/skills"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30"
                >
                  <Code2 className="text-violet-400" />
                  <span className="font-medium">
                    Manage Skills
                  </span>
                </Link>

                <Link
                  href="/admin/experience"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30"
                >
                  <Briefcase className="text-violet-400" />
                  <span className="font-medium">
                    Manage Experience
                  </span>
                </Link>

                <Link
                  href="/admin/education"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30"
                >
                  <GraduationCap className="text-violet-400" />
                  <span className="font-medium">
                    Manage Education
                  </span>
                </Link>

                <Link
                  href="/admin/messages"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30"
                >
                  <MessageSquare className="text-violet-400" />
                  <span className="font-medium">
                    View Messages
                  </span>
                </Link>

                <Link
                  href="/admin/profile"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30"
                >
                  <User className="text-violet-400" />
                  <span className="font-medium">
                    Edit Profile
                  </span>
                </Link>

              </div>

            </div>

          </section>

        </main>
      </div>
    </div>
  );
}
