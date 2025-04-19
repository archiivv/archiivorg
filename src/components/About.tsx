import React from 'react';

const About: React.FC = () => {
  const technologies = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-400' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-400' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
    { name: 'TypeScript', icon: 'typescript-icon', color: 'text-blue-500', svg: true },
    { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' },
    { name: 'Tailwind', icon: 'tailwind-icon', color: 'text-cyan-400', svg: true },
    { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'text-emerald-400' },
    { name: 'Godot', icon: 'godot-icon', color: 'text-blue-500', svg: true },
  ];

  return (
    <div id="about" className="container mx-auto px-4 py-20 mt-20">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center mb-16">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Hey, I'm archiiv, or Chase McCaskill. I've spent 3+ years as a independent software developer in a wide range of situations from web development and design to video game programming.
          </p>
          <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">Technologies I Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                {tech.svg ? (
                  tech.icon === 'typescript-icon' ? (
                    <svg className="w-8 h-8 mx-auto mb-2" viewBox="0 0 512 512">
                      <rect fill="#3178c6" height="512" rx="50" width="512"/>
                      <path fill="#fff" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"/>
                    </svg>
                  ) : tech.icon === 'tailwind-icon' ? (
                    <svg className="w-8 h-8 mx-auto mb-2 text-cyan-400" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"/>
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 mx-auto mb-2 text-blue-500" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.236l8 4v7.528l-8 4-8-4V8.236l8-4zM12 7l-8 4v2l8-4 8 4v-2l-8-4z"/>
                    </svg>
                  )
                ) : (
                  <i className={`${tech.icon} text-2xl mb-2 ${tech.color}`}></i>
                )}
                <p className="text-gray-600 dark:text-gray-300">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;