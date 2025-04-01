"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Box from "../components/Box";  
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange =  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Hero Section with Dark Background Gradient */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-cyan-900 border-b border-slate-800">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
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
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
            Contact Us
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            We’re here to answer your questions, explore collaborations, or hear your feedback.
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-zinc-900 border-b border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
            Reach Out to Our Leadership
          </h2>
          <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg mb-8">
            <Image
              src="/profile.jpg" // Replace with actual image path
              alt="Hammad Nawaz - CEO"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Hammad Nawaz</h3>
          <p className="text-gray-400 mb-4">Chief Executive Officer</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Email Card */}
            <Box
              title="Email"
              description={
                <a
                  href="mailto:fa22-bcs-031@cuiatk.edu.pk"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  fa22-bcs-031@cuiatk.edu.pk
                </a>
              }
              className="bg-zinc-800 border border-slate-700 hover:border-blue-500"
            />
            {/* LinkedIn Card */}
            <Box
              title="LinkedIn"
              description={
                <Link
                  href="https://www.linkedin.com/in/hammad-nawaz-25b998253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </Link>
              }
              className="bg-zinc-800 border border-slate-700 hover:border-blue-500"
            />
            {/* Website Card */}
            <Box
              title="Portfolio"
              description={
                <Link
                  href="https://hammad-nawaz-portf.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Visit CEO Website
                </Link>
              }
              className="bg-zinc-800 border border-slate-700 hover:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-6 max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-green-500 mb-4">
                Message Sent!
              </h2>
              <p className="text-gray-300">
                Thank you for reaching out. We’ll respond to your inquiry shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500 transition-all duration-200"
                ></textarea>
              </div>

              {/* Submit Button with Animation */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md font-semibold transition-all hover:from-blue-700 hover:to-cyan-600"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}