
import React from 'react';
import { EditorialArticle, OutfitSuggestion } from './types';

export const WEATHER_OPTIONS = [
  'Sunny & Warm',
  'Sunny & Cold',
  'Rainy',
  'Snowy',
  'Humid',
  'Windy',
  'Cloudy'
];

export const OCCASION_OPTIONS = [
  'Work / Office',
  'Casual Outing',
  'Date Night',
  'Formal Event',
  'Job Interview',
  'Gym / Workout',
  'Lounge / Home'
];

export const STYLE_OPTIONS = [
  'Minimalist',
  'Streetwear',
  'Old Money / Preppy',
  'Bohemian',
  'Athleisure',
  'Grunge',
  'Avant-Garde'
];

export const DEFAULT_FASHION_IMAGE = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop';

export const MOCK_EDITORIALS: EditorialArticle[] = [
  {
    id: 'e1',
    title: 'Japan: The Art of Structured Minimalism',
    category: 'Regional Spotlight',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    excerpt: 'An exploration of the meticulous craftsmanship and layered textures that define modern Tokyo street style and avant-garde silhouettes.'
  },
  {
    id: 'e2',
    title: 'Korea: Dynamic Silhouettes & High Contrast',
    category: 'Regional Spotlight',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Analyzing the high-impact trends of Seoul—from oversized tailored blazers to the vibrant fusion of technical wear and traditional echoes.'
  },
  {
    id: 'e3',
    title: 'USA: The Heritage of Utilitarian Cool',
    category: 'Regional Spotlight',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Tracing the evolution of American style, from East Coast collegiate classics to the raw, industrial textures of the New York concrete jungle.'
  }
];

export const MOCK_INITIAL_FEED: OutfitSuggestion[] = [
  {
    id: 'f1',
    headline: 'Urban Architect',
    description: 'Structural layering in slate and charcoal.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 100000,
    top: 'Tech-cotton hoodie',
    bottom: 'Architectural cargos',
    outerwear: 'Utility gilet',
    footwear: 'High-tech trainers',
    accessories: ['Modular bag'],
    stylistNotes: 'Focus on the silhouette contrast between oversized and tapered elements.'
  },
  {
    id: 'f2',
    headline: 'Ethereal Drapery',
    description: 'Soft lines and monochromatic fluidity.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1539109132381-31a15b2c6a6a?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 200000,
    top: 'Silk cowl neck',
    bottom: 'Flowing palazzo trousers',
    outerwear: 'None',
    footwear: 'Square-toe sandals',
    accessories: ['Silver wire cuff'],
    stylistNotes: 'Allow the natural movement of silk to define the look.'
  },
  {
    id: 'f3',
    headline: 'Modern Hanbok Influence',
    description: 'Clean tailoring with traditional echoes.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 300000,
    top: 'Wrap-style jacket',
    bottom: 'Wide-leg wool pants',
    outerwear: 'None',
    footwear: 'Minimalist loafers',
    accessories: ['Tassel pendant'],
    stylistNotes: 'A study in contemporary Korean elegance and minimalism.'
  },
  {
    id: 'f4',
    headline: 'Heritage Revived',
    description: 'Classic collegiate patterns with a modern edge.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 400000,
    top: 'Pinstripe poplin shirt',
    bottom: 'Tailored navy shorts',
    outerwear: 'V-neck cricket sweater',
    footwear: 'Leather boat shoes',
    accessories: ['Canvas tote'],
    stylistNotes: 'Preppy essentials reimagined for the 21st-century city.'
  },
  {
    id: 'f5',
    headline: 'Organic Nomad',
    description: 'Earth-toned textures and sustainable fibers.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 500000,
    top: 'Raw hemp tunic',
    bottom: 'Linen wrap skirt',
    outerwear: 'Unstructured knit duster',
    footwear: 'Woven mules',
    accessories: ['Wood-bead necklace'],
    stylistNotes: 'Celebrate the tactile beauty of raw, untreated fabrics.'
  },
  {
    id: 'f6',
    headline: 'Midnight Utility',
    description: 'All-black techwear with modular capabilities.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1520975954732-35dd23335260?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 600000,
    top: 'Gore-Tex base layer',
    bottom: 'Multi-pocket trousers',
    outerwear: 'Anorak shell',
    footwear: 'Waterproof combat boots',
    accessories: ['Reflective belt'],
    stylistNotes: 'Form follows function in this urban survivalist aesthetic.'
  },
  {
    id: 'f7',
    headline: 'The Clean Suit',
    description: 'Unstructured tailoring for a relaxed professional.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 700000,
    top: 'Supima cotton tee',
    bottom: 'Soft-tailored trousers',
    outerwear: 'Single-breasted linen blazer',
    footwear: 'Clean white sneakers',
    accessories: ['Steel watch'],
    stylistNotes: 'Breaking the rules of business formal with comfort and ease.'
  },
  {
    id: 'f8',
    headline: 'Velvet Afternoon',
    description: 'Rich textures and vintage-inspired romanticism.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 800000,
    top: 'Lace-trimmed camisole',
    bottom: 'Embroidered midi skirt',
    outerwear: 'Crushed velvet jacket',
    footwear: 'Slingback pumps',
    accessories: ['Gilded headband'],
    stylistNotes: 'A modern take on Victorian-era opulence and layering.'
  },
  {
    id: 'f9',
    headline: 'Kyoto Minimal',
    description: 'Quiet confidence in indigo and cream.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 900000,
    top: 'Indigo-dyed knit',
    bottom: 'Wide-cut hakama pants',
    outerwear: 'None',
    footwear: 'Leather clogs',
    accessories: ['Indigo scarf'],
    stylistNotes: 'Simplicity is the ultimate sophistication in this Japanese-inspired set.'
  },
  {
    id: 'f10',
    headline: 'Concrete Street Rhythm',
    description: 'Raw denim and industrial textures.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 1000000,
    top: 'Heavy-gauge sweatshirt',
    bottom: 'Distressed straight denim',
    outerwear: 'Coach jacket',
    footwear: 'Canvas high-tops',
    accessories: ['Bucket hat'],
    stylistNotes: 'Effortless cool inspired by New York’s lower east side.'
  },
  {
    id: 'f11',
    headline: 'Seoul Night Shift',
    description: 'Sharp lines and high-contrast styling.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 1100000,
    top: 'Structured mock neck',
    bottom: 'Slim-tapered slacks',
    outerwear: 'Leather overcoat',
    footwear: 'Polished derbies',
    accessories: ['Thin silver necklace'],
    stylistNotes: 'A high-impact look that balances sharp tailoring with edgy materials.'
  },
  {
    id: 'f12',
    headline: 'British Pastoral',
    description: 'Heritage wools and countryside utility.',
    styleTag: 'Curated',
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop',
    timestamp: Date.now() - 1200000,
    top: 'Fine-knit turtleneck',
    bottom: 'Tweed checkered trousers',
    outerwear: 'Waxed field jacket',
    footwear: 'Brogue boots',
    accessories: ['Wool flat cap'],
    stylistNotes: 'Timeless British classics reinterpreted for modern outdoor living.'
  }
];

export const Icons = {
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
  ),
  Loader: () => (
    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  ),
  Plus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  )
};
