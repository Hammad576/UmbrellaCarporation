import { notFound } from "next/navigation";
import Image from "next/image";
import { projectsData } from "../../data/projectsData";
import { use } from "react";
import Link from "next/link";

interface ProjectDetailsProps {
  params: Promise<{ id: string }>;
}

async function getParams(paramsPromise: Promise<{ id: string }>) {
  return await paramsPromise;
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const { id } = use(getParams(params));
  const projectId = parseInt(id);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Project Content - Full screen layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Compact Image Section */}
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Project Details - Highlighted Content */}
        <div className="space-y-6">
          {/* Title Section */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {project.title}
            </h1>
            <div className="flex justify-center gap-4 text-lg text-gray-300">
              <span className="text-blue-400">{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>

          {/* Description - Highlighted */}
          <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Metadata - Single grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-400 mb-1">Location</h3>
              <p className="text-white">{project.location}</p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-400 mb-1">Status</h3>
              <p className="text-blue-400 font-medium">{project.status}</p>
            </div>
            {project.link && (
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-400 mb-1">Project Link</h3>
                <Link 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
                >
                  Visit Project →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}