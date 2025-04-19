import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover-glow">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-sm bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;