"use client";

import { useState, useEffect, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./Loader";

interface LoaderWrapperProps {
  children: ReactNode;
}

export default function LoaderWrapper({ children }: LoaderWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Minimum duration for the animation (2.5s matches the progress bar)
    const minLoaderTime = new Promise((resolve) => setTimeout(resolve, 2500));

    // 2. Wait for the page and assets to load
    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        window.addEventListener("load", () => resolve(true), { once: true });
      }
    });

    // 3. Combined check
    Promise.all([minLoaderTime, pageLoaded]).then(() => {
      setIsLoading(false);
    });

    // Fallback if load event takes too long
    const fallbackTimer = setTimeout(() => setIsLoading(false), 5000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%",
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[9999]"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
