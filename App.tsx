import React from 'react';
import Hero from './components/Hero';
import EventTimeline from './components/EventTimeline';
import RSVP from './components/RSVP';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import FlowerShower from './components/FlowerShower';

function App() {
  return (
    <div className="min-h-screen bg-wedding-paper">
      <Hero />
      <EventTimeline />
      <RSVP />
      <Footer />
      <ChatWidget />
      <FlowerShower />
    </div>
  );
}

export default App;