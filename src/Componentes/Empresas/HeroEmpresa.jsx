import React, { useState, useEffect } from 'react';

function HeroEmpresa() {
  const [backgroundImages, setBackgroundImages] = useState([
    'https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Agrega aquí las URL de las imágenes adicionales
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <section className="font-dmsans pt-12 md:pt-0 text-center">
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backgroundImages[currentImageIndex]}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-65"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-center">
            Potencia tu Marca Empleadora y  <span class="block text-blue-300 xl:inline">Transforma tu Reclutamiento </span>con Expertos en Gestión Humana
          </h1>

          <p className="text-base md:text-lg text-white mb-8 text-center px-4">
            Transforma tu proceso de reclutamiento y mejora tu imagen como empleador con nuestra metodología innovadora de atracción de talento. <br />
            Además, potencia tu marca empleadora con nuestras estrategias de Employer Branding. <br />
            Permítenos gestionar tus procesos de talento humano para que te concentres en tus objetivos estratégicos. <br />
            <h1 className="font-bold leading-tight mb-4 text-center">
              Confía en nosotros para crear una cultura organizacional atractiva y visible que te destaque frente a los demás.
            </h1>
          </p>

          <a 
            href="https://meetings.hubspot.com/winy-tupayachi-cahuana" 
            className="bg-primarycolor p-2 text-white font-semibold rounded-lg w-64 h-14 text-lg flex items-center justify-center heartbeat"
          >
            Agenda una reunión
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroEmpresa;