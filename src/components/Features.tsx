import Bentodemo from './bentogrid';

export const Features = () => {
  return (
    <section id="features" className="bg-black text-white py-[72px] sm:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need</h2>
        <div className='max-w-xl mx-auto'>
          <p className="text-center mt-5 text-xl text-white/70">
            Our shop provides high-end grooming, modern styles, and more.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
        </div>
      </div>
    </section>
  );
};
