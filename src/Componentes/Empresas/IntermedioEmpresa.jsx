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
     <section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
    class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
    <div class="sm:text-center lg:text-left">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Atracción de </span>
            <span class="block text-indigo-600 xl:inline">Personal</span>
        </h1>
        <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-dmsans">
            Entendemos el cambio y la globalización es por ello que implementamos nuestra metodología de atracción fundamentada en el Inbound Recruiting. 
            Que nos permite acelerar nuestros procesos y hacerlos efectivos.
        </p>

        <div>
    <ul class="mt-8 space-y-3 font-medium"/>
        <li class="flex items-start lg:col-span-1 mb-4">
            <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600 font-dmsans">
                Enfocado en procesos masivos de alta demanda como <span class="block text-indigo-600 xl:inline"> Operario de </span> <p><span class="block text-indigo-600 xl:inline"> almacen, producción, reparto, distribución, estiba, conductores, </span> </p>
                <p> <span class="block text-indigo-600 xl:inline"> prevencionistas,etc.</span> </p>
            </p>
        </li>
        
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600 font-dmsans">
                Enfocado en personal de mandos medios como <span class="block text-indigo-600 xl:inline"> asistentes, supervisores </span> <p><span class="block text-indigo-600 xl:inline"> coordinadores, posiciones IT y puestos focalizados en una organización. </span> </p>
            </p>
        </li>
</div>


        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
                <a href='https://2kliic9t7ed.typeform.com/to/Lw8OmtpQ'
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 ">
                    Lo quiero
                </a>
            </div>
     
        </div>
       
    </div>
    
    <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
    </div>
  
</div>
</section>
</div>,


<div>
<section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
<div class="sm:text-center lg:text-left">
   <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
       <span class="block xl:inline">Head </span>
       <span class="block text-indigo-600 xl:inline">Hunting</span>
   </h1>
   <p
       class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-dmsans">
       Segmentamos nuestros procesos para crear una experiencia optima y a la medida de nuestros clientes.
   </p>

   <div>
<ul class="mt-8 space-y-3 font-medium"/>
   <li class="flex items-start lg:col-span-1 mb-4">
       <div class="flex-shrink-0">
           <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd"
                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                   clip-rule="evenodd"></path>
           </svg>
       </div>
       <p class="ml-3 leading-5 text-gray-600 font-dmsans">
       Enfocado en procesos de atracción de mandos altos como <p> <span class="block text-indigo-600 xl:inline"> gerencias, jefaturas y posiciones altamente especializadas.</span> </p>
       </p>
   </li>
   
   <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
       <div class="flex-shrink-0">
           <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd"
                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                   clip-rule="evenodd"></path>
           </svg>
       </div>
       <p class="ml-3 leading-5 text-gray-600 font-dmsans">
       Enfocado en procesos de <span class="block text-indigo-600 xl:inline"> atracción para startups, adaptados </span> <p> <span class="block text-indigo-600 xl:inline"> a su necesidad. </span> </p>
       </p>
   </li>
</div>


   <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
       <div class="rounded-md shadow">
           <a href='https://2kliic9t7ed.typeform.com/to/Lw8OmtpQ'
               class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 ">
               Lo quiero
           </a>
       </div>

   </div>
  
</div>

<div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
   <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
</div>

</div>

</section>
</div>,

<div>
<section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
<div class="sm:text-center lg:text-left">
   <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
       <span class="block xl:inline">Evaluación de </span>
       <span class="block text-indigo-600 xl:inline">Personal</span>
   </h1>
   <p
       class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-dmsans">
       Es importante conocer a nuestro equipo de trabajo antes y durante su estancia en tu organización, por ese motivo para nosotros es importante la aplicación de evaluaciones que nos permitan identificar el perfil de nuestros colaboradores. 
   </p>

   <div>
<ul class="mt-8 space-y-3 font-medium"/>
   <li class="flex items-start lg:col-span-1 mb-4">
       <div class="flex-shrink-0">
           <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd"
                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                   clip-rule="evenodd"></path>
           </svg>
       </div>
       <p class="ml-3 leading-5 text-gray-600 font-dmsans">
           Evaluaciones de clima y cultura adaptados a la realidad y <span class="block text-indigo-600 xl:inline"> necesidad de la organización. </span>
  
       </p>
   </li>
   
   <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0 mb-4">
       <div class="flex-shrink-0">
           <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd"
                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                   clip-rule="evenodd"></path>
           </svg>
       </div>
       <p class="ml-3 leading-5 text-gray-600 font-dmsans">
       Evaluaciones de desempeño que permitan <span class="block text-indigo-600 xl:inline"> incrementar el potencial de un </span> <p> <span class="block text-indigo-600 xl:inline"> equipo de trabajo. </span></p>
       </p>
   </li>

   <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
       <div class="flex-shrink-0">
           <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd"
                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                   clip-rule="evenodd"></path>
           </svg>
       </div>
       <p class="ml-3 leading-5 text-gray-600 font-dmsans">
           Evaluaciones psicolaborales para <span class="block text-indigo-600 xl:inline"> identificar el perfil del talento ya sea antes <p><span class="block text-indigo-600 xl:inline"> de ingresar a la organización, para un ascenso, o determinar su estancia, etc.  </span></p> </span>
       </p>
   </li>
</div>


   <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
       <div class="rounded-md shadow">
           <a href='https://2kliic9t7ed.typeform.com/to/Lw8OmtpQ'
               class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 ">
               Lo quiero
           </a>
       </div>

   </div>
  
</div>

<div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
   <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
</div>

</div>

</section>
</div>,

<div>
<section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
<div class="sm:text-center lg:text-left">
   <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
       <span class="block xl:inline">Capacitación y </span>
       
       <span class="block text-indigo-600 xl:inline">Personal</span>
   </h1>
   <p
       class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-dmsans">
       Nos importa el desarrollo y crecimiento de los Talentos, por eso nos involucramos en su capacitación y desarrollo, con capacitaciones a la medida.
   </p>

   <div>
<ul class="mt-8 space-y-3 font-medium"/>
   <li class="flex items-start lg:col-span-1 mb-4">
       <div class="flex-shrink-0">
           <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd"
                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                   clip-rule="evenodd"></path>
           </svg>
       </div>
       <p class="ml-3 leading-5 text-gray-600 font-dmsans">
       Desarrollo de habilidades blandas.
       </p>
   </li>
   
   <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0 mb-4">
       <div class="flex-shrink-0">
           <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd"
                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                   clip-rule="evenodd"></path>
           </svg>
       </div>
       <p class="ml-3 leading-5 text-gray-600 font-dmsans">
       Capacitaciones de empoderamiento.
       </p>
   </li>

   <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
       <div class="flex-shrink-0">
           <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd"
                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                   clip-rule="evenodd"></path>
           </svg>
       </div>
       <p class="ml-3 leading-5 text-gray-600 font-dmsans">
       Tallareves vivenciales.
       </p>
   </li>

</div>


   <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
       <div class="rounded-md shadow">
           <a href='https://2kliic9t7ed.typeform.com/to/Lw8OmtpQ'
               class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 ">
               Lo quiero
           </a>
       </div>

   </div>
  
</div>

<div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
   <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
</div>

</div>

</section>
</div>,

  ];

  return (
    <div className="container mx-auto flex flex-col justify-center p-3 lg:gap-8 w-full items-center my-12">
      <div className="flex w-full md:max-w-xl mx-4 rounded shadow">
  <button
    className={`${
      activeContent === 0 ? activeBtn : inactiveBtn
    } mb-2 lg:mb-0 px-4 py-2 rounded-l`}
    onClick={() => handleClick(0)}
  >
    Atracción de Personal
  </button>

  <button
    className={`${
      activeContent === 1 ? activeBtn : inactiveBtn
    } mb-2 lg:mb-0 px-4 py-2`}
    onClick={() => handleClick(1)}
  >
    Head Hunting
  </button>

  <button
    className={`${
      activeContent === 2 ? activeBtn : inactiveBtn
    } mb-2 lg:mb-0 px-4 py-2`}
    onClick={() => handleClick(2)}
  >
    Evaluación de Personal
  </button>

  <button
    className={`${
      activeContent === 3 ? activeBtn : inactiveBtn
    } mb-2 lg:mb-0 px-4 py-2 rounded-r`}
    onClick={() => handleClick(3)}
  >
    Evaluaciones Pro
  </button>
</div>
      <div>{content[activeContent]}</div>
    </div>
  );
}

export default Intermedio;
