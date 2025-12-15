import React from 'react';
import { WEDDING_HASHTAG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-wedding-cream py-12 border-t-4 border-wedding-gold">
       <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl mb-4 text-wedding-gold">
            {WEDDING_HASHTAG}
          </h3>
          <p className="font-serif italic opacity-70 mb-8">
            Made with love, tradition, and technology.
          </p>
          <div className="text-xs text-gray-500 font-body">
             © 2024 Wedding Celebration. All rights reserved.
          </div>
       </div>
    </footer>
  );
};

export default Footer;