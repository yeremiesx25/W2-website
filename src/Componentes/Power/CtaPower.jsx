import React from 'react';
import icon1 from '../../assets/coaches.png';

function CtaPower() {
  return (
    <div className='w-full md:my-8 mt-8 flex justify-end font-dmsans'>
      <div className='pb-8 w-full h-[540px] md:w-[80%] md:h-[400px] bg-amber-400 md:rounded-tl-[200px] md:rounded-bl-[200px] flex items-center justify-center md:gap-32 flex-wrap'>
        <img className='w-56 h-56 md:w-80 md:h-72 rounded-xl' src={icon1} alt="" />
        <div className='flex flex-col items-center w-96 h-64 justify-around'>
          <h3 className='md:text-3xl text-2xl text-white font-semibold text-center w-72 md:w-auto'>Nuestros coaches están listos para asesorarte</h3>
          <p className='text-white text-center w-72 md:w-auto'>Contamos con un equipo de profesionales expertos para ayudarte a conseguir el trabajo que deseas.</p>
          <a href="https://meetings.hubspot.com/winy-tupayachi-cahuana" target="_blank" rel="noopener noreferrer" className='w-52 h-12 bg-white rounded-xl font-semibold text-primarytext flex items-center justify-center'>Contactar con un coach</a>
        </div>
      </div>
    </div>
  );
}

export default CtaPower;