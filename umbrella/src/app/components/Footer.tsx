"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white shadow-lg border-t border-slate-700">
      <div className="container mx-auto px-6 py-4">
        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Company Name */}
          <h2 className="text-lg font-bold text-blue-500">
            Umbrella Corporation
          </h2>

          {/* Social Links */}
          <div className="flex space-x-4">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/hammad-nawaz-25b998253"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-blue-500 text-white p-2 rounded-full transition-all duration-200 flex items-center justify-center w-10 h-10 text-xl"
            >
              <FaLinkedinIn />
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/Hammad576"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-blue-500 text-white p-2 rounded-full transition-all duration-200 flex items-center justify-center w-10 h-10 text-xl"
            >
              <FaGithub />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Umbrella Corporation Pakistan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}