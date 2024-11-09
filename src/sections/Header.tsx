'use client';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    const sections = document.querySelectorAll('section[id], div[id="home"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center fixed z-30 top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur">
        <a
          href="#"
          className={`nav-item hover:bg-white/10 ${
            activeSection === 'home' ? 'bg-white/10' : ''
          }`}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item hover:bg-white/10 ${
            activeSection === 'projects' ? 'bg-white/10' : ''
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item hover:bg-white/10 ${
            activeSection === 'about' ? 'bg-white/10' : ''
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-item ${
            activeSection === 'contact'
              ? 'bg-white text-gray-900'
              : 'hover:bg-white/10'
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
