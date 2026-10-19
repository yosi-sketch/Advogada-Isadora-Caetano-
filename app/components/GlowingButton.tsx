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
    | "forest"
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

  // Refined palette inspired by Ingrid Marques Advocacia Previdenciária (Forest Green #222F25 & Sovereign Gold)
  const variantClasses = {
    gold:
      "border border-[#deb26a] bg-gradient-to-r from-[#c69a4c] via-[#deb26a] to-[#c69a4c] text-[#0a110c] font-extrabold shadow-md shadow-black/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    forest:
      "border border-[#2d4232] bg-gradient-to-r from-[#17241a] via-[#222f25] to-[#17241a] text-white font-bold shadow-md shadow-black/40 hover:-translate-y-0.5 hover:border-[#deb26a] hover:text-[#f5dfad]",
    navy:
      "border border-[#2d4232] bg-gradient-to-r from-[#17241a] via-[#222f25] to-[#17241a] text-white font-bold shadow-md shadow-black/40 hover:-translate-y-0.5 hover:border-[#deb26a] hover:text-[#f5dfad]",
    champagne:
      "border border-[#deb26a]/60 bg-gradient-to-r from-[#142017] via-[#222f25] to-[#142017] text-[#f5dfad] font-bold shadow-xs hover:-translate-y-0.5 hover:shadow-gold hover:border-[#deb26a]",
    rosegold:
      "border border-[#f5dfad]/40 bg-gradient-to-r from-[#7d5b18] via-[#deb26a] to-[#7d5b18] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    bronze:
      "border border-[#deb26a]/40 bg-gradient-to-r from-[#1b2b1e] via-[#222f25] to-[#1b2b1e] text-white font-bold shadow-md hover:-translate-y-0.5",
    dark:
      "border border-[#deb26a]/35 bg-[#142017] text-[#f5dfad] shadow-md hover:-translate-y-0.5 hover:border-[#deb26a] hover:bg-[#1a281f] hover:text-white",
    outline:
      "border border-[#2d4232] bg-transparent text-white hover:-translate-y-0.5 hover:border-[#deb26a] hover:bg-[#222f25]/40 hover:text-white",
    white:
      "border border-[#2d4232] bg-[#142017] text-white shadow-xs hover:-translate-y-0.5 hover:border-[#deb26a] hover:bg-[#1a281f]",
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
