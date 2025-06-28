"use client";
import { useState, useEffect } from "react";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect current active section (based on scroll)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#hero", "#about", "#projects", "#contact"];
      for (const section of sections) {
        const el = document.querySelector(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Recent Works" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <div className="relative z-50 md:hidden">
      {/* Menu Button */}
      <button onClick={toggleMenu} className="text-white focus:outline-none">
        {isOpen ? <X size={28} /> : <AlignRight size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-[#1A0B2E] border-l border-purple-700
          flex flex-col items-center justify-center space-y-8
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <X size={28} />
        </button>

        {/* Nav Links */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={toggleMenu}
            className={`text-2xl text-white relative transition-all duration-300
              ${
                activeSection === link.href
                  ? "text-[#B584DF] after:scale-100"
                  : "hover:text-[#B584DF] after:scale-0"
              }
              after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2
              after:h-[2px] after:w-8 after:bg-[#B584DF] after:transition-transform after:duration-300 after:origin-center
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
