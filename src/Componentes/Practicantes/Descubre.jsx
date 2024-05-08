import React from 'react'
import icon1 from '../../assets/free_icon_1.svg'
import icon2 from '../../assets/free_icon_1 (1).svg'
import icon3 from '../../assets/free_icon_1 (2).svg'
import icon4 from '../../assets/free_icon_1 (3).svg'

function Descubre() {
  return (
    <section class="w-full flex flex-col  dark:bg-gray-900 font-dmsans">
  <div class="max-w-7xl mx-auto pt-16 px-4  sm:px-6 lg:px-8">
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
      <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Explora los beneficios que brindamos a nuestros dedicado y talentoso equipo de trabajo.</p>
      <a href="#flexibilidad"
        class="inline-block px-6 py-3 mt-8 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600" id='flexibilidad'>
        Explorar beneficios
      </a>
    </div>
  </div>
  <div class="bg-white ">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
              <img className='w-8 h-8' src={icon4} alt="" />
            </div>Flexibilidad en el trabajo  
          </dt>
          <dd  class="mt-2 text-base leading-7 text-gray-600">El equilibrio personal y laboral es nuestra prioridad, asegurando una calidad de vida de nuestro equipo.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
              <img className='w-8 h-8' src={icon1} alt="" />
            </div>Aprendizaje continuo
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Nos involucramos en tu desarrollo profesional y personal, con diversas formas de capacitacitaciones a lo largo de tu estancia con nosotros.
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
              <img className='w-8 h-8' src={icon3} alt="" />
            </div>Cultura inclusiva
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Porque las personas nos importan y nuestra cultura tiene un sello distintivo que fomenta la diversidad en todos sus ámbitos.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
            <img className='w-8 h-8' src={icon2} alt="" />
            </div>Desarrollo profesional
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Tenemos la determinación que cada talento es capaz de lograr lo que se proponga en el tiempo ideal.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
</section>
  )
}

export default Descubre