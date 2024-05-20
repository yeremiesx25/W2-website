import React from "react";
import icon1 from "../../assets/free_icon_1.svg";
import icon2 from "../../assets/free_icon_1 (1).svg";
import icon3 from "../../assets/free_icon_1 (2).svg";
import icon4 from "../../assets/free_icon_1 (3).svg";

import Flexibilidad from "../../assets/Flexibilidad (1).gif";
import aprendizaje from "../../assets/Aprendizaje Continuo.gif";
import cultura from "../../assets/Cultura (1).gif";
import desarrollo from "../../assets/Inicio Diferentes (1).gif";

function Descubre() {
  return (
    <section class="w-full flex flex-col  dark:bg-gray-900 font-dmsans">
      <div class="max-w-7xl mx-auto pt-16 px-4 pb-16 sm:px-6 lg:px-8">
        <div class="text-center space-y-5">
          <div class="inline-flex items-end justify-center w-full text-center mx-auto animate-flip-up">
            <img
              src="https://cdn.devdojo.com/tails/avatars/024.jpg"
              class="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/012.jpg"
              class="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/029.jpg"
              class="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/005.jpg"
              class="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
            />
            <img
              src="https://cdn.devdojo.com/tails/avatars/032.jpg"
              class="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"
            />
          </div>
          <p class="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Descubre
            <span class="px-2 py-1 relative inline-block">
              <svg
                class="stroke-current bottom-0 absolute text-blue-300 -translate-x-2"
                viewBox="0 0 410 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                  stroke-width="12"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span class="relative">lo que nos hace diferentes</span>
            </span>
          </p>
          <p class=" max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            Explora los beneficios que brindamos a nuestros dedicado y talentoso
            equipo de trabajo.
          </p>
        </div>
      </div>
      {/* animacion de scroll */}
      <div class="relative">
        <div class="sticky top-0 h-full md:h-screen  flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100">
          <section class="text-white body-font bg-none dark:bg-slate-900">
            <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center justify-center">
              <div class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center">
                <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-black sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                  Flexibilidad en el trabajo
                </h1>
                <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed text-gray-700">
                  El equilibrio personal y laboral es nuestra prioridad,
                  asegurando una calidad de vida de nuestro equipo.
                </p>
                <ul class="mt-8 space-y-3 font-medium text-gray-700">
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5 ">
                      Trabajo Híbrido, 90% remoto 10% presencial
                    </p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">Jueves de PLATO.</p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">
                      “W2 Days”: Días de disfrute en Familia.
                    </p>
                  </li>
                </ul>
              </div>
              <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <div class=" mx-auto max-w-sm flex flex-col items-center justify-center text-center">
                  <img
                    className="rounded-full w-64   "
                    src={Flexibilidad}
                    alt=""
                  />
                  <div class="mb-4 text-gray-700">
                    <svg
                      height="35px"
                      class="mb-2"
                      fill="#5a67d8"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      xml:space="preserve"
                    >
                      <g>
                        <g id="right_x5F_quote">
                          <g>
                            <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                            <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <p class="mt-2 text-base leading-6">
                    “El trabajo flexible me ha permitido equilibrar mi vida personal y profesional, trabajar de manera más eficiente y sentirme en control de mi tiempo y éxito laboral.”
                    </p>
                    <div class="text-sm mt-5">
                      <p
                        class="font-medium leading-none text-indigo-600 hover:text-black transition duration-500 ease-in-out"
                      >
                        Alexander de W2
                      </p>
                      <p>Practicante</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="sticky top-0 h-full md:h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-600 to-cyan-600 text-black">
        <section class="text-white body-font bg-none dark:bg-slate-900 h-full">
            <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center justify-center">
              <div class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center">
                <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                  Aprendizaje continuo
                </h1>
                <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Nos involucramos en tu desarrollo profesional y personal, con diversas formas de capacitacitaciones a lo largo de tu estancia con nosotros
                </p>
                <ul class="mt-8 space-y-3 font-medium">
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5 ">
                    Assessment Center con
evaluación y capacitación
                    </p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">Experiencia a todo nivel.</p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">
                    Capacitaciones de
desarrollo personal.
                    </p>
                  </li>
                </ul>
              </div>
              <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <div class=" mx-auto max-w-sm flex flex-col items-center justify-center text-center">
                  <img
                    className="rounded-full w-64 h-64"
                    src={aprendizaje}
                    alt=""
                  />
                  <div class="mb-4 text-white">
                    <svg
                      height="35px"
                      class="mb-2"
                      fill="#5a67d8"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      xml:space="preserve"
                    >
                      <g>
                        <g id="right_x5F_quote">
                          <g>
                            <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                            <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <p class="mt-2 text-base leading-6">
                    “La evaluación de ingreso es innovadora al enfocarse en capacitación y aprendizaje continuo sin requerir experiencia previa, incentivando nuestro esfuerzo por mantenernos a la vanguardia.”
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="sticky top-0 h-full md:h-screen  flex flex-col items-center justify-center bg-gradient-to-b from-pink-700 to-red-800 text-white">
        <section class="text-white body-font bg-none dark:bg-slate-900">
            <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center justify-center">
              <div class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center">
                <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                  Cultura inclusiva
                </h1>
                <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Porque las personas nos importan y
nuestra cultura tiene un sello
distintivo que fomenta la diversidad
en todos sus ámbitos.
                </p>
                <ul class="mt-8 space-y-3 font-medium">
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5 ">
                    Trabaja desde donde desees.
                    </p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">Politicas de diversidad
e inclusión.</p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">
                    Propiciamos espacios de
comunicación e interacción
                    </p>
                  </li>
                </ul>
              </div>
              <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <div class=" mx-auto max-w-sm flex flex-col items-center justify-center text-center">
                  <img
                    className="rounded-full w-64   "
                    src={cultura}
                    alt=""
                  />
                  <div class="mb-4 text-white">
                    <svg
                      height="35px"
                      class="mb-2"
                      fill="#5a67d8"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      xml:space="preserve"
                    >
                      <g>
                        <g id="right_x5F_quote">
                          <g>
                            <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                            <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <p class="mt-2 text-base leading-6">
                    “La cultura inclusiva me hace sentir valorada e integrada, permitiéndonos aportar nuestras mejores ideas y contribuciones sin importar ubicación, creencias o antecedentes, lo que hace a nuestro equipo excepcional.“
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="sticky top-0 h-full md:h-screen  flex flex-col items-center justify-center bg-gradient-to-b from-cyan-800 to-indigo-900 text-black">
        <section class="text-white body-font bg-none dark:bg-slate-900">
            <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center justify-center">
              <div class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center">
                <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                  Desarrollo profesional
                </h1>
                <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Tenemos la determinación que cada
talento es capaz de lograr lo que se
proponga en el tiempo ideal.
                </p>
                <ul class="mt-8 space-y-3 font-medium">
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5 text-left">
                    Línea de carrera de acorde a
desempeño y resultados.
                    </p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">Desafiamos el desarrollo.</p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">
                    Fomentamos la disrupción
profesional.
                    </p>
                  </li>
                </ul>
              </div>
              <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <div class=" mx-auto max-w-sm flex flex-col items-center justify-center text-center">
                  <img
                    className="rounded-full w-64   "
                    src={desarrollo}
                    alt=""
                  />
                  <div class="mb-4 text-white">
                    <svg
                      height="35px"
                      class="mb-2"
                      fill="#5a67d8"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      xml:space="preserve"
                    >
                      <g>
                        <g id="right_x5F_quote">
                          <g>
                            <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                            <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <p class="mt-2 text-base leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="sticky top-0 h-full md:h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-600 to-cyan-600 text-black">
        <section class="text-white body-font bg-none dark:bg-slate-900 h-full">
            <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center justify-center">
              <div class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center">
                <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                  Beneficios exclusivos
                </h1>
                <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Porque sabemos que todo esfuerzo
trae grandes resultados y los
queremos reconocer.
                </p>
                <ul class="mt-8 space-y-3 font-medium">
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5 ">
                    Tu cargo no limita tu salario
                    </p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">Beneficios Corporativos W2.</p>
                  </li>
                  <li class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <svg
                        class="w-5 h-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-3 leading-5">
                    Beneficios en base a resultados.
                    </p>
                  </li>
                </ul>
              </div>
              <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <div class=" mx-auto max-w-sm flex flex-col items-center justify-center text-center">
                  <img
                    className="rounded-full w-64   "
                    src={Flexibilidad}
                    alt=""
                  />
                  <div class="mb-4 text-white">
                    <svg
                      height="35px"
                      class="mb-2"
                      fill="#5a67d8"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      xml:space="preserve"
                    >
                      <g>
                        <g id="right_x5F_quote">
                          <g>
                            <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                            <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <p class="mt-2 text-base leading-6">
                    “El trabajo flexible me ha permitido equilibrar mi vida personal y profesional, trabajar de manera más eficiente y sentirme en control de mi tiempo y éxito laboral.”
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Descubre;
