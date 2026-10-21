"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "gold"
    | "dark"
    | "outline"
    | "emerald"
    | "champagne"
    | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Lívia Torres — Advogada (Imperial Gold & Deep Obsidian Noir)
  const variantClasses = {
    gold:
      "border border-[#e5b650] bg-gradient-to-r from-[#b88526] via-[#dcae42] to-[#b88526] text-[#090b10] font-extrabold shadow-md shadow-[#c6922c]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    dark:
      "border border-[#c6922c]/40 bg-[#0e1118] text-[#f5de9c] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#e5b650] hover:bg-[#151a24] hover:text-white",
    outline:
      "border border-[#c6922c]/60 bg-transparent text-[#e5b650] font-bold hover:-translate-y-0.5 hover:border-[#e5b650] hover:bg-[#c6922c]/10 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1fa851] to-[#25D366] text-white font-bold shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5 hover:brightness-105",
    champagne:
      "border border-[#dcae42] bg-[#fdf7e7] text-[#8f641b] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f6ebd4] hover:border-[#c6922c]",
    white:
      "border border-[#e6ded4] bg-white text-[#12151d] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#c6922c] hover:text-[#8f641b]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c6922c] select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
