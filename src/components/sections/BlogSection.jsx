import { assets } from '../../data/assets';

const BlogSection = ({ id }) => {
  const posts = [
    { category: "Branding", date: "April 15, 2024", title: "Minimalism is not about nothing.", image: assets.portfolio.runner },
    { category: "Design", date: "April 12, 2024", title: "The art of white space in UI.", image: assets.portfolio.fabricCutting },
    { category: "Motion", date: "April 10, 2024", title: "Why animation matters for UX.", image: assets.portfolio.spotlightDiver },
  ];

  return (
    <section id={id} className="py-48 bg-[#fcfcfc] px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Editorial Header */}
        <div className="text-center mb-24">
           <p className="text-[10px] font-bold font-sans uppercase tracking-[0.4em] text-foreground/30 mb-8">Journal</p>
           <h2 className="text-4xl md:text-6xl lg:text-[6.5rem] font-sans font-medium text-foreground tracking-tight leading-[1]">
             Insight and perspective.
           </h2>
        </div>

        {/* 3-Column Editorial Zigzag Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
           
           {/* Column 1: Dark Card (Top) + Image (Bottom) */}
           <div className="flex flex-col gap-10">
              <TextCard post={posts[0]} isDark />
              <ImageCard image={posts[1].image} />
           </div>

           {/* Column 2: Image (Top) + White Card (Bottom) - Offset */}
           <div className="flex flex-col gap-10 lg:mt-32">
              <ImageCard image={posts[0].image} />
              <div className="bg-white text-foreground rounded-[2.5rem] p-12 flex flex-col justify-between aspect-square lg:aspect-[4/4.5] shadow-sm border border-black/5 group cursor-pointer">
                <div className="space-y-4">
                   <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                      <span>{posts[1].category}</span>
                      <span>{posts[1].date}</span>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-sans font-bold leading-tight tracking-tight group-hover:text-black transition-colors">{posts[1].title}</h3>
                </div>
                <div className="pt-6 border-t border-black/5">
                   <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                      Read More <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                   </button>
                </div>
              </div>
           </div>

           {/* Column 3: Dark Card (Top) + Image (Bottom) */}
           <div className="flex flex-col gap-10">
              <TextCard post={posts[2]} isDark />
              <ImageCard image={posts[2].image} />
           </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-24 flex justify-center">
            <button className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0 w-fit">
               <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-light leading-none mb-[2px]">+</span>
               </div>
               <span className="text-[10px] md:text-[11px] font-bold font-sans uppercase tracking-[0.2em] text-black text-nowrap">VIEW ALL POSTS</span>
            </button>
        </div>

      </div>
    </section>
  );
};

const TextCard = ({ post, isDark }) => (
  <div className={`p-10 md:p-12 rounded-[2rem] flex flex-col justify-between aspect-square lg:aspect-[4/4.5] border-transparent group cursor-pointer transition-transform hover:scale-[1.02] ${isDark ? 'bg-black text-white' : 'bg-[#f6f6f6] text-black'}`}>
    <div className="space-y-4">
       <div className={`flex justify-between items-center text-[9px] font-bold font-sans uppercase tracking-[0.15em] ${isDark ? 'text-white/40' : 'text-black/40'}`}>
          <span>{post.category}</span>
          <span>{post.date}</span>
       </div>
       <h3 className="text-2xl md:text-3xl font-sans font-medium leading-tight tracking-tight">{post.title}</h3>
    </div>
    <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-black/5'}`}>
       <button className="text-[9px] font-bold font-sans uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
          Read More <span className="transition-transform group-hover/btn:translate-x-1">→</span>
       </button>
    </div>
  </div>
);

const ImageCard = ({ image }) => (
  <div className="rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-xl  transition-all duration-1000 group">
    <img src={image} alt="Journal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
  </div>
);

export default BlogSection;

