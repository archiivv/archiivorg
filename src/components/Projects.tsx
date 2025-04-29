import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    { 
      image: 'https://d2w9rnfcy7mm78.cloudfront.net/34402444/original_c13f0706ec93ccd7c95240aa95bd8c31.png?1739146270?bc=0',
      title: 'Altair Movies', 
      description: 'Movie discovery and recommendation platform',
      link: 'https://movies.archiiv.org',
      tags: ['TMDB API', 'Tailwind']
    },
    { 
      image: 'https://d2w9rnfcy7mm78.cloudfront.net/36318909/original_15daf48384f5b11ddd4b5166ef7d0b0b.png?1745883217?bc=0',
      title: 'Slot Machine', 
      description: 'A free-to-play slot machine',
      link: 'https://slots.archiiv.org',
      tags: ['React', 'Tailwind']
    },
    { 
      image: 'https://d2w9rnfcy7mm78.cloudfront.net/36261799/original_c02155bf36d6c0bdbb3ce8e74aabc57c.png?1745636826?bc=0',
      title: 'Retro Emulator', 
      description: 'Browser-based retro game emulator',
      link: 'https://emulator.archiiv.org',
      tags: ['WebAssembly', 'JavaScript']
    },
  ];

  return (
    <div id="projects" className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;