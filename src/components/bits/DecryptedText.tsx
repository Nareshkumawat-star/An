"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  animateOn?: "view" | "hover";
  [key: string]: unknown;
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  animateOn = "hover",
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const iterationRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    iterationRef.current = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            
            const progress = iterationRef.current / maxIterations;
            const revealIndex = Math.floor(progress * text.length);
            
            if (revealDirection === "start" && index < revealIndex) {
              return char;
            } else if (revealDirection === "end" && index > text.length - revealIndex) {
              return char;
            } else if (revealDirection === "center") {
               const center = text.length / 2;
               if (Math.abs(index - center) < revealIndex / 2) {
                 return char;
               }
            }

            if (useOriginalCharsOnly) {
              const availableChars = text.replace(/\s/g, "");
              return availableChars[Math.floor(Math.random() * availableChars.length)];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");
      });

      iterationRef.current += 1;
      if (iterationRef.current >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOn === "view") {
      startAnimation();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, animateOn]);

  return (
    <motion.span
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      onMouseEnter={() => {
        if (animateOn === "hover") startAnimation();
      }}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </motion.span>
  );
}
