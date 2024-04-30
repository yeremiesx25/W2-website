import React from 'react'
import foto from '../../assets/Aprendizaje Continuo.gif'
function Descubre() {
  return (
    <div className='w-full h-auto font-dmsans flex justify-center mt-24 flex-wrap-reverse'>
        <div className='flex flex-wrap w-72 h-72 md:mx-16'>
            <img className='w-32 h-32 mx-2 rounded-lg' src={foto} alt="" />
            <img className='w-32 h-32 mx-2 rounded-lg' src={foto} alt="" />
            <img className='w-32 h-32 mx-2 rounded-lg' src={foto} alt="" />
            <img className='w-32 h-32 mx-2 rounded-lg' src={foto} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center w-96 md:mx-16'>
            <h2 className='text-2xl md:text-3xl font-semibold text-center mb-8'>Descubre lo que nos hace diferentes</h2>
            <p className='mb-8'>Explora los beneficios que brindamos a nuestros dedicado y talentoso equipo de trabajo.</p>
            <button className='w-48 h-16 bg-primarycolor text-white font-semibold rounded-lg mb-8'>Ver más</button>
        </div>
    </div>
  )
}

export default Descubre