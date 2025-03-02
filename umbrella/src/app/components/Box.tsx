"use client";

import { motion } from "framer-motion";
import React from "react";

interface BoxProps {
  title: string;
  description: string | React.ReactNode; // Allow both string and ReactNode
  className?: string; // Optional className for styling
}

export default function Box({ title, description, className }: BoxProps) {
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg h-full ${className || ""}`} // Apply className if provided
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 15px rgba(255, 0, 0, 0.5)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      <h3 className="text-xl font-bold text-red-500 mb-4">{title}</h3>
      <div className="text-gray-300">{description}</div>
    </motion.div>
  );
}