
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { OutfitCard } from './components/OutfitCard';
import { LookDetailView } from './components/LookDetailView';
import { generateVisualOutfit } from './services/geminiService';
import { OutfitInputs, OutfitSuggestion, LoadingState, Section } from './types';
import { WEATHER_OPTIONS, OCCASION_OPTIONS, STYLE_OPTIONS, Icons, MOCK_INITIAL_FEED, MOCK_EDITORIALS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('discovery');
  const [selectedLook, setSelectedLook] = useState<OutfitSuggestion | null>(null);
  const [inputs, setInputs] = useState<OutfitInputs>({
    weather: '',
    occasion: '',
    style: ''
  });
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);
  const [feed, setFeed] = useState<OutfitSuggestion[]>(MOCK_INITIAL_FEED);
  const [error, setError] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [shareDescription, setShareDescription] = useState('');
  const [shareBrands, setShareBrands] = useState('');
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleInputChange = (field: keyof OutfitInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleCurate = async () => {
    if (!inputs.weather || !inputs.occasion || !inputs.style) {
      setError("Please complete your profile.");
      return;
    }

    setLoading(LoadingState.LOADING);
    setError(null);
    try {
      const result = await generateVisualOutfit(inputs);
      setFeed(prev => [result, ...prev]);
      setLoading(LoadingState.SUCCESS);
      setIsPanelOpen(false);
      setActiveSection('discovery');
    } catch (err) {
      console.error(err);
      setError("Style Lab is at capacity. Please try again.");
      setLoading(LoadingState.ERROR);
    }
  };

  const handleViewLook = (id: string) => {
    const look = feed.find(item => item.id === id);
    if (look) {
      setSelectedLook(look);
      setActiveSection('look-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShareSuccess(true);
    setTimeout(() => {
      setShareSuccess(false);
      setShareDescription('');
      setShareBrands('');
      setActiveSection('discovery');
    }, 2000);
  };

  const isFormValid = inputs.weather && inputs.occasion && inputs.style;

  const renderSection = () => {
    switch (activeSection) {
      case 'look-detail':
        return selectedLook ? (
          <LookDetailView 
            suggestion={selectedLook} 
            onBack={() => setActiveSection('discovery')} 
          />
        ) : null;
      case 'discovery':
        return (
          <div className="w-full px-4 md:px-12 py-10 animate-in fade-in duration-700">
            <header className="mb-10">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-stone-400 mb-2">Discovery Feed</h2>
              <p className="text-xl md:text-2xl font-serif italic text-stone-800 mb-1">Latest Curations from the Lab</p>
              <p className="text-stone-400 text-[10px] md:text-xs uppercase tracking-widest font-medium max-w-2xl leading-relaxed">
                AI-curated outfit inspirations exploring diverse styles, cultures, and global aesthetics.
              </p>
            </header>
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 md:gap-8 space-y-0">
              {feed.map((item) => (
                <OutfitCard key={item.id} suggestion={item} onClick={handleViewLook} />
              ))}
            </div>
          </div>
        );
      case 'editorial':
        return (
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <header className="mb-16 border-b border-stone-100 pb-8">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Editorial</h2>
              <p className="text-4xl md:text-6xl font-serif italic text-stone-900 mb-2">Style & Substance</p>
              <p className="text-stone-400 text-[10px] md:text-xs uppercase tracking-widest font-medium max-w-2xl leading-relaxed">
                An analysis of regional fashion landscapes—decoding the distinct aesthetics of Japan, Korea, and the USA.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {MOCK_EDITORIALS.map((article) => (
                <div key={article.id} className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden bg-stone-100 mb-6">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-3 block">{article.category}</span>
                  <h3 className="text-2xl font-serif italic mb-4 group-hover:underline underline-offset-4">{article.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 font-light">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-900 group-hover:translate-x-2 transition-transform">
                    Read Story <Icons.ChevronRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'share':
        return (
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 animate-in fade-in duration-700">
            <header className="mb-16 border-b border-stone-100 pb-8">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Community</h2>
              <p className="text-4xl md:text-6xl font-serif italic text-stone-900">Share Your Look</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="aspect-[3/4] bg-stone-100 border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400 hover:border-stone-400 transition-colors cursor-pointer group">
                  <Icons.Plus />
                  <span className="text-[10px] uppercase tracking-widest font-bold mt-4 group-hover:text-stone-900 transition-colors">Select Image</span>
                </div>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest text-center">Supported formats: JPG, PNG, WEBP</p>
              </div>
              <div className="space-y-12">
                <form onSubmit={handleShareSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Style Description</label>
                    <textarea 
                      placeholder="Describe the aesthetic..."
                      className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:border-stone-900 outline-none transition-all resize-none min-h-[100px]"
                      value={shareDescription}
                      onChange={(e) => setShareDescription(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Brand Tags</label>
                    <input 
                      type="text"
                      placeholder="e.g. Prada, Acne Studios, Vintage"
                      className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:border-stone-900 outline-none transition-all"
                      value={shareBrands}
                      onChange={(e) => setShareBrands(e.target.value)}
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={shareSuccess}
                    className="w-full bg-stone-900 text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-stone-800 transition-all disabled:bg-stone-400"
                  >
                    {shareSuccess ? 'Publication Successful' : 'Post to Discovery'}
                  </button>
                </form>
                <div className="bg-stone-50 p-8 border border-stone-100 italic">
                  <h4 className="text-[10px] uppercase tracking-widest text-stone-500 font-bold not-italic mb-3">Submission Guidelines</h4>
                  <p className="text-stone-400 text-xs leading-relaxed">
                    By sharing your look, you contribute to our global discovery engine. Ensure your images are well-lit and represent your personal aesthetic sincerely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="max-w-3xl mx-auto px-6 py-24 animate-in fade-in duration-1000 text-center">
             <header className="mb-20">
               <h2 className="text-xs uppercase tracking-[0.6em] font-bold text-stone-400 mb-12">The Platform</h2>
               <p className="text-3xl md:text-5xl font-serif italic leading-snug text-stone-900">
                 Modernizing the Fashion Discovery Pipeline.
               </p>
             </header>
             <div className="space-y-24 border-t border-stone-100 pt-20">
               <div className="space-y-8 text-stone-600 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                 <p>
                   Founded in 2025, DressCODE is a next-generation fashion discovery platform designed to modernize the way individuals interact with style. We bridge the gap between digital inspiration and daily implementation.
                 </p>
                 <p>
                   Our ecosystem integrates three core pillars: AI-assisted styling inspiration for personalized looks, a community-driven layer for user-generated outfit sharing, and high-frequency brand and trend curation to keep our users ahead of the curve.
                 </p>
               </div>
               <div className="text-stone-600 font-light leading-[2.2] text-lg max-w-2xl mx-auto font-serif">
                 <p>
                   創立於 2025 年，DressCODE 是專為現代生活設計的新一代時尚探索平台，致力於優化個人與風格之間的互動。我們透過整合 AI 輔助的造型靈感、社群導向的穿搭分享機制，以及全球品牌與趨勢的精準策劃。
                 </p>
               </div>
             </div>
             <div className="mt-24">
               <button 
                onClick={() => setActiveSection('discovery')}
                className="px-12 py-5 border border-stone-900 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-900 hover:text-white transition-all duration-500"
               >
                 Return to Discovery
               </button>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderSection()}
      
      {/* Conditionally hide FAB on Look Detail for a focused experience */}
      {activeSection !== 'look-detail' && (
        <button 
          onClick={() => setIsPanelOpen(!isPanelOpen)}
          className="fixed bottom-8 right-8 z-[100] bg-stone-900 text-white p-6 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-3"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-[10px] uppercase tracking-widest font-bold">
            {isPanelOpen ? 'Close Style Lab' : 'Curate New Look'}
          </span>
          {isPanelOpen ? <Icons.X /> : <Icons.Plus />}
        </button>
      )}

      {isPanelOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={() => setIsPanelOpen(false)} />
          <div className="relative bg-white w-full max-w-xl p-8 md:p-12 rounded-sm shadow-2xl overflow-hidden animate-in slide-in-from-bottom-12 duration-500">
            <div className="mb-10 flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-serif italic mb-1">Style Lab</h2>
                <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-bold">Bespoke AI Curation</p>
              </div>
              <button onClick={() => setIsPanelOpen(false)} className="text-stone-300 hover:text-stone-900 transition-colors">
                <Icons.X />
              </button>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Climate</label>
                  <select 
                    value={inputs.weather}
                    onChange={(e) => handleInputChange('weather', e.target.value)}
                    className="w-full bg-stone-50 border border-stone-100 p-4 text-sm focus:border-stone-400 outline-none transition-all appearance-none"
                  >
                    <option value="">Current Weather...</option>
                    {WEATHER_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Setting</label>
                  <select 
                    value={inputs.occasion}
                    onChange={(e) => handleInputChange('occasion', e.target.value)}
                    className="w-full bg-stone-50 border border-stone-100 p-4 text-sm focus:border-stone-400 outline-none transition-all appearance-none"
                  >
                    <option value="">The Occasion...</option>
                    {OCCASION_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Aesthetic</label>
                  <select 
                    value={inputs.style}
                    onChange={(e) => handleInputChange('style', e.target.value)}
                    className="w-full bg-stone-50 border border-stone-100 p-4 text-sm focus:border-stone-400 outline-none transition-all appearance-none"
                  >
                    <option value="">Style Direction...</option>
                    {STYLE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleCurate}
                  disabled={loading === LoadingState.LOADING || !isFormValid}
                  className="w-full bg-stone-900 text-white py-5 flex items-center justify-center gap-3 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-stone-800 transition-all disabled:opacity-20"
                >
                  {loading === LoadingState.LOADING ? <Icons.Loader /> : <Icons.Sparkles />}
                  {loading === LoadingState.LOADING ? 'Analyzing Trends...' : 'Generate Inspiration'}
                </button>
                {error && <p className="text-red-400 text-[10px] text-center mt-4 font-bold uppercase tracking-tighter">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default App;
