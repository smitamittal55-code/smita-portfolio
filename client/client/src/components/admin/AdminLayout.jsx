"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080811] text-white">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Area */}
      <div className="lg:ml-64">
        {/* Mobile Header */}
        <div className="flex h-16 items-center border-b border-white/10 bg-[#080811] px-4 lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-violet-300"
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>

          <h1 className="ml-3 text-lg font-semibold text-white">
            Admin Panel
          </h1>
        </div>

        {/* Navbar */}
        <AdminNavbar />

        {/* Page Content */}
        <main className="min-h-[calc(100vh-4rem)] p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

