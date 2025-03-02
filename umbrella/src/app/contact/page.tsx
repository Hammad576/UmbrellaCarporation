"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Box from "../components/Box"; // Import the reusable Box component

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-black border-b border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-500">Contact</span> Us
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have questions, feedback, or partnership opportunities, feel free to reach out.
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-zinc-900 border-b border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            Reach Out to Our Leadership
          </h2>
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
            <Image
              src="/profile.jpg" // Replace with actual image path
              alt="Hammad Nawaz - CEO"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Hammad Nawaz</h3>
          <p className="text-gray-400 mb-4">Chief Executive Officer</p>

          {/* Contact Cards Using Box Component */}
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
              className="bg-zinc-800 hover:bg-zinc-700"
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
              className="bg-zinc-800 hover:bg-zinc-700"
            />

            {/* Website Card */}
            <Box
              title="Website"
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
              className="bg-zinc-800 hover:bg-zinc-700"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-green-500 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-300">
                  Your message has been successfully submitted. We’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-semibold transition-all hover:bg-blue-700"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}