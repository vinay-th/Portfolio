import { twMerge } from 'tailwind-merge';
import { Inter, Calistoga } from 'next/font/google';
import { FaArrowLeft } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export default function ProjectsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={twMerge(
        inter.variable,
        calistoga.variable,
        ' bg-gray-900 text-white antialiased font-sans'
      )}
    >
      <nav className="flex items-center justify-between p-10">
        <Link href="/">
          <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:opacity-55">
            <FaArrowLeft />
            <span>Go back</span>
          </button>
        </Link>

        <span className="font-serif text-5xl md:text-2xl text-center tracking-wide pr-20">
          Featured Projects
        </span>

        <Link href="https://github.com/vinay-th">
          <button>
            <AiFillGithub size={50} />
          </button>
        </Link>
      </nav>

      {children}
    </div>
  );
}
