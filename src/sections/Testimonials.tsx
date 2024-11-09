import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import Image from 'next/image';
import GrainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { Fragment } from 'react';

const testimonials = [
  {
    name: 'Niomi Soni',
    position: 'Head of Design @ PinkPrints',
    text: 'Working with Vinay was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Maharshi Patel',
    position: 'Development Manager @ TechStartups',
    text: "Vinay was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: "Vinay's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ GlobalTech',
    text: "Vinay is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Director of IT @ MegaCorp',
    text: "Vinay's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="What My Clients Say About Me"
          eyebrow="Happy Clients"
          description="Don't just take my word for it. See what my clients have to say
        about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]">
            {[...new Array(2).fill(0)].map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:p=8 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
