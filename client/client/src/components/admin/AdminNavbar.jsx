"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Search,
  UserCircle,
  LogOut,
  User,
  Settings,
  X,
} from "lucide-react";

export default function AdminNavbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const closeAll = () => {
    setNotificationOpen(false);
    setProfileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-[#080811]/95 px-4 backdrop-blur-xl md:px-6">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-lg font-semibold text-white">
            Admin Panel
          </h1>

          <p className="hidden text-xs text-slate-500 sm:block">
            Manage your portfolio
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:gap-3">

        {/* ================= SEARCH ================= */}
        <div className="relative">
          {/* Desktop Search */}
          <div className="hidden items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 md:flex">
            <Search
              size={17}
              className="text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="ml-2 w-32 bg-transparent text-sm text-white outline-none placeholder:text-slate-500 transition-all duration-300 focus:w-48"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="ml-2 text-slate-500 transition hover:text-white"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Mobile Search Button */}
          <button
            type="button"
            onClick={() => {
              setSearchOpen(!searchOpen);
              closeAll();
            }}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-violet-300 md:hidden"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Mobile Search Box */}
          {searchOpen && (
            <div className="absolute right-0 top-12 w-64 rounded-xl border border-white/10 bg-[#0c0d18] p-3 shadow-2xl shadow-black/40 md:hidden">
              <div className="flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <Search
                  size={17}
                  className="text-slate-400"
                />

                <input
                  autoFocus
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="text-slate-500 hover:text-white"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {search && (
                <p className="mt-3 text-xs text-slate-500">
                  Searching for:{" "}
                  <span className="text-violet-300">
                    {search}
                  </span>
                </p>
              )}
            </div>
          )}
        </div>

        {/* ================= NOTIFICATION ================= */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setNotificationOpen(!notificationOpen);
              setProfileOpen(false);
              setSearchOpen(false);
            }}
            className="relative rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-violet-300"
            aria-label="Notifications"
          >
            <Bell size={20} />

            {/* Notification Dot */}
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* Notification Dropdown */}
          {notificationOpen && (
            <div className="absolute right-0 top-12 w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18] shadow-2xl shadow-black/50">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Notifications
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Recent updates
                  </p>
                </div>

                <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-[10px] font-medium text-violet-300">
                  1 New
                </span>
              </div>

              {/* Notification */}
              <div className="p-2">
                <div className="flex gap-3 rounded-xl p-3 transition hover:bg-white/[0.04]">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400" />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Portfolio is active
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Your portfolio dashboard is ready to manage.
                    </p>

                    <p className="mt-2 text-[10px] text-slate-600">
                      Just now
                    </p>
                  </div>
                </div>
              </div>

              {/* Mark as Read */}
              <div className="border-t border-white/10 px-4 py-3">
                <button
                  type="button"
                  onClick={() => setNotificationOpen(false)}
                  className="w-full text-center text-xs font-medium text-violet-400 transition hover:text-violet-300"
                >
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ================= PROFILE ================= */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationOpen(false);
              setSearchOpen(false);
            }}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-white/10"
            aria-label="Open profile menu"
          >
            <UserCircle
              size={32}
              className="text-violet-400"
            />

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-white">
                Smita Mittal
              </p>

              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>
          </button>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute right-0 top-14 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d18] shadow-2xl shadow-black/50">

              {/* Profile Header */}
              <div className="border-b border-white/10 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                    <UserCircle
                      size={28}
                      className="text-violet-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Smita Mittal
                    </p>

                    <p className="text-xs text-slate-500">
                      Administrator
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Menu */}
              <div className="p-2">

                {/* My Profile */}
                <Link
                  href="/admin/profile"
                  onClick={() => setProfileOpen(false)}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  <User
                    size={17}
                    className="text-violet-400"
                  />
                  My Profile
                </Link>

                {/* Settings */}
                <Link
                  href="/admin/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  <Settings
                    size={17}
                    className="text-violet-400"
                  />
                  Settings
                </Link>

                {/* Logout */}
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    window.location.href = "/admin/login";
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10"
                >
                  <LogOut size={17} />
                  Logout
                </button>

              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}


