import React, { useState } from 'react';
import { Github as GitHub, Mail, Linkedin } from 'lucide-react';
import { SocialLink } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo - no actual message was sent)');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks: SocialLink[] = [
    { icon: 'github', title: 'GitHub Profile', link: 'https://github.com/archiivv' },
    { icon: 'linkedin', title: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/chase-mccaskill/' },
    { icon: 'mail', title: 'Email Me', link: 'mailto:chase@archiiv.org' },
  ];

  return (
    <div id="contact" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center mb-16">Get in Touch</h2>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-300 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-300 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-300 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover-glow transition-all duration-300"
            >
              {link.icon === 'github' ? 
                <GitHub className="w-5 h-5 mr-3 text-gray-700 dark:text-gray-200" /> : 
                link.icon === 'linkedin' ?
                <Linkedin className="w-5 h-5 mr-3 text-gray-700 dark:text-gray-200" /> :
                <Mail className="w-5 h-5 mr-3 text-gray-700 dark:text-gray-200" />
              }
              <span className="text-gray-700 dark:text-gray-200">{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;