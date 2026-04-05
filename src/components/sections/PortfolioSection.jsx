import { useRef } from 'react';
import { assets } from '../../data/assets';

const PortfolioSection = ({ id }) => {
  const containerRef = useRef(null);

  const projects = [
    { title: "ALDAN BRANDING", year: "2023", image: assets.portfolio.runner },
    { title: "ALDAN BRANDING", year: "2025", image: assets.portfolio.spotlightDiver },
    { title: "ALDAN BRANDING", year: "2023", image: assets.portfolio.fabricCutting },
    { title: "ALDAN BRANDING", year: "2023", image: assets.portfolio.stairsGroup },
    { title: "ALDAN BRANDING", year: "2025", image: assets.portfolio.portraitModel },
  ];

  return (
    <section id={id} ref={containerRef} className="py-32 bg-[#f4f3f1] overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="relative border-t border-black/10 pt-8 mb-24">
          <span className="absolute top-8 left-0 text-[10px] font-bold font-sans uppercase tracking-[0.2em] text-foreground/50">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-sans font-medium text-foreground max-w-4xl mx-auto leading-[1.1] tracking-tight text-center">
            Strategy to build powerful<br /> digital solutions.
          </h2>
        </div>

        {/* 2-1-2 Grid */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 mt-16">
          
          {/* Row 1: Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} />
          </div>

          {/* Row 2: Single Full Width */}
          <div className="grid grid-cols-1">
            <ProjectCard project={projects[2]} isLarge />
          </div>

          {/* Row 3: Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <ProjectCard project={projects[3]} />
            <ProjectCard project={projects[4]} />
          </div>

        </div>

        {/* CTA Button - Pill Format */}
        <div className="mt-24 md:mt-32 flex justify-center">
           <button className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0">
             <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
               <span className="text-xl font-light mb-[2px] leading-none">+</span>
             </div>
             <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-black text-nowrap">MORE WORKS</span>
           </button>
        </div>

      </div>
    </section>
  );
};

const ProjectCard = ({ project, isLarge }) => (
  <div className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden shadow-sm flex flex-col border border-black/5 hover:border-black/10 transition-colors">
    {/* Image Container */}
    <div className={`relative w-full flex-1 ${isLarge ? 'aspect-[2.2/1] lg:aspect-[2.5/1]' : 'aspect-[1.3/1] lg:aspect-[1.45/1]'}`}>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      
      {/* Subtle Logo Overlay */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 mix-blend-difference opacity-90">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <span className="text-[10px] font-bold font-sans text-white tracking-[0.1em] capitalize">Logoipsum</span>
      </div>
    </div>

    {/* Caption Row */}
    <div className="flex justify-between items-center px-8 md:px-10 py-5 bg-white z-10">
      <h3 className="text-[9px] md:text-[10px] font-bold font-sans uppercase tracking-[0.2em] text-foreground/40 transition-colors">
        {project.title}
      </h3>
      <span className="text-[9px] md:text-[10px] font-bold font-sans text-foreground/40 tracking-widest">
        {project.year}
      </span>
    </div>
  </div>
);

export default PortfolioSection;

