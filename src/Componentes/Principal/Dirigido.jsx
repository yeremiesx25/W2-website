import React from 'react'
import imgempresas from '../../assets/Designer-rafiki.png'
import imgpostulantes from '../../assets/Programming-rafiki.png'
import imgpracticantes from '../../assets/Notes-rafiki.png'
import { motion } from "framer-motion"


function Dirigido() {
  return (
<section class="text-primarytext bg-white body-font font-dmsans">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-primarytext mb-20">A quiénes está dirigido nuestro servicio...
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-primarytext text-lg title-font font-medium mb-2">Empresas</h2>
          <p class="leading-relaxed text-base">Tus socios Estratégicos en
GESTIÓN HUMANA
Libérate del estrés de reclutamiento
y selección con nuestro soporte
estratégico de atracción de personal
incluso si ya cuentan con un área
de RR.HH. </p>
          <a class="mt-3 text-indigo-400 inline-flex items-center">Ver más
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-primarytext text-lg title-font font-medium mb-2">Candidatos</h2>
          <p class="leading-relaxed text-base">Asesoría y Mentorías
Personalizadas
Ayudamos a personas sin trabajo
en busca de estabilidad laboral.
Logren ingresar a trabajar en una
empresa formal con los beneficios
de ley mediante nuestra metodología
de atracción incluso si no tienen CV</p>
          <a class="mt-3 text-indigo-400 inline-flex items-center">Ver más
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-primarytext text-lg title-font font-medium mb-2">Practicantes</h2>
          <p class="leading-relaxed text-base">Programa de Prácticas
PRE - Profesionales
Los valores que nos caracterizan
como empresa peruana.
Programa dirigido a estudiantes de
los últimos ciclos de sus carreras
que deseen formarse y formar parte
de W2. Revisa nuestro apartado de
beneficios y vive tu primera
experiencia laboral con nosotros. </p>
          <a class="mt-3 text-indigo-400 inline-flex items-center">Ver más
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Dirigido