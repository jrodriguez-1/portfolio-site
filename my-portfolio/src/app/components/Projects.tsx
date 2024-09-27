// components/Projects.tsx
import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A web app built with React and TypeScript.',
    imageUrl: '/project1.jpg',
    link: 'https://project-one.com',
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with Next.js and Tailwind CSS.',
    imageUrl: '/project2.jpg',
    link: 'https://project-two.com',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-700 rounded-lg p-6">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-primary-500 hover:text-primary-600"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
