'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[999] block p-3 bg-white/20 backdrop-blur-md text-white rounded-full shadow-xl hover:bg-white/30 transition-transform hover:scale-110 cursor-pointer"
        >
          <ArrowUp className="w-6 h-6 animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
