import React, { useState, useEffect } from 'react';
import cw2_1 from '../../assets/coworking/cw2_1.jpg'
import cw2_2 from '../../assets/coworking/Estrategia.jpeg'
import cw2_3 from '../../assets/coworking/Colegio.jpeg'



const HeroCoworking = () => {
  const slides = [
    { id: 1, content: '', img: cw2_1 },
    { id: 2, content: '', img: cw2_2 },
    { id: 3, content: '', img: cw2_3},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar de slide automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div class=" pt-20 font-dmsans">
    <div class=" mx-auto px-4 md:px-12">
        <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="md:w-1/2 w-full">
                <h1 class="text-center md:text-left text-4xl md:text-6xl lg:text-6xl text-gray-800 font-bold mb-6 ">
                    
                    <span class="text-primarycolor">Oficinas Compartidas</span> en San Juan de Lurigancho
                </h1>
                <p class="text-center md:text-left text-lg md:text-lg text-gray-600 mb-8 md:pr-8">
                Descubre cómo una oficina compartida puede transformar tu forma de trabajar. Ofrecemos un entorno dinámico y profesional que favorece la colaboración y la eficiencia.
                </p>
                <div class="flex justify-center md:justify-start">
                <a href="#info-section" className="bg-primarycolor hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">
                        Reserva tu espacio ahora
                    </a>
                </div>
            </div>
            <div class="w-full md:w-1/2 md:p-10">
                <div className='w-full'>
    <div className="relative w-full h-96 overflow-hidden bg-gray-200 rounded-xl">
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prevSlide} className="bg-white p-3 rounded-full shadow-md">
          &#8592;
        </button>
        <button onClick={nextSlide} className="bg-white p-3 rounded-full shadow-md">
          &#8594;
        </button>
      </div>
      <div className="w-full h-full flex transition-transform duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-0">
              <h2 className="text-white text-4xl">{slide.content}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
    </div>
            </div>
        </div>
    </div>
</div>
    
  );
};

export default HeroCoworking;
