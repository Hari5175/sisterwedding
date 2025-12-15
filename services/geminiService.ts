import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { WEDDING_EVENTS, COUPLE_NAMES } from '../constants';

let chatSession: Chat | null = null;

const getSystemInstruction = () => {
  // Simplify the event list format for the AI to process easily
  const eventsList = WEDDING_EVENTS.map(e => 
    `- ${e.title}: ${e.date} @ ${e.time} (${e.location})`
  ).join('\n');

  const dressCodes = `
    Dress Code Rules:
    - Anugraham: Women (Kerala Kasavu Saree), Men (Mundu)
    - Sangeet: Women (Blood Red), Men (Black)
    - Haldi: White or Pink
    - Temple Wedding: Traditional Indian
    - Destination Wedding: Women (Maroon & Gold Saree), Men (Maroon)
    - Destination Reception (Kochi): White theme
    - Kozhikode Reception: Indian Maximalist
  `;

  return `
    You are a wedding assistant for ${COUPLE_NAMES}.
    
    DATA:
    ${eventsList}
    
    ${dressCodes}
    
    STRICT RESPONSE RULES:
    1. BE EXTREMELY CONCISE. Limit answers to 1-2 short sentences.
    2. NO flowery, royal, or poetic language. Just facts.
    3. Use bullet points if listing more than one thing.
    4. If asked about dress code, just state the color/outfit directly.
    5. If asked about RSVP, say "Please check the RSVP section below."
    
    Example Style:
    User: "When is the Sangeet?"
    You: "16th at 6:00 PM, Family Residence."
    
    User: "What do I wear for Haldi?"
    You: "White or Pink."
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
    return "Please set the API_KEY.";
  }

  try {
    const chat = chatSession || initializeChat();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Sorry, I couldn't get that.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Connection error. Please try again.";
  }
};