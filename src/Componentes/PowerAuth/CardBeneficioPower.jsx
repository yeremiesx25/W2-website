import React from 'react'
import icon1 from '../../assets/habilidad.png'
function CardBeneficioPower({nombreBeneficio, parrafoBeneficio, iconBeneficio}) {
  return (
    <div className='w-76 md:w-80 h-72 bg-primarytext text-white flex flex-col items-center justify-around py-8 rounded-xl mx-8'>
        <img className='w-16 h-16 mb-4' src={iconBeneficio} alt="" />
        <h2 className='px-8 text-lg font-semibold mb-4 text-center'>{nombreBeneficio}</h2>
        <p className='px-8 w-[230px] md:w-[300px] text-center text-gray-300'>{parrafoBeneficio}</p>
    </div>
  )
}

export default CardBeneficioPower