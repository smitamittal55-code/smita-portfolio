"use client";

import { usePathname } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminRouteLayout({ children }) {
  const pathname = usePathname();

  // The dashboard and login page already provide their own layouts.
  if (
    pathname === "/admin" ||
    pathname === "/admin/dashboard" ||
    pathname === "/admin/login"
  ) {
    return children;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
