import React from 'react'
import Buscador from './Buscador'
import CardTrabajo from './CardTrabajo'

function TrabajosContainer() {
  return (
    <div className='w-full flex flex-col items-center font-dmsans pt-8'>
        <h1 className='text-2xl font-medium px-4 text-center'>
            Principales ofertas para ti
        </h1>
        <Buscador />
        <div className='flex flex-col w-full items-center px-2'>
            <CardTrabajo />
            <CardTrabajo />
            <CardTrabajo />
            <CardTrabajo />

        </div>
    </div>
  )
}

export default TrabajosContainer