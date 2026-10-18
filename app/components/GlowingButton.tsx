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

  // Refined palette inspired by the editorial studio imagery of Dra. Rafaela Souza
  const variantClasses = {
    gold:
      "border border-[#dab280]/60 bg-gradient-to-r from-[#a67c42] via-[#c59d64] to-[#a67c42] text-white font-bold shadow-md shadow-[#070a1c]/15 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    navy:
      "border border-[#dab280]/35 bg-[#070a1c] text-[#f5e6cf] font-bold shadow-md shadow-[#070a1c]/25 hover:-translate-y-0.5 hover:border-[#dab280] hover:bg-[#0f1c38] hover:text-white hover:shadow-navy",
    champagne:
      "border border-[#dab280]/60 bg-gradient-to-r from-[#fbf6ee] via-[#f5e6cf] to-[#fbf6ee] text-[#070a1c] font-bold shadow-xs hover:-translate-y-0.5 hover:shadow-gold hover:brightness-105",
    rosegold:
      "border border-[#f5e6cf]/40 bg-gradient-to-r from-[#886230] via-[#c59d64] to-[#886230] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    bronze:
      "border border-[#c59d64]/40 bg-gradient-to-r from-[#4c3214] via-[#886230] to-[#4c3214] text-white font-bold shadow-md hover:-translate-y-0.5",
    dark:
      "border border-[#dab280]/35 bg-[#070a1c] text-[#f5e6cf] shadow-md hover:-translate-y-0.5 hover:border-[#dab280] hover:bg-[#12203d] hover:text-white",
    outline:
      "border border-[#070a1c]/30 bg-transparent text-[#070a1c] hover:-translate-y-0.5 hover:border-[#c59d64] hover:bg-[#c59d64]/10 hover:text-[#070a1c]",
    white:
      "border border-[#e6dfd5] bg-white text-[#070a1c] shadow-xs hover:-translate-y-0.5 hover:border-[#c59d64] hover:bg-[#fbf6ee] hover:shadow-sm",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c59d64] select-none text-center cursor-pointer " +
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
