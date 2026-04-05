import { useState } from 'react';
import { assets } from '../../data/assets';

const TeamSection = ({ id }) => {
  const [activeTab, setActiveTab] = useState('design');

  const team = [
    { name: "Nicolas K. Ellington", role: "FOUNDER", image: assets.approach.avatar1 },
    { name: "Carlos E. Ashcroft", role: "CEO", image: assets.approach.avatar2 },
    { name: "Leonardo F. Ashton", role: "UX DESIGNER", image: assets.approach.avatar3 },
    { name: "Ricardo P. Winslow", role: "UI DESIGNER", image: assets.approach.avatar1 },
  ];

  return (
    <section id={id} className="py-24 md:py-40 bg-[#f6f6f6] px-4 md:px-8">
      {/* Large rounded outer container */}
      <div className="max-w-[1400px] mx-auto bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 xl:p-20 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-between">
           
           {/* Left Column: Intro Block */}
           <div className="lg:w-[45%] flex flex-col pt-2 self-stretch">
              <div>
                 <p className="text-[10px] md:text-xs font-bold font-sans uppercase tracking-[0.1em] text-foreground/50 mb-6">OUR AVENGERS</p>
                 <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-medium text-foreground leading-[1.1] tracking-tight">
                   Meet with our team<br /> member
                 </h2>
              </div>
              
              {/* Tabs */}
              <div className="flex gap-6 mt-10 mb-8 border-b border-transparent">
                 <button 
                    onClick={() => setActiveTab('design')}
                    className="relative pb-2"
                 >
                    <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${activeTab === 'design' ? 'text-foreground' : 'text-foreground/30'}`}>Design Team</span>
                    {activeTab === 'design' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />}
                 </button>
                 <button 
                    onClick={() => setActiveTab('development')}
                    className="pb-2"
                 >
                    <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${activeTab === 'development' ? 'text-foreground' : 'text-foreground/30'}`}>Development Team</span>
                    {activeTab === 'development' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />}
                 </button>
              </div>

              <p className="text-[15px] font-sans text-foreground/60 leading-relaxed max-w-[420px]">
                 What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.
              </p>

              {/* CTA */}
              <div className="mt-8 mb-12">
                 <div className="inline-flex items-center gap-4 cursor-pointer group">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-md">
                       <span className="text-xl font-light mb-[2px] leading-none">+</span>
                    </div>
                    <span className="text-[11px] font-bold font-sans uppercase tracking-widest text-black">JOIN WITH US</span>
                 </div>
              </div>

              {/* Supporting Media Block (Lower Section) */}
              <div className="w-full max-w-[460px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm mt-auto">
                 <img src={assets.portfolio.teamUnderpass} alt="Team Culture" className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
           </div>

           {/* Right Column: 2x2 Member Grid */}
           <div className="lg:w-[55%] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {team.map((member, i) => (
                <div key={i} className="bg-[#f6f6f6] rounded-[2rem] p-3 flex flex-col group cursor-pointer hover:bg-gray-100 transition-colors">
                   {/* Image Container with Tan bg */}
                   <div className="bg-[#cfbba1] rounded-[1.5rem] aspect-[4/4.2] overflow-hidden relative">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
                   </div>

                   {/* Info Row */}
                   <div className="px-3 pt-5 pb-4 flex flex-col">
                      <h3 className="text-lg md:text-xl font-sans font-medium text-foreground tracking-tight">{member.name}</h3>
                      <p className="text-[10px] font-semibold font-sans uppercase tracking-wider text-foreground/40 mt-1 mb-5">{member.role}</p>
                      
                      {/* Socials */}
                      <div className="flex gap-2">
                         <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-foreground hover:bg-black hover:text-white transition-colors cursor-pointer">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                            </svg>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-foreground hover:bg-black hover:text-white transition-colors cursor-pointer">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-foreground hover:bg-black hover:text-white transition-colors cursor-pointer">
                            <span className="text-[10px] font-bold -tracking-[0.05em] leading-none mb-[1px]">in</span>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;

