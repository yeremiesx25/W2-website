import React from 'react'
import imgempresas from '../../assets/Designer-rafiki.png'
import imgpostulantes from '../../assets/Programming-rafiki.png'
import imgpracticantes from '../../assets/Notes-rafiki.png'
import { motion } from "framer-motion"
import empresas from '../../assets/enterprise-svgrepo-com (1).svg' 
import candidatos from '../../assets/candidate-for-elections-svgrepo-com.svg'
import practicantes from '../../assets/people-hand-drawn-persons-group-svgrepo-com.svg' 

import empresa from '../../assets/Empresa@2x-8.png' 

function Dirigido() {
  return (
<section id='dirigido' class="text-primarytext bg-white body-font font-dmsans pt-8">
  <h2 class="sm:text-3xl text-2xl font-medium title-font text-center text-primarytext mb-20">A quiénes está dirigido nuestro servicio...
    </h2>
  <div class="container px-5 py-8 mx-auto">
    <div className='w-96 h-[400px] shadow-2xl rounded-lg flex flex-col items-center text-center justify-around py-8'>
      <img className='w-24 h-24' src={empresa} alt="" />
      <h3 className=' font-medium text-xl'>Empresas</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sed facere quidem consequatur nam perferendis.</p>
      <a href="/Empresas" className='bg-primarycolor text-white font-semibold w-32 h-8 flex items-center justify-center rounded-lg'>Ver más</a>
    </div>
  </div>
</section>
  )
}

export default Dirigido