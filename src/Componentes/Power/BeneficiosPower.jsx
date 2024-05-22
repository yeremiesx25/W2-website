import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardBeneficioPower from './CardBeneficioPower';
import icon1 from '../../assets/entrevista-en-linea.png'

function BeneficiosPower() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <section class="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16 font-dmsans">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">Beneficios Power</h2>
            <p class="mb-4">Conectamos talentos con grandes emmpresas</p>

        </div>
        <div
            class="grid justify-center max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-5 sm:mt-12 lg:mt-20 sm:text-left">
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Asesoría y orientación de CV</h3>
                        <p class="mt-6 text-base text-gray-600">Si tu CV no esta correctamente
direccionado para el puesto,
nosotros te apoyamos.</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                <div class="p-9"><img className='w-12 mx-auto md:mx-0' src={icon1} alt="" />
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Preparación para la entrevista</h3>
                    <p class="mt-6 text-base text-gray-600">Te preparamos para las
entrevistas con los tips exactos
de cada pregunta.</p>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Desarrollo de habilidades blandas</h3>
                        <p class="mt-6 text-base text-gray-600">Te ayudamos en el desarrollo
de las habilidades
requeridas para el área.</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                <div class="p-9"><img className='w-12 mx-auto md:mx-0' src={icon1} alt="" />
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Retro alimentación</h3>
                    <p class="mt-6 text-base text-gray-600">Retroalimentación constructiva
para fortalecer tu
autoconfianza</p>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Soporte
                        </h3>
                        <p class="mt-6 text-base text-gray-600">Te brindamos soporte
emocional durate todo
el proceso de selección.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default BeneficiosPower;
