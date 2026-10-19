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

  // Refined palette inspired by the Marquesini Advocacia brand identity (Carbon, Titanium & Gold)
  const variantClasses = {
    gold:
      "border border-[#deb26a] bg-gradient-to-r from-[#c69a4c] via-[#deb26a] to-[#c69a4c] text-[#09090b] font-extrabold shadow-md shadow-black/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    navy:
      "border border-[#27272e] bg-[#18181c] text-white font-bold shadow-md shadow-black/40 hover:-translate-y-0.5 hover:border-[#deb26a] hover:bg-[#202026] hover:text-[#f5dfad]",
    champagne:
      "border border-[#deb26a]/60 bg-gradient-to-r from-[#18181c] via-[#202026] to-[#18181c] text-[#f5dfad] font-bold shadow-xs hover:-translate-y-0.5 hover:shadow-gold hover:border-[#deb26a]",
    rosegold:
      "border border-[#f5dfad]/40 bg-gradient-to-r from-[#7d5b18] via-[#deb26a] to-[#7d5b18] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    bronze:
      "border border-[#deb26a]/40 bg-gradient-to-r from-[#4d370f] via-[#7d5b18] to-[#4d370f] text-white font-bold shadow-md hover:-translate-y-0.5",
    dark:
      "border border-[#deb26a]/35 bg-[#121215] text-[#f5dfad] shadow-md hover:-translate-y-0.5 hover:border-[#deb26a] hover:bg-[#18181c] hover:text-white",
    outline:
      "border border-[#27272e] bg-transparent text-white hover:-translate-y-0.5 hover:border-[#deb26a] hover:bg-[#deb26a]/10 hover:text-white",
    white:
      "border border-[#27272e] bg-[#18181c] text-white shadow-xs hover:-translate-y-0.5 hover:border-[#deb26a] hover:bg-[#202026]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#deb26a] select-none text-center cursor-pointer " +
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
