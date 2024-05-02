import React from 'react';
import imagehero from '../../assets/image3dhero.png';
import { motion } from "framer-motion"

function Hero() {
  return (
        <div className='w-[90%] h-[40rem] md:w-[70rem] bg-primarycolor rounded-xl mt-12 flex justify-center items-center flex-wrap p-2'>
          <h2 className='text-white font-medium text-xl md:text-2xl text-center'>Vive la experiencia del reclutamiento</h2>
          <img src={imagehero} alt="" />
        </div>  
  );
}

export default Hero;
