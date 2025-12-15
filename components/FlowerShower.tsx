import React, { useCallback, useEffect } from 'react';

const FlowerShower: React.FC = () => {
  const triggerFlowers = useCallback(() => {
    const colors = ['#8B0000', '#DC143C', '#D4AF37', '#FFC0CB'];
    
    for (let i = 0; i < 50; i++) {
      const petal = document.createElement('div');
      petal.classList.add('petal');
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
      petal.style.width = `${Math.random() * 15 + 10}px`;
      petal.style.height = petal.style.width;
      
      document.body.appendChild(petal);
      
      setTimeout(() => {
        petal.remove();
      }, 5000);
    }
  }, []);

  // Trigger flowers automatically when component mounts (website loads)
  useEffect(() => {
    triggerFlowers();
  }, [triggerFlowers]);

  return (
    <button
      onClick={triggerFlowers}
      className="fixed bottom-24 right-6 z-40 bg-wedding-gold text-wedding-red w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 border-2 border-wedding-red"
      title="Shower Blessings"
    >
      <span className="text-xl">🌸</span>
    </button>
  );
};

export default FlowerShower;