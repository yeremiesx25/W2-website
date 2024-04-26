import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "flowbite";

import React from "react";

function MainDiv() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16 py-6 max-w-full mx-auto">
      {/* Contenedor del texto a la izquierda */}
      <div className="max-w-md lg:max-w-lg ml-36">
        <div className="text-6l tracking-tighter leading-[78px] text-zinc-800 font-bold lg:text-6xl lg:leading-[70px] font-dmsans">
          Gestión de talento humano para empresas
        </div>
        <div className="mt-5 text-base font-medium leading-8 text-neutral-900 text-opacity-60 font-dmsans text-gray-700">
          Soluciones y asesoría para empresas para reclutar el talento humano
          que necesitan.
        </div>
        <div className="flex flex-col lg:flex-row mt-5">
          <a
            href=""
            className="flex items-center justify-center px-4 py-4 mb-4 text-sm font-bold bg-indigo-600 hover:bg-blue-500 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md hover:shadow-lg cursor-pointer duration-300 lg:mb-0 lg:mr-4 xl:mr-8"
          >
            Contratar W2
            <span className="ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current text-white"
              >
                <path
                  fill="currentColor"
                  d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Carousel a la derecha */}
      <div className="w-full lg:w-[45%] mx-auto lg:mx-28">
        <div id="default-carousel" className="relative" data-carousel="static">
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                First Slide
              </span>
              <img
                src="https://ceupe.com.ar/blog/wp-content/uploads/2021/05/01-37.jpg"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          </div>

          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>

          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainDiv;
