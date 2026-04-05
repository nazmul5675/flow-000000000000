import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../../data/assets';

const ExpertiseSection = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef(null);

  const services = [
    {
      title: "User Interface & Experience Design",
      description: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions tailored for modern brands.",
      tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
      image: assets.portfolio.stairsGroup
    },
    {
      title: "Web Development",
      description: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
      tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
      image: assets.portfolio.spotlightDiver
    },
    {
      title: "Search Engine Optimization",
      description: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
      tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
      image: assets.reel.featureStill
    },
    {
      title: "Low-Code Development",
      description: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
      tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
      image: assets.expertise.openPanelPreview
    }
  ];

  const testimonials = [
    { avatar: assets.approach.avatar1, quote: "Best design communicator" },
    { avatar: assets.approach.avatar2, quote: "10/10 well recommanded" },
    { avatar: assets.approach.avatar3, quote: "Super speedy website designer" },
    { avatar: assets.approach.avatar1, quote: "Great in UI/UX" },
  ];

  return (
    <section id={id} ref={containerRef} className="bg-black text-white pt-32 overflow-hidden relative">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 px-4 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-sans font-medium tracking-tight text-white leading-[1.1]">Company</h2>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-sans font-medium tracking-tight text-white/30 leading-[1.1] md:-mt-2">expertise</h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-white/10 mb-20">
          {services.map((service, index) => (
            <div key={index} className="border-b border-white/10">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                className="w-full py-8 text-left flex items-center gap-6 group"
              >
                <div className={`w-6 h-6 flex-shrink-0 rounded-full border border-white/20 flex items-center justify-center transition-all ${activeIndex === index ? 'bg-white/10 text-white' : 'group-hover:border-white'}`}>
                  <span className="text-lg font-light leading-none mb-[2px]">{activeIndex === index ? '−' : '+'}</span>
                </div>
                <h3 className="text-sm md:text-base font-sans font-medium tracking-tight">
                  {service.title}
                </h3>
              </button>

              <div className={`transition-all duration-700 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[600px] opacity-100 pb-12' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-10 justify-between items-start pl-12">
                  {/* Left: Text */}
                  <div className="md:w-1/2 space-y-8 pt-2">
                    <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {service.tags.map(tag => (
                         <span key={tag} className="px-3 py-1.5 bg-white/10 text-white rounded-full text-[8px] font-bold tracking-widest uppercase">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>

                  {/* Right: Image spotlight */}
                  <div className="md:w-1/2 flex justify-end">
                     <div className="relative w-full max-w-[280px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover brightness-75 contrast-125" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-32">
           <button className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0">
             <div className="w-12 h-12 px-0 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
               <span className="text-xl font-light leading-none mb-[2px]">+</span>
             </div>
             <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold font-sans text-white text-nowrap">HIRE US TODAY</span>
           </button>
        </div>

      </div>

      {/* Testimonials Strips (Bottom) */}
      <div className="bg-white py-6 md:py-8 border-t flex overflow-hidden">
        <div className="flex gap-12 md:gap-16 whitespace-nowrap animate-marquee-fast px-8">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="flex gap-12 md:gap-16">
               {testimonials.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                     <img src={t.avatar} className="w-10 h-10 rounded-full border border-black/10 object-cover grayscale transition-all group-hover:grayscale-0" alt="Client" />
                     <span className="text-[10px] md:text-[12px] font-bold font-sans text-black/80 uppercase tracking-widest italic mt-[2px]">“ {t.quote} ”</span>
                  </div>
               ))}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

