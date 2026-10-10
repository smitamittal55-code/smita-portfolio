"use client";

import { Loader2 } from "lucide-react";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  onClick,
  className = "",
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/20",

    secondary:
      "bg-white/5 hover:bg-white/10 text-white border border-white/10",

    outline:
      "bg-transparent hover:bg-violet-500/10 text-violet-300 border border-violet-500/30",

    danger:
      "bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20",

    ghost:
      "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        font-medium
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-violet-500/40
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${className}
      `}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}

      {children}
    </button>
  );
}