import StarIcon from '@/assets/icons/star.svg';
import { transcode } from 'buffer';
import { transform } from 'next/dist/build/swc';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'react';

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  orbitDuration,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  orbitDuration?: string;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(shouldOrbit === true && 'animate-spin')}
        style={{ animationDuration: `${orbitDuration}` }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && 'animate-spin')}
            style={{ animationDuration: `${spinDuration}` }}
          >
            <div
              className="inline-flex "
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
