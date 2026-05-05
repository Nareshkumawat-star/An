"use client";

import { motion } from "motion/react";
import React from "react";

interface FallingTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function FallingText({
  text,
  className = "",
  delay = 50,
  duration = 0.5,
}: FallingTextProps) {
  const letters = text.split("");

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -80, rotate: Math.random() * 45 - 22.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            duration: duration,
            delay: index * (delay / 1000),
            type: "spring",
            bounce: 0.6,
          }}
          className="inline-block whitespace-pre"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
