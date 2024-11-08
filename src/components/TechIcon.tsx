import Image from 'next/image';
export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return <Component className="size-10 text-white" />;
};
