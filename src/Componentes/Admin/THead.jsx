import React from 'react'

function THead() {
  return (
    <div className='w-full h-16  pl-12 flex items-center'>
        <ul className='flex w-[95%] h-full bg-gray-50 justify-around items-center text-gray-600'>
            <li className='w-[20%] text-center'>Puesto</li>
            <li className=''>Ubicación</li>
            <li>Empresa</li>
            <li>Fecha</li>
            <li>Estado</li>
            <li>Acciones</li>
        </ul>
    </div>
  )
}

export default THead