import { assets } from '../../data/assets';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background pt-40 pb-12 px-6 md:px-12 rounded-t-[4rem] relative overflow-hidden">
      
      {/* Top CTA Area */}
      <div className="max-w-[1700px] mx-auto mb-40 relative">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
          <h2 className="text-6xl md:text-[8rem] lg:text-[12rem] font-sans font-medium tracking-tight leading-[0.85] text-white">
            Let’s talk<br /> now
          </h2>
          
          {/* Revolving Text Button */}
          <div className="relative w-40 h-40 lg:w-56 lg:h-56 group cursor-pointer">
             <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="text-[9px] font-bold uppercase tracking-[0.4em] fill-white/40">
                   <textPath xlinkHref="#circlePath">
                      GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • 
                   </textPath>
                </text>
             </svg>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center text-foreground transition-transform group-hover:scale-110">
                   <span className="text-3xl lg:text-4xl font-light mb-[2px] leading-none">+</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Middle Content: 3-Column Split */}
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 border-t border-white/5 pt-32 pb-32">
        
        {/* Column 1: Media + Floka Text */}
        <div className="lg:col-span-4 relative group">
           <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative">
              <img src={assets.portfolio.portraitModel} alt="Floka" className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-sans font-bold uppercase text-transparent stroke-text opacity-30 select-none tracking-tight">
                     FLOKA
                  </span>
              </div>
           </div>
           <style>{`
             .stroke-text {
               -webkit-text-stroke: 1px white;
             }
           `}</style>
        </div>

        {/* Column 2: Navigation */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-10">
           <div className="space-y-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Menu</p>
              <nav className="flex flex-col gap-4">
                 {['Home', 'Company', 'Services', 'Projects', 'Journal', 'Contact'].map(link => (
                    <a key={link} href="#" className="text-lg font-sans font-bold hover:text-white/60 transition-colors uppercase tracking-tight">{link}</a>
                 ))}
              </nav>
           </div>
           <div className="space-y-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Follow</p>
              <nav className="flex flex-col gap-4">
                 {['Behance', 'Dribbble', 'Instagram', 'Twitter (X)', 'LinkedIn'].map(link => (
                    <a key={link} href="#" className="text-lg font-sans font-bold hover:text-white/60 transition-colors uppercase tracking-tight">{link}</a>
                 ))}
              </nav>
           </div>
        </div>

        {/* Column 3: Contact & BIO */}
        <div className="lg:col-span-4 flex flex-col justify-between items-start">
           <div className="space-y-12">
              <div className="space-y-4">
                 <p className="text-[10px] font-bold font-sans uppercase tracking-[0.4em] text-white/30">Get In Touch</p>
                  <p className="text-xl md:text-2xl font-sans font-medium leading-snug max-w-sm tracking-tight">
                     Do you have a project in mind? We're available for new work.
                  </p>
              </div>
              <div className="space-y-2">
                  <p className="text-white text-xl font-sans font-bold underline underline-offset-8 decoration-white/20 hover:decoration-white transition-all cursor-pointer">
                     hello@floka.agency
                  </p>
                 <p className="text-white/40 text-sm italic font-medium pt-4">
                    541 Melville Ave, Palo Alto, CA 94301, United States
                 </p>
              </div>
           </div>
           <div className="pt-20">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="group-hover:translate-x-1 transition-transform">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                 </svg>
              </div>
           </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1700px] mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 italic">
          © 2025 Case-themes™ Studio. All rights reserved.
        </p>
        
        {/* Envato Badge Placeholder */}
        <div className="bg-white/5 px-6 py-3 rounded-full border border-white/10 flex items-center gap-4 group cursor-pointer hover:bg-white/10 transition-all">
           <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Elite Author</span>
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
        </div>

        <button 
           onClick={scrollToTop}
           className="group flex items-center gap-6"
        >
           <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Back To Top</span>
           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-foreground transition-all">
              <span className="text-xl">↑</span>
           </div>
        </button>
      </div>

    </footer>
  );
};

export default FooterSection;

