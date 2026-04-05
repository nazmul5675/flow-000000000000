import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { assets } from '../../data/assets';

const HeroSection = ({ id }) => {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(mediaRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
      })
        .from(".hero-title-main", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out"
        }, "-=1.0")
        .from(".hero-title-sub", {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out"
        }, "-=1.0")
        .from(cardRef.current, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=0.8")
        .from(".hero-tagline", {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out"
        }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={sectionRef} className="relative min-h-screen pt-20 md:pt-28 pb-20 overflow-hidden bg-white">
      <div className="max-w-[1700px] mx-auto px-4 md:px-10 lg:px-12 relative">

        {/* Large Rounded Media Container */}
        <div
          ref={mediaRef}
          className="relative w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-black/5 mb-10 md:mb-16 shadow-sm"
        >
          {/* Background Video/Image */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-[0.9]"
          >
            <source src={assets.hero.video} type="video/mp4" />
          </video>


          {/* Huge Typography Overlay */}
          <div className="absolute bottom-12 left-6 md:bottom-20 md:left-16 lg:bottom-28 lg:left-24 z-20 pointer-events-none">
            <h1 className="hero-title-main text-[clamp(42px,12vw,180px)] font-display font-normal leading-[0.75] text-white tracking-[-0.05em] uppercase">
              Floka
            </h1>
            <h2 className="hero-title-sub text-[clamp(20px,6vw,80px)] font-display font-normal leading-[0.75] text-white/30 tracking-[-0.05em] uppercase ml-6 md:ml-32 lg:ml-48 mt-1 lg:-mt-4">
              Studio
            </h2>
          </div>

          {/* Floating Profile Card & Tagline Group */}
          <div className="absolute right-4 bottom-4 md:right-12 md:bottom-12 lg:right-16 lg:bottom-16 z-30 flex flex-col items-end max-w-[200px] md:max-w-[320px] lg:max-w-[400px]">
            <div
              ref={cardRef}
              className="w-full bg-white p-4 md:p-6 lg:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-lg flex items-center gap-4 md:gap-6 mb-4 md:mb-8"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-[1rem] md:rounded-[1.2rem] bg-[#cfbba1] overflow-hidden flex-shrink-0">
                <img
                  src={assets.hero.portrait}
                  alt="Almond D. Nelsi"
                  className="w-full h-full object-cover object-bottom"
                />
              </div>

              <div className="flex-grow">
                <div className="mb-2 md:mb-4">
                  <p className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-black/40 font-bold leading-none mb-1 md:mb-2 text-nowrap">Head of Idea</p>
                  <p className="text-sm md:text-lg lg:text-xl font-sans font-medium text-black text-nowrap tracking-tight">Almond D. Nelsi</p>
                </div>

                <button className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg lg:text-xl font-light mb-[2px] leading-none">+</span>
                  </div>
                  <span className="text-[8px] lg:text-[10px] uppercase tracking-widest font-bold text-black text-nowrap">LET'S TALK</span>
                </button>
              </div>
            </div>

            <div className="hero-tagline text-right pr-1">
              <p className="text-[8px] md:text-sm lg:text-base font-medium leading-tight md:leading-relaxed text-white tracking-tight drop-shadow-sm line-clamp-2 md:line-clamp-none">
                No cookie-cutter websites. No fluff. Just real tools and smart strategies to grow your business and elevate your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

