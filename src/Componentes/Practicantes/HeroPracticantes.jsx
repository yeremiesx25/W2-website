import React from 'react'
import fondo from '../../assets/Web 3.jpg'
import imgHero from '../../assets/imgPracticas.png'
import Descubre from './Descubre'
function HeroPracticantes() {

  return (
    <section class="pt-20 md:pt-40 font-dmsans">
    <div class="container mx-auto px-8 lg:flex">
        <div class="text-center lg:text-left lg:w-1/2">
            <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Programa de <span className='text-primarycolor'>prácticas preprofesionales</span> </h1>
            <p class=" lg:text-xl mt-6 font-light">Un programa diseñado para
estudiantes de los últimos ciclos
que buscan formarse y formar parte
de W2. Nos esforzamos por preparar
a los estudiantes para enfrentar los
desafíos del mundo laboral al brindarles
oportunidades prácticas que
complementen su formación
académica.
No buscamos experiencia, buscamos
DESCUBRIR TALENTO y PASIÓN.</p>
            <p class="mt-8 md:mt-12"><button type="button" class="
        py-4 px-12 mb-8
        
        bg-primarycolor
        hover:bg-teal-600
        rounded-lg
        text-white">Postula Ahora</button>
            </p>
        </div>
        <div class="lg:w-1/2 flex justify-center">
          <img src={imgHero} alt="" />
        </div>
    </div>
</section>  
  )
}

export default HeroPracticantes