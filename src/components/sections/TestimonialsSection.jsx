import { assets } from '../../data/assets';

const TestimonialsSection = ({ id }) => {
  const testimonials = [
    {
      name: "Nicolas K. Ellington",
      role: "IT Specialist",
      quote: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. ",
    },
    {
      name: "Julian T. Beaumont",
      role: "IT Specialist",
      quote: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. ",
    },
    {
      name: "Felipe D. Hawthorne",
      role: "IT Specialist",
      quote: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. ",
    },
  ];

  return (
    <section id={id} className="py-32 bg-background border-t border-black/5 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 lg:items-start">
           <div className="lg:w-1/4 border-t border-black/10 pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">User Feedbacks</p>
           </div>
           <div className="lg:w-3/4">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-medium text-foreground leading-[1.1] tracking-tight">
                Accelerating growth, and unlocking new potential. 
                <span className="inline-flex -space-x-4 mx-4 align-middle">
                   {[assets.approach.avatar1, assets.approach.avatar2, assets.approach.avatar3].map((src, i) => (
                      <img key={i} src={src} alt="Client" className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-background shadow-sm bg-[#cfbba1]" />
                   ))}
                </span>
                <span className="block mt-2">Let's build your brand—together.</span>
              </h2>
           </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
           
           {/* Column 1: Name -> Quote */}
           <div className="flex flex-col gap-6">
              <NameCard name={testimonials[0].name} role={testimonials[0].role} />
              <QuoteCard quote={testimonials[0].quote} />
           </div>

           {/* Column 2: Quote -> Name */}
           <div className="flex flex-col gap-6 md:mt-24 lg:mt-0">
              <QuoteCard quote={testimonials[1].quote} />
              <NameCard name={testimonials[1].name} role={testimonials[1].role} />
           </div>

           {/* Column 3: Name -> Quote */}
           <div className="flex flex-col gap-6">
              <NameCard name={testimonials[2].name} role={testimonials[2].role} />
              <QuoteCard quote={testimonials[2].quote} />
           </div>

        </div>

        {/* Bottom divider dot */}
        <div className="mt-24 flex justify-center">
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full text-[10px] leading-none">•</div>
            </div>
        </div>

      </div>
    </section>
  );
};

const NameCard = ({ name, role }) => (
  <div className="bg-[#f6f6f6] p-8 lg:p-10 rounded-[2rem] border-transparent hover:bg-black/5 transition-colors">
     <h4 className="text-lg font-sans font-medium text-foreground tracking-tight">{name}</h4>
     <p className="text-[9px] font-bold font-sans uppercase tracking-[0.15em] text-foreground/40 mt-1">{role}</p>
  </div>
);

const QuoteCard = ({ quote }) => (
  <div className="bg-[#f6f6f6] p-8 lg:p-10 rounded-[2rem] border-transparent flex flex-col min-h-[300px] justify-between transition-colors">
     <div>
        <div className="flex gap-1 mb-8">
           {[...Array(5)].map((_, i) => (
             <svg key={i} className="w-3 h-3 fill-orange-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
           ))}
        </div>
        <p className="text-xl lg:text-3xl font-sans font-medium text-foreground/80 leading-snug tracking-tight italic">
           “{quote}”
        </p>
     </div>
     <div className="mt-8 pt-8 border-t border-black/5">
        <p className="text-[9px] font-bold font-sans uppercase tracking-[0.2em] text-foreground/30">“ Great Design Solutions ”</p>
     </div>
  </div>
);

export default TestimonialsSection;

