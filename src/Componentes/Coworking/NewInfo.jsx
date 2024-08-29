import React from 'react'
import Reserva from '../Reserva/Reserva'

function NewInfo() {
  return (
    <div className='flex flex-wrap font-dmsans'>
        <div className='md:w-3/5 w-full  relative isolate overflow-hidden bg-gray-900  text-white flex flex-col py-20'>
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
            <h2 className='text-3xl text-center mb-6 px-12'>Oficina para Trabajo Remoto en San Juan de Lurigancho: Tu oficina, tu ritmo.</h2>
            <p className='text-center px-12'>Un espacio diseñado para que trabajes sin interrupciones, nosotros nos encargamos de tu comodidad, Tú de tu crecimiento.</p>
            
        </div>
        <div className='md:w-1/3 w-full '>
            <Reserva />
        </div>
    </div>
  )
}

export default NewInfo