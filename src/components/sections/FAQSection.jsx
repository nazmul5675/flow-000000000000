import { useState } from 'react';
import { assets } from '../../data/assets';

const FAQSection = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Default second item as in reference

  const faqs = [
    {
      question: "What is artificial intelligence (AI)?",
      answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
      image: assets.portfolio.stairsGroup
    },
    {
      question: "How does AI improve business efficiency?",
      answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
      image: assets.portfolio.stairsGroup
    },
    {
      question: "How long does AI implementation take?",
      answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
      image: assets.portfolio.stairsGroup
    },
    {
      question: "What industries can benefit from AI?",
      answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
      image: assets.portfolio.stairsGroup
    },
    {
      question: "What are the costs of AI solutions?",
      answer: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
      image: assets.portfolio.stairsGroup
    }
  ];

  return (
    <section id={id} className="py-48 bg-[#f8f7f4] px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32 items-start">
           <div className="lg:w-1/4 border-t border-black/10 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">FAQ & Get Answer</p>
           </div>
           <div className="lg:w-3/4">
              <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-sans font-medium text-foreground leading-[1.05] tracking-tight">
                Have more questions?<br /> We’ve answers.
              </h2>
           </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
           
           {/* Left Column: Support & Media (Scale: ~33%) */}
           <div className="lg:col-span-4 flex flex-col gap-12">
              <div className="space-y-6">
                 <p className="text-[14px] font-medium text-foreground/30 leading-relaxed max-w-[280px]">
                    Don’t found anything yet. Feel free to ask anything. <button className="text-foreground underline underline-offset-8 decoration-black/20 font-bold hover:decoration-black transition-all">Let’s Talk</button>
                 </p>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-xl transition-all duration-1000 group relative">
                 <img src={assets.approach.avatar2} alt="FAQ Decoration" className="w-full h-full object-cover brightness-90 transition-all duration-1000" />
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none contrast-150 mix-blend-overlay" />
              </div>
           </div>

           {/* Right Column: Exact Accordion (Scale: ~66%) */}
           <div className="lg:col-span-8 flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-[2rem] shadow-sm border border-black/5 overflow-hidden transition-all duration-500">
                    <button 
                      onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                      className="w-full px-8 md:px-12 py-8 md:py-10 text-left flex items-center justify-between group"
                   >
                      <h3 className={`text-lg md:text-2xl font-sans font-medium tracking-tight pr-6 transition-all ${activeIndex === i ? 'text-black' : 'text-foreground/80'}`}>
                         {faq.question}
                      </h3>
                      <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? 'bg-black text-white' : 'bg-black text-white hover:scale-110'}`}>
                         <span className="text-xl md:text-2xl leading-none font-light mb-[2px]">{activeIndex === i ? '−' : '+'}</span>
                      </div>
                   </button>
                   
                   <div 
                      className={`transition-all duration-700 ease-[cubic-bezier(0.76, 0, 0.24, 1)] overflow-hidden ${activeIndex === i ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                   >
                      <div className="px-12 pb-12">
                         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pt-10 border-t border-black/5">
                            {/* Sub-Left: Small Thumbnail */}
                            <div className="md:col-span-5 rounded-[2rem] overflow-hidden aspect-[4/3] shadow-md">
                               <img src={faq.image} alt="Step Detail" className="w-full h-full object-cover brightness-75" />
                            </div>
                            {/* Sub-Right: Content + CTA */}
                            <div className="md:col-span-7 flex flex-col gap-10 pt-4">
                               <p className="text-[14px] font-sans text-foreground/50 leading-relaxed">
                                  {faq.answer}
                                </p>
                                <button className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0 w-fit">
                                   <div className="w-10 h-10 px-0 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                      <span className="text-xl font-light leading-none mb-[2px]">+</span>
                                   </div>
                                   <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans text-black text-nowrap">GET IN TOUCH</span>
                                </button>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>

        </div>

        {/* Decorative row of ticks (Bottom Balance) */}
        <div className="mt-40 flex justify-between px-10 opacity-[0.15]">
           {[...Array(40)].map((_, i) => (
              <div key={i} className="w-[1.5px] h-5 bg-foreground"></div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

