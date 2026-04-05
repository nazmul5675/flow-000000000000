import { assets } from '../../data/assets';

const ContactSection = ({ id }) => {
   return (
      <section id={id} className="py-24 bg-[#f6f6f6] px-4 md:px-8">
         {/* Outer black container with grain texture */}
         <div className='max-w-full bg-black'>
            <div className="max-w-[1400px] mx-auto bg-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 xl:p-24 overflow-hidden relative group shadow-sm z-0">

               {/* Subtle Grain Texture Overlay */}
               <div className="absolute inset-0 opacity-10 pointer-events-none contrast-150 mix-blend-overlay z-0"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
               </div>

               <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-32 items-center">

                  {/* Left: Headlines and Contact Info */}
                  <div className="lg:w-[45%] flex flex-col justify-center">
                     <p className="text-[10px] md:text-xs font-bold font-sans uppercase tracking-[0.1em] text-white/50 mb-6">GET IN TOUCH</p>

                     <h2 className="text-3xl md:text-4xl lg:text-5xl border-transparent font-sans font-medium text-white leading-[1.2] tracking-tight mb-12 lg:mb-16">
                        Tell us about your project<br />
                        —whether it’s a website,<br />
                        SEO, or marketing.
                     </h2>

                     <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
                        {/* Talk To Us */}
                        <div>
                           <div className="flex items-center gap-2 mb-3">
                              <span className="w-1.5 h-1.5 rounded-full border border-white/50 bg-transparent flex-shrink-0"></span>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">TALK TO US</p>
                           </div>
                           <p className="text-sm font-sans text-white/70 leading-relaxed">
                              Work and general inquiries<br />
                              +1 23 456 789 00
                           </p>
                        </div>

                        {/* Post Address */}
                        <div>
                           <div className="flex items-center gap-2 mb-3">
                              <svg className="w-2.5 h-2.5 text-white/50 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                              </svg>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">POST ADDRESS</p>
                           </div>
                           <p className="text-sm font-sans text-white/70 leading-relaxed sm:max-w-[180px]">
                              541 Melville Ave, Palo Alto, CA 94301, United States
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Right: Form Card */}
                  <div className="lg:w-[55%] w-full">
                     <div className="bg-white rounded-[2rem] p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">

                        <h3 className="text-2xl font-serif md:font-sans md:text-xl font-medium text-black mb-8">Have a project in mind?</h3>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Name */}
                              <div className="space-y-2">
                                 <label className="text-[9px] font-bold font-sans uppercase tracking-[0.15em] text-black/40 ml-1">YOUR NAME</label>
                                 <input type="text" className="w-full bg-[#f4f4f4] rounded-xl px-4 py-3.5 text-sm font-sans text-black focus:outline-none focus:ring-1 focus:ring-black/10 transition-shadow" />
                              </div>
                              {/* Email */}
                              <div className="space-y-2">
                                 <label className="text-[9px] font-bold font-sans uppercase tracking-[0.15em] text-black/40 ml-1">BUSINESS EMAIL</label>
                                 <input type="email" className="w-full bg-[#f4f4f4] rounded-xl px-4 py-3.5 text-sm font-sans text-black focus:outline-none focus:ring-1 focus:ring-black/10 transition-shadow" />
                              </div>
                           </div>

                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Budget */}
                              <div className="space-y-2">
                                 <label className="text-[9px] font-bold font-sans uppercase tracking-[0.15em] text-black/40 ml-1">BUDGET</label>
                                 <div className="relative">
                                    <select className="w-full bg-[#f4f4f4] rounded-xl px-4 py-3.5 text-[13px] font-sans focus:outline-none appearance-none cursor-pointer text-black/70">
                                       <option>$1000 - $3000</option>
                                       <option>$3000 - $5000</option>
                                       <option>$5000+</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                       <svg className="w-3 h-3 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                 </div>
                              </div>
                              {/* Service */}
                              <div className="space-y-2">
                                 <label className="text-[9px] font-bold font-sans uppercase tracking-[0.15em] text-black/40 ml-1">SERVICE</label>
                                 <div className="relative">
                                    <select className="w-full bg-[#f4f4f4] rounded-xl px-4 py-3.5 text-[13px] font-sans focus:outline-none appearance-none cursor-pointer text-black/70">
                                       <option>CONSULTANCY</option>
                                       <option>WEB DESIGN</option>
                                       <option>MARKETING</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                       <svg className="w-3 h-3 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="space-y-2 pt-1">
                              <label className="text-[9px] font-bold font-sans uppercase tracking-[0.15em] text-black/40 ml-1">MESSAGE</label>
                              <textarea rows="4" className="w-full bg-[#f4f4f4] rounded-xl px-4 py-3.5 text-sm font-sans text-black focus:outline-none focus:ring-1 focus:ring-black/10 transition-shadow resize-none" />
                           </div>

                           <div className="pt-4 pb-2">
                              <button type="submit" className="inline-flex items-center gap-4 cursor-pointer group bg-transparent border-none p-0">
                                 <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-sm">
                                    <span className="text-xl font-light mb-[2px] leading-none">+</span>
                                 </div>
                                 <span className="text-[11px] font-bold font-sans uppercase tracking-widest text-black">LET'S TALK</span>
                              </button>
                           </div>
                        </form>

                     </div>
                  </div>

               </div>
            </div>
         </div>


      </section>
   );
};

export default ContactSection;

