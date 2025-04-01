"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "../types/project";
import Image from "next/image";

// Project data with explicit typing
const projects: Project[] = [
  {
    id: 1,
    title: "Umbrella Investments Private Limited",
    category: "Finance",
    image: "/finance.jpg", // Replace with actual image URL
    description:
      "Driving strategic investments across global stock markets and industries.",
    status: "Active",
    year: 2023,
    location: "Karachi, Pakistan",
  },
  {
    id: 2,
    title: "Umbrella Open Source",
    category: "Technology",
    image: "/opensource.jpg", // Replace with actual image URL
    description:
      "Developing open-source coding tools and AI-driven solutions for developers worldwide.",
    status: "Active",
    year: 2022,
    location: "Global",
  },
  {
    id: 3,
    title: "Umbrella Tech Researcher",
    category: "Research",
    image: "/AI.jpg", // Replace with actual image URL
    description:
      "Pioneering cutting-edge research in biotechnology, AI, and sustainable technologies.",
    status: "Active",
    year: 2021,
    location: "Larkana, Pakistan",
  },
  {
    id: 4,
    title: "Umbrella Social Sciences & Psychology Researchers",
    category: "Social Sciences",
    image: "/psycology.jpg", // Replace with actual image URL
    description:
      "Advancing interdisciplinary research in social sciences and psychology to address societal challenges.",
    status: "Active",
    year: 2020,
    location: "Islamabad, Pakistan",
  },
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Search Bar Section */}
      <section className="py-10 bg-zinc-800 border-b border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex justify-center md:justify-end">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 bg-zinc-700 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-zinc-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500} // Set width as per your requirement
          height={300} // Set height as per your requirement
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold">
          {project.status}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-blue-400 font-medium">
            {project.category}
          </span>
          <span className="text-sm text-gray-400">{project.year}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{project.location}</span>
          <Link href={`/projects/${project.id}`}>
            <span className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
              View Details →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
