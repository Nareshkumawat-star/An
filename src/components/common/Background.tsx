"use client";

import { useEffect, useRef, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "motion/react";

export const Background = () => {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  // Smooth springs for the spotlight movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  const spotlightBackground = useMotionTemplate`radial-gradient(circle 500px at ${springX}% ${springY}%, transparent 0%, rgba(5, 5, 12, 0.98) 100%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Calculate position as percentage
      mouseX.set((clientX / window.innerWidth) * 100);
      mouseY.set((clientY / window.innerHeight) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="top-0 fixed -z-10 h-full w-full overflow-hidden bg-[#050510]">
      {/* Cinematic Grain Overlay */}
      <div className="absolute inset-0 z-20 opacity-[0.04] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full opacity-30">
          <filter id="noise">
            <feTurbulence baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Global Vignette */}
      <div className="absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

      {/* Spotlight revealed area */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: spotlightBackground,
        }}
      >
        <MeshGradient
          className="w-full h-full"
          colors={["#000000", "#8b5cf6", "#ffffff", "#1e1b4b", "#4c1d95"]}
          speed={0.2}
        />
      </motion.div>

      {/* Static mesh layer underneath to ensure no total black holes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <MeshGradient
          className="w-full h-full"
          colors={["#0a0614", "#1e1b4b", "#000000", "#4c1d95", "#0a0614"]}
          speed={0.1}
        />
      </div>
    </div>
  );
};
