"use client";

import { useEffect, useState } from "react";
import {
  FolderKanban,
  Code2,
  Briefcase,
  GraduationCap,
  MessageSquare,
  RefreshCw,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

import DashboardCard from "./DashboardCard";
import { api } from "@/lib/api";

export default function AdminDashboard() {
  const [counts, setCounts] = useState({
    projects: 0,
    skills: 0,
    experience: 0,
    education: 0,
    messages: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError("");

      const [
        projectsResponse,
        skillsResponse,
        experienceResponse,
        educationResponse,
        messagesResponse,
      ] = await Promise.all([
        api.getProjects(),
        api.getSkills(),
        api.getExperiences(),
        api.getEducation(),
        api.getMessages(),
      ]);

      setCounts({
        projects: projectsResponse.count || 0,
        skills: skillsResponse.count || 0,
        experience: experienceResponse.count || 0,
        education: educationResponse.count || 0,
        messages: messagesResponse.count || 0,
      });
    } catch (error) {
      console.error("Dashboard Error:", error);
      setError("Unable to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const cards = [
    {
      title: "Projects",
      value: counts.projects,
      description: "Total portfolio projects",
      icon: FolderKanban,
      accent: "violet",
    },
    {
      title: "Skills",
      value: counts.skills,
      description: "Technical skills",
      icon: Code2,
      accent: "indigo",
    },
    {
      title: "Experience",
      value: counts.experience,
      description: "Work experience",
      icon: Briefcase,
      accent: "violet",
    },
    {
      title: "Education",
      value: counts.education,
      description: "Education records",
      icon: GraduationCap,
      accent: "indigo",
    },
    {
      title: "Messages",
      value: counts.messages,
      description: "Contact messages",
      icon: MessageSquare,
      accent: "violet",
    },
  ];

  const totalContent =
    counts.projects +
    counts.skills +
    counts.experience +
    counts.education;

  return (
    <div className="relative min-h-full overflow-hidden bg-[#080811] px-4 py-6 text-white sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]" />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10">
                <Sparkles
                  size={14}
                  className="text-violet-400"
                />
              </div>

              <span className="text-sm font-medium text-violet-400">
                Admin Panel
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dashboard
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Welcome back, Smita. Here&apos;s an overview of your
              portfolio.
            </p>
          </div>

          {/* Refresh Button */}
          <button
            type="button"
            onClick={fetchDashboardData}
            disabled={loading}
            className="group inline-flex items-center justify-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300 disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto"
          >
            <RefreshCw
              size={16}
              className={`transition-transform duration-500 ${
                loading
                  ? "animate-spin"
                  : "group-hover:rotate-180"
              }`}
            />

            Refresh
          </button>
        </div>

        {/* ================= ERROR ================= */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* ================= STAT CARDS ================= */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {cards.map((card) => (
            <DashboardCard
              key={card.title}
              title={card.title}
              value={loading ? "..." : card.value}
              description={card.description}
              icon={card.icon}
              accent={card.accent}
            />
          ))}
        </div>

        {/* ================= OVERVIEW ================= */}
        <div className="relative mt-6 overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-white/[0.025] to-indigo-600/10 p-6 shadow-2xl shadow-violet-950/10 sm:p-8">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-indigo-600/10 blur-[90px]" />

          <div className="relative">
            {/* Overview Header */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                  <Sparkles size={21} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-violet-400">
                    Portfolio
                  </p>

                  <h2 className="text-xl font-semibold text-white">
                    Portfolio Overview
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                    Manage your projects, skills, experience, education
                    and contact messages from your admin panel.
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex w-fit items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/5 px-4 py-2.5 text-sm font-medium text-violet-400">
                <TrendingUp size={16} />

                <span>Portfolio Active</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Overview Stats */}
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Total Content */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/[0.04]">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Total Content
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-2xl font-bold text-white">
                    {loading ? "..." : totalContent}
                  </p>

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
                    <FolderKanban
                      size={17}
                      className="text-violet-400"
                    />
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-indigo-500/20 hover:bg-indigo-500/[0.04]">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Contact Messages
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-2xl font-bold text-white">
                    {loading ? "..." : counts.messages}
                  </p>

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
                    <MessageSquare
                      size={17}
                      className="text-indigo-400"
                    />
                  </div>
                </div>
              </div>

              {/* Content Areas */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/[0.04]">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Content Areas
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-2xl font-bold text-white">
                    4
                  </p>

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
                    <Code2
                      size={17}
                      className="text-violet-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CARDS ================= */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Manage Portfolio */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-violet-500/25 hover:bg-violet-500/[0.04]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-600/10 blur-[60px] transition group-hover:bg-violet-600/20" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                  <FolderKanban size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Manage Portfolio
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Projects, skills &amp; experience
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
              />
            </div>
          </div>

          {/* Contact Messages */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-indigo-500/25 hover:bg-indigo-500/[0.04]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-indigo-600/10 blur-[60px] transition group-hover:bg-indigo-600/20" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                  <MessageSquare size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Contact Messages
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    View messages from visitors
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">
                  {loading ? "..." : counts.messages}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

