
import React, { useState } from 'react';
import { OutfitSuggestion } from '../types';
import { DEFAULT_FASHION_IMAGE } from '../constants';

interface OutfitCardProps {
  suggestion: OutfitSuggestion;
  onClick: (id: string) => void;
}

export const OutfitCard: React.FC<OutfitCardProps> = ({ suggestion, onClick }) => {
  const [imgSrc, setImgSrc] = useState(suggestion.imageUrl);

  const handleImageError = () => {
    if (imgSrc !== DEFAULT_FASHION_IMAGE) {
      setImgSrc(DEFAULT_FASHION_IMAGE);
    }
  };

  return (
    <div 
      className="break-inside-avoid group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-1000 mb-8"
      onClick={() => onClick(suggestion.id)}
    >
      <div className="relative overflow-hidden bg-stone-200">
        <img 
          src={imgSrc} 
          alt={suggestion.headline}
          onError={handleImageError}
          className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-110 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="mt-3 md:mt-4 px-1 pb-4 border-b border-stone-100">
        <h3 className="font-serif italic text-lg md:text-xl text-stone-900 mb-1 leading-tight">{suggestion.headline}</h3>
        <p className="text-stone-400 text-[11px] md:text-xs leading-relaxed font-light line-clamp-2 uppercase tracking-wide mb-3">
          {suggestion.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 group-hover:text-stone-900 transition-colors border-b border-transparent group-hover:border-stone-900 pb-0.5">
            View Look Details
          </span>
        </div>
      </div>
    </div>
  );
};
