import React from 'react'
import imgempresas from '../../assets/Designer-rafiki.png'
import imgpostulantes from '../../assets/Programming-rafiki.png'
import imgpracticantes from '../../assets/Notes-rafiki.png'
import { motion } from "framer-motion"


function Dirigido() {
  return (
    <div className='w-full flex flex-col items-center justify-center h-auto p-12 pt-8 font-dmsans text-white'
     >
        <h2 className='text-2xl mb-8 font-semibold text-primarytext'>
            ¿A quiénes está dirigido?
        </h2>
        <div className='w-96 md:w-5/6 h-auto flex flex-wrap justify-around'>
            <motion.div 
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: .2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className='bg-primarytext rounded-lg flex flex-col items-center justify-center text-center mb-4'
            style={{width:'300px', height: '400px'}}>
                <img src={imgempresas} alt="" />
                <h4 className='font-semibold text-xl mt-2 mb-2'>Empresas</h4>
                <p className='font-regular text-sm w-48'>Contribuir a la formación de valores en niños de diversos sectores del país.</p>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                style={{ animation: 'fade-in 2s ease-in' }}
                className='w-28 md:w-32 h-10 md:h-8 bg-white text-primarytext font-semibold rounded-md mb-4 mt-4'>Ver más</motion.button>
            </motion.div>
            <motion.div 
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: .2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className='bg-secundarycolor rounded-lg flex flex-col items-center justify-center text-center mb-4'
            style={{width:'300px', height: '400px'}}>
                <img src={imgpostulantes} alt="" />
                <h4 className='font-semibold text-xl mt-2 mb-2'>Postulantes</h4>
                <p className='font-regular text-sm w-48'>Contribuir a la formación de valores en niños de diversos sectores del país.</p>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                style={{ animation: 'fade-in 2s ease-in' }}
                className='w-28 md:w-32 h-10 md:h-8 bg-white text-primarytext font-semibold rounded-md mb-4 mt-4'>Ver más</motion.button>
            </motion.div>
            <motion.div 
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: .2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className='bg-colorgreen rounded-lg flex flex-col items-center justify-center text-center mb-4'
            style={{width:'300px', height: '400px'}}>
                <img src={imgpracticantes} alt="" />
                <h4 className='font-semibold text-xl mt-2 mb-2'>Practicantes</h4>
                <p className='font-regular text-sm w-48'>Contribuir a la formación de valores en niños de diversos sectores del país.</p>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                style={{ animation: 'fade-in 2s ease-in' }}
                className='w-28 md:w-32 h-10 md:h-8 bg-white text-primarytext font-semibold rounded-md mb-4 mt-4'>Ver más</motion.button>
            </motion.div>
        </div>
    </div>
  )
}

export default Dirigido