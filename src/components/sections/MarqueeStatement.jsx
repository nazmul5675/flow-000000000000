import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MarqueeStatement = ({ text }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const row = marquee.querySelector('.marquee-row');
    const rowWidth = row.offsetWidth;
    
    // Smooth infinite horizontal scroll
    gsap.to(row, {
        x: -rowWidth / 2,
        duration: 20,
        ease: "none",
        repeat: -1,
    });

    // Parallax effect on scroll
    gsap.to(marquee, {
        x: -200,
        scrollTrigger: {
            trigger: marquee,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
        }
    });
  }, []);

  return (
    <div className="py-32 overflow-hidden bg-[#f8f8f8] border-y border-black/5" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div className="marquee-row inline-block flex gap-12 lg:gap-24 items-center">
            {[...Array(6)].map((_, i) => (
                <span key={i} className="text-[5rem] md:text-[8rem] lg:text-[11rem] font-sans font-medium tracking-tight whitespace-nowrap text-foreground opacity-80 leading-none">
                    {text}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeStatement;

