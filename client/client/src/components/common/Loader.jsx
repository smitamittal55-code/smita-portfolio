"use client";

import { Loader2 } from "lucide-react";

export default function Loader({
  size = "md",
  text = "",
  fullScreen = false,
}) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10",
  };

  const loader = (
    <div className="flex items-center justify-center gap-3">
      <Loader2
        className={`${sizes[size] || sizes.md} text-violet-500 animate-spin`}
      />

      {text && (
        <span className="text-sm text-gray-400">
          {text}
        </span>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080811]">
        {loader}
      </div>
    );
  }

  return loader;
}