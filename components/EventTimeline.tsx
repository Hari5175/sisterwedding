import React, { useState, useRef } from 'react';
import { WEDDING_EVENTS } from '../constants';
import { EventType } from '../types';

const EventTimeline: React.FC = () => {
  const [events, setEvents] = useState(WEDDING_EVENTS);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleImageClick = (id: string) => {
    setEditingId(id);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingId) {
      const imageUrl = URL.createObjectURL(file);
      setEvents(prev => prev.map(ev => 
        ev.id === editingId ? { ...ev, image: imageUrl } : ev
      ));
    }
    // Reset the input so the same file can be selected again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="events" className="py-24 bg-wedding-red relative overflow-hidden">
      {/* Background Mandala overlay */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      {/* NEW: Decorative Hanging Toran (Top) */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
          <svg className="w-full h-16 md:h-24 drop-shadow-xl" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M0,0 C150,60 300,60 450,0 C600,60 750,60 900,0 C1050,60 1200,60 1350,0 V40 H0 Z" fill="#D4AF37" />
             <circle cx="225" cy="40" r="8" fill="#8B0000" />
             <circle cx="675" cy="40" r="8" fill="#8B0000" />
             <circle cx="1125" cy="40" r="8" fill="#8B0000" />
          </svg>
      </div>
      
      {/* NEW: Marigold Garlands (Left & Right) */}
      <div className="absolute top-0 bottom-0 left-2 md:left-6 w-8 z-10 flex flex-col items-center overflow-hidden opacity-90 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
             <div key={`flower-l-${i}`} className={`w-4 h-4 md:w-6 md:h-6 rounded-full mb-1 shadow-md border border-red-900 ${i % 2 === 0 ? 'bg-orange-500' : 'bg-yellow-400'}`}></div>
          ))}
      </div>
      <div className="absolute top-0 bottom-0 right-2 md:right-6 w-8 z-10 flex flex-col items-center overflow-hidden opacity-90 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
             <div key={`flower-r-${i}`} className={`w-4 h-4 md:w-6 md:h-6 rounded-full mb-1 shadow-md border border-red-900 ${i % 2 === 0 ? 'bg-orange-500' : 'bg-yellow-400'}`}></div>
          ))}
      </div>

      {/* NEW: Temple Arch Overlay (Faint Background) */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
         <svg viewBox="0 0 500 500" className="w-full h-full max-w-4xl text-wedding-gold fill-current">
            <path d="M250,50 C150,150 50,250 50,500 L450,500 C450,250 350,150 250,50 Z" />
         </svg>
      </div>

      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* Floating Paisleys */}
      <div className="absolute top-10 left-10 text-9xl text-wedding-gold opacity-10 animate-float pointer-events-none">❧</div>
      <div className="absolute top-1/2 right-10 text-9xl text-wedding-gold opacity-10 animate-float-delayed pointer-events-none">❧</div>
      <div className="absolute bottom-20 left-20 text-9xl text-wedding-gold opacity-10 animate-float pointer-events-none">❧</div>
      
      {/* NEW: Decorative Peacock Feathers */}
      <div className="absolute top-[15%] right-[10%] text-6xl opacity-20 rotate-45 pointer-events-none animate-pulse">🪶</div>
      <div className="absolute bottom-[20%] left-[5%] text-6xl opacity-20 -rotate-45 pointer-events-none animate-pulse">🪶</div>

      {/* NEW: Decorative Props - Floating Diyas */}
      <div className="absolute top-1/3 left-4 text-4xl animate-bounce duration-[3000ms] z-10 opacity-60">🪔</div>
      <div className="absolute top-2/3 right-4 text-4xl animate-bounce duration-[4000ms] z-10 opacity-60">🪔</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative">
          <span className="text-6xl text-wedding-gold opacity-50 absolute top-[-40px] left-1/2 transform -translate-x-1/2 animate-spin-slow">☸</span>
          <h2 className="font-display text-5xl md:text-7xl text-wedding-cream mb-6 drop-shadow-md relative z-10">
            The Royal Itinerary
          </h2>
          <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-1 w-24 bg-wedding-gold"></div>
              <div className="text-2xl text-wedding-gold">⚜</div>
              <div className="h-1 w-24 bg-wedding-gold"></div>
          </div>
          <p className="text-wedding-paper font-serif text-xl max-w-2xl mx-auto mb-12">
            A celebration of love, tradition, and togetherness. Join us as we embark on this beautiful journey.
          </p>

          {/* NEW: Bride & Groom Photos */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 mb-16">
              {/* Groom */}
              <div className="relative group text-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute -inset-2 bg-wedding-gold/30 rounded-full blur-xl group-hover:bg-wedding-gold/50 transition-colors"></div>
                  <div className="w-56 h-56 rounded-full border-4 border-wedding-gold p-1 bg-white relative z-10 overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      <img 
                          src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=600&auto=format&fit=crop" 
                          alt="Arjun - The Groom" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                  </div>
                  <div className="mt-6 relative">
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-4xl text-wedding-gold drop-shadow-lg">👳🏾‍♂️</div>
                      <h3 className="font-display text-4xl text-wedding-gold mt-2 drop-shadow-sm">Arjun</h3>
                      <p className="font-serif text-wedding-cream/90 italic tracking-wider">The Groom</p>
                  </div>
              </div>

              {/* Decorative Divider */}
              <div className="flex flex-col items-center gap-2 text-wedding-gold/80">
                  <span className="text-3xl">❦</span>
                  <span className="h-16 w-[2px] bg-gradient-to-b from-transparent via-wedding-gold to-transparent"></span>
                  <span className="text-3xl">❦</span>
              </div>

              {/* Bride */}
              <div className="relative group text-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute -inset-2 bg-wedding-gold/30 rounded-full blur-xl group-hover:bg-wedding-gold/50 transition-colors"></div>
                  <div className="w-56 h-56 rounded-full border-4 border-wedding-gold p-1 bg-white relative z-10 overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      <img 
                          src="https://images.unsplash.com/photo-1616165415772-2244bbbf45d8?q=80&w=600&auto=format&fit=crop" 
                          alt="Isha - The Bride" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                  </div>
                  <div className="mt-6 relative">
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-4xl text-wedding-gold drop-shadow-lg">👰🏾‍♀️</div>
                      <h3 className="font-display text-4xl text-wedding-gold mt-2 drop-shadow-sm">Isha</h3>
                      <p className="font-serif text-wedding-cream/90 italic tracking-wider">The Bride</p>
                  </div>
              </div>
          </div>
          
          {/* Kalash Prop */}
          <div className="flex justify-center mb-8">
              <div className="text-6xl text-wedding-gold animate-pulse" title="Kalash - Symbol of abundance">🍯</div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-wedding-gold to-transparent transform -translate-x-1/2 md:translate-x-0 opacity-60"></div>

          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`mb-16 flex flex-col md:flex-row items-center justify-between w-full relative group ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="order-1 w-full md:w-5/12"></div>
              
              {/* Date Bubble */}
              <div className="z-20 order-1 flex items-center justify-center bg-wedding-cream shadow-[0_0_20px_rgba(212,175,55,0.6)] w-16 h-16 rounded-full border-4 border-wedding-gold absolute left-1 md:left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-125">
                 <div className="text-center">
                    <span className="block text-wedding-red font-bold text-xs font-display leading-none">{event.date.replace(/[^0-9]/g, '')}</span>
                    <span className="block text-wedding-red font-bold text-[0.6rem] uppercase">{event.date.replace(/[0-9]/g, '')}</span>
                 </div>
              </div>
              
              <div className="order-1 w-full md:w-5/12 pl-12 md:pl-0">
                <div 
                  className={`bg-wedding-cream p-1 rounded-lg shadow-2xl transform transition-all duration-500 hover:-translate-y-2 relative overflow-visible
                    ${index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'}
                  `}
                >
                    {/* Inner Border Container */}
                    <div className="bg-wedding-paper border-2 border-wedding-gold p-6 rounded relative overflow-hidden h-full">
                        
                        {/* Sticker Decoration based on type */}
                        <div className="absolute -right-6 -top-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                            {event.type === EventType.CEREMONY ? '🔥' : event.type === EventType.PARTY ? '💃' : '🥥'}
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="inline-block px-3 py-1 bg-wedding-red text-wedding-gold text-xs font-bold tracking-widest uppercase border border-wedding-gold">
                                    {event.type}
                                </span>
                                <span className="text-2xl text-wedding-red animate-pulse">
                                  {index % 2 === 0 ? '🦚' : '🐘'}
                                </span>
                            </div>

                            {/* Image Section with Upload */}
                            <div 
                              className="relative mb-5 group/image cursor-pointer overflow-hidden rounded border border-wedding-gold shadow-inner"
                              onClick={() => handleImageClick(event.id)}
                            >
                                <img 
                                  src={event.image} 
                                  alt={event.title} 
                                  className="w-full h-48 object-cover transform group-hover/image:scale-105 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover/image:bg-black/40 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 text-wedding-red px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 transform translate-y-4 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100 transition-all duration-300">
                                        <span>📷</span> Change Photo
                                    </div>
                                </div>
                            </div>
                            
                            <h3 className="font-display text-2xl md:text-3xl text-wedding-red mb-3 border-b border-wedding-gold pb-2 inline-block">
                              {event.title}
                            </h3>
                            
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center text-gray-700 text-sm font-bold tracking-wide">
                                     <span className="w-6 text-center mr-2 text-xl">🕒</span>
                                     {event.time}
                                </div>
                                <div className="flex items-center text-gray-700 text-sm font-bold tracking-wide">
                                    <span className="w-6 text-center mr-2 text-xl">📍</span>
                                    {event.location}
                                </div>
                            </div>
                            
                            <p className="text-gray-600 font-serif italic leading-relaxed text-sm md:text-base bg-white/50 p-3 rounded border-l-4 border-wedding-red">
                                {event.description}
                            </p>
                            
                            {/* Interactive Hover Reveal */}
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
                                <span className="text-wedding-red text-sm font-bold cursor-pointer hover:underline flex items-center gap-1">
                                    Add to Calendar <span>➝</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Bottom Decoration */}
          <div className="text-center mt-12 text-wedding-gold text-4xl animate-bounce">
              ❦
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;