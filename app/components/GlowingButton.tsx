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
    | "navy"
    | "rosegold"
    | "champagne"
    | "bronze"
    | "dark"
    | "outline"
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
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Refined metallic imperial gold and deep prussian navy styling for Patrícia Ferreira Advocacia
  const variantClasses = {
    gold:
      "border border-[#f6e5be]/50 bg-gradient-to-r from-[#a67520] via-[#cb902b] to-[#a67520] text-[#040914] font-extrabold shadow-md shadow-[#040914]/60 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    rosegold:
      "border border-[#f6e5be]/40 bg-gradient-to-r from-[#8a5e14] via-[#cb902b] to-[#8a5e14] text-white font-bold shadow-md shadow-[#040914]/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    champagne:
      "border border-[#e5c368]/60 bg-gradient-to-r from-[#fdf8ee] via-[#f6e5be] to-[#fdf8ee] text-[#07101e] font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-gold hover:brightness-105",
    navy:
      "border border-[#cb902b]/40 bg-gradient-to-r from-[#040914] via-[#0c182e] to-[#040914] text-white font-bold shadow-md shadow-[#040914]/60 hover:-translate-y-0.5 hover:border-[#e5c368] hover:shadow-navy",
    bronze:
      "border border-[#cb902b]/40 bg-gradient-to-r from-[#523507] via-[#8a5e14] to-[#523507] text-white font-bold shadow-md shadow-[#040914]/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    dark:
      "border border-[#cb902b]/35 bg-[#07101e] text-[#f6e5be] shadow-sm shadow-[#040914]/60 hover:-translate-y-0.5 hover:border-[#e5c368] hover:bg-[#0c182e] hover:text-white hover:shadow-gold",
    outline:
      "border border-[#cb902b]/60 bg-transparent text-[#e5c368] hover:-translate-y-0.5 hover:border-[#f6e5be] hover:bg-[#cb902b]/15 hover:text-white",
    white:
      "border border-[#cb902b]/40 bg-white text-[#040914] shadow-sm hover:-translate-y-0.5 hover:bg-[#fdf8ee] hover:text-[#040914] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#cb902b] select-none text-center cursor-pointer " +
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
