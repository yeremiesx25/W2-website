import React from 'react'
import empresa from '../../assets/Empresa@2x-8.png' 
import candidatos from '../../assets/Postulantes@2x-8.png'
import practicantes from '../../assets/Practicantes@2x-8.png'
import poder from '../../assets/Power.jpg'



function Dirigido() {
  return (
<section id='dirigido' class="text-primarytext bg-white body-font font-dmsans pt-8">
  <h2 class="font-dmsans sm:text-3xl text-2xl font-bold title-font text-center text-primarytext mb-8">A quiénes está dirigido nuestro servicio...
    </h2>
  <div class="container px-5 pb-8 mx-auto flex justify-center flex-wrap w-full">
  <div class="relative h-96 w-96 mx-auto px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
    <img src="https://img.freepik.com/foto-gratis/negocio-moderno-edificio-paisaje-tocando-cielo_181624-5785.jpg?w=740&t=st=1715358564~exp=1715359164~hmac=d0b0d38f80e19374c42549ac6ab06ebc4ebdccd99d53611fdb81437d48a07ad1" alt="" class="absolute w-full h-full inset-0 object-cover"/>
    <div
        class="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur">
    </div>
    <div class="absolute inset-x-5 text-white ">
        <h2 class="text-4xl font-bold mb-2">Empresas</h2>
        <p class="hidden group-hover:block">Libérate del estrés de reclutamiento
y selección con nuestro soporte
estratégico de atracción de personal
incluso si ya cuentan con un área
de RR.HH.</p>
    </div>
    <button class="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-white shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">Ver más</button>
</div>
<div class="relative h-96 w-[350px] md:w-96 mx-auto  px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
    <img src={ poder } alt="" class="absolute w-full h-full inset-0 object-cover"/>
    <div
        class="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur">
    </div>
    <div class="absolute inset-x-5 text-white">
        <h2 class="text-4xl font-bold mb-2 text-amber-400">Power</h2>
        <p class="hidden group-hover:block">Ayudamos a personas sin trabajo
en busca de estabilidad laboral.
Logren ingresar a trabajar en una
empresa formal con los beneficios
de ley mediante nuestra metodología
de atracción incluso si no tienen CV. </p>
    </div>
    <button class="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-white shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">Ver más</button>
</div>
<div class="relative h-96 w-96 mx-auto px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
    <img src="https://media.licdn.com/dms/image/D4E22AQE752m6yibZ0w/feedshare-shrink_2048_1536/0/1700660743138?e=1718236800&v=beta&t=t5LHk8Ky9OPl0EJbeCwBhXrumQWgRDsPkNcwTod8aAE" alt="" class="absolute w-full h-full inset-0 object-cover"/>
    <div
        class="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur">
    </div>
    <div class="absolute inset-x-5 text-white">
        <h2 class="text-4xl font-bold mb-2">Descubriendo Talentos</h2>
        <p class="hidden group-hover:block">Programa dirigido a estudiantes de
los últimos ciclos de sus carreras
que deseen formarse y formar parte
de W2. Revisa nuestro apartado de
beneficios y vive tu primera
experiencia laboral con nosotros.</p>
    </div>
    <button class="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-primarycolor text-white shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">Ver más</button>
</div>
  </div>
</section>
  )
}

export default Dirigido