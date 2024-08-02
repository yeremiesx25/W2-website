// HeroCoworking.jsx
import React from 'react';
import 'tailwindcss/tailwind.css';
import cw2_1 from '../../assets/coworking/cw2_1.jpg'

const HeroCoworking = () => {
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
        <button className="bg-primarycolor text-white py-2 px-4 md:px-6 rounded-full font-semibold">
           Reserva Ahora
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img src={cw2_1} alt="Coworking Space" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default HeroCoworking;
