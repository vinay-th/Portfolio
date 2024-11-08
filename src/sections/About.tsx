import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';
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

import { title } from 'process';
import { div } from 'framer-motion/client';
import { TechIcon } from '@/components/TechIcon';
import { CardHeader } from '@/components/CardHeader';
import { ToolBoxItems } from '@/components/ToolBoxItems';

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
  },
  {
    title: 'Coding',
    emoji: '🧑🏻‍💻',
  },
  {
    title: 'Football',
    emoji: '⚽',
  },
  {
    title: 'Traveling',
    emoji: '🚀',
  },
  {
    title: 'Food',
    emoji: '🍔',
  },
  {
    title: 'Computers',
    emoji: '💻',
  },
  {
    title: 'Binge-Watching',
    emoji: '🎞️',
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          title="A Glimpse Of My World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Education"
              description="GLS FCAIT B.Sc IT 2023 - 2026"
            />
            <div className="flex flex-col items-center justify-center ">
              <Image
                src={CodeGif}
                alt="code"
                className="w-[240px] h-[180px] sm:ml-[150px] sm:mt-[20px] md:ml-0 md:mt-0 max-w-none left-10"
              />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional
                web experiences."
              className="px-6 pt-6"
            />
            <ToolBoxItems items={toolboxItems} />
            <ToolBoxItems items={toolboxItems} />
          </Card>
          <Card className="">
            <div>
              <StarIcon />
              <h3>Beyond The Code</h3>
              <p>
                Explore the my Interests and Hobbies beyond the digital realm.
              </p>
            </div>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="">
            <Image src={mapImage} alt="map" />
            <Image src={smileEmoji} alt="emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
