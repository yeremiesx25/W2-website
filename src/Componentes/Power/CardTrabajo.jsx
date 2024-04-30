import React from 'react'
import logoLacruz from '../../assets/logo-lacruz.png'
function CardTrabajo() {
  return (
    <button className='w-[320px] sm:w-[550px] md:w-1/2 h-32 rounded-lg bg-white border-2 border-[#D6DDEB] mb-4 font-dmsans flex justify-between items-center px-4'>
      <div className='flex'>
        <div className='w-16 h-16 mr-4'>
          <img className='w-full h-full' src={logoLacruz} alt="" />
        </div>
        <div className=''>
          <h4 className='font-bold text-primarytext'>Conductor A3C - A3B</h4>
          <h5 className='text-[#7C8493] font-bold mb-4'>Frío Red - Lima, Perú</h5>
          <span className='w-40 h-8 border border-[#EFFAF7] bg-[#EFFAF7] rounded-xl px-4 text-[#56CDAD] mr-1'>Planilla</span>
          <span className='w-40 h-8 border border-amb er-400 rounded-xl px-4 text-amber-400'>S/.1900</span>
        </div>
      </div>
      <button className='w-36 h-12 bg-primarytext text-white rounded-lg hidden sm:block font-semibold'>Postular</button>
    </button>
  )
}

export default CardTrabajo