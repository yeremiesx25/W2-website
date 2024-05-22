import React from 'react';
import logo from '../../assets/Logo Power.png';

function HeroPower() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto font-dmsans pt-24 pb-12 text-white bg-gray-900'>
        <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-center px-2 animate-fade-right'>
          Vive la experiencia 
          <img src={logo} alt="Power" className="inline-block w-20 md:w-32" /> 
          y postula con nosotros
        </h1>
        <p className='mb-4 text-center px-2 animate-fade-right w-full md:w-1/2'>
          Ayudamos a personas sin trabajo en busca de estabilidad laboral. 
          Logren ingresar a trabajar en una empresa formal con los beneficios de ley mediante nuestra metodología de atracción incluso si no tienen CV.
        </p>
        <a href='#ofertas' className='mb-4 text-base font-semibold bg-amber-400 hover:bg-amber-600 text-white px-4 py-2 rounded-lg h-12 animate-fade-right'>
          Ver ofertas laborales
        </a>
        <div className='flex justify-center animate-fade-left'>
          <iframe
            className='w-[80vw] h-[50vw] md:w-[70vw] md:h-[40vw] rounded-lg bg-white mb-4'
            src="https://www.youtube.com/embed/9QvD3w3_Ga0?autoplay=1"
            title="Qué es POWER y qué queremos Lograr con la misma"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
}

export default HeroPower;