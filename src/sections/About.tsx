'use client';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import CodeGif from '@/assets/images/code-bg.gif';
import Image from 'next/image';

import JavaScriptSvg from '@/assets/icons/javascript.svg';
import ReactSvg from '@/assets/icons/react.svg';
import NextSvg from '@/assets/icons/nextjs.svg';
import GitHubSvg from '@/assets/icons/github.svg';
import MongoDBSvg from '@/assets/icons/mongodb.svg';
import CPPSvg from '@/assets/icons/cpp2.svg';
import JavaSvg from '@/assets/icons/java.svg';
import ExpressSvg from '@/assets/icons/express.svg';
import SpringSvg from '@/assets/icons/spring-boot.svg';
import NodeSvg from '@/assets/icons/nodejs.svg';

import mapImage from '@/assets/images/map.png';
import smileEmoji from '@/assets/images/memoji-smile.png';

import { CardHeader } from '@/components/CardHeader';
import { ToolBoxItems } from '@/components/ToolBoxItems';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptSvg,
  },
  {
    title: 'React.js',
    iconType: ReactSvg,
  },
  {
    title: 'Next.js',
    iconType: NextSvg,
  },
  {
    title: 'Express.js',
    iconType: ExpressSvg,
  },
  {
    title: 'C++',
    iconType: CPPSvg,
  },
  {
    title: 'Java',
    iconType: JavaSvg,
  },
  {
    title: 'Spring Boot',
    iconType: SpringSvg,
  },
  {
    title: 'MongoDB',
    iconType: MongoDBSvg,
  },
  {
    title: 'Node.js',
    iconType: NodeSvg,
  },
  {
    title: 'GitHub',
    iconType: GitHubSvg,
  },
];

const hobbies = [
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Coding',
    emoji: '🧑🏻‍💻',
    left: '50%',
    top: '5%',
  },

  {
    title: 'Binging',
    emoji: '🎞️',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Football',
    emoji: '⚽',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Food',
    emoji: '🍔',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Computers',
    emoji: '💻',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about">
      <div className="py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            title="A Glimpse Of My World"
            eyebrow="About Me"
            description="Learn more about who I am, what I do, and what inspires me"
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] p-0 lg:col-span-1 md:col-span-2">
                <CardHeader
                  title="My Education"
                  description="GLS FCAIT B.Sc IT 2023 - 2026 "
                  className="px-6 pt-6"
                />
                <div className="flex flex-col items-center justify-center ">
                  <Image
                    src={CodeGif}
                    alt="code"
                    className="w-[240px] h-[180px] sm:ml-[150px] sm:mt-[25px] md:ml-0 md:mt-0 max-w-none left-10"
                  />
                </div>
              </Card>
              <Card className="h-[320px] p-0 lg:col-span-2 md:col-span-3">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional
                web experiences."
                  className="px-6 pt-6"
                />
                <ToolBoxItems
                  items={toolboxItems}
                  className="mt-9"
                  itemWrapperClassName="animate-move-left"
                />
                <ToolBoxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemWrapperClassName="translate-x-1/2 animate-move-right"
                />
              </Card>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] p-0 flex flex-col lg:col-span-2 md:col-span-3">
                <CardHeader
                  title="Beyond The Code"
                  description="Explore the my Interests and Hobbies beyond the digital realm."
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{ left: hobby.left, top: hobby.top }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative lg:col-span-1 md:col-span-2">
                <Image
                  src={mapImage}
                  alt="map"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <div className="rounded-full overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                    <Image src={smileEmoji} alt="emoji" className="size-20" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
