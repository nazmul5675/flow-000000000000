import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Layout & Common
import Header from './components/layout/Header';
import CustomCursor from './components/common/CustomCursor';

// Sections
import HeroSection from './components/sections/HeroSection';
import IntroApproachSection from './components/sections/IntroApproachSection';
import MarqueeStatement from './components/sections/MarqueeStatement';
import PortfolioSection from './components/sections/PortfolioSection';
import ExpertiseSection from './components/sections/ExpertiseSection';
import ResultsSection from './components/sections/ResultsSection';
import LogoWallSection from './components/sections/LogoWallSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import AwardsSection from './components/sections/AwardsSection';
import TeamSection from './components/sections/TeamSection';
import FAQSection from './components/sections/FAQSection';
import BlogSection from './components/sections/BlogSection';
import FooterSection from './components/sections/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="relative min-h-screen bg-background selection:bg-foreground selection:text-background">
      <CustomCursor />
      <Header />
      
      <main>
        <HeroSection id="hero" />
        <IntroApproachSection id="approach" />
        <MarqueeStatement text="creativity, technology, and strategy See how " />
        <PortfolioSection id="portfolio" />
        <ExpertiseSection id="expertise" />
        <ResultsSection id="results" />
        <LogoWallSection />
        <TestimonialsSection id="testimonials" />
        <ContactSection id="contact" />
        <AwardsSection id="awards" />
        <TeamSection id="team" />
        <FAQSection id="faq" />
        <BlogSection id="blog" />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
