import React from 'react'
import icon1 from '../../assets/Icon-acompañamiento.png'


function CardBeneficioPower() {
  return (
    <div className='w-76 md:w-80 h-72 bg-primarytext text-white flex flex-col items-center justify-center rounded-xl mx-8'>
        <img className='w-16 h-16 mb-4' src={icon1} alt="" />
        <h2 className='text-2xl font-semibold mb-4'>Acompañamiento</h2>
        <p className='w-[230px] md:w-[300px] text-center text-gray-300'>Ofrecemos acompañamiento al postulante durante todo el proceso de selección.</p>
    </div>
  )
}

export default CardBeneficioPower