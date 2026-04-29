"use client";

import { motion } from "motion/react";
import { Card } from "../ui/card";
import { selfData } from "@/constant";

export const GitHubStatsCard = () => {
  // We use the GitHub Readme Stats API with a customized theme that matches the portfolio
  const githubUsername = selfData.socials_username.github; // Using correct username from constants
  
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=8b5cf6&icon_color=d946ef&text_color=ffffff&bg_color=00000000`;
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=ffffff&bg_color=00000000`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="w-full mt-12 gpu-accelerated will-change-transform"
    >
      <Card className="p-6 bg-glass-bg border-glass-border backdrop-blur-xl overflow-hidden relative group shadow-luxury">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1 w-full">
            <h3 className="text-xl font-bold mb-4 font-nasalization text-primary">GitHub Ecosystem</h3>
            <div className="space-y-4">
               <img 
                src={statsUrl} 
                alt="GitHub Stats" 
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <h3 className="text-xl font-bold mb-4 font-nasalization text-secondary">Top Languages</h3>
            <div className="space-y-4">
              <img 
                src={topLangsUrl} 
                alt="Top Languages" 
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-glass-border flex justify-center">
            <motion.a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
            >
                <span>view_full_activity()</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </motion.a>
        </div>
      </Card>
    </motion.div>
  );
};
