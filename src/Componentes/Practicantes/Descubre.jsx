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
    </div>
  </div>
{/* animacion de scroll */}
<div class="relative">
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
        <h2 class="text-4xl font-bold">Flexibilidad en el trabajo</h2>
        <p class="mt-2">Scroll Down for next slide</p>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <h2 class="text-4xl font-bold">Aprendizaje continuo</h2>
        <p class="mt-2">Scroll Down for next slide</p>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 class="text-4xl font-bold">The Third slide</h2>
        <p class="mt-2">Scroll Down</p>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
        <h2 class="text-4xl font-bold">The Fourth slide</h2>
    </div>
</div>
</section>
  )
}

export default Descubre