import React from 'react';
import logo from '../../assets/Logo Power.png';
import CardOfertaPower from './CardOfertaPower';
import gradiantPower from '../../assets/gradiantPower.svg'
import heroPowerImg from '../../assets/heroPowerImg.svg'
import imgSaasPower from '../../assets/imgSaasPower.png'

function HeroPower() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto font-dmsans pt-28 md:pt-40 pb-12  text-gray-700 gap-6 bg-cover'
    style={{ backgroundImage: `url(${gradiantPower})` }}>
        <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-center px-2 animate-fade-right'>
          Vive la experiencia <span className='text-primarycolor'>Power</span> y postula <br /> con nosotros
        </h1>
        <p className='mb-4 text-center px-2 animate-fade-right w-full md:w-1/2 text-gray-600'>
        Ayudamos a personas sin empleo a obtener trabajos formales con <br /> beneficios de ley mediante nuestra metodología de atracción.
        </p>
        <div className='flex md:gap-4 flex-wrap px-4 justify-center'>
          <a href='#ofertas' className='mb-4 text-base font-semibold flex justify-center items-center bg-primarycolor  text-white px-4 py-2 rounded-full h-12 animate-fade-right'>
          Explorar Ofertas
        </a>
        <a href='#ofertas' className='mb-4 text-base font-semibold flex justify-center items-center  text-colorgreen underline px-4 py-2 rounded-full h-12 animate-fade-right'>
          ¿Cómo funciona?
        </a>
        </div>
        {/* <div className='w-[70%] h-96 bg-primarygradient rounded-lg'>
          <img className='w-96 self-end' src={imgSaasPower} alt="" />
        </div> */}
        <div class="w-full mx-auto  text-center md:w-10/12 px-2">
            <div class="relative z-0 w-full">
                <div class="relative overflow-hidden shadow-2xl">
                    <div class="flex items-center flex-none px-4 bg-yellowprimary rounded-b-none h-11 rounded-xl">
                        <div class="flex space-x-1.5">
                            <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <img className='w-full' src="https://cdn-blog.novoresume.com/articles/job-search-sites/indeed-job-search.png"/>
                </div>
            </div>
        </div>
        <div className='flex justify-center animate-fade-left'>
          
          {/* <iframe
            className='w-[80vw] h-[50vw] md:w-[70vw] md:h-[40vw] rounded-lg bg-white mb-4'
            src="https://www.youtube.com/embed/9QvD3w3_Ga0?autoplay=1"
            title="Qué es POWER y qué queremos Lograr con la misma"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
        </div>

        
    </div>
  );
}

export default HeroPower;