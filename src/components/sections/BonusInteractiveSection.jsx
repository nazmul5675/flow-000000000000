import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InteractiveParticleMask from '../three/InteractiveParticleMask';
import { assets } from '../../data/assets';

const BonusInteractiveSection = ({ id }) => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(labelRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(
          headingRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          paraRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          visualRef.current,
          {
            scale: 0.95,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
          },
          '-=1.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="w-full bg-black overflow-hidden relative"
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          {/* ─── Left: Editorial Content ─── */}
          <div className="w-full lg:w-[42%] flex flex-col justify-center">
            {/* Section label */}
            <div ref={labelRef} className="mb-8">
              <div className="flex items-center gap-3 mb-1">
                <span className="block w-8 h-[1px] bg-white/20" />
                <p className="text-[10px] font-bold font-sans uppercase tracking-[0.25em] text-white/40">
                  Interactive Experience
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-display font-normal text-white leading-[1.1] tracking-tight mb-8"
            >
              Where creativity
              <br />
              <span className="text-white/40">meets precision.</span>
            </h2>

            {/* Supporting text */}
            <p
              ref={paraRef}
              className="text-sm md:text-base font-sans text-white/50 leading-relaxed max-w-md mb-10 lg:mb-12"
            >
              Every detail is intentional. Every pixel, purposeful. We craft
              digital experiences that resonate — connecting brands with their
              audience through thoughtful design and interactive innovation.
            </p>

            {/* CTA */}
            <div ref={ctaRef}>
              <button className="inline-flex items-center gap-4 cursor-pointer group bg-transparent border-none p-0">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/10">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold font-sans uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-300">
                  Explore Our Craft
                </span>
              </button>
            </div>
          </div>

          {/* ─── Right: Interactive Particle Visual ─── */}
          <div
            ref={visualRef}
            className="w-full lg:w-[58%] relative"
          >
            <div className="relative w-full aspect-[4/3.5] md:aspect-[4/3] lg:aspect-square xl:aspect-[4/3.5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#0c0c0c] border border-white/[0.07]" style={{ boxShadow: '0 0 80px rgba(180,140,60,0.04), inset 0 0 60px rgba(0,0,0,0.3)' }}>
              {/* Subtle inner glow */}
              <div className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(210,170,70,0.1) 0%, rgba(180,140,60,0.04) 40%, transparent 70%)',
                }}
              />

              {/* Particle canvas */}
              <InteractiveParticleMask
                maskSrc={assets.logos.sandClockFlokaMask}
                particleCount={12000}
                particleColor="#dbb454"
                strength={1.35}
                scale={11.5}
              />

              {/* Corner accent marks */}
              <div className="absolute top-5 left-5 md:top-8 md:left-8 flex items-center gap-2 z-20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4a843]/40" />
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                  Live Interactive
                </span>
              </div>

              <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 z-20">
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white/15">
                  Hover to Interact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusInteractiveSection;
