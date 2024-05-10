import React, { useState } from 'react';
import fondo from '../../assets/Web 3.jpg'
import imgHero from '../../assets/imgPracticas.png'
import SiderEmpresa from './SiderEmpresa'

function HeroEmpresa() {
  return (
<div class="bg-white py-28 font-dmsans">
    <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
                <h1 class="text-4xl md:text-6xl lg:text-7xl text-primarytext font-bold mb-6">
                    Alcanza tus objetivos de <br class="hidden md:block" />
                    <span class="text-primarycolor">Gestión Humana</span> 
                </h1>
                <p class="text-lg md:text-xl lg:text-xl text-gray-500 mb-8">
                Deja atrás el dolor del reclutamiento
de personal con nuestra metodología
de atracción; despeja tus dudas sobre
el equipo que tienes y el que ha de
ingresar con una evaluación
psicolaboral.
Pon en nuestras manos la gestión
operativa de tus procesos del área
de Talento Humano. 
                </p>
                <div class="flex gap-2">
                    <a href="#" class="bg-primarycolor hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Get
                        Started
                    </a>
                    <a href="#" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                        More
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" class="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
</div>
  )
}

export default HeroEmpresa