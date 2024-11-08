import Image from 'next/image';
export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </svg>
    </>
  );
};
