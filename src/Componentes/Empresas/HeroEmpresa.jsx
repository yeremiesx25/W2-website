import React, { useState, useEffect } from 'react';

function HeroEmpresa() {
  const [backgroundImages, setBackgroundImages] = useState([
    'https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-left">
          <h1 className="text-5xl font-bold leading-tight mb-4 text-center">Alcanza tus Objetivos de <br></br> Gestión Humana</h1>

          <p className="text-lg text-white mb-8 text-center">
            Deja atrás el dolor del reclutamiento de personal con nuestra metodología de atracción;
            <br />
            despeja tus dudas sobre el equipo que tienes y el que ha de ingresar con una evaluación psicolaboral.
            <br />
            Pon en nuestras manos la gestión operativa de tus procesos del área de Talento Humano.
          </p>

          <a href="#" className="bg-primarycolor text-white py-2 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Quiero un servicio
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroEmpresa;
