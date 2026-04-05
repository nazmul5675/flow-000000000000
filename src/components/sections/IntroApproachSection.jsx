import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../../data/assets';

gsap.registerPlugin(ScrollTrigger);

const IntroApproachSection = ({ id }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress bars animation
      gsap.utils.toArray('.progress-bar-fill').forEach(bar => {
        gsap.fromTo(bar, 
          { scaleX: 0 }, 
          { 
            scaleX: 1, 
            duration: 1.5, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            }
          }
        );
      });

      // Cards entrance
      gsap.from(".approach-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".approach-grid",
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={containerRef} className="py-24 md:py-32 bg-[#f4f3f1] overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <div className="flex items-start gap-8 lg:w-1/3">
            {/* Circular Logo Component */}
            <div className="relative w-32 h-32 flex-shrink-0">
               <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow opacity-20">
                 <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                 <text className="text-[10px] uppercase font-bold tracking-widest fill-current">
                   <textPath xlinkHref="#circlePath">
                     * LUXURIOUS * PLAYFUL * CREATIVE * MODERN * STUDIO *
                   </textPath>
                 </text>
               </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-10 h-10 bg-foreground flex items-center justify-center rounded-sm">
                   <span className="text-background font-bold text-xs uppercase">F</span>
                 </div>
               </div>
               {/* Separate Dot dot */}
               <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
               </div>
            </div>
            
            <p className="max-w-[200px] text-xs font-medium text-foreground/60 leading-relaxed mt-8">
              We design every project with long-term success in mind.
            </p>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-sans font-medium tracking-tight text-foreground leading-[1.1]">
              Our approach is straightforward—prioritizing functionality, speed, and clarity for solutions.
            </h2>
          </div>
        </div>

        {/* Collage Grid */}
        <div className="approach-grid grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Column: 25+ Stats */}
          <div className="approach-card col-span-1 bg-white p-10 md:p-12 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between min-h-[500px] shadow-sm">
             <div>
                <div className="flex items-baseline mb-4">
                  <span className="text-7xl md:text-8xl font-sans font-medium tracking-tight">25</span>
                  <span className="text-5xl md:text-6xl font-sans font-medium text-foreground/20 ml-1">+</span>
                </div>
                <p className="text-[10px] md:text-xs font-bold font-sans uppercase tracking-[0.15em] text-foreground/40 mb-10">Years of experience</p>
                <div className="w-full h-[1px] bg-black/5 mb-10"></div>
                <p className="text-base font-medium font-sans text-foreground/80 leading-relaxed">
                  Explore how we transform ideas into extraordinary digital experiences.
                </p>
             </div>

             <div className="mt-12 space-y-4">
                <div className="flex -space-x-4">
                   {[assets.approach.avatar1, assets.approach.avatar2, assets.approach.avatar3].map((src, i) => (
                     <img key={i} src={src} alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
                   ))}
                   <div className="w-10 h-10 rounded-full bg-foreground border-2 border-white flex items-center justify-center text-[10px] font-bold text-background shadow-sm z-10">+12</div>
                </div>
                <p className="text-[9px] md:text-[10px] font-bold font-sans uppercase tracking-[0.15em] text-foreground/40">1200+ happy users review</p>
             </div>
          </div>

          {/* Center Column: CEO Card */}
          <div className="approach-card lg:col-span-2 bg-black rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative min-h-[500px] group">
              <img 
                src={assets.hero.portrait} 
                alt="CEO" 
                className="absolute inset-0 w-full h-full object-cover brightness-[0.7] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Award Badges Top Right */}
              <div className="absolute top-8 right-8 flex flex-col gap-4 text-white/80">
                <div className="text-right border-l border-white/20 pl-4">
                  <p className="text-[8px] font-bold uppercase tracking-widest opacity-60">Ultra Prestigious</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest">Winner</p>
                </div>
                <div className="text-right border-l border-white/20 pl-4">
                  <p className="text-[8px] font-bold uppercase tracking-widest opacity-60">Hyper Best</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest">Award Winning</p>
                </div>
              </div>

              {/* Quote Bottom */}
              <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
                <p className="text-2xl md:text-3xl font-sans font-medium text-white leading-tight mb-6 max-w-xl tracking-tight">
                  “ At Floka, we merge strategy, creativity, and technology to shape brands that people love. ”
                </p>
                <p className="text-[10px] md:text-xs font-bold font-sans uppercase tracking-[0.1em] text-white/50">
                  Merizo H. Yelso <span className="text-white/30 ml-2">/ CEO</span>
                </p>
              </div>
          </div>

          {/* Right Column: Socials & Progress */}
          <div className="col-span-1 flex flex-col gap-6">
            {/* Social Links Card */}
            <div className="approach-card bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col h-1/2 shadow-sm">
                <div className="mb-6">
                  <p className="text-[9px] md:text-[10px] font-bold font-sans uppercase tracking-[0.15em] text-foreground/40 mb-2">Follow us</p>
                  <p className="text-lg md:text-xl font-sans font-medium tracking-tight">For check updates</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['DRIBBBLE', 'BEHANCE', 'LINKEDIN', 'X', 'XING'].map((s) => (
                    <button key={s} className="px-4 py-2 border border-black/10 rounded-full text-[9px] font-bold font-sans uppercase tracking-[0.1em] hover:bg-black hover:text-white transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
            </div>

            {/* Impressions/Progress Card */}
            <div className="approach-card bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col h-1/2 shadow-sm">
                <div className="mb-6">
                  <p className="text-[10px] font-bold font-sans uppercase tracking-[0.1em] text-foreground/40 mb-1">Impressions</p>
                </div>
                
                <div className="space-y-3 mt-auto w-full">
                   {/* Pill 1 */}
                   <div className="bg-[#f4f3f1] rounded-full flex justify-between items-center px-5 py-3">
                      <div className="flex items-center gap-3">
                         <div className="w-4 h-4 rounded-full border border-black/40 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                         </div>
                         <span className="text-xs font-sans font-bold text-foreground">Solutions</span>
                      </div>
                      <span className="text-xs font-sans font-bold text-foreground/50">100%</span>
                   </div>
                   
                   {/* Pill 2 */}
                   <div className="bg-black text-white rounded-full flex justify-between items-center px-5 py-3">
                      <span className="text-xs font-sans font-bold">UI/UX</span>
                      <span className="text-xs font-sans font-bold">90%</span>
                   </div>
                   
                   {/* Pill 3 */}
                   <div className="bg-transparent rounded-full flex justify-between items-center px-5 py-3">
                      <span className="text-xs font-sans font-medium text-foreground/80">Explore</span>
                      <span className="text-xs font-sans font-medium text-foreground/50">72%</span>
                   </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default IntroApproachSection;

