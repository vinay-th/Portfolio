import ArrowUpright from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-20">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 -z-10 pointer-events-none"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            <div className="flex flex-col md:flex-row md:gap-16 items-center relative z-10">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let&apos;s create something amazing together!
                </h2>

                <p className="text-sm mt-2 md:text-base">
                  Ready to bring your ideas to life? Let&apos;s get connected
                  and discuss how I can help and bring your vision to life.
                </p>
              </div>
              <a
                href="mailto:vinaythakor.5025@gmail.com"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 border border-gray-900 hover:bg-gray-800 transition-colors cursor-pointer z-10 hover:bg-white hover:text-gray-900"
                style={{ position: 'relative' }}
              >
                <span className="font-semibold whitespace-nowrap">
                  Contact me
                </span>

                <ArrowUpright className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
