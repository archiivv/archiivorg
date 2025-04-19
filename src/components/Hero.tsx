import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center p-4 pt-24">
      <div className="animate-float pt-16 w-full">
        <h1 
          className="text-7xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center mb-10"
          style={{ fontFamily: '"archiiv", sans-serif', lineHeight: '1.3' }}
        >
          archiiv
        </h1>
      </div>
      <p className="text-gray-400 text-xl sm:text-2xl md:text-3xl font-medium text-center mb-10 max-w-3xl animate-fadeIn">
        emergent web architect & digital systems scholar
      </p>
      <div className="animate-fadeIn flex gap-6 mt-8">
        <a 
          href="#projects" 
          onClick={() => handleNavClick('projects')}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          onClick={() => handleNavClick('contact')}
          className="px-8 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600/10 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Hero;