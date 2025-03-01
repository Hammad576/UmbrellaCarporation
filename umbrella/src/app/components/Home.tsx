"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-green-500/30 blur-3xl"
          animate={{
            x: [0, 200, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-red-500/30 blur-3xl top-1/2 left-1/2"
          animate={{
            x: [-200, 0, -200],
            y: [100, 0, 100],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Umbrella Corporation"
          width={200}
          height={200}
          className="mx-auto mb-6 animate-pulse"
        />

        {/* Title */}
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
          Welcome to Umbrella Corporation
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-8">
          Advancing research, business, and investment in Pakistan.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-black text-green-400 border-2 border-green-400 rounded-md font-semibold transition-all hover:bg-green-400 hover:text-black"
          >
            Explore Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-black text-red-500 border-2 border-red-500 rounded-md font-semibold transition-all hover:bg-red-500 hover:text-black"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
}