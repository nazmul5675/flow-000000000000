import { assets } from '../../data/assets';

const AwardsSection = ({ id }) => {
  const awards = [
    { title: "Best Designer Awards", org: "AWWWARDS", year: "2025" },
    { title: "Peaky UI Designer", org: "GOOGLE", year: "2024" },
    { title: "Great in UX", org: "APPLE", year: "2023" },
    { title: "Best Website Pick", org: "MICROSOFT", year: "2022" },
    { title: "Nelson UI & UX Designer", org: "SAMSUNG", year: "2021" },
  ];

  return (
    <section id={id} className="py-32 bg-background overflow-hidden px-6 md:px-12">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Trophy Header */}
        <div className="flex flex-col items-center mb-24 text-center">
           <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
              {/* Circular Text */}
              <div className="absolute inset-0 animate-spin-slow">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-foreground/10 uppercase font-bold text-[8px] tracking-[0.2em]">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text>
                       <textPath xlinkHref="#circlePath">
                          LUXURIOUS OR MORE PLAYFUL WANT IT TO SOUND • 
                       </textPath>
                    </text>
                 </svg>
              </div>
              {/* Trophy Icon */}
              <div className="w-16 h-16 bg-[#f0f0f0] rounded-full flex items-center justify-center text-foreground/20">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9c0 2.21 1.79 4 4 4v3h-1v4h6v-4h-1v-3c2.21 0 4-1.79 4-4m-12 0H4M20 9h-2m-2-5h-8" /></svg>
              </div>
           </div>

           <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-foreground leading-[1.1] max-w-4xl tracking-[-0.05em]">
             Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation.
           </h2>
        </div>

        {/* Multi-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-black/5 pt-16">
           
           {/* Left: Thumbnail & Link */}
           <div className="lg:col-span-4 space-y-12">
              <div className="rounded-[2rem] overflow-hidden aspect-square border border-black/5 shadow-xl">
                 <img src={assets.portfolio.teamUnderpass} alt="Team" className="w-full h-full object-cover brightness-90" />
              </div>
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 hover:text-foreground transition-colors border-b border-black/10 pb-2">Get Rewards</button>
           </div>

           {/* Right: Awards List */}
           <div className="lg:col-span-8">
              <div className="space-y-0">
                 {awards.map((award, i) => (
                    <div key={i} className="grid grid-cols-12 gap-4 py-10 border-b border-black/5 group hover:bg-black/[0.01] transition-colors -mx-4 px-4 items-center">
                       <div className="col-span-6 md:col-span-7">
                          <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground">{award.title}</h3>
                       </div>
                       <div className="col-span-4 md:col-span-4">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">{award.org}</p>
                       </div>
                       <div className="col-span-2 md:col-span-1 text-right">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">{award.year}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default AwardsSection;

