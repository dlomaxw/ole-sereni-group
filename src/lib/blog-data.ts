export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'future-of-aluminium',
    title: 'The Future of Aluminium in Sustainable Urban Facades',
    category: 'Technical / Sustainability',
    date: 'March 20, 2024',
    readTime: '8 min read',
    excerpt: 'Explore how precision-engineered aluminium systems are redefining thermal efficiency in modern skyscrapers.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    author: {
      name: 'Eng. Sarah Mwangi',
      role: 'Head of Structural Design',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    content: `
      <p>As global temperatures rise and urban density continues to accelerate, the architectural envelope is no longer just a aesthetic statement—it is a critical tool for environmental management. Aluminium, with its unmatched strength-to-weight ratio and infinite recyclability, has emerged as the definitive material for the next generation of sustainable facades.</p>
      
      <h3>The Thermal Revolution</h3>
      <p>Traditional aluminium framing was often criticized for its high thermal conductivity. However, modern "thermal break" technology—using polyamide or resin barriers between internal and external profiles—has fundamentally changed the calculus. Today's systems can achieve U-values as low as 0.9 W/m²K, rivaling even the most insulated traditional wall structures.</p>
      
      <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200" alt="Technical Detail" />
      
      <h3>Case Study: The Green Spire</h3>
      <p>In our latest project, the integration of high-performance curtain walls resulted in a 35% reduction in HVAC energy consumption. By using solar-reflective coatings on the aluminium profiles themselves, we were able to minimize heat gain while maintaining maximum transparency.</p>
      
      <h3>Conclusion</h3>
      <p>The specifier of 2024 must look beyond the surface. Structural integrity combined with thermal intelligence is the new baseline for urban excellence.</p>
    `,
  },
  {
    slug: 'structural-honesty-minimalism',
    title: 'Structural Honesty: Why Minimalism Demands Precision Engineering',
    category: 'Design Trends',
    date: 'March 14, 2024',
    readTime: '10 min read',
    excerpt: 'When the structure becomes the aesthetic, there is no room for error.',
    image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=1200&auto=format&fit=crop',
    content: '<p>Minimalism is often misunderstood as the absence of detail. In reality, it is the perfection of detail...</p>',
  },
];

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  return BLOG_POSTS.find(p => p.slug === slug);
}
