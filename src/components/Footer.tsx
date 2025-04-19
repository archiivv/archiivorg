import React from 'react';
import { Github as GitHub, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50/90 dark:bg-gray-800/90 border-t border-gray-200 dark:border-gray-700 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} archiiv. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/archiivv" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chase-mccaskill/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;