import StarIcon from '@/assets/icons/star.svg';
const words = [
  'Full Stack',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Problem Solving',
  'System Design',
  'Secure',
  'Interective',
  'Reliable',
  'Logic Building',
  'Aesthetic',
];
export const TapeSection = () => {
  return (
    <div>
      <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -m-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 py-3">
              {words.map((word) => (
                <div key={word} className="inline-flex gap-4 items-center">
                  <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  <span className="text-gray-900 uppercase font-extrabold text-sm">
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
