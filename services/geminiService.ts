import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { WEDDING_EVENTS, COUPLE_NAMES } from '../constants';

let chatSession: Chat | null = null;

const getSystemInstruction = () => {
  const eventsList = WEDDING_EVENTS.map(e => 
    `- ${e.date}: ${e.title} at ${e.time} (${e.location}). ${e.description}`
  ).join('\n');

  return `
    You are the "Royal Wedding Assistant" AI for ${COUPLE_NAMES}'s wedding.
    Your tone should be polite, celebratory, and slightly formal (royal/elegant Indian style).
    
    Theme: Indian Maximalist, Red & White.
    
    Here is the Schedule of Events:
    ${eventsList}
    
    Instructions:
    1. Answer questions about dates, times, and locations based strictly on the schedule above.
    2. If asked about dress code, suggest "Indian Ethnic Wear" with a focus on the Red and White color palette, or Gold accents.
    3. If asked about RSVP, guide them to the RSVP section at the bottom of the page.
    4. Be concise but warm. Use emojis like ✨, 💍, 🌺, 🙏.
    5. If you don't know an answer, politely say you will ask the couple to get back to them.
  `;
};

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini Chat", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Please configure the API_KEY to enable the Wedding Assistant.";
  }

  try {
    const chat = chatSession || initializeChat();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm having a little trouble connecting to the spirits of celebration right now. Please try again later. 🙏";
  }
};