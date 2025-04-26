import { notFound } from "next/navigation";
import Image from "next/image";
import { projectsData } from "../../data/projectsData";
import { use } from "react";

interface ProjectDetailsProps {
  params: Promise<{ id: string }>;
}

async function getParams(paramsPromise: Promise<{ id: string }>) {
  return await paramsPromise;
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  // Properly unwrap the params promise
  const { id } = use(getParams(params));
  
  const projectId = parseInt(id);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Project Details Section */}
      <section className="min-h-[calc(100vh-64px)] py-8">
        <div className="h-full w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="h-full max-w-6xl mx-auto bg-zinc-800 rounded-xl overflow-hidden border border-slate-700 flex flex-col">
            {/* Project Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Project Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <span className="text-sm md:text-base text-blue-400 font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm md:text-base text-gray-400">{project.year}</span>
                </div>
                <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <span className="text-sm md:text-base text-gray-400">{project.location}</span>
                  <span className="text-sm md:text-base text-blue-400 font-medium">
                    Status: {project.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}