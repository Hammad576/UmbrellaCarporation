"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Box from "../components/Box"; // Import the reusable Box component

export default function Home() {
  return (
    <main className="bg-zinc-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-red-600/20 blur-3xl"
          animate={{
            x: [0, 200, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-blue-600/15 blur-3xl top-1/2 left-1/4"
          animate={{
            x: [-200, 0, -200],
            y: [100, 0, 100],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Hero Section with Banner Image */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Banner Image */}
          <div className="relative w-full h-96 mb-8 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/image2.jpg" // Replace with your actual banner image path
              alt="Umbrella Corporation"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-red-600">Umbrella</span> Corporation
          </h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto mb-8">
            Our business is <span className="text-red-500 font-semibold">life</span> itself. 
            Advancing research and innovation across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" passHref legacyBehavior>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-red-600 text-white rounded font-semibold transition-all hover:bg-red-700"
                aria-label="Explore Projects"
              >
                Explore Projects
              </motion.button>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-zinc-800 text-white border border-red-600 rounded font-semibold transition-all hover:bg-zinc-700"
                aria-label="Learn More"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="relative z-10 py-16 bg-black border-t border-red-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-red-600">About</span> Us
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            
            Umbrella Caropration Pakistan was founded in Larkan Karachi in year 1996 under a different Name. The purpose of this company was to make it as a Mother company to all the projects held at that time CEO. Its main domain were investment in Pakistan Stock Exchange, Research in Social Scineces and Technology and making Education Free and acessible for everyone. Now the company is shifted its headquarter in Attock , Punjab. We are still working on our targets.
          </p>
          <Link href="/about" passHref legacyBehavior>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-zinc-800 text-white border border-red-600 rounded font-semibold transition-all hover:bg-zinc-700"
              aria-label="Read More About Us"
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 py-16 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-red-600">Featured</span> Projects
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Project 1 */}
            <Box
              title="Technology Resarch"
              description="Pioneering biotechnology research with applications in medicine and agriculture.
              Resarch in evolving technology of AI and other tech related Innovations which are producing heavy impacts on our livs.
              "
              className="bg-zinc-800 border-l-4 border-red-600 hover:bg-zinc-700"
            />
            {/* Project 2 */}
            <Box
              title="Providing Education"
              description="We are working to provide the free education that should be acessible to everyone in there native language and in a simple manner"
              className="bg-zinc-800 border-l-4 border-red-600 hover:bg-zinc-700"
            />
            {/* Project 3 */}
            <Box
              title="Investments"
              description="From Umbrellas formation , Our main task was investments . The investments mainly done in Pakistan Stock Exchange. There are other portions of investments  including venture capitalists funds and Money Market funds"
              className="bg-zinc-800 border-l-4 border-red-600 hover:bg-zinc-700"
            />
          </div>
        </div>
      </section>

      {/* Investment Highlights Section */}
      <section className="relative z-10 py-16 bg-black border-t border-red-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-red-600">Investment</span> Highlights
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Highlight 1 */}
            <Box
              title="Diversified Portfolio"
              description="A balanced portfolio in Pakistan Stock Exchange in Fertilizer, Cement , Automobiles, Chemicals sectos."
              className="bg-zinc-800 border-l-4 border-red-600 hover:bg-zinc-700"
            />
            {/* Highlight 2 */}
            <Box
              title="Growth Strategy"
              description="We are focused on steady growth , while also considering the certain amount of risk for New Startups for gaining speed in growth."
              className="bg-zinc-800 border-l-4 border-red-600 hover:bg-zinc-700"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-red-600">Client</span> Testimonials
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Testimonial 1 */}
            <Box
              title="Albert Wesker, Director of Security"
              description='"Umbrella Corporation has revolutionized the way we think about biotechnology and security."'
              className="bg-zinc-800 border-l-4 border-red-600 hover:bg-zinc-700"
            />
            {/* Testimonial 2 */}
            <Box
              title="Annette Birkin, Chief Researcher"
              description='"The resources and freedom provided by Umbrella have allowed us to make unprecedented breakthroughs."'
              className="bg-zinc-800 border-l-4 border-red-600 hover:bg-zinc-700"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative z-10 py-16 bg-black border-t border-red-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-red-600">Join</span> Our Mission
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-md mx-auto mb-8">
            Partner with us to become a part of the Umbreall's Great Family. We have strong system and we belive in healthy work culture.
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-red-600 text-white rounded font-semibold transition-all hover:bg-red-700"
              aria-label="Contact Us"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}