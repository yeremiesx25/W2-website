import React from 'react'
import Fondo from '../assets/FondoBanner.png'
import Fondo2 from '../assets/FondoBanner2.png'
import Header from './Header'
import MainSlider from './MainSlider'
function MainDiv() {
  return (
    <div style={{ minHeight: '720px', backgroundImage:`url(${Fondo2})`}}
    className='flex items-center justify-center bg-no-repeat text-center flex-col font-dmsans pl-4 pr-4 bg-cover pt-24'>
      <Header />
      <h4 
      style={{ animation: 'fade-in 1s ease-in' }}
      className='text-xl font-semibold text-primarycolor'>Programa de </h4>
      <h1 
      style={{ animation: 'fade-in 1.5s ease-in' }}
      className='text-5xl font-bold text-gray-800 mb-8'>Prácticas pre profesionales</h1>
      <p
      style={{ animation: 'fade-in 2s ease-in', maxWidth: '600px' }}
      className='font-regular text-gray-500 mb-8'
      >Programa de W2 para estudiantes: formación práctica para enfrentar desafíos laborales, buscando talento y pasión más que experiencia. Únete y haz realidad tus aspiraciones.</p>
      <div className='flex flex-wrap justify-center'>
        <button 
        style={{ animation: 'fade-in 1.5s ease-in' }}
        className='w-40 h-12 bg-primarycolor rounded-3xl text-white font-semibold hover:bg-slate-50 hover:border-2 hover:border-primarycolor hover:text-primarycolor transition-colors duration-500 mb-4 mr-2 ml-2'>
          Quiero Postular
        </button>
        <button 
        style={{ animation: 'fade-in 2s ease-in' }}
        className='w-40 h-12 bg-white text-primarycolor font-semibold rounded-3xl border-2 border-primarycolor hover:bg-primarycolor  hover:text-white transition-colors duration-500 mr-2 ml-2'>Empezar</button>
      </div>
      <MainSlider />
    </div>
  )
}

export default MainDiv