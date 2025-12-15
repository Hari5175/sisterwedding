import { WeddingEvent, EventType } from './types';

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: '1',
    date: '15th',
    title: 'Anugraham',
    description: 'Seeking divine blessings to start the auspicious journey. A traditional ceremony invoking grace and harmony.',
    time: '09:00 AM',
    location: 'Family Residence, Kozhikode',
    type: EventType.CEREMONY,
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    date: '16th',
    title: 'Sangeet',
    description: 'A night of music, dance, and celebration. Bring your dancing shoes and join us for a colorful evening of joy.',
    time: '06:00 PM',
    location: 'Family Residence, Kozhikode',
    type: EventType.PARTY,
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    date: '18th',
    title: 'Haldi',
    description: 'The yellow hue of love. A playful morning of turmeric application to bless the couple with a glowing future.',
    time: '10:00 AM',
    location: 'Kochi',
    type: EventType.TRADITION,
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    date: '19th',
    title: 'Temple Wedding',
    description: 'The sacred union under the blessings of the Almighty. A traditional ceremony at the ancient temple.',
    time: '09:30 AM',
    location: 'Thrikkakkara Vamana Moorthy Temple, Kochi',
    type: EventType.CEREMONY,
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: '5',
    date: '19th',
    title: 'The Destination Wedding',
    description: 'The Royal Vows. A grand, maximalist ceremony amidst the island beauty, celebrating our union in royal style.',
    time: '04:30 PM',
    location: 'Bolgatty Palace and Island Resort, Kochi',
    type: EventType.CEREMONY,
    image: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: '5b',
    date: '19th',
    title: 'Destination Reception',
    description: 'A magical evening of feasting and toasts. Join us for a royal dinner at the palace resort.',
    time: '07:00 PM',
    location: 'Bolgatty Palace and Island Resort, Kochi',
    type: EventType.PARTY,
    image: 'https://picsum.photos/800/600?random=7'
  },
  {
    id: '6',
    date: '25th',
    title: 'Kozhikode Reception',
    description: 'The final flourish. A formal reception to thank our guests and celebrate the beginning of our forever.',
    time: '07:00 PM',
    location: 'HOTEL MONAD, Kozhikode',
    type: EventType.PARTY,
    image: 'https://picsum.photos/800/600?random=6'
  }
];

export const COUPLE_NAMES = "Arjun & Isha";
export const WEDDING_HASHTAG = "#ArjunIshaForever";