import React from 'react'
import icon1 from '../../assets/free_icon_1.svg'
import icon2 from '../../assets/free_icon_1 (1).svg'
import icon3 from '../../assets/free_icon_1 (2).svg'
import icon4 from '../../assets/free_icon_1 (3).svg'

import Flexibilidad from '../../assets/Flexibilidad (1).gif'

function Descubre() {
  return (
    <section class="w-full flex flex-col  dark:bg-gray-900 font-dmsans">
  <div class="max-w-7xl mx-auto pt-16 px-4 pb-16 sm:px-6 lg:px-8">
    <div class="text-center space-y-5">
      <h2 class="text-base font-semibold text-blue-500 dark:text-pink-300 tracking-wide uppercase ">Conoce sobre nuestro programa</h2>
      <div class="inline-flex items-end justify-center w-full text-center mx-auto animate-flip-up">
        <img src="https://cdn.devdojo.com/tails/avatars/024.jpg" class="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white" />
        <img src="https://cdn.devdojo.com/tails/avatars/012.jpg" class="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"/>
        <img src="https://cdn.devdojo.com/tails/avatars/029.jpg" class="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"/>
        <img src="https://cdn.devdojo.com/tails/avatars/005.jpg" class="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"/>
        <img src="https://cdn.devdojo.com/tails/avatars/032.jpg" class="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"/>
      </div>
      <p
        class="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Descubre
        <span class="px-2 py-1 relative inline-block"><svg class="stroke-current bottom-0 absolute text-blue-300 -translate-x-2" viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="12" fill="none" fill-rule="evenodd" stroke-linecap="round"></path></svg><span class="relative">lo que nos hace diferentes</span></span>
      </p>
      <p class=" max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Explora los beneficios que brindamos a nuestros dedicado y talentoso equipo de trabajo.</p>
    </div>
  </div>
{/* animacion de scroll */}
<div class="relative">
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-indigo-50">
    <section class="text-gray-800 body-font bg-none dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-800 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Flexibilidad en el trabajo
            </h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
            El equilibrio personal y laboral es
nuestra prioridad, asegurando una
calidad de vida de nuestro equipo.
            </p>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src={Flexibilidad} />
        </div>
    </div>
</section>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
    <section class="text-gray-600 body-font bg-none dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Aprendizaje continuo
            </h1>
            <p class="mb-8 md:pl-0 text-white pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Nos involucramos en tu desarrollo
profesional y personal, con diversas
formas de capacitacitaciones a lo
largo de tu estancia con nosotros
            </p>    
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://cdn-icons-png.flaticon.com/512/2644/2644258.png"/>
        </div>
    </div>
</section>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
    <section class="text-gray-600 body-font bg-none dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Cultura inclusiva
            </h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed text-white dark:text-gray-300">
            Porque las personas nos importan y
nuestra cultura tiene un sello
distintivo que fomenta la diversidad
en todos sus ámbitos.
            </p>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://inclusion.ubo.cl/wp-content/uploads/2024/01/inclusion-1-1024x850.webp"/>
        </div>
    </div>
</section>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
    <section class="text-gray-600 body-font bg-none dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Desarrollo profesional
            </h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Tenemos la determinación que cada
talento es capaz de lograr lo que se
proponga en el tiempo ideal.
            </p>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"/>
        </div>
    </div>
</section>
    </div>
</div>
</section>
  )
}

export default Descubre