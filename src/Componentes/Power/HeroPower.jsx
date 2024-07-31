import React from 'react';
import logo from '../../assets/Logo Power.png';
import CardOfertaPower from './CardOfertaPower';

function HeroPower() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto font-dmsans pt-40 pb-12 text-gray-700 gap-6'>
        <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-center px-2 animate-fade-right'>
          Vive la experiencia <span className='text-primarycolor'>Power</span> y postula <br /> con nosotros
        </h1>
        <p className='mb-4 text-center px-2 animate-fade-right w-full md:w-1/2 text-gray-600'>
        Ayudamos a personas sin empleo a obtener trabajos formales con <br /> beneficios de ley mediante nuestra metodología de atracción.
        </p>
        <div className='flex gap-4 flex-wrap'>
          <a href='#ofertas' className='mb-4 text-base font-semibold flex justify-center items-center bg-primarycolor  text-white px-4 py-2 rounded-full h-12 animate-fade-right'>
          Explorar Ofertas
        </a>
        <a href='#ofertas' className='mb-4 text-base font-semibold flex justify-center items-center  text-primarycolor underline px-4 py-2 rounded-full h-12 animate-fade-right'>
          ¿Cómo funciona?
        </a>
        </div>
        
        {/* <div className='flex justify-center animate-fade-left'>
          <iframe
            className='w-[80vw] h-[50vw] md:w-[70vw] md:h-[40vw] rounded-lg bg-white mb-4'
            src="https://www.youtube.com/embed/9QvD3w3_Ga0?autoplay=1"
            title="Qué es POWER y qué queremos Lograr con la misma"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div> */}
        <div className='flex justify-center gap-4  w-full'>
          <CardOfertaPower />
          <CardOfertaPower />
          <CardOfertaPower />
        </div>
        
    </div>
  );
}

export default HeroPower;