"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const codeFragments = [
  { text: "<web />", top: "20%", left: "15%", delay: 0.2 },
  { text: "{ AI }", top: "25%", right: "15%", delay: 0.4 },
  { text: "design()", bottom: "25%", left: "20%", delay: 0.6 },
  { text: "create()", bottom: "20%", right: "20%", delay: 0.8 },
];

export default function Loader() {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTagline(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0D031C] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Code Fragments */}
      <div className="absolute inset-0 pointer-events-none">
        {codeFragments.map((fragment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.8],
              x: fragment.left ? -50 : 50,
              y: fragment.top ? -50 : 50,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: fragment.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: fragment.top,
              left: fragment.left,
              right: fragment.right,
              bottom: fragment.bottom,
            }}
            className="text-[#B584DF]/30 font-mono text-sm md:text-lg"
          >
            {fragment.text}
          </motion.div>
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Initializing Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut"
          }}
          className="absolute -top-12 left-0 font-mono text-[#70D3F8] text-xs md:text-sm tracking-widest uppercase"
        >
          {">"} initializing devwithsheza...
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.div>

        {/* Main Logo Text */}
        <div className="flex overflow-hidden">
          {"DEVWITHSHEZA".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.05,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#B584DF] via-[#70D3F8] to-[#DB6DFF] drop-shadow-2xl"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Tagline Reveal */}
        <AnimatePresence>
          {showTagline && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-white/70 text-center text-sm md:text-base tracking-[0.2em] font-light max-w-xs md:max-w-md"
            >
              Crafting digital experiences with code & creativity.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar (Subtle) */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#B584DF] to-[#DB6DFF]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
    </div>
  );
}
