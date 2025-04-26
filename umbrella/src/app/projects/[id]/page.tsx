import { notFound } from "next/navigation";
import Image from "next/image";
import { Project } from "../../types/project";
import { projectsData } from "../../data/projectsData";

interface ProjectDetailsProps {
  params: { id: string };
}

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const projectId = parseInt(params.id);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Project Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-zinc-800 rounded-lg overflow-hidden border border-slate-700">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-blue-400 font-medium">
                  {project.category}
                </span>
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{project.location}</span>
                <span className="text-sm text-blue-400 font-medium">
                  Status: {project.status}
                </span>
              </div>
              
              {/* Project Links */}
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}