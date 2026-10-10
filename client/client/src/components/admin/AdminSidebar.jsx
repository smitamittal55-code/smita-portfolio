"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Code2,
  Briefcase,
  GraduationCap,
  MessageSquare,
  LogOut,
  X,
  Sparkles,
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
];

export default function AdminSidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col overflow-hidden border-r border-white/[0.08] bg-[#080811] text-white shadow-2xl shadow-black/30 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-violet-600/10 blur-[80px]" />

        <div className="pointer-events-none absolute -right-20 bottom-20 h-48 w-48 rounded-full bg-indigo-600/10 blur-[80px]" />

        {/* Logo */}
        <div className="relative flex h-16 shrink-0 items-center justify-between border-b border-white/[0.08] px-5">
          <Link
            href="/admin/dashboard"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/15 to-indigo-500/15">
              <Sparkles
                size={17}
                className="text-violet-400"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold tracking-tight text-white">
                Smita<span className="text-violet-400">.</span>
              </h2>

              <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600">
                Portfolio Admin
              </p>
            </div>
          </Link>

          {/* Close Mobile */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-violet-400 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={19} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="relative flex-1 overflow-y-auto px-3 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600">
            Management
          </p>

          <div className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group relative flex items-center gap-3 overflow-hidden rounded-xl px-3 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border border-violet-500/20 bg-gradient-to-r from-violet-600/20 to-indigo-600/10 text-white shadow-lg shadow-violet-950/20"
                      : "border border-transparent text-gray-500 hover:border-white/[0.06] hover:bg-white/[0.04] hover:text-gray-200"
                  }`}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-violet-400 to-indigo-400" />
                  )}

                  {/* Icon */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-violet-500/10 text-violet-400"
                        : "bg-white/[0.03] text-gray-600 group-hover:bg-violet-500/10 group-hover:text-violet-400"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <span>{item.name}</span>

                  {/* Arrow */}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-400 shadow-sm shadow-violet-400" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Profile / Logout */}
        <div className="relative shrink-0 border-t border-white/[0.08] p-3">
          {/* Profile */}
          <div className="mb-2 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-indigo-500/20 text-sm font-bold text-violet-400">
              SM
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Smita Mittal
              </p>

              <p className="text-[11px] text-gray-600">
                Administrator
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("adminToken");
              localStorage.removeItem("admin");
              window.location.href = "/admin/login";
            }}
            className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-500 transition-all duration-300 hover:bg-red-500/[0.07] hover:text-red-400"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03] transition group-hover:bg-red-500/10">
              <LogOut size={17} />
            </div>

            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

