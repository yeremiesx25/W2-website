import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import cw2_1 from '../../assets/coworking/cw2_1.jpg';
import cw2_2 from '../../assets/coworking/Estrategia.jpeg';
import cw2_3 from '../../assets/coworking/Herradura.jpeg';

const HeroCoworking = () => {
  const images = [cw2_1, cw2_2, cw2_3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500); // La duración de la transición debe ser la mitad del intervalo para que termine antes de que cambie la imagen
    }, 2000); // Cambia la imagen cada 2 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen p-8 bg-white md:px-20 font-dmsans pt-20">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-4 md:space-y-6 md:px-16">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
          Bienvenido <br />
          a nuestro <span className="underline decoration-yellowprimary text-primarycolor">Coworking</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-600">
          Desata tu potencial en nuestros espacios de trabajo diseñados cuidadosamente para inspirar creatividad y fomentar conexiones.
        </p>
        <a href='#reserva' className="bg-primarycolor text-white py-2 px-4 md:px-6 rounded-full font-semibold">
          Reserva Ahora
        </a>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Coworking Space ${index}`}
            className={`absolute w-full h-auto rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isFading ? '0ms' : '500ms' }}
          />
        ))}
        <div
          className="absolute bottom-0 left-0 h-0 bg-primarycolor transition-all duration-2000 ease-linear"
          style={{ width: `${(currentImageIndex + 1) * 33.33}%` }}
        />
      </div>
    </div>
  );
};

export default HeroCoworking;
