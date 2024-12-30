// Add this line at the top of your component file
'use client';

import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard'; // Import ProjectCard component

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}
export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  // Mengambil data saat komponen dimuat
  useEffect(() => {
    fetch('/api/projects') // Gunakan endpoint relatif untuk mengakses API
      .then((res) => res.json()) // Mengonversi response menjadi JSON
      .then((data) => setProjects(data)) // Menyimpan data ke state
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
