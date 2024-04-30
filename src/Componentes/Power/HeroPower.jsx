import React from 'react'

function HeroPower() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto font-dmsans pt-24 pb-12 text-white bg-primarytext'>
        <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-center px-2'>Descubre nuestro programa Power</h1>
        <p className='mb-4 text-center px-2'>Programa de postulación basado en el apoyo de búsqueda de trabajo</p>
        <button className='mb-4 text-sm bg-amber-400 hover:bg-amber-600 text-white px-4 py-2 rounded-lg w-40 h-12'>Postular</button>
        <div className='flex justify-center'>
        <iframe className='w-[300px] h-[200px] md:w-[700px] md:h-[400px] rounded-lg bg-white mb-4' src="https://www.youtube.com/embed/9QvD3w3_Ga0" title="Qué es POWER y qué queremos Lograr con la misma" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default HeroPower