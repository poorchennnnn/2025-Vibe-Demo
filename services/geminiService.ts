
import { GoogleGenAI } from "@google/genai";
import { OutfitInputs, OutfitSuggestion } from "../types";
import { DEFAULT_FASHION_IMAGE } from "../constants";

export const generateVisualOutfit = async (inputs: OutfitInputs): Promise<OutfitSuggestion> => {
  // Use the API key exclusively from environment variables as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Act as a high-end fashion stylist and photographer. 
    1. Create a stunning, high-quality fashion photography image of a complete outfit for a ${inputs.style} look, suitable for ${inputs.weather} weather and a ${inputs.occasion} occasion. 
    2. Provide a detailed breakdown of the outfit and stylist notes.
    
    Format the text part EXACTLY as:
    HEADLINE: [Headline]
    DESCRIPTION: [Description]
    TOP: [Top item]
    BOTTOM: [Bottom item]
    OUTERWEAR: [Outerwear item or 'None']
    FOOTWEAR: [Footwear item]
    ACCESSORIES: [Item 1, Item 2]
    NOTES: [Stylist notes]`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: { parts: [{ text: prompt }] },
  });

  let headline = "Elevated Look";
  let description = "A curated ensemble designed for modern living.";
  let imageUrl = "";
  let top = "Essential Piece";
  let bottom = "Tailored Component";
  let outerwear = "";
  let footwear = "Selected Footwear";
  let accessories: string[] = ["Curated Accessory"];
  let stylistNotes = "An exercise in balance and texture.";

  // Iterate through parts to find both text and image
  if (response.candidates?.[0]?.content?.parts) {
    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        const text = part.text;
        const headlineMatch = text.match(/HEADLINE:\s*(.*)/i);
        const descMatch = text.match(/DESCRIPTION:\s*(.*)/i);
        const topMatch = text.match(/TOP:\s*(.*)/i);
        const bottomMatch = text.match(/BOTTOM:\s*(.*)/i);
        const outerMatch = text.match(/OUTERWEAR:\s*(.*)/i);
        const footMatch = text.match(/FOOTWEAR:\s*(.*)/i);
        const accMatch = text.match(/ACCESSORIES:\s*(.*)/i);
        const notesMatch = text.match(/NOTES:\s*(.*)/i);

        if (headlineMatch) headline = headlineMatch[1].trim();
        if (descMatch) description = descMatch[1].trim();
        if (topMatch) top = topMatch[1].trim();
        if (bottomMatch) bottom = bottomMatch[1].trim();
        if (outerMatch && outerMatch[1].trim().toLowerCase() !== 'none') {
          outerwear = outerMatch[1].trim();
        }
        if (footMatch) footwear = footMatch[1].trim();
        if (accMatch) {
          accessories = accMatch[1].split(',').map(s => s.trim()).filter(Boolean);
        }
        if (notesMatch) stylistNotes = notesMatch[1].trim();
      }
      if (part.inlineData) {
        imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
  }

  // Fallback if image generation failed or part was missing
  if (!imageUrl) {
    imageUrl = DEFAULT_FASHION_IMAGE;
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    headline,
    description,
    styleTag: inputs.style,
    imageUrl,
    timestamp: Date.now(),
    top,
    bottom,
    outerwear,
    footwear,
    accessories,
    stylistNotes
  };
};
