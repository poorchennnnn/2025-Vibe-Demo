
import React from 'react';
import { Section } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, onSectionChange }) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#faf9f6]">
      <header className="w-full py-8 px-6 md:px-12 flex justify-between items-end border-b border-stone-100 bg-white/50 backdrop-blur-sm sticky top-0 z-[60]">
        <div className="cursor-pointer" onClick={() => onSectionChange('discovery')}>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tighter leading-none">DressCODE</h1>
          <p className="text-stone-400 uppercase tracking-[0.3em] text-[9px] font-bold mt-1">Intelligence in Style</p>
        </div>
        <nav className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-bold text-stone-400">
          <button 
            onClick={() => onSectionChange('discovery')}
            className={`transition-colors border-b py-1 ${activeSection === 'discovery' ? 'text-stone-900 border-stone-900' : 'hover:text-stone-900 border-transparent'}`}
          >
            Discovery
          </button>
          <button 
            onClick={() => onSectionChange('editorial')}
            className={`transition-colors border-b py-1 ${activeSection === 'editorial' ? 'text-stone-900 border-stone-900' : 'hover:text-stone-900 border-transparent'}`}
          >
            Editorial
          </button>
          <button 
            onClick={() => onSectionChange('share')}
            className={`transition-colors border-b py-1 ${activeSection === 'share' ? 'text-stone-900 border-stone-900' : 'hover:text-stone-900 border-transparent'}`}
          >
            Share
          </button>
          <button 
            onClick={() => onSectionChange('about')}
            className={`transition-colors border-b py-1 ${activeSection === 'about' ? 'text-stone-900 border-stone-900' : 'hover:text-stone-900 border-transparent'}`}
          >
            About
          </button>
        </nav>
      </header>
      
      <main className="w-full">
        {children}
      </main>
      
      <footer className="w-full py-12 px-12 border-t border-stone-100 mt-20 text-stone-400 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; {new Date().getFullYear()} DressCODE Fashion Labs</div>
        <div className="flex gap-6">
          <button onClick={() => onSectionChange('about')}>Identity</button>
          <a href="#">Privacy</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};
