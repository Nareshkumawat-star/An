"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { Navbar, Footer } from "@/components/common";
import { Hero } from "@/components/sections";
import { PreLoader, Background } from "@/components/common";

// Lazy load sections below the fold for faster initial rendering
const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/Skills").then(mod => mod.Skills), { ssr: false });
const Experience = dynamic(() => import("@/components/sections/Experience").then(mod => mod.Experience), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => mod.Projects), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore cinematic delay for preloader entry
    const loadTimer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(loadTimer);
  }, []);

  if (loading) return <PreLoader />;

  return (
    <div className="min-h-screen relative">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
