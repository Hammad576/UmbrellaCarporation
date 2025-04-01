"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "../components/Box"; // Import reusable Box component

export default function AboutPage() {
  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-black border-b border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-500">About</span> Us
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Founded in 1996 in Larkana, Karachi, under a different name,
            Umbrella Corporation purpose was to create a parent company under which all the projects will be run. At that time the main domains were investment in Pakistan Stock Exchange and research on Technology. The company is now also taking intereset in other sectors as wll especially in Education. Our mission is to provide equal oppourtunities to everyone and to make this world a better place to live and thrive.
          </p>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="relative h-96 w-full">
              <Image
                src="/aboutImage.jpg" // Replace with actual image path
                alt="Umbrella Corporation"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column: Content */}
            <div>
              <h2 className="text-3xl font-bold text-blue-500 mb-4">
                Our Journey
              </h2>
              <p className="text-gray-300 mb-6">
                Umbrella Corporation started as a parent compnay focuses on investment in PSX and research. Providing an Umbrella for all the projects and the research of that time CEO. We in future want to expend our exposure in golobal stock markets. Also we have did a lot of research on the Technology, such as AI and Robotics.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Founded in 1996 in Larkana, Karachi</li>
                <li>Expanded into multiple sectors by 2010</li>
                <li>Global presence established by 2020</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights Section */}
      <section className="py-16 bg-zinc-900 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-blue-500">Investment</span> Highlights
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Highlight 1 */}
            <Box
              title="Stock Exchange"
              description="We invest in diversified portfolio in Pakistan Stock Exchange."
              className="bg-zinc-800 border-l-4 border-blue-600 hover:bg-zinc-700"
            />
            {/* Highlight 2 */}
            <Box
              title="Technology Research"
              description="We have did a lot of research in Technology sector specially AI and robotics. And in futre intended to expand our researah in automation and make it publically availible"
              className="bg-zinc-800 border-l-4 border-blue-600 hover:bg-zinc-700"
            />
            {/* Highlight 3 */}
            <Box
              title="Social Sciences"
              description="Social Sciences are the most important study area in today world where the society is going through great change."
              className="bg-zinc-800 border-l-4 border-blue-600 hover:bg-zinc-700"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-black border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">
            Our Mission and Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-gray-300">
                To advance research and awareness in Investment, business, technology  and  make them acessible for everyone. Our slogan is Free Education For Everyone.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-gray-300">
                To become your trustworthy partner in research and awareness.
                We want to educate everyone so that the people can understand the today modern world challenges and better cop with it. Creating this world a better place to live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated CEO Section (Image Above Boxes) */}
      <section className="py-16 bg-zinc-900 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-blue-500">Our</span> Leadership
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>

          {/* CEO Image */}
          <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg mb-8">
            <Image
              src="/profile.jpg" // Replace with actual image path
              alt="Hammad Nawaz - CEO"
              fill
              className="object-cover"
            />
          </div>

          {/* CEO Details */}
          <h3 className="text-2xl font-bold text-blue-500 mb-2">Hammad Nawaz</h3>
          <p className="text-lg text-gray-400 mb-4">Chief Executive Officer</p>
          <p className="text-gray-300 mb-6">
            Hammad Nawaz took charge of the Umbrella Caropration at very young age. The company was in serious crisis at that time. Still we are facing a lot of Challanges due to certain conditions. But we still belive that at some point the company will be functional again and will start working to achieve the goals.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Email Card */}
            <Box
              title="Email"
              description={
                <a
                  href="mailto:info@umbrellacorp.pk"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@umbrellacorp.pk
                </a>
              }
              className="bg-zinc-800 border-l-4 border-blue-600 hover:bg-zinc-700"
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
              className="bg-zinc-800 border-l-4 border-blue-600 hover:bg-zinc-700"
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
              className="bg-zinc-800 border-l-4 border-blue-600 hover:bg-zinc-700"
            />
          </div>
        </div>
      </section>
    </main>
  );
}