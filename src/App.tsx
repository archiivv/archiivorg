import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <ThemeProvider>
      <div className="fixed inset-0 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
        <div className="relative min-h-screen overflow-x-hidden">
          <Navbar />
          <main>
            <section id="home">
              <Hero />
            </section>
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;