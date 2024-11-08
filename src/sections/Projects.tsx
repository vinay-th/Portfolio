import AksharLandingPage from '@/assets/images/akshar-landing-page.png';
import WanderHostLandingPage from '@/assets/images/wanderhost-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import Image from 'next/image';
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUpgright from '@/assets/icons/arrow-up-right.svg';
import { div } from 'framer-motion/client';

const portfolioProjects = [
  {
    company: 'Akshar',
    year: '2024',
    title: 'Smart Classroom Management System',
    results: [
      { title: 'Designed a user-friendly interface' },
      { title: 'Implemented a secure login system' },
      { title: 'System Design and Development' },
    ],
    link: 'https://github.com/Akshar-scms/Akshar-frontend-react',
    image: AksharLandingPage,
  },
  {
    company: 'Wanderhost',
    year: '2023',
    title: 'A hosting platform for travelers',
    results: [
      { title: 'MERN Stack Development' },
      { title: 'Created a responsive website' },
      { title: 'CRUD operations' },
    ],
    link: 'https://github.com/vinay-th/Wanderhost',
    image: WanderHostLandingPage,
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'ReactJS Development' },
      { title: 'UI/UX Design' },
      { title: 'SEO Optimization' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real World Projects
          </p>
        </div>

        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4">
          See how i transformed my ideas into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden
              after:z-10 after:content-[''] after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl px-8 pt-8"
            >
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <div>{project.company}</div>
                <span>&bull;</span>
                <div>{project.year}</div>
              </div>
              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li
                    className="flex gap-2 text-sm text-white/50"
                    key={result.title}
                  >
                    <CheckIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Project</span>
                  <ArrowUpgright className="size-4" />
                </button>
              </a>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
