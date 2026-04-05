import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children, delay = 0, duration = 1, y = 50, trigger = "" }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    const section = revealRef.current;
    
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trigger || section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay, duration, y, trigger]);

  return (
    <div ref={revealRef}>
      {children}
    </div>
  );
};

export default Reveal;
