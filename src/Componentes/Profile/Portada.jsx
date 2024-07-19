import React, { useState, useEffect } from 'react';
import { BsImages } from "react-icons/bs";

function Portada() {
  const images = [
    'https://wallpaperaccess.com/full/1145386.jpg',
    'https://wallpaper.dog/large/20559813.jpg',
    'https://a-static.besthdwallpaper.com/play-firewatch-wallpaper-2048x576-30052_71.jpg',
    'https://wallpaperaccess.com/full/846628.jpg',
    'https://wallpaperaccess.com/full/160352.png',
    'https://wallpaperaccess.com/full/1216348.jpg',
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(() => {
    const savedIndex = localStorage.getItem('currentImageIndex');
    return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
  });
  const [fade, setFade] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('currentImageIndex', currentImageIndex);
  }, [currentImageIndex]);

  const handleImageChange = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(false);
      setMenuOpen(false);
    }, 500);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full relative h-28 hidden md:block bg-primarytext bg-cover bg-center'>
      <img 
        className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
        src={images[currentImageIndex]} 
        alt="Portada" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <button 
        onClick={toggleMenu} 
        style={{
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          background: 'rgba(0, 0, 0, 0.5)', 
          color: 'white', 
          border: 'none', 
          borderRadius: '50%', 
          width: '40px', 
          height: '40px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          cursor: 'pointer'
        }}
      >
        <BsImages size={20} />
      </button>
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '50px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '5px',
          padding: '10px',
          color: 'white'
        }}>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              style={{
                background: `url(${image}) no-repeat center center`,
                backgroundSize: 'cover',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '5px',
                width: '60px',
                height: '40px',
                display: 'block',
                color: 'white'
              }}
            >
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Portada;
