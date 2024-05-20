import React from 'react'
import { Link } from 'react-router-dom';
import empresa from '../../assets/Empresa@2x-8.png' 
import candidatos from '../../assets/Postulantes@2x-8.png'
import practicantes from '../../assets/Practicantes@2x-8.png'
import poder from '../../assets/Power.jpg'
import descubrir from '../../assets/descubriendo.jpeg'
import empre from '../../assets/Empresa.gif'
import flecha from "../../assets/flecha.png";



function Dirigido() {
  return (
<section id='dirigido' class="text-primarytext bg-white body-font font-dmsans pt-8">
  
  <h2 class="font-dmsans sm:text-4xl text-2xl font-bold title-font text-center text-transparent bg-clip-text bg-gradient-to-r from-primarytext to-black mb-12 mt-6"> <img src ={flecha} alt="" className="inline-block w-16 h-12 mr-2"></img> A quiénes está dirigido <span class="text-primarycolor xl:inline"> nuestro servicio... </span>
    </h2>

  <div class="container px-5 pb-8 mx-auto flex justify-center flex-wrap w-full">
  <div class="mb-8 relative h-96 w-96 mx-auto px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
    <img src= { empre } alt="" class="absolute w-full h-full inset-0 object-cover"/>
    <div
        class="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur">
    </div>
    <div class="absolute inset-x-5 text-white ">
        <h2 class="text-5xl font-bold mb-2">Empresas</h2>
        <p class="hidden group-hover:block">Libérate del estrés de reclutamiento
y selección con nuestro soporte
estratégico de atracción de personal
incluso si ya cuentan con un área
de RR.HH.</p>
    </div>
    <Link to="/Empresas" className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-white shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block text-center">
            Descubre más
          </Link>
</div>
<div class="mb-8 relative h-96 w-[350px] md:w-96 mx-auto  px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
    <img src={ poder } alt="" class="absolute w-full h-full inset-0 object-cover"/>
    <div
        class="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur">
    </div>
    <div class="absolute inset-x-5 text-white">
        <h2 class="text-5xl font-bold mb-2 text-amber-400">Power</h2>
        <p class="hidden group-hover:block">Ayudamos a personas sin trabajo
en busca de estabilidad laboral.
Logren ingresar a trabajar en una
empresa formal con los beneficios
de ley mediante nuestra metodología
de atracción incluso si no tienen CV. </p>
    </div>
    <Link to="/Power" className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-amber-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block text-white text-center">
            Ofertas Laborales
          </Link>
</div>
<div class="relative h-96 w-96 mx-auto px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
    <img src= { descubrir } alt="" class="absolute w-full h-full inset-0 object-cover"/>
    <div
        class="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur">
    </div>
    <div class="absolute inset-x-5 text-white">
        
        <p class="hidden group-hover:block"> <h2 class="text-4xl font-bold mb-2">Descubriendo Talentos</h2>Programa dirigido a estudiantes de
los últimos ciclos de sus carreras
que deseen formarse y formar parte
de W2. Revisa nuestro apartado de
beneficios y vive tu primera
experiencia laboral con nosotros.</p>
    </div>
    <Link to="/Practicantes" className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-primarycolor text-white shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block text-center">
            Vive la experiencia
          </Link>
</div>
  </div>
</section>
  )
}

export default Dirigido