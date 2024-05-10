import React, { useState, useEffect } from 'react';

function HeroEmpresa() {
  const [backgroundImages, setBackgroundImages] = useState([
    'https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    // Agrega aquí las URL de las imágenes adicionales
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <section className="font-dmsans">
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
          <h1 className="text-5xl font-bold leading-tight mb-4">Alcanza tus Objetivos de Gestión Humana</h1>

          <p className="text-lg text-gray-300 mb-8">
            Deja atrás el dolor del reclutamiento de personal con nuestra metodología de atracción;
            <br />
            despeja tus dudas sobre el equipo que tienes y el que ha de ingresar con una evaluación psicolaboral.
            <br />
            Pon en nuestras manos la gestión operativa de tus procesos del área de Talento Humano.
          </p>

          <a href="#" className="bg-primarycolor text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Quiero un servicio
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroEmpresa;
