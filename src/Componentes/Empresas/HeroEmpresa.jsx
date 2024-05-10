import React, { useState } from 'react';
import fondo from '../../assets/Web 3.jpg'
import imgHero from '../../assets/imgPracticas.png'
import SiderEmpresa from './SiderEmpresa'
import CarouselEmpresa from './CarouselEmpresa'

function HeroEmpresa() {
  return (

<section class="font-dmsans">
<div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative flex flex-col justify-center items-center h-full text-left">
    <h1 class="text-5xl font-bold leading-tight mb-4">Alcanza tus Objetivos de Gestión Humana</h1>
    
    <p class="text-lg text-gray-300 mb-8">Deja atrás el dolor del reclutamiento de personal con nuestra metodología de atracción; <br></br>despeja tus dudas sobre el equipo que tienes y el que ha de ingresar con una evaluación psicolaboral. <br></br> Pon en nuestras manos la gestión operativa de tus procesos del área de Talento Humano.</p>

    <a href="#" class="bg-primarycolor text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Quiero un servicio</a>
  </div>
</div>
</section>

  )
}

export default HeroEmpresa