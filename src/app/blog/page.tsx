'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Search, Download, Mail } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { fetchBlogPosts } from '@/lib/api/blog';
import { BlogPost } from '@/lib/blog-data';
import { useState, useEffect } from 'react';


function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Insights');

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchBlogPosts();
      setPosts(data);
      setLoading(false);
    };
    getPosts();
  }, []);

  const filteredPosts = activeCategory === 'All Insights' 
    ? posts 
    : posts.filter(p => p.category.includes(activeCategory));

  const featuredPost = posts[0];

  return (
    <main className="bg-osg-navy">
      {/* Featured Hero */}
      <section className="relative h-[90vh] flex items-end overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-[3000ms]" 
            alt="Future of Aluminium" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-osg-navy via-osg-navy/40 to-transparent" />
        </div>
        
        <div className="container-osg relative z-10 pb-20">
          <Reveal className="max-w-4xl bg-white/5 backdrop-blur-xl p-12 lg:p-16 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-osg-gold font-bold text-[10px] uppercase tracking-[0.3em]">Featured / Technical</span>
              <span className="text-osg-slate text-[10px] font-bold uppercase tracking-widest">8 min read</span>
            </div>
            <h1 className="text-display-md lg:text-display-lg text-white mb-8 uppercase tracking-tighter leading-[0.9]">
              The Future of Aluminium in Sustainable Urban Facades.
            </h1>
            <p className="text-osg-slate text-body-lg max-w-2xl mb-12">
              As cities density increases, the choice of structural materials determines the longevity of our environments. Explore how precision-engineered aluminium systems are redefining thermal efficiency.
            </p>
            <Link href="/blog/future-of-aluminium" className="btn-primary group">
              Read Investigation <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-white/5 bg-osg-navy-mid">
        <div className="container-osg flex flex-col md:flex-row justify-between items-center gap-8">
          <Reveal className="flex flex-wrap gap-8">
            {['All Insights', 'Technical', 'Design', 'Industry'].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${activeCategory === cat ? 'text-osg-gold' : 'text-osg-slate hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="relative w-full md:w-64">
            <input type="text" placeholder="Search archive..." className="w-full bg-white/5 border border-white/10 p-3 pl-10 text-xs text-white focus:ring-1 focus:ring-osg-gold outline-none" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-osg-slate" size={14} />
          </Reveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-osg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {loading ? (
                <div className="col-span-12 py-20 text-center">
                    <div className="w-12 h-12 border-2 border-osg-gold border-t-transparent rounded-full animate-spin mx-auto mb-6" />
                    <p className="text-[10px] font-black text-osg-gold uppercase tracking-[0.4em]">Synchronizing Archive</p>
                </div>
            ) : filteredPosts.length === 0 ? (
                <div className="col-span-12 py-20 text-center border border-white/5">
                    <p className="text-osg-slate text-xs uppercase tracking-widest">No articles found in this category.</p>
                </div>
            ) : (
                <>
                    {/* Main Article */}
                    {activeCategory === 'All Insights' && filteredPosts[0] && (
                        <div className="md:col-span-8">
                            <Reveal className="group">
                                <Link href={`/blog/${filteredPosts[0].slug}`}>
                                <div className="aspect-video overflow-hidden border border-white/5 bg-osg-charcoal mb-8">
                                    <img src={filteredPosts[0].image} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt={filteredPosts[0].title} />
                                </div>
                                <div className="pl-12 border-l-4 border-osg-gold py-4">
                                    <span className="text-osg-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{filteredPosts[0].category}</span>
                                    <h2 className="text-display-xs text-white mb-6 uppercase tracking-tighter group-hover:text-osg-gold transition-colors">{filteredPosts[0].title}</h2>
                                    <p className="text-osg-slate text-body-lg mb-8 line-clamp-2">{filteredPosts[0].excerpt}</p>
                                    <span className="text-[10px] text-osg-slate font-bold uppercase tracking-widest">{filteredPosts[0].date}</span>
                                </div>
                                </Link>
                            </Reveal>
                        </div>
                    )}

                    {/* Sidebar Resource Card */}
                    {activeCategory === 'All Insights' && (
                        <div className="md:col-span-4">
                            <Reveal className="bg-osg-gold p-12 h-full flex flex-col justify-between shadow-2xl">
                                <div className="relative z-10">
                                <span className="text-osg-navy text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Industry Insights</span>
                                <h3 className="text-heading-md font-black text-osg-navy uppercase tracking-tighter leading-none mb-8">Quarterly Construction Cost Index 2024</h3>
                                <p className="text-osg-navy/70 text-small">An analytical deep-dive into material price fluctuations and logistic trends impacting East African developers.</p>
                                </div>
                                <div className="relative z-10">
                                <Link href="#" className="flex items-center gap-3 text-osg-navy font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
                                    Download PDF <Download size={16} />
                                </Link>
                                </div>
                            </Reveal>
                        </div>
                    )}

                    {/* Sub Grid */}
                    {filteredPosts.slice(activeCategory === 'All Insights' ? 1 : 0).map((post, i) => (
                        <div key={post.slug} className="md:col-span-4 group">
                            <Reveal delay={0.2 + i * 0.1}>
                            <Link href={`/blog/${post.slug}`}>
                                <div className="aspect-[4/5] overflow-hidden border border-white/5 bg-osg-charcoal mb-8">
                                <img src={post.image} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt={post.title} />
                                </div>
                                <span className="text-osg-gold text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">{post.category}</span>
                                <h3 className="text-heading-md text-white mb-4 uppercase tracking-tighter group-hover:text-osg-gold transition-colors">{post.title}</h3>
                                <p className="text-osg-slate text-xs line-clamp-2 uppercase tracking-wide leading-relaxed">{post.excerpt}</p>
                            </Link>
                            </Reveal>
                        </div>
                    ))}
                </>
            )}
          </div>

        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-osg-navy-mid border-t border-white/5">
        <div className="container-osg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-osg-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6">The Master Architect</h2>
              <h3 className="text-display-sm text-white uppercase tracking-tighter mb-8 bg-gradient-to-r from-white to-osg-slate bg-clip-text text-transparent">Stay informed on <br /> structural excellence.</h3>
              <p className="text-osg-slate text-body-lg">Monthly briefings on construction innovation, economic insights, and curated project showcases.</p>
            </Reveal>

            <Reveal delay={0.1} className="p-12 bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="ALEXANDER STERLING" className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xs uppercase tracking-widest focus:border-osg-gold transition-colors outline-none placeholder:text-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white uppercase tracking-widest">Professional Email</label>
                  <input type="email" placeholder="A.STERLING@ARCHITECTURE.COM" className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xs uppercase tracking-widest focus:border-osg-gold transition-colors outline-none placeholder:text-white/10" />
                </div>
                <button className="btn-primary w-full py-6 group">
                  Subscribe to Insights <Mail className="ml-3 text-osg-navy group-hover:scale-110 transition-transform" size={18} />
                </button>
              </form>
              <p className="mt-8 text-[9px] text-osg-slate text-center uppercase tracking-[0.2em]">Privacy guaranteed. Unsubscribe at any time.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
