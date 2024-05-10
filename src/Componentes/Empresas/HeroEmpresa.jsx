import React, { useState } from 'react';
import fondo from '../../assets/Web 3.jpg'
import imgHero from '../../assets/imgPracticas.png'
import SiderEmpresa from './SiderEmpresa'
import CarouselEmpresa from './CarouselEmpresa'
import fondoPuntos from '../../assets/punteado.png'
function HeroEmpresa() {
  return (

<section style={{backgroundImage: `url(${fondoPuntos})` }} class="bg-blue-600 py-20 font-dmsans">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h1 class="text-white font-bold text-5xl leading-tight mb-6">Alcanza tus objetivos de gestión humana</h1>
                <p class="text-white text-xl mb-8">Deja atrás el dolor del reclutamiento
de personal con nuestra metodología
de atracción; despeja tus dudas sobre
el equipo que tienes y el que ha de
ingresar con una evaluación
psicolaboral.
Pon en nuestras manos la gestión
operativa de tus procesos del área
de Talento Humano.</p>
                <a href="#"
                    class="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-700 transition duration-200">Quiero un servicio</a>
            </div>
            <div class="md:w-[600px]">
                <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coffee beans"
                    class="w-full rounded-lg shadow-lg"/>
            </div>
        </div>
    </div>
</section>

  )
}

export default HeroEmpresa