
export interface OutfitInputs {
  weather: string;
  occasion: string;
  style: string;
}

export interface OutfitSuggestion {
  id: string;
  headline: string;
  description: string;
  styleTag: string;
  imageUrl: string;
  timestamp: number;
  top: string;
  bottom: string;
  outerwear?: string;
  footwear: string;
  accessories: string[];
  stylistNotes: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type Section = 'discovery' | 'editorial' | 'share' | 'about' | 'look-detail';

export interface EditorialArticle {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
}
