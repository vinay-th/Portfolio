'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';

// Import Assets (assuming paths are correct)
import AksharLandingPage from '@/assets/images/akshar-landing-page.png';
import Zoober from '@/assets/images/zoober.png';
import crevo from '@/assets/images/crevo.png';
import Verifi from '@/assets/images/verifi.png';
import GrainImage from '@/assets/images/grain.jpg';

// Import Icons (assuming paths are correct)
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUpgright from '@/assets/icons/arrow-up-right.svg';
import { FaEye } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const portfolioProjects = [
  {
    id: 1,
    company: 'Akshar',
    year: '2024',
    title: 'Smart Classroom Management System',
    description: 'A comprehensive platform for modern classroom management.',
    results: [
      { title: 'Designed a user-friendly interface' },
      { title: 'Implemented a secure login system' },
      { title: 'System Design and Development' },
    ],
    link: 'https://github.com/Akshar-scms/Akshar-frontend-react',
    image: AksharLandingPage,
  },
  {
    id: 2,
    company: 'Crevo - Creative Evolution',
    year: '2024',
    title: 'The Ultimate Design Tool 🎨',
    description: 'AI-powered design tool for seamless creative workflows.',
    results: [
      { title: 'NextJS Development' },
      { title: 'Ai integration' },
      { title: 'Design seamlessly' },
    ],
    link: 'https://github.com/vinay-th/Crevo',
    image: crevo,
  },
  {
    id: 3,
    company: 'Zoober',
    year: '2024',
    title: 'A full stack Uber clone',
    description: 'Ride-sharing application built with React Native.',
    results: [
      { title: 'React native Development' },
      { title: 'Created a Android/IOS app' },
      { title: 'Expo framework' },
    ],
    link: 'https://github.com/vinay-th/Zoober',
    image: Zoober,
  },
  {
    id: 4,
    company: 'VeriFi',
    year: '2025',
    title: 'A Web3 document verifier',
    description: 'Decentralized platform for verifying document authenticity.',
    results: [
      { title: 'NextJS Development' },
      { title: 'Blockchain integration' },
      { title: 'Decentralized Web3 document authenticity verifier' },
    ],
    link: 'https://github.com/vinay-th/VeriFi',
    image: Verifi,
  },
];

interface Project {
  id: number;
  company: string;
  year: string;
  title: string;
  description: string;
  results: { title: string }[];
  link: string;
  image: StaticImageData;
}

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 flex items-center justify-center p-4 "
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-gray-800 rounded-3xl z-50 overflow-hidden relative w-full max-w-4xl max-h-[90vh]
                   after:z-10 after:content-[''] after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage: `url(${GrainImage.src})`,
            opacity: 0.05,
          }}
        ></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white/60 hover:text-white transition-colors p-2 rounded-full bg-black/20 hover:bg-black/40"
          aria-label="Close project details"
        >
          <IoClose size={20} /> {/* Use your close icon */}
        </button>

        {/* Modal Content */}
        <div className="overflow-y-hidden max-h-[calc(90vh-4rem)] p-8 pt-12 md:p-10 lg:p-16">
          {/* Using original layout structure inside modal */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Text Details */}
            <div className="lg:pb-16 flex flex-col">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text mb-2">
                <div>{project.company}</div>
                <span>•</span>
                <div>{project.year}</div>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-3">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <li
                    className="flex gap-3 items-start text-sm md:text-base text-white/70"
                    key={result.title}
                  >
                    <CheckIcon className="size-5 md:size-6 flex-shrink-0 mt-0.5 text-emerald-400" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 md:mt-5">
                <span className="text-white/70 pt-4 md:mt-5">
                  {project.description}
                </span>
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6" // Push button towards bottom
              >
                <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                  <span>View Project</span>
                  <ArrowUpgright className="size-4" />
                </button>
              </a>
            </div>

            {/* Image */}
            {/* Adjusted image styling for modal context */}
            <div className="relative mt-8 lg:mt-0 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={600} // Provide explicit width/height or use fill
                height={400} // Adjust these based on your image aspect ratios
                className="rounded-lg object-contain max-h-[50vh] lg:max-h-full w-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Page Component ---
const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project): void => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="pb-16 lg:pb-20">
      <div className="container">
        {/* Grid Layout */}
        <div className="md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-white/20 transition-colors duration-300"
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-video overflow-hidden">
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    backgroundImage: `url(${GrainImage.src})`,
                    opacity: 0.03,
                  }}
                ></div>
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-white/90">
                  {project.title}
                </h3>
                <button
                  onClick={() => handleOpenModal(project)}
                  className="mt-auto bg-gradient-to-r from-emerald-400/20 to-sky-500/20 text-emerald-300 border border-emerald-400/30 hover:border-emerald-400/60 hover:text-emerald-200 h-10 px-5 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 text-sm group-hover:from-emerald-400/30 group-hover:to-sky-500/30"
                >
                  <span>Preview Project</span>
                  <FaEye className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioPage;
