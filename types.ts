export enum EventType {
  CEREMONY = 'CEREMONY',
  PARTY = 'PARTY',
  TRADITION = 'TRADITION'
}

export interface WeddingEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  time: string;
  location: string;
  type: EventType;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface RSVPData {
  name: string;
  email: string;
  attending: string; // 'yes' | 'no' | 'maybe'
  guests: number;
  dietaryRestrictions: string;
}