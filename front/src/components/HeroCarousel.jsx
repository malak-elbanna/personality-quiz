import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const images = [
    '/img/fear.png',
    '/img/mental-health.png',
    '/img/herohome.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
    </div>
  );
};

export default HeroCarousel;
