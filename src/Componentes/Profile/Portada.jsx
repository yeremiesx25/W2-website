import React, { useState } from 'react';

function Portada() {
  const images = [
    'https://a-static.besthdwallpaper.com/firewatch-video-game-sunrise-in-mountains-wallpaper-2048x576-23989_71.jpg',
    'https://wallpaper.dog/large/20559813.jpg',
    'https://a-static.besthdwallpaper.com/play-firewatch-wallpaper-2048x576-30052_71.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className='w-full relative h-40'>
      <img 
        src={images[currentImageIndex]} 
        alt="Portada" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <button 
        onClick={handleImageChange} 
        style={{
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          background: 'rgba(0, 0, 0, 0.5)', 
          color: 'white', 
          border: 'none', 
          borderRadius: '50%', 
          width: '30px', 
          height: '30px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          cursor: 'pointer'
        }}
      >
        ⇆
      </button>
    </div>
  );
}

export default Portada;
