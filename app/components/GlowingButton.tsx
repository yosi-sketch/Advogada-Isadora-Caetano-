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

  // Visual identity based on Isadora Caetano — Advocacia e Consultoria (Metallic Warm Bronze & Warm Espresso Noir)
  const variantClasses = {
    gold:
      "border border-[#df9f77] bg-gradient-to-r from-[#a8643c] via-[#c9875f] to-[#a8643c] text-white font-extrabold shadow-md shadow-[#ba7852]/35 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    dark:
      "border border-[#ba7852]/40 bg-[#14100e] text-[#f3cca8] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#df9f77] hover:bg-[#1f1916] hover:text-white",
    outline:
      "border border-[#ba7852]/60 bg-transparent text-[#df9f77] font-bold hover:-translate-y-0.5 hover:border-[#df9f77] hover:bg-[#ba7852]/10 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1fa851] to-[#25D366] text-white font-bold shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5 hover:brightness-105",
    champagne:
      "border border-[#df9f77] bg-[#fbf5ee] text-[#874828] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f5eade] hover:border-[#ba7852]",
    white:
      "border border-[#e8ded3] bg-white text-[#171311] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#ba7852] hover:text-[#874828]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#df9f77] select-none text-center cursor-pointer " +
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
