import { assets } from '../../data/assets';

const LogoWallSection = () => {
  const clientLogos = [
    assets.logos.client1,
    assets.logos.client2,
    assets.logos.client3,
    assets.logos.client4,
    assets.logos.client5,
    assets.logos.client6,
    assets.logos.client7,
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        
        {/* Logo Grid Wall */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-black/5 mb-16 bg-white overflow-hidden rounded-2xl shadow-sm">
           {clientLogos.map((logo, i) => (
             <div key={i} className="flex items-center justify-center h-48 border-r border-b border-black/5 hover:bg-foreground/[0.02] transition-colors group">
                <img 
                  src={logo} 
                  alt="Client" 
                  className="h-8 md:h-10 w-auto opacity-40 group-hover:opacity-100  transition-all duration-700 hover:scale-110" 
                />
             </div>
           ))}
           {/* Final Slot: CTA */}
           <div className="flex flex-col items-center justify-center h-48 border-r border-b border-black/5 text-center px-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 mb-2">Next can be you.</p>
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground hover:underline underline-offset-4">Let's Talk</button>
           </div>
        </div>

        {/* Showreel Section */}
        <div className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl group">
           <img 
              src={assets.portfolio.teamUnderpass} 
              alt="Showreel" 
              className="w-full h-full object-cover brightness-90 group-hover:scale-105  transition-all duration-1000" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

           {/* PLAY REEL Button */}
           <div className="absolute bottom-10 left-10">
              <button className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform active:scale-95 group/btn">
                 <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">Play Reel</span>
              </button>
           </div>
        </div>

        {/* Centered Dot transition */}
        <div className="mt-20 flex justify-center">
           <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default LogoWallSection;

