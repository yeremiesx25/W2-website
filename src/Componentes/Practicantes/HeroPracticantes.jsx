import React from 'react'
import fondo from '../../assets/Web 3.jpg'
import imgHero from '../../assets/imgPracticas.png'
import Descubre from './Descubre'
function HeroPracticantes() {

  return (
    <section class="bg-white dark:bg-gray-900 font-dmsans">
    <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1
                class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Programa de <span className='text-primarycolor'>prácticas preprofesionales.</span>
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Un programa diseñado para
estudiantes de los últimos ciclos
que buscan formarse y formar parte
de W2. Nos esforzamos por preparar
a los estudiantes para enfrentar los
desafíos del mundo laboral al brindarles
oportunidades prácticas que
complementen su formación
académica.
No buscamos experiencia, buscamos
DESCUBRIR TALENTO y PASIÓN.
            </p>

            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a  className="bg-primarycolor hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2">
              Contáctanos
            </a>

            </div>
        </div>

        <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={imgHero} alt="hero image"/>
        </div>

    </div>
</section>
  )
}

export default HeroPracticantes