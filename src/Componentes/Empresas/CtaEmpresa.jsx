import React from 'react';
import aser from '../../assets/asesora.png'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function CtaEmpresa() {

  const [text] = useTypewriter({
    words: ['necesita.', 'busca.', 'requiere.'],
    loop: {},
    typeSpeed: 120,
});

  return (
    <div className="bg-primarycolor text-white pt-20 font-dmsans my-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold leading-tight mb-16">Encontramos el talento que tu empresa <span>{text}</span><Cursor /> </h1>
            <a href="#" className="bg-white text-gray-900 py-3 px-6 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-200 inline-block mb-4"> 
              Contactar con un asesor   
            </a>
          </div>
          <div className="lg:w-1/3 order-first h-full flex items-end">
            <img
              src= { aser }
              alt="Tailwind CSS"
              className="transition duration-200 w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaEmpresa;