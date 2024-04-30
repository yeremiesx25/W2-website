import React from 'react';
import imagehero from '../../assets/image3dhero.png';
import { motion } from "framer-motion"

function Hero() {
  return (
        <div className='bg-secundarycolor rounded-xl flex justify-center items-center flex-wrap-reverse md:w-3/4 p-4 mr-2 ml-2 self-center' style={{ maxWidth: '1000px', minHeight: '437px' }}>
            <div className='w-full md:w-3/4 lg:w-1/2 h-full flex items-center justify-center flex-col'>
                {/* Texto con ajustes responsivos */}
                        <motion.h2 
                        whileHover={{ scale: 1.2 }}
                        className='text-white text-3xl md:text-5xl font-semibold text-center md:text-center md:w-96 mb-4'>Vive La Experiencia Del Reclutamiento</motion.h2>
                {/* Botón con ajustes responsivos */}
                <motion.button 
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                style={{ animation: 'fade-in 2s ease-in' }}
                className='w-28 md:w-40 h-10 md:h-12 bg-white text-primarycolor font-semibold rounded-xl mb-4 mt-4'>Empezar</motion.button>
            </div>
            <motion.div  
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className='w-full md:w-1/4 lg:w-1/2 h-full flex items-center justify-center'>
                {/* Imagen con ajustes responsivos */}
                <img src={imagehero} alt="" className='w-48 md:w-76 h-auto' />
            </motion.div>
        <div className='w-[90%] h-[40rem] md:w-[70rem] bg-primarycolor rounded-xl mt-12 flex justify-center items-center flex-wrap p-2'>
          <h2 className='text-white font-medium text-xl md:text-2xl text-center'>Vive la experiencia del reclutamiento</h2>
          <img src={imagehero} alt="" />
        </div>
        </div>
  );
}

export default Hero;
