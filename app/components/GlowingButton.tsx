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
    | "wine"
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
    sm: "px-5 py-2.5 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Haynhandra Martins Advocacia (Deep Marsala Wine #681724 & Brushed Gold #C59860) in Light Mode
  const variantClasses = {
    gold:
      "border border-[#ba8847] bg-gradient-to-r from-[#ba8847] via-[#d4a86f] to-[#ba8847] text-[#2b1218] font-extrabold shadow-md shadow-[#c59860]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    wine:
      "border border-[#4d0e19] bg-gradient-to-r from-[#5a121f] via-[#721b2a] to-[#5a121f] text-white font-bold shadow-md shadow-[#5a121f]/20 hover:-translate-y-0.5 hover:border-[#c59860] hover:shadow-wine",
    forest:
      "border border-[#4d0e19] bg-gradient-to-r from-[#5a121f] via-[#721b2a] to-[#5a121f] text-white font-bold shadow-md shadow-[#5a121f]/20 hover:-translate-y-0.5 hover:border-[#c59860]",
    navy:
      "border border-[#4d0e19] bg-gradient-to-r from-[#5a121f] via-[#721b2a] to-[#5a121f] text-white font-bold shadow-md shadow-[#5a121f]/20 hover:-translate-y-0.5 hover:border-[#c59860]",
    champagne:
      "border border-[#c59860] bg-[#fffaf2] text-[#681724] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f5ecde] hover:border-[#ba8847]",
    rosegold:
      "border border-[#ba8847] bg-gradient-to-r from-[#ba8847] via-[#c59860] to-[#ba8847] text-[#2b1218] font-bold shadow-md hover:-translate-y-0.5 hover:brightness-105",
    bronze:
      "border border-[#eadbce] bg-[#faf6f0] text-[#5a121f] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#c59860]",
    dark:
      "border border-[#4d0e19] bg-[#3b0911] text-[#f2dcba] shadow-md hover:-translate-y-0.5 hover:border-[#c59860] hover:bg-[#5a121f] hover:text-white",
    outline:
      "border border-[#d9c5b2] bg-white text-[#4a363a] hover:-translate-y-0.5 hover:border-[#681724] hover:text-[#681724] hover:bg-[#fffcf7]",
    white:
      "border border-[#eadbce] bg-white text-[#2b1a1d] shadow-xs hover:-translate-y-0.5 hover:border-[#c59860]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#681724] select-none text-center cursor-pointer " +
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
