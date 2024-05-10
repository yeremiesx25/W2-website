import React from 'react'

function HeroPower() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto font-dmsans pt-24 pb-12 text-white bg-primarytext'>
        <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-center px-2 animate-fade-right'>Vive la experiencia <span className='text-amber-400'>Power</span> y postula con nosotros</h1>
        <p className='mb-4 text-center px-2 animate-fade-right w-full md:w-1/2'>Ayudamos a personas sin trabajo en busca de estabilidad laboral. Logren ingresar a trabajar en una empresa formal con los beneficios de ley mediante nuestra metodología de atracción incluso si no tienen CV.</p>
        <button className='mb-4 text-sm bg-amber-400 hover:bg-amber-600 text-white px-4 py-2 rounded-lg w-40 h-12 animate-fade-right'>Postular</button>
        <div className='flex justify-center animate-fade-left'>
        <iframe className='w-[300px] h-[200px] md:w-[700px] md:h-[400px] rounded-lg bg-white mb-4' src="https://www.youtube.com/embed/9QvD3w3_Ga0" title="Qué es POWER y qué queremos Lograr con la misma" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default HeroPower