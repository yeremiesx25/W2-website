import React from 'react';
import logo from '../../assets/Logo Power.png';
import CardOfertaPower from './CardOfertaPower';
import gradiantPower from '../../assets/gradiantPower.svg'
import DashboardContent from '../../assets/BGPOWER.svg'
import imgSaasPower from '../../assets/imgSaasPower.png'

function HeroPower() {
  return (
    <div className='flex flex-col bg-[#003E9D] items-center justify-center w-full h-auto font-dmsans pt-28 md:pt-36 pb-12  text-gray-700 gap-6 bg-cover'
    // style={{ backgroundImage: `url(${gradiantPower})` }}
    >
        <h1 className='text-3xl md:text-6xl font-semibold mb-4 text-center px-2 animate-fade-right text-white'>
          Vive la experiencia <span className='text-yellowprimary'>Power</span> y postula <br /> con nosotros
        </h1>
        <p className='mb-4 text-center px-2 animate-fade-right w-full md:w-1/2 text-gray-200'>
        Ayudamos a personas sin empleo a obtener trabajos formales con <br /> beneficios de ley mediante nuestra metodología de atracción.
        </p>
        <div className='flex md:gap-4 flex-wrap px-4 justify-center'>
          <a href='#ofertas' className='mb-4 text-base font-semibold flex justify-center items-center bg-white  text-primarycolor px-4 py-2 rounded-full h-12 animate-fade-right'>
          Explorar Ofertas
        </a>
        <a href='#ofertas' className='mb-4 text-base font-semibold flex justify-center items-center  text-colorgreen underline px-4 py-2 rounded-full h-12 animate-fade-right'>
          ¿Cómo funciona?
        </a>
        </div>
        {/* <div className='w-[70%] h-96 bg-primarygradient rounded-lg'>
          <img className='w-96 self-end' src={imgSaasPower} alt="" />
        </div> */}
       
            <div className='w-full px-4'>
               <img src={DashboardContent} className='mx-auto' alt="" /> 
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