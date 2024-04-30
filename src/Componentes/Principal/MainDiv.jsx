import React from 'react'
import fondo from '../../assets/gradiantFondo.png'
import { motion } from "framer-motion"
import Hero from './Hero'
import arrow from '../../assets/flechas-a-la-derecha.png'


function MainDiv() {
  return (
    <section style={{backgroundImage: `url(${fondo})`, height: '924px' }}
    className="pt-24 bg-white sm:pt-24 font-dmsans flex flex-col items-center bg-no-repeat bg-cover">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <p
                className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-primarytext sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                <span className='text-primarycolor'>Potenciamos talentos,</span> impulsamos resultados
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-primarytext font-inter">
            Potenciamos tu éxito empresarial con soluciones de gestión humana y tecnología de vanguardia, incluso sin un departamento de recursos humanos.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <button href="#" title=""
                    className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-primarycolor border-2 border-transparent sm:w-auto rounded-xl hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    role="button">
                    Conseguir talento <span className='flex items-center justify-center bg-no-repeat ml-2'
                     style={{backgroundImage: `url(${arrow})`,width:'30px', height:'20px' }}></span>    
                </button>
                <button href="#"
                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-primarytext transition-all duration-200 hover:bg-gray-50 sm:w-auto rounded-xl"
                    >Aprender más</button>
            </div>
        </div>
        </div>
    <div style={{ minHeight: '740px', backgroundImage:`url(${fondo})`}}
    className='flex items-center justify-center bg-no-repeat text-center flex-col font-dmsans bg-cover pt-24'>
      <h2 
  style={{ animation: 'fade-in 1s ease-in' }}
  className='text-5xl md:text-6xl font-bold text-primarycolor text-center'>Potenciamos talentos </h2>
<h1 
  style={{ animation: 'fade-in 1.5s ease-in' }}
  className='text-5xl md:text-6xl font-bold text-primarytext text-center'>Impulsamos resultados</h1>

      <p
      style={{ animation: 'fade-in 2s ease-in', maxWidth: '600px' }}
      className='font-regular text-gray-700 text-xl  p-4'
      >Potenciamos tu éxito empresarial con soluciones de gestión humana y tecnología de vanguardia, incluso sin un departamento de recursos humanos.</p>
      <div className='flex flex-wrap justify-center'>
        <motion.button 
         whileHover={{ scale: 1.1 }}
         onHoverStart={e => {}}
         onHoverEnd={e => {}}
        style={{ animation: 'fade-in 1.5s ease-in' }}
        className='w-40 h-12 bg-primarycolor rounded-xl text-white font-semibold hover:bg-white hover:border-2 hover:border-primarycolor hover:text-primarycolor transition-colors duration-500 mb-4 mr-2 ml-2'>
          Conseguir talento
        </motion.button>
        <motion.button 
        whileHover={{ scale: 1.1 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        style={{ animation: 'fade-in 2s ease-in' }}
        className='w-40 h-12  text-primarytext font-semibold rounded-xl  hover:bg-gray-100  transition-colors duration-500 mr-2 ml-2 mb-8'>Empezar</motion.button>
      </div>
    </div>
    <Hero />
</section>
  )
}

export default MainDiv;