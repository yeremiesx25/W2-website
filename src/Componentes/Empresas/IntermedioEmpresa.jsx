import React, { useState } from "react";
import { motion } from "framer-motion";

function Intermedio() {
  const [activeContent, setActiveContent] = useState(0);

  const activeBtn =
    "w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-primarytext text-white border-gray-200 ";

  const handleClick = (index) => {
    setActiveContent(index);
  };
  
const inactiveBtn = "w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100";
  const content = [
    <div>
      <section class="text-gray-600 body-font bg-white dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Title of Project
            </h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Short description here, Short description here Short description here Short description here Short
                description here Short description here.
            </p>
            <div class="flex justify-center">
                <a 
                    class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
                    Exploring
                </a>
                <a 
                    class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read
                    articles</a>
            </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"/>
        </div>
    </div>
</section>
    </div>,
    <div>
      <section class="text-gray-600 body-font bg-white dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Title of Project 2
            </h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Short description here, Short description here Short description here Short description here Short
                description here Short description here.
            </p>
            <div class="flex justify-center">
                <a 
                    class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
                    Exploring
                </a>
                <a 
                    class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read
                    articles</a>
            </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"/>
        </div>
    </div>
</section>
    </div>,
    <div>
      <section class="text-gray-600 body-font bg-white dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Title of Project  3
            </h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Short description here, Short description here Short description here Short description here Short
                description here Short description here.
            </p>
            <div class="flex justify-center">
                <a 
                    class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
                    Exploring
                </a>
                <a 
                    class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read
                    articles</a>
            </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"/>
        </div>
    </div>
</section>
    </div>,
    <div>
      <section class="text-gray-600 body-font bg-white dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Title of Project 4
            </h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Short description here, Short description here Short description here Short description here Short
                description here Short description here.
            </p>
            <div class="flex justify-center">
                <a 
                    class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
                    Exploring
                </a>
                <a 
                    class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read
                    articles</a>
            </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"/>
        </div>
    </div>
</section>
    </div>,
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center p-3 lg:gap-8 w-full items-center">
      <div className="flex w-full md:max-w-xl mx-4 rounded shadow">
  <button
    className={`${
      activeContent === 0 ? activeBtn : inactiveBtn
    } mb-2 lg:mb-0 px-4 py-2 rounded-l`}
    onClick={() => handleClick(0)}
  >
    Recent
  </button>

  <button
    className={`${
      activeContent === 1 ? activeBtn : inactiveBtn
    } mb-2 lg:mb-0 px-4 py-2`}
    onClick={() => handleClick(1)}
  >
    Popular
  </button>

  <button
    className={`${
      activeContent === 2 ? activeBtn : inactiveBtn
    } mb-2 lg:mb-0 px-4 py-2`}
    onClick={() => handleClick(2)}
  >
    Trending
  </button>

  <button
    className={`${
      activeContent === 3 ? activeBtn : inactiveBtn
    } mb-2 lg:mb-0 px-4 py-2 rounded-r`}
    onClick={() => handleClick(3)}
  >
    Trending
  </button>
</div>
      <div>{content[activeContent]}</div>
    </div>
  );
}

export default Intermedio;
