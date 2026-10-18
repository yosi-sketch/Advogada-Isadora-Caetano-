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

  // Refined palette inspired by the AR Paixão Advocacia e Consultoria Jurídica brand identity
  const variantClasses = {
    gold:
      "border border-[#dfb772]/60 bg-gradient-to-r from-[#9e6f2d] via-[#d4a862] to-[#9e6f2d] text-white font-bold shadow-md shadow-[#0a1424]/15 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    navy:
      "border border-[#dfb772]/35 bg-[#0a1424] text-[#f7df9e] font-bold shadow-md shadow-[#0a1424]/25 hover:-translate-y-0.5 hover:border-[#dfb772] hover:bg-[#12243d] hover:text-white hover:shadow-navy",
    champagne:
      "border border-[#dfb772]/60 bg-gradient-to-r from-[#f9f7f4] via-[#f7df9e] to-[#f9f7f4] text-[#080f1d] font-bold shadow-xs hover:-translate-y-0.5 hover:shadow-gold hover:brightness-105",
    rosegold:
      "border border-[#f7df9e]/40 bg-gradient-to-r from-[#805020] via-[#d4a862] to-[#805020] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    bronze:
      "border border-[#d4a862]/40 bg-gradient-to-r from-[#503010] via-[#805020] to-[#503010] text-white font-bold shadow-md hover:-translate-y-0.5",
    dark:
      "border border-[#dfb772]/35 bg-[#0a1424] text-[#f7df9e] shadow-md hover:-translate-y-0.5 hover:border-[#dfb772] hover:bg-[#152844] hover:text-white",
    outline:
      "border border-[#0a1424]/30 bg-transparent text-[#080f1d] hover:-translate-y-0.5 hover:border-[#d4a862] hover:bg-[#d4a862]/10 hover:text-[#080f1d]",
    white:
      "border border-[#e5dfd5] bg-white text-[#080f1d] shadow-xs hover:-translate-y-0.5 hover:border-[#d4a862] hover:bg-[#f9f7f4] hover:shadow-sm",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d4a862] select-none text-center cursor-pointer " +
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
