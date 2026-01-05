
import React from 'react';
import { OutfitSuggestion } from '../types';

interface OutfitResultProps {
  suggestion: OutfitSuggestion;
}

export const OutfitResult: React.FC<OutfitResultProps> = ({ suggestion }) => {
  return (
    <div className="w-full bg-white border border-stone-200 p-8 md:p-12 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div>
            <span className="text-stone-400 uppercase text-[10px] tracking-widest mb-1 block">Your Curated Vibe</span>
            <h2 className="text-3xl md:text-4xl font-serif italic">{suggestion.headline}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-stone-100 pt-8">
            <div className="space-y-4">
              <section>
                <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">Top</h3>
                <p className="text-stone-800 font-medium">{suggestion.top}</p>
              </section>
              <section>
                <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">Bottom</h3>
                <p className="text-stone-800 font-medium">{suggestion.bottom}</p>
              </section>
              {suggestion.outerwear && (
                <section>
                  <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">Outerwear</h3>
                  <p className="text-stone-800 font-medium">{suggestion.outerwear}</p>
                </section>
              )}
            </div>

            <div className="space-y-4">
              <section>
                <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">Footwear</h3>
                <p className="text-stone-800 font-medium">{suggestion.footwear}</p>
              </section>
              <section>
                <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">Accessories</h3>
                <ul className="list-none space-y-1">
                  {suggestion.accessories.map((item, idx) => (
                    <li key={idx} className="text-stone-800 font-medium">&mdash; {item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col justify-center bg-stone-50 p-6 rounded-sm border border-stone-100 italic">
          <h3 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-4 not-italic">Stylist Notes</h3>
          <p className="text-stone-600 leading-relaxed text-sm">
            "{suggestion.stylistNotes}"
          </p>
        </div>
      </div>
    </div>
  );
};
