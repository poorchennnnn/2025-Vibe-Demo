
import React from 'react';
import { OutfitSuggestion } from '../types';
import { Icons } from '../constants';

interface LookDetailViewProps {
  suggestion: OutfitSuggestion;
  onBack: () => void;
}

const getMockPrice = (itemName: string, category: string): string => {
  // Deterministic mock price based on name length for demo purposes
  const base = itemName.length * 7;
  if (category === 'Outerwear') return `$${base + 450}`;
  if (category === 'Footwear') return `$${base + 220}`;
  if (category === 'Accessories') return `$${base + 65}`;
  return `$${base + 110}`;
};

export const LookDetailView: React.FC<LookDetailViewProps> = ({ suggestion, onBack }) => {
  const shopItems = [
    { name: suggestion.top, category: 'Top' },
    { name: suggestion.bottom, category: 'Bottom' },
    ...(suggestion.outerwear ? [{ name: suggestion.outerwear, category: 'Outerwear' }] : []),
    { name: suggestion.footwear, category: 'Footwear' },
    ...suggestion.accessories.map(acc => ({ name: acc, category: 'Accessories' }))
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 hover:text-stone-900 transition-colors mb-12"
      >
        <div className="rotate-180"><Icons.ChevronRight /></div>
        Return to Discovery
      </button>

      {/* 1. Hero Image */}
      <div className="w-full aspect-[3/4] md:aspect-[4/5] bg-stone-100 overflow-hidden mb-12">
        <img 
          src={suggestion.imageUrl} 
          alt={suggestion.headline}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Look Title */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-3 block">Perspective {suggestion.styleTag}</span>
        <h2 className="text-4xl md:text-6xl font-serif italic text-stone-900 leading-tight">
          {suggestion.headline}
        </h2>
      </div>

      {/* 3. Style Summary */}
      <div className="mb-16 border-l-2 border-stone-100 pl-8">
        <p className="text-xl text-stone-600 font-light leading-relaxed italic">
          {suggestion.description}
        </p>
      </div>

      {/* 4. Outfit Breakdown */}
      <section className="mb-16">
        <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-900 mb-8 pb-2 border-b border-stone-100">
          Outfit Composition
        </h3>
        <ul className="space-y-6">
          <li className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold min-w-[80px]">Top</span>
            <span className="text-stone-800 font-medium">{suggestion.top}</span>
          </li>
          <li className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold min-w-[80px]">Bottom</span>
            <span className="text-stone-800 font-medium">{suggestion.bottom}</span>
          </li>
          {suggestion.outerwear && (
            <li className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold min-w-[80px]">Outerwear</span>
              <span className="text-stone-800 font-medium">{suggestion.outerwear}</span>
            </li>
          )}
          <li className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold min-w-[80px]">Footwear</span>
            <span className="text-stone-800 font-medium">{suggestion.footwear}</span>
          </li>
          <li className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold min-w-[80px]">Accents</span>
            <span className="text-stone-800 font-medium">{suggestion.accessories.join(', ')}</span>
          </li>
        </ul>
      </section>

      {/* 5. Why This Look Works */}
      <section className="mb-24 bg-stone-50 p-8 md:p-12 border border-stone-100">
        <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-6">Stylist Perspective</h3>
        <p className="text-stone-600 leading-[1.8] font-light">
          {suggestion.stylistNotes}
        </p>
      </section>

      {/* 6. Shop the Look */}
      <section>
        <h3 className="text-2xl font-serif italic text-stone-900 mb-10 text-center">Shop the Selection</h3>
        <div className="space-y-1">
          {shopItems.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between py-6 border-b border-stone-100 group">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">{item.category}</span>
                <h4 className="text-sm md:text-base font-medium text-stone-800">{item.name}</h4>
                <span className="text-xs text-stone-500">{getMockPrice(item.name, item.category)}</span>
              </div>
              <button 
                className="px-6 py-3 border border-stone-900 text-[9px] uppercase tracking-widest font-bold hover:bg-stone-900 hover:text-white transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  alert('Added to Bag (Concept)');
                }}
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-24 pt-12 border-t border-stone-100 flex justify-center">
        <button 
          onClick={onBack}
          className="px-12 py-5 bg-stone-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-stone-800 transition-all"
        >
          Explore More Looks
        </button>
      </div>
    </div>
  );
};
