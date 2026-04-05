import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    // Ensure native cursor is hidden
    document.body.style.cursor = 'none';
    
    const cursor = cursorRef.current;
    const target = targetRef.current;

    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.05, ease: "power4.out" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.05, ease: "power4.out" });
    const xToTarget = gsap.quickTo(target, "x", { duration: 0.3, ease: "back.out(1.2)" });
    const yToTarget = gsap.quickTo(target, "y", { duration: 0.3, ease: "back.out(1.2)" });

    let isHovering = false;
    let wasInBlack = false;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      xToCursor(clientX);
      yToCursor(clientY);
      xToTarget(clientX);
      yToTarget(clientY);

      const inBlack = e.target.closest('.bg-black, .bg-\\[\\#000\\]');
      if (inBlack && !wasInBlack) {
         wasInBlack = true;
         document.body.classList.add('show-native');
         gsap.to(cursor, { opacity: 0, duration: 0.1, overwrite: "auto" });
         gsap.to(target, { opacity: 0, duration: 0.1, overwrite: "auto" });
      } else if (!inBlack && wasInBlack) {
         wasInBlack = false;
         document.body.classList.remove('show-native');
         gsap.to(cursor, { opacity: isHovering ? 0 : 1, duration: 0.2, overwrite: "auto" });
         gsap.to(target, { opacity: isHovering ? 1 : 0.4, duration: 0.2, overwrite: "auto" });
      }
    };

    const onMouseOver = (e) => {
      const el = e.target.closest('a, button, .magnetic, .cursor-pointer');
      if (el) {
        isHovering = true;
        if (!wasInBlack) {
          gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2 });
          gsap.to(target, { 
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    };

    const onMouseOut = (e) => {
      const el = e.target.closest('a, button, .magnetic, .cursor-pointer');
      if (el) {
        isHovering = false;
        if (!wasInBlack) {
          gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.2 });
          gsap.to(target, { 
            opacity: 0.4,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.body.classList.remove('show-native');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      {/* Center dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[100]"
        style={{ transform: 'translate(-50%, -50%)', left: 0, top: 0 }}
      />
      {/* Outer spinning target */}
      <div 
        ref={targetRef} 
        className="fixed top-0 left-0 border-black rounded-full pointer-events-none z-[99] hidden md:block"
        style={{ 
          width: '40px', 
          height: '40px', 
          transform: 'translate(-50%, -50%)', 
          opacity: 0.4,
          borderWidth: '1.5px',
          borderStyle: 'solid'
        }}
      >
         <div className="spin-container w-full h-full relative" style={{ animation: 'spin 15s linear infinite' }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[2px] h-2.5 bg-black" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[2px] h-2.5 bg-black" />
            <div className="absolute left-[3px] top-1/2 -translate-y-1/2 w-2.5 h-[2px] bg-black" />
            <div className="absolute right-[3px] top-1/2 -translate-y-1/2 w-2.5 h-[2px] bg-black" />
         </div>
         <style>{`
           @keyframes spin { 100% { transform: rotate(360deg); } }
           body:not(.show-native) * { cursor: none !important; }
         `}</style>
      </div>
    </>
  );
};

export default CustomCursor;
