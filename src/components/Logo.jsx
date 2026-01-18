"use client";
import React from "react";
import Link from "next/link";
import { Handbag } from "lucide-react";

/**
 * @param {string} size - 'sm', 'md', 'lg', 'xl'
 * @param {boolean} iconOnly - hide the text
 * @param {string} className - extra tailwind classes
 */
const Logo = ({ size = "md", iconOnly = false, className = "" }) => {
  // Size Mapping
  const sizes = {
    sm: { icon: 20, text: "text-lg", gap: "gap-1.5" },
    md: { icon: 28, text: "text-2xl", gap: "gap-2" },
    lg: { icon: 40, text: "text-4xl", gap: "gap-3" },
    xl: { icon: 60, text: "text-6xl", gap: "gap-4" },
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <Link
      href="/"
      className={`flex items-center ${currentSize.gap} group transition-all active:scale-95 ${className}`}
    >
      {/* LOGO ICON (The "Mark") */}
      <div className="relative flex items-center justify-center">
        {/* Subtle glow effect behind the icon */}
        <div className="absolute inset-0 bg-teal-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <Handbag 
          size={currentSize.icon} 
          strokeWidth={2.5} 
          className="text-teal-500 relative z-10 transition-transform group-hover:-rotate-6" 
        />
      </div>

      {/* LOGO TEXT (The "Type") */}
      {!iconOnly && (
        <span className={`${currentSize.text} font-black tracking-tighter transition-colors`}>
          <span className="text-white">COM</span>
          <span className="text-teal-500">FORTS</span>
        </span>
      )}
    </Link>
  );
};

export default Logo;