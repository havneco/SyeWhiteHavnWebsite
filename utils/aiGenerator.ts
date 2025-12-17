import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const generateAsset = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: prompt,
      config: {
        imageConfig: {
          aspectRatio: "1:1", // Changed to square for better headshot/social consistency
          imageSize: "1K"
        }
      }
    });

    // Extract the base64 image from the response
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data returned");
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw error;
  }
};

export const SITE_PROMPTS = {
  hero_main: "Photorealistic portrait of a 32-year-old Native American man with dark curly hair and a kind smile. He is wearing a blue textured blazer over a blue floral patterned button-down shirt. The background is a blurred soft-focus stone wall or old city street. Natural lighting, high definition, professional headshot style.",
  about_personal: "Photorealistic shot of a man wearing a beige hoodie and a beige bucket hat, smiling warmly while holding a small black and brown puppy in his arms. He is standing in front of a large red hiking map board with white topographic lines. Outdoor lighting, authentic lifestyle photography.",
  hospitality_shot: "Photorealistic shot of a professional waiter with dark curly hair wearing a white patterned button-down shirt. He is leaning forward pouring a bottle of white wine into a glass at a dinner table. Warm indoor restaurant lighting, hospitality service context.",
  adventure_shot: "Photorealistic shot of a happy man in a blue life vest floating in ocean water with both arms raised in excitement. He is laughing, wearing white swim trunks. Water splashes around him. Sunny day, vacation vibe.",
  dog_training_shot: "Photorealistic shot of a man wearing a purple crewneck sweater and grey chinos standing on a patterned carpet looking down at a small black and brown puppy sitting at his feet. Indoor setting, candid moment.",
  project_0: "UI design of a modern fintech dashboard named 'Wealth Council' showing financial graphs, dark mode, teal and gold accents. High tech, futuristic interface.",
  project_1: "A futuristic 3D visualization of a luxury eco-resort in the mountains, architectural rendering style, showing glass structures and nature integration."
};