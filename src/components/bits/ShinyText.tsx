"use client";

import { motion } from "motion/react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = "",
}: ShinyTextProps) {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-white to-slate-400 ${className}`}
      style={{
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
      animate={
        disabled
          ? {}
          : {
              backgroundPosition: ["100% 0%", "-100% 0%"],
            }
      }
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
}
