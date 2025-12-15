import React from 'react';
import { COUPLE_NAMES, WEDDING_HASHTAG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wedding-paper">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-15 bg-mandala-pattern pointer-events-none"></div>
      
      {/* MAXIMALIST DECORATIONS */}
      
      {/* Hanging Bells (Left & Right) */}
      <div className="absolute top-0 left-10 md:left-24 hidden md:block animate-sway origin-top">
         <svg width="60" height="200" viewBox="0 0 60 200" className="drop-shadow-lg">
             <line x1="30" y1="0" x2="30" y2="150" stroke="#D4AF37" strokeWidth="2" />
             <circle cx="30" cy="150" r="5" fill="#8B0000" />
             <path d="M15,150 Q30,190 45,150 L15,150" fill="#D4AF37" />
             <circle cx="30" cy="180" r="3" fill="#8B0000" />
         </svg>
      </div>
      <div className="absolute top-0 right-10 md:right-24 hidden md:block animate-sway origin-top" style={{ animationDelay: '1s' }}>
         <svg width="60" height="180" viewBox="0 0 60 200" className="drop-shadow-lg">
             <line x1="30" y1="0" x2="30" y2="130" stroke="#D4AF37" strokeWidth="2" />
             <circle cx="30" cy="130" r="5" fill="#8B0000" />
             <path d="M15,130 Q30,170 45,130 L15,130" fill="#D4AF37" />
             <circle cx="30" cy="160" r="3" fill="#8B0000" />
         </svg>
      </div>

      {/* Floating Elephants */}
      <div className="absolute top-1/4 left-5 md:left-20 opacity-20 md:opacity-80 animate-float w-24 md:w-40 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="#8B0000">
           <path d="M80,60 C80,50 70,30 50,30 C30,30 20,50 20,60 L20,80 L30,80 L30,70 L40,70 L40,80 L60,80 L60,70 L70,70 L70,80 L80,80 Z M80,60 Q90,50 95,65" stroke="#D4AF37" strokeWidth="2" />
           <circle cx="35" cy="45" r="2" fill="#D4AF37" />
           <path d="M50,30 L50,80" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-5 md:right-20 opacity-20 md:opacity-80 animate-float-delayed w-24 md:w-40 pointer-events-none transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="#8B0000">
           <path d="M80,60 C80,50 70,30 50,30 C30,30 20,50 20,60 L20,80 L30,80 L30,70 L40,70 L40,80 L60,80 L60,70 L70,70 L70,80 L80,80 Z M80,60 Q90,50 95,65" stroke="#D4AF37" strokeWidth="2" />
           <circle cx="35" cy="45" r="2" fill="#D4AF37" />
           <path d="M50,30 L50,80" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 border-l-8 border-t-8 border-wedding-red rounded-tl-3xl opacity-80 z-20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 border-r-8 border-t-8 border-wedding-red rounded-tr-3xl opacity-80 z-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 border-l-8 border-b-8 border-wedding-red rounded-bl-3xl opacity-80 z-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 border-r-8 border-b-8 border-wedding-red rounded-br-3xl opacity-80 z-20"></div>
      
      {/* Corner Mandalas */}
      <div className="absolute top-4 left-4 text-6xl text-wedding-gold opacity-50 animate-spin-slow origin-center z-10">☸</div>
      <div className="absolute bottom-4 right-4 text-6xl text-wedding-gold opacity-50 animate-spin-slow origin-center z-10">☸</div>

      {/* Main Content */}
      <div className="z-30 text-center px-4 max-w-4xl mx-auto relative">
        <div className="mb-6 animate-fade-in-down">
          <span className="block text-wedding-red tracking-[0.3em] font-serif uppercase text-sm md:text-lg mb-4 font-bold">
            || Shree Ganeshay Namah ||
          </span>
          <div className="relative inline-block group cursor-pointer">
              <div className="absolute inset-0 bg-wedding-gold rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <img 
                src="https://picsum.photos/100/100?grayscale" 
                alt="Ganesha" 
                className="relative z-10 w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full border-4 border-wedding-gold p-1 mb-4 shadow-2xl"
              />
          </div>
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl text-wedding-red mb-6 drop-shadow-sm leading-tight">
          {COUPLE_NAMES.split('&')[0]} <br/> 
          <span className="text-wedding-gold text-4xl md:text-7xl font-script relative">
             <span className="absolute -top-4 -left-8 text-3xl animate-pulse">✨</span>
             &
             <span className="absolute -bottom-4 -right-8 text-3xl animate-pulse delay-100">✨</span>
          </span> <br/>
          {COUPLE_NAMES.split('&')[1]}
        </h1>

        <div className="flex items-center justify-center gap-4 text-wedding-gold font-serif text-xl md:text-2xl mb-8">
          <span className="h-[2px] w-12 bg-wedding-red"></span>
          <span className="text-wedding-red font-bold mx-2">♦</span>
          <span className="tracking-widest font-bold text-wedding-red">APRIL 2026</span>
          <span className="text-wedding-red font-bold mx-2">♦</span>
          <span className="h-[2px] w-12 bg-wedding-red"></span>
        </div>

        <p className="font-serif text-gray-800 italic text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          "Two souls with but a single thought,<br/> two hearts that beat as one."
        </p>

        <a 
          href="#events" 
          className="group relative inline-block px-12 py-5 bg-wedding-red text-white font-bold tracking-[0.2em] transition-all duration-300 uppercase text-sm md:text-base hover:scale-105 shadow-xl overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-wedding-gold to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          <span className="relative z-10 flex items-center gap-2">
            <span>⚜</span> View Celebrations <span>⚜</span>
          </span>
        </a>
        
        <div className="mt-12 text-wedding-red font-display text-lg tracking-widest opacity-80">
          {WEDDING_HASHTAG}
        </div>
      </div>
    </section>
  );
};

export default Hero;