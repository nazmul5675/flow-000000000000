import { useState, useEffect } from 'react';
import { assets } from '../../data/assets';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Pages', id: 'pages' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1700px] mx-auto px-6 md:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer lg:w-1/4">
          <div className="flex items-baseline">
            <div className="w-[1.3rem] h-[1.3rem] bg-black flex items-center justify-center rounded-[2px] mr-2.5 transition-transform group-hover:rotate-12 translate-y-[0.1rem]">
              <span className="text-white font-bold text-[0.6rem] uppercase">F</span>
            </div>
            <span className="text-xl font-sans font-bold tracking-tight text-foreground leading-none">Floka</span>
          </div>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center justify-center gap-16 lg:w-2/4">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              className="text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-black text-foreground/50 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side contact & menu */}
        <div className="flex items-center justify-end gap-10 lg:w-1/4">
          <a href="mailto:info@floka.com" className="hidden lg:block text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-black text-foreground/70 border-r border-black/5 pr-10">
            info@floka.com
          </a>
          
          <button className="flex flex-col gap-1.5 group">
             <div className="grid grid-cols-2 gap-1.5 p-1 group-hover:scale-110 transition-transform">
               <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
               <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
               <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
               <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
             </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
