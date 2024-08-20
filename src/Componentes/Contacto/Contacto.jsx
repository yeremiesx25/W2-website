import React from 'react'
import Navbar from '../Principal/Navbar'
import FormContacto from './FormContacto'
import { CgClose } from 'react-icons/cg';

function Contacto({ closeModal }) {



  return (
    <div className='flex flex-col md:w-auto w-screen md:pt-0 md:pb-0 pb-16 py-10 h-screen md:h-auto bg-white font-dmsans items-end transition-all duration-900'>
        {/* <div className='text-center px-4'>
            <h1 className='text-3xl text-gray-700 my-4 font-semibold'>Hablemos</h1>
            <p className=' md:w-1/3 w-full text-gray-700 mx-auto'>Por favor complete el siguiente formulario para enviarnos un mensaje . Siéntase libre de agregar tantos detalles como sea necesario.</p>
        </div> */}
        <button 
        onClick={closeModal} 
        className=" text-red-500 font-bold p-4 md:p-2 "
        
      >
        <CgClose size={24} />
      </button>
        <div className='md:w-[500px] w-full h-full md:h-[500px] bg-white mx-auto  rounded-xl p-8'>
            <FormContacto />
        </div>
    </div>
  )
}

export default Contacto