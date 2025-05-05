import ArrowUpright from '@/assets/icons/arrow-up-right.svg';

const links = [
  { title: 'GitHub', href: 'https://github.com/vinay-th' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/vinay-thakor/' },
  { title: 'Instagram', href: 'https://www.instagram.com/vinay_thakor._/' },
  { title: 'Twitter', href: 'https://x.com/code_with_vinay' },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-white hover:text-emerald-300"
                style={{ position: 'relative', zIndex: 10 }}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpright className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
