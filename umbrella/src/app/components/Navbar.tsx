"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg border-b border-slate-700">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Left-Aligned Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
        >
          Umbrella Corp
        </Link>

        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
          <NavItem href="/" label="Home" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/about" label="About" />
          <NavItem href="/contact" label="Contact" />
        </div>

        {/* Empty div to balance the layout */}
        <div className="hidden md:block w-40"></div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-blue-500 hover:text-blue-400 transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown with AnimatePresence for proper animation handling */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-800 border-t border-slate-700 overflow-hidden"
          >
            <div className="flex flex-col py-4">
              <MobileNavItem href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/projects" label="Projects" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/about" label="About" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Desktop NavItem Component with improved hover effect and animations
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className="relative inline-block px-3 py-2 text-lg font-bold text-slate-200 hover:text-blue-400 transition-all duration-300 group"
      >
        {label}
        {/* Underline Animation on Hover */}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </a>
    </Link>
  );
}

// Mobile NavItem Component for better touch targets
function MobileNavItem({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        onClick={onClick}
        className="flex w-full text-left px-6 py-3 text-lg font-bold text-slate-200 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-300"
      >
        {label}
      </a>
    </Link>
  );
}