import React, { useState } from "react";
import agil from '../../assets/AGIL TALENT.png'
import eleva from '../../assets/ELEVA TALENT.png'
import top from '../../assets/TOP TALENT.png'
import start from '../../assets/STARTUP TALENT.png'
import reclut from '../../assets/Reclutamiento.png'
import hunt from '../../assets/head.png'
import evalu from '../../assets/evaluacion.png'
import user from '../../assets/usuarios.png'
import hed from '../../assets/headh.png'
import reunion from '../../assets/reu.png'
import desarrollo from '../../assets/Aprendizaje.png'
import anali from '../../assets/analizar.png'
import evalua from '../../assets/Evaluaciones.png'
import feliz from '../../assets/Felicidad.png'
import sico from '../../assets/Psico.png'
import flecha from '../../assets/flecha.png'
import habil from '../../assets/Habilidades.png'
import taller from '../../assets/Talleres.png'
import capacitacion from '../../assets/Capacitaciones.png'
import { motion } from "framer-motion";

function Intermedio() {
    const [activeContent, setActiveContent] = useState(0);

    const activeBtn =
      "w-72 flex items-center gap-x-4 justify-center font-medium rounded-lg m-2 px-5 py-2 border bg-blue-600 text-white border-gray-200 "; 
  
    const inactiveBtn = "w-72 flex items-center gap-x-4 justify-center font-medium rounded-lg m-2 px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100 font-dmsans";
    
    const content = [
    
    <div>
     <section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 clas">

    <div class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-12 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row font-dmsans shadow-xl border-gray-300 rounded-lg">
    
    <div class="sm:text-center lg:text-left my-8">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Atracción de </span>
            <span class="block text-indigo-600 xl:inline">Personal</span>
        </h1>
        
        <p
            class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Entendemos el cambio y la globalización es por ello que implementamos nuestra metodología de atracción fundamentada en el Inbound Recruiting. 
            Que nos permite acelerar nuestros procesos y hacerlos efectivos.
        </p>

    <div>
        <ul class="mt-8 space-y-3 font-medium">
        <li class="flex items-start lg:col-span-1 mb-4">
            <div class="flex items-center"> 
                <img src={agil} alt="Icono" class="w-20 h-20 text-indigo-600" /> 
                <p class="ml-3 leading-5 text-gray-600">
                    Enfocado en procesos masivos de alta demanda como
                    <p></p><span class="block text-indigo-600 xl:inline"> Operario  de almacen, producción, reparto, distribución, estiba, conductores, prevencionistas, etc.</span>
                </p>
            </div>
        </li>
        
        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex items-center"> 
                <img src={eleva} alt="Icono" class="w-20 h-20 text-indigo-600" /> 
                <p class="ml-3 leading-5 text-gray-600 font-dmsans">
                    Enfocado en personal de mandos medios como 
                    <span class="block text-indigo-600 xl:inline"> asistentes, supervisores, coordinadores, posiciones IT y puestos focalizados en una organización.</span>
                </p>
            </div>
        </li>
    </ul>
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
    
    <div class="lg:inset-y-0 lg:right-0 lg:w-1/ my-4">
        <img class="h-56 w-full object-cover sm:h-72 md:h-64 lg:w-full lg:h-full" src={ reclut } alt=""/>
    </div>
  
</div>
</section>
</div>,


   <div>
       <section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

   <div class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-12 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row font-dmsans shadow-xl border-gray-300">

   <div class="sm:text-center lg:text-left my-8">
       
       <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
       <span class="block xl:inline">Head </span>
       <span class="block text-indigo-600 xl:inline">Hunting</span>
       </h1>
   
   <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
       Segmentamos nuestros procesos para crear una 
       experiencia optima y a la medida de nuestros clientes.
   </p>

   <div>

    <ul class="mt-8 space-y-3 font-medium"/>
        <li class="flex items-start lg:col-span-1 mb-4">
            <div class="flex items-center"> 
                <img src={top} alt="Icono" class="w-20 h-20 text-indigo-600" /> 
                <p class="ml-3 leading-5 text-gray-600">
                Enfocado en procesos de atracción de mandos <br></br>altos como <span class="text-indigo-600 xl:inline">  gerencias, </span> <span class="text-indigo-600 xl:inline">  jefaturas y posiciones altamente especializadas. </span> 
                </p>
            </div>
        </li>


        <li class="flex items-start lg:col-span-1 mb-4">
            <div class="flex items-center"> 
                <img src={start} alt="Icono" class="w-20 h-20 text-indigo-600" /> 
                <p class="ml-3 leading-5 text-gray-600">
                Enfocado en procesos de <span class=" text-indigo-600 xl:inline"> atracción para startups, <br></br> adaptados a su necesidad.</span>
                </p>
            </div>
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
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={ hunt } alt=""/>
    </div>

</div>
</section>
</div>,

    <div>
        <section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-12 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row font-dmsans shadow-xl border-gray-300">

    <div class="sm:text-center lg:text-left my-8">
   
       <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
       <span class="block xl:inline">Evaluación de </span>
       <span class="block text-indigo-600 xl:inline">Personal</span>
       </h1>
    <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
       Es importante conocer a nuestro equipo de trabajo antes y durante su estancia en tu organización, por ese motivo para nosotros es importante la aplicación de evaluaciones que nos permitan identificar el perfil de nuestros colaboradores. 
   </p>

<div>
<ul class="mt-8 space-y-3 font-medium"/>
   
        <li class="flex items-start lg:col-span-1 mb-4">
            <div class="flex items-center"> 
                <img src={feliz} alt="Icono" class="w-20 h-20" /> 
                <p class="ml-3 leading-5 text-gray-600 font-dmsans"> Evaluaciones de clima y cultura adaptados a la realidad y <br></br><span class=" text-indigo-600 xl:inline"> necesidad de la organización. </span>
                </p>
            </div>
        </li>


        <li class="flex items-start lg:col-span-1 mb-4">
            <div class="flex items-center"> 
                <img src={evalua} alt="Icono" class="w-20 h-20" /> 
                <p class="ml-3 leading-5 text-gray-600 font-dmsans"> Evaluaciones de desempeño que permitan <span class=" text-indigo-600 xl:inline"> incrementar el <br></br>potencial de un equipo de trabajo.</span> <p> <span class="block text-indigo-600 xl:inline">  </span></p>
                </p>
            </div>
        </li>
     

    <li class="flex items-start lg:col-span-1 mb-4">
      <div class="flex items-center"> 
        <img src={sico} alt="Icono" class="w-20 h-20" /> 
        <p class="ml-3 leading-5 text-gray-600 font-dmsans">
            Evaluaciones psicolaborales para 
            <span class="text-indigo-600 xl:inline"> identificar el perfil del <br></br> talento ya sea antes de ingresar a la organización, para un <br></br>ascenso, o determinar su estancia, etc. </span> 
        </p>
      </div>
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
      <img class="h-42 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src= { evalu } alt=""/>
    </div>

     </div>
   </section>
</div>,

   <div>
       <section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-12 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row font-dmsans shadow-xl border-gray-300">

    <div class="sm:text-center lg:text-left my-8">
       <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
       <span class="block xl:inline">Employer</span>
       <span class="block text-indigo-600 xl:inline">Branding</span>
   </h1>
   
   <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
   Te adyudamos aplicar una de las estrategias modernas para atraer, retener y comprometer a los mejores talentos. Nuestro enfoque será construir tu marca empleadora sólida y atractiva, que destaque los valores, la cultura y las oportunidades únicas que ofreces como empleador. Desde la creación de una identidad corporativa distintiva hasta el diseño de experiencias de empleado excepcionales, nuestro equipo trabajará en colaboración con su empresa para posicionarla como un empleador de elección. </p>

   <div>
     <ul class="mt-8 space-y-3 font-medium"/>
     <li class="flex items-start lg:col-span-1 mb-4">
      <div class="flex items-center"> 
        <img src={habil} alt="Icono" class="w-20 h-20" /> 
        <p class="ml-3 leading-5 text-gray-600 font-dmsans">
            Desarrollo de habilidades blandas.
        </p>
      </div>
    </li>
   
   <li class="flex items-start lg:col-span-1 mb-4">
      <div class="flex items-center"> 
        <img src={capacitacion} alt="Icono" class="w-20 h-20" /> 
        <p class="ml-3 leading-5 text-gray-600 font-dmsans">
            Capacitaciones de emporamiento.
        </p>
      </div>
    </li>

    <li class="flex items-start lg:col-span-1 mb-4">
      <div class="flex items-center"> 
        <img src={taller} alt="Icono" class="w-20 h-20" /> 
        <p class="ml-3 leading-5 text-gray-600 font-dmsans">
            Talleres vivenciales.
        </p>
      </div>
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
   <img class="h-42 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={desarrollo} alt=""/>
</div>
</div>

</section>
</div>,

  ];

  return (
    <div className=" flex flex-wrap justify-center p-2 lg:gap-8 w-full items-center">
    <h2 className="text-primarytext font-semibold text-5xl mt-8 md:mt-20 text-center"> <img src ={flecha} alt="" className="inline-block w-16 h-12 mr-2"></img>Brindamos soluciones para todo tipo de reto de <br></br> <span class="block text-primarycolor xl:inline">Gestión Humana </span></h2>
  <div className="flex w-full flex-wrap justify-center mx-4 rounded">

    <button
        className={`${activeContent === 0 ? activeBtn : inactiveBtn} mb-2 lg:mb-0 px-4 py-2 rounded-l `}
        onMouseEnter={() => setActiveContent(0)}
    >
       Atracción de Personal
    </button>

    <button
        className={`${activeContent === 1 ? activeBtn : inactiveBtn} mb-2 lg:mb-0 px-4 py-2 `}
        onMouseEnter={() => setActiveContent(1)}
    >
       Head Hunting
    </button>

    <button
        className={`${activeContent === 2 ? activeBtn : inactiveBtn} mb-2 lg:mb-0 px-4 py-2`}
        onMouseEnter={() => setActiveContent(2)}
    >
        Evaluación de Personal
    </button>

    <button
        className={`${activeContent === 3 ? activeBtn : inactiveBtn} mb-2 lg:mb-0 px-4 py-2 rounded-r`}
        onMouseEnter={() => setActiveContent(3)}
    >
        Employer Branding
    </button>
</div>
<div>{content[activeContent]}</div>
</div>
);
}

export default Intermedio;
