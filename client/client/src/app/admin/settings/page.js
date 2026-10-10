"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Settings,
  Bell,
  Shield,
  Palette,
  Lock,
  ArrowLeft,
  Save,
  Check,
  Mail,
  Moon,
  Eye,
} from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#080811] p-6 text-white md:p-8">
      <div className="mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">

            <Link
              href="/admin"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
              <Settings size={22} />
            </div>

            <h1 className="text-3xl font-bold">
              Settings
            </h1>
          </div>

          <p className="ml-14 text-gray-400">
            Manage your admin dashboard preferences
          </p>
        </div>

        {/* ================= SETTINGS CONTENT ================= */}
        <div className="space-y-6">

          {/* ================= ACCOUNT ================= */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10">
                <Settings
                  size={21}
                  className="text-violet-400"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  Account Settings
                </h2>

                <p className="text-sm text-gray-500">
                  Manage your basic account information
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Full Name
                </label>

                <div className="relative">
                  <Settings
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    defaultValue="Smita Mittal"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-500 focus:border-violet-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="email"
                    defaultValue="smitamittal55@gmail.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-500 focus:border-violet-500"
                  />
                </div>
              </div>

            </div>
          </section>

          {/* ================= NOTIFICATIONS ================= */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10">
                <Bell
                  size={21}
                  className="text-indigo-400"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  Notifications
                </h2>

                <p className="text-sm text-gray-500">
                  Control how you receive notifications
                </p>
              </div>

            </div>

            <div className="space-y-4">

              {/* Dashboard Notifications */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                    <Bell
                      size={18}
                      className="text-violet-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Dashboard Notifications
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Show notifications inside the admin dashboard.
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setNotifications(!notifications)
                  }
                  className={`relative h-6 w-11 rounded-full transition ${
                    notifications
                      ? "bg-violet-600"
                      : "bg-gray-700"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                      notifications
                        ? "left-6"
                        : "left-1"
                    }`}
                  />
                </button>

              </div>

              {/* Email Notifications */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <Mail
                      size={18}
                      className="text-indigo-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Email Notifications
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Receive important updates through email.
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setEmailNotifications(
                      !emailNotifications
                    )
                  }
                  className={`relative h-6 w-11 rounded-full transition ${
                    emailNotifications
                      ? "bg-violet-600"
                      : "bg-gray-700"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                      emailNotifications
                        ? "left-6"
                        : "left-1"
                    }`}
                  />
                </button>

              </div>

            </div>
          </section>

          {/* ================= APPEARANCE ================= */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-500/10">
                <Palette
                  size={21}
                  className="text-fuchsia-400"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  Appearance
                </h2>

                <p className="text-sm text-gray-500">
                  Customize your dashboard appearance
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Dark Mode */}
              <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.06] p-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                      <Moon
                        size={19}
                        className="text-violet-400"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Dark Mode
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Premium dark interface
                      </p>
                    </div>

                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/20">
                    <Check
                      size={15}
                      className="text-violet-300"
                    />
                  </div>

                </div>
              </div>

              {/* Preview */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                    <Eye
                      size={19}
                      className="text-indigo-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Dashboard Preview
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Glassmorphism admin interface
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* ================= PROFILE VISIBILITY ================= */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                <Eye
                  size={21}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  Profile Visibility
                </h2>

                <p className="text-sm text-gray-500">
                  Control how your portfolio profile is displayed
                </p>
              </div>

            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">

              <div>
                <p className="text-sm font-medium text-white">
                  Public Profile
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Allow visitors to view your portfolio profile.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setPublicProfile(!publicProfile)
                }
                className={`relative h-6 w-11 rounded-full transition ${
                  publicProfile
                    ? "bg-emerald-600"
                    : "bg-gray-700"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                    publicProfile
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>

            </div>
          </section>

          {/* ================= SECURITY ================= */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">
                <Shield
                  size={21}
                  className="text-red-400"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  Security
                </h2>

                <p className="text-sm text-gray-500">
                  Manage your administrator account security
                </p>
              </div>

            </div>

            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                    <Lock
                      size={18}
                      className="text-red-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Password
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Keep your administrator account secure.
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  Change
                </button>

              </div>

            </div>
          </section>

          {/* ================= SAVE ================= */}
          <div className="flex justify-end pb-8">

            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold shadow-lg shadow-violet-500/20 transition hover:from-violet-500 hover:to-indigo-500"
            >
              {saved ? (
                <>
                  <Check size={18} />
                  Saved Successfully
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

