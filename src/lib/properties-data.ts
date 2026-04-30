export interface Property {
  slug: string;
  title: string;
  location: string;
  sector: 'Residential' | 'Commercial' | 'Industrial' | 'Hospitality';
  status: 'Completed' | 'In Progress' | 'Concept';
  price?: string;
  area: string;
  mainImage: string;
  gallery: string[];
  videoUrl?: string; // YouTube or MP4
  description: string;
  specs: {
    label: string;
    value: string;
    icon?: string;
  }[];
  features: string[];
  engineer?: string;
}

export const PROPERTIES: Property[] = [
  {
    slug: 'nairobi-gtc-residences',
    title: 'GTC Luxury Residences',
    location: 'Westlands, Nairobi',
    sector: 'Residential',
    status: 'Completed',
    price: '$450,000+',
    area: '280 SQM',
    mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    description: 'The Nairobi Global Trade Centre (GTC) Residences represent the peak of modern architectural engineering in East Africa. OSG delivered the full V8 high-performance glass facade and internal finishing systems.',
    specs: [
      { label: 'System', value: 'V8 Unitised Facade' },
      { label: 'Wind Load', value: '3.5 kN/m²' },
      { label: 'Acoustics', value: '42 dB STC' },
      { label: 'Glass Type', value: 'Double Glazed Low-E' }
    ],
    features: [
      'Panoramic City Views',
      'Climate Control Facade',
      'Smart Home Integration',
      'Acoustically Isolated Units',
      'Sustainable HVAC Bridge'
    ]
  },
  {
    slug: 'kampala-business-hub',
    title: 'Serenity Business Hub',
    location: 'Nakasero, Kampala',
    sector: 'Commercial',
    status: 'In Progress',
    price: 'Rental Inquiries',
    area: '1,200 SQM',
    mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000'
    ],
    description: 'A landmark corporate development in the heart of Kampala, featuring OSG custom curtain wall systems and architectural carpentry.',
    specs: [
      { label: 'System', value: 'Curtain Wall C50' },
      { label: 'Sustainability', value: 'LEED Certified' },
      { label: 'Finish', value: 'Matte Charcoal Anodized' }
    ],
    features: [
      'Open-plan Corporate Suites',
      'Energy-Saving Envelope',
      'Underground Logistics Access',
      'High-Speed Fibre Backbone'
    ]
  },
  {
    slug: 'safari-luxe-villas',
    title: 'Safari Luxe Villas',
    location: 'Maasai Mara, Kenya',
    sector: 'Hospitality',
    status: 'Concept',
    price: 'Contact for Pricing',
    area: '550 SQM',
    mainImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000',
      'https://images.unsplash.com/photo-1432303492674-642e9d0944b2?q=80&w=2000'
    ],
    description: 'A boutique collection of wilderness villas integrating seamless glass partitions that blur the boundary between nature and structure.',
    specs: [
      { label: 'Invisibility', value: 'Slim-line Profiles' },
      { label: 'Security', value: 'Reinforced Safety Glass' },
      { label: 'Climate', value: 'Passive Solar Design' }
    ],
    features: [
      'Zero-Edge Glass Walls',
      'Nature-Integrated Terraces',
      'Off-grid Solar Integration',
      'Rainwater Harvesting'
    ]
  }
];

export async function getProperty(slug: string): Promise<Property | undefined> {
  return PROPERTIES.find(p => p.slug === slug);
}
