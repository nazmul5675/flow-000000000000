import { assets } from '../../data/assets';

const ResultsSection = ({ id }) => {
  return (
    <section id={id} className="py-48 bg-[#fcfcfc] overflow-hidden px-6 md:px-12">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Main Split Layout */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
           
           {/* Left Column: Media (Reduced Dominance) */}
           <div className="lg:w-[35%]">
              <div className="rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-xl transition-all duration-1000 group">
                 <img src={assets.portfolio.stairsGroup} alt="Results" className="w-full h-full object-cover brightness-90 transition-all duration-1000" />
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none contrast-150 mix-blend-overlay" />
              </div>
           </div>

           {/* Right Column: Content + Exact Collage Stacking */}
           <div className="lg:w-[65%] flex flex-col pt-4">
              <div className="mb-20">
                 <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30 mb-8">Fun Facts</p>
                 <h2 className="text-3xl md:text-5xl lg:text-5xl font-sans font-medium text-foreground max-w-2xl leading-[1.2] tracking-tight">
                   Consistently delivering impactful results through a perfect blend of design and functionality.
                 </h2>
              </div>

              {/* Exact Collage Grid Stacking */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                 
                 {/* Left Sub-Column (Cards 1 & 2) */}
                 <div className="md:col-span-5 flex flex-col gap-6">
                    {/* Card 1: 2k+ Horizontal */}
                    <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5 flex flex-col justify-between h-[220px]">
                       <div className="flex justify-between items-start">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 max-w-[100px] leading-relaxed">Successful projects completed</p>
                          <span className="text-6xl md:text-7xl font-sans font-medium tracking-tight">2k+</span>
                       </div>
                    </div>

                    {/* Card 2: Black Card with Mini Collage */}
                    <div className="bg-foreground rounded-[2.5rem] p-10 text-background flex flex-col gap-10 shadow-2xl">
                       <div className="flex -space-x-6">
                          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-foreground -rotate-12 bg-white/10">
                             <img src={assets.portfolio.fabricCutting} className="w-full h-full object-cover" alt="Case" />
                          </div>
                          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-foreground rotate-6 relative z-10 bg-white/10">
                             <img src={assets.portfolio.runner} className="w-full h-full object-cover" alt="Case" />
                          </div>
                          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-foreground -rotate-6 bg-white/10">
                             <img src={assets.portfolio.spotlightDiver} className="w-full h-full object-cover" alt="Case" />
                          </div>
                       </div>
                       <p className="text-[13px] font-medium leading-relaxed text-background/50">
                          More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
                       </p>
                    </div>
                 </div>

                 {/* Right Sub-Column (Cards 3 & 4) */}
                 <div className="md:col-span-7 flex flex-col gap-6">
                    {/* Card 3: Tall Rating Card */}
                    <div className="bg-[#f6f6f6] rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center">
                       <div className="flex gap-1 mb-8">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                       </div>
                       <h3 className="text-[6rem] md:text-[8rem] font-sans font-medium tracking-tight mb-8 leading-none">4.9/5</h3>
                       <div className="w-full h-[1px] bg-black/5 mb-8"></div>
                       <p className="text-[13px] font-sans text-foreground/50 max-w-xs mb-10 leading-relaxed">
                         We offer end-to-end creative solutions that make brands unforgettable.
                       </p>
                       <button className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0 w-fit">
                          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                             <span className="text-xl font-light leading-none mb-[2px]">+</span>
                          </div>
                          <span className="text-[10px] font-bold font-sans uppercase tracking-[0.2em] text-black">HIRE US NOW</span>
                       </button>
                    </div>

                    {/* Card 4: Worldwide Horizontal */}
                    <div className="relative rounded-[2.5rem] overflow-hidden group h-[140px] flex items-center px-10 shadow-xl bg-foreground">
                        <img src={assets.portfolio.teamUnderpass} className="absolute inset-0 w-full h-full object-cover brightness-50 opacity-40 group-hover:scale-105 transition-transform duration-1000" alt="World" />
                        <div className="relative z-10 flex justify-between w-full items-center text-white">
                           <p className="text-[9px] font-bold font-sans uppercase tracking-[0.15em] max-w-[120px] leading-relaxed opacity-60">Worldwide base around the world</p>
                           <span className="text-5xl font-sans font-medium tracking-tight">5+</span>
                        </div>
                    </div>
                 </div>

              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;

