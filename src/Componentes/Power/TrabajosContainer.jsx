import React from 'react'
import Buscador from './Buscador'
import CardTrabajo from './CardTrabajo'

function TrabajosContainer() {
  return (
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-8'>
        <h1 className='text-2xl font-semibold px-4 text-center'>
            Principales ofertas para ti
        </h1>
        <Buscador />
        <div className='flex flex-col w-full items-center px-2  '>
            <CardTrabajo puesto='Asesor de Ventas' sede='Lima Este - Lima Sur - Lima Centro' />
            <CardTrabajo puesto='Auxiliar de Reparto' sede='Ate - Huachipa' />
            <CardTrabajo puesto='Conductor A3C - A3B' sede='Huachipa - Ate - Comas'  />
            <CardTrabajo puesto='Operario de Almacen' sede='Chorrillos' />
            <CardTrabajo puesto='Representante Médico Junior' sede='Zona Sur' />
            <CardTrabajo puesto='Analista de Aseguramiento de Calidad' sede='Chorrillos' sueldo='S/. 3 500'  />
            <CardTrabajo puesto='Asistente Operativo de Planta Frio' sede='RAA - Callao' sueldo='S/. 1 300'/>
            <CardTrabajo puesto='Conductor A3C y A4' sede='RSA - Callao' sueldo='S/. 2 900'/>
            <CardTrabajo puesto='Almacenero 2' sede='RSA - Callao' sueldo='S/. 1 025' />
            <CardTrabajo puesto='Operador de equipo 2' sede='RSA - Callao' sueldo='S/. 1 400' />
            <CardTrabajo puesto='Asistente de Calidad y Gestion de Procesos' sede='RSA - Callao' />
        </div>
    </div>
  )
}

export default TrabajosContainer