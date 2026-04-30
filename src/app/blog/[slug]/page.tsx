'use client';

import { use, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Printer, MessageSquare, ExternalLink, Link2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { fetchPostBySlug, fetchFeaturedPosts } from '@/lib/api/blog';
import { BlogPost } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
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

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostData = async () => {
      const data = await fetchPostBySlug(slug);
      if (!data) {
         setLoading(false);
         return;
      }
      setPost(data);
      
      const related = await fetchFeaturedPosts(4);
      setRelatedPosts(related.filter(p => p.slug !== slug).slice(0, 3));
      
      setLoading(false);
    };
    getPostData();
  }, [slug]);

  if (loading) {
    return (
      <main className="bg-osg-navy min-h-screen flex items-center justify-center">
        <div className="text-center">
            <div className="w-12 h-12 border-2 border-osg-gold border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <p className="text-[10px] font-black text-osg-gold uppercase tracking-[0.4em]">Retrieving Intelligence</p>
        </div>
      </main>
    );
  }

  if (!post) {
    notFound();
  }


  return (
    <main className="bg-osg-navy">
      {/* Editorial Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            className="w-full h-full object-cover grayscale opacity-20" 
            alt={post.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-at from-osg-navy via-osg-navy/80 to-transparent" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05]" />
        </div>
        
        <div className="container-osg relative z-10 text-center px-4">
          <Reveal>
            <div className="flex items-center justify-center gap-6 text-osg-gold font-bold text-[10px] uppercase tracking-[0.6em] mb-12">
              <span>{post.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-osg-gold/50" />
              <div className="flex items-center gap-2">
                <Clock size={12} /> {post.readTime}
              </div>
            </div>
            <h1 className="text-display-md lg:text-display-lg text-white mb-12 uppercase tracking-tighter max-w-5xl mx-auto leading-[0.85] font-sans">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/40 font-bold uppercase tracking-[0.4em] text-[10px]">
              <Calendar size={12} className="text-osg-gold" /> {post.date}
            </div>
          </Reveal>
        </div>
      </section>


      {/* Article Body */}
      <section className="section-padding bg-osg-navy border-y border-white/5 relative">
        <div className="container-osg max-w-4xl relative">
          {/* Side Tools (Desktop) */}
          <aside className="absolute -left-32 top-8 hidden xl:flex flex-col gap-8">
              <div className="flex flex-col gap-4 text-osg-slate">
                <button className="hover:text-osg-gold transition-colors"><MessageSquare size={20} /></button>
                <button className="hover:text-osg-gold transition-colors"><Link2 size={20} /></button>
                <button className="hover:text-osg-gold transition-colors"><ExternalLink size={20} /></button>
                <div className="w-px h-12 bg-white/10 mx-auto" />
                <button className="hover:text-osg-gold transition-colors"><Share2 size={20} /></button>
                <button className="hover:text-osg-gold transition-colors"><Printer size={20} /></button>
              </div>

          </aside>

          <Reveal className="prose prose-invert prose-osg max-w-none">
            {post.author && (
              <div className="flex items-center gap-4 mb-16 p-8 bg-white/5 border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={post.author.avatar} className="w-16 h-16 rounded-full border-2 border-osg-gold/20" alt={post.author.name} />
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">{post.author.name}</h4>
                  <p className="text-osg-gold text-[10px] uppercase font-bold tracking-widest">{post.author.role}</p>
                </div>
              </div>
            )}

            <div 
              className="text-body-lg text-osg-slate leading-[1.8] font-light space-y-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>

          {/* Post Footer */}
          <Reveal delay={0.2} className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-4">
              {['Engineering', 'Architecture', 'Aluminium'].map(tag => (
                <span key={tag} className="text-[10px] font-bold text-osg-slate border border-white/10 px-4 py-1 uppercase tracking-widest">#{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Share Article</span>
              <div className="flex gap-4 text-osg-slate">
                <MessageSquare size={16} className="hover:text-osg-gold cursor-pointer" />
                <Link2 size={16} className="hover:text-osg-gold cursor-pointer" />
                <Share2 size={16} className="hover:text-osg-gold cursor-pointer" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recommended Articles */}
      <section className="section-padding bg-osg-navy-mid border-b border-white/5">
        <div className="container-osg">
          <Reveal className="mb-16">
            <h2 className="text-heading-lg text-white uppercase tracking-tighter">Related Investigations</h2>
            <div className="w-16 h-1 bg-osg-gold mt-4" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related, i) => (
              <Reveal key={related.slug} delay={i * 0.1}>
                 <Link href={`/blog/${related.slug}`} className="group block">
                    <div className="aspect-video overflow-hidden border border-white/5 bg-osg-charcoal mb-6">
                      <img src={related.image} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt={related.title} />
                    </div>
                    <span className="text-osg-gold text-[10px] font-bold uppercase tracking-widest mb-3 block">{related.category}</span>
                    <h4 className="text-heading-sm text-white uppercase tracking-tighter group-hover:text-osg-gold transition-colors">{related.title}</h4>
                 </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Back to Archive CTA */}
      <section className="section-padding text-center">
        <div className="container-osg">
          <Reveal>
            <Link href="/blog" className="inline-flex items-center gap-4 text-osg-gold font-black text-xs uppercase tracking-[0.4em] hover:gap-8 transition-all">
              <ArrowLeft size={16} /> Back to Journal Archive
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
