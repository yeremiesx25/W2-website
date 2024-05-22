import React, { useState } from "react";
import agil from "../../assets/AGIL TALENT.png";
import eleva from "../../assets/ELEVA TALENT.png";
import top from "../../assets/TOP TALENT.png";
import start from "../../assets/STARTUP TALENT.png";
import reclut from "../../assets/Reclutamiento.png";
import hunt from "../../assets/head.png";
import evalu from "../../assets/evaluacion.png";
import emplo from "../../assets/employer.png";
import evalua from "../../assets/Evaluaciones.png";
import feliz from "../../assets/Felicidad.png";
import sico from "../../assets/Psico.png";
import flecha from "../../assets/flecha.png";
import habil from "../../assets/Habilidades.png";
import taller from "../../assets/Talleres.png";
import capacitacion from "../../assets/Capacitaciones.png";
import { motion } from "framer-motion";

function Intermedio() {
  const [activeContent, setActiveContent] = useState(0);

  const content = [
    <div>
      <section class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="transition-all duration-300 mx-auto max-w-7xl px-4  sm:px-6 lg:px-8  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row font-dmsans  border-gray-300 rounded-lg">
          
          <div class="sm:text-center lg:text-left my-8">
            <h1 class="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-4xl md:text-5xl">
              <span class="block xl:inline">Atracción de </span>
              <span class="block text-primarycolor xl:inline">Personal</span>
            </h1>
            <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Entendemos el cambio y la globalización es por ello que implementamos nuestra metodología de atracción fundamentada en el Inbound Recruiting. Que nos permite acelerar nuestros procesos y hacerlos efectivos.
            </p>

            <div>
              <ul class="mt-4 space-y-3 font-medium">
                <li class="flex items-start lg:col-span-1 mb-4">
                  <div class="flex items-center">
                    <img
                      src={agil}
                      alt="Icono"
                      class="w-20 h-20 text-indigo-600"
                    />
                    <p class="ml-3 leading-5 text-black">
                      Enfocado en procesos masivos de alta demanda como
                      <span class=" text-indigo-600 xl:inline">
                        {" "}
                       <br></br> Operario de almacen, producción, reparto, distribución,
                        estiba, conductores, prevencionistas, etc.
                      </span>
                    </p>
                  </div>
                </li>

                <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                  <div class="flex items-center">
                    <img
                      src={eleva}
                      alt="Icono"
                      class="w-20 h-20 text-indigo-600"
                    />
                    <p class="ml-3 leading-5 text-black">
                      Enfocado en personal de mandos medios como
                      <span class="block text-indigo-600 xl:inline">
                        {" "}
                        asistentes, supervisores, coordinadores, posiciones IT y
                        puestos <br></br>focalizados en una organización.
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-lg shadow">
                <a
                  href="https://2kliic9t7ed.typeform.com/to/Lw8OmtpQ"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 "
                >
                  Descubre el talento ideal
                </a>
              </div>
            </div>
          </div>

          <div class="lg:inset-y-0 lg:right-0 lg:w-1/2" >
            <img
              class="h-72 w-full object-cover sm:h-72 md:h-64 lg:w-full lg:h-full"
              src={reclut}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>,

    <div>
      <section class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="transition-all duration-300 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row font-dmsans border-gray-300">
          
          <div class="sm:text-center lg:text-left my-8">
            <h1 class="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-4xl md:text-5xl">
              <span class="block xl:inline">Head </span>
              <span class="block text-indigo-600 xl:inline">Hunting</span>
            </h1>

            <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Segmentamos nuestros procesos para crear una experiencia optima y
              a la medida de nuestros clientes.
            </p>

            <div>
              <ul class="mt-4 space-y-3 font-medium" />
              <li class="flex items-start lg:col-span-1 ">
                <div class="flex items-center">
                  <img
                    src={top}
                    alt="Icono"
                    class="w-20 h-20 text-indigo-600"
                  />
                  <p class="ml-3 leading-5 text-black">
                    Enfocado en procesos de atracción de mandos <br></br>altos
                    como{" "}
                    <span class="text-indigo-600 xl:inline"> gerencias, </span>{" "}
                    <span class="text-indigo-600 xl:inline">
                      {" "}
                      jefaturas y posiciones altamente especializadas.{" "}
                    </span>
                  </p>
                </div>
              </li>

              <li class="flex items-start lg:col-span-1 mb-4">
                <div class="flex items-center">
                  <img
                    src={start}
                    alt="Icono"
                    class="w-20 h-20 text-indigo-600"
                  />
                  <p class="ml-3 leading-5 text-black">
                    Enfocado en procesos de{" "}
                    <span class=" text-indigo-600 xl:inline">
                      {" "}
                      atracción para startups, <br></br> adaptados a su
                      necesidad.
                    </span>
                  </p>
                </div>
              </li>
            </div>

            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-lg shadow">
                <a
                  href="https://2kliic9t7ed.typeform.com/to/Lw8OmtpQ"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 "
                >
                  Encuentra a tu próximo líder
                </a>
              </div>
            </div>
          </div>

          <div class="lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-60 w-full object-cover sm:h-72 md:h-64 lg:w-full lg:h-full"
              src={hunt}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>,

    <div>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="transition-all duration-300 mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row font-dmsans shadow-xl border-gray-300">
          <div class="sm:text-center lg:text-left my-8">
            <h1 class="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-4xl md:text-5xl">
              <span class="block xl:inline">Evaluación de </span>
              <span class="block text-indigo-600 xl:inline">Personal</span>
            </h1>
            <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Es importante conocer a nuestro equipo de trabajo antes y durante
              su estancia en tu organización, por ese motivo para nosotros es
              importante la aplicación de evaluaciones que nos permitan
              identificar el perfil de nuestros colaboradores.
            </p>

            <div>
              <ul class="mt-4 space-y-3 font-medium" />

              <li class="flex items-start lg:col-span-1 ">
                <div class="flex items-center">
                  <img src={feliz} alt="Icono" class="w-16 h-16" />
                  <p class="ml-3 leading-5 text-black font-dmsans">
                    {" "}
                    Evaluaciones de clima y cultura adaptados a la realidad y{" "}
                    <span class=" text-indigo-600 xl:inline">

                      necesidad de la organización.{" "}
                    </span>
                  </p>
                </div>
              </li>

              <li class="flex items-start lg:col-span-1 ">
                <div class="flex items-center">
                  <img src={evalua} alt="Icono" class="w-16 h-16" />
                  <p class="ml-3 leading-5 text-black font-dmsans">
                    {" "}
                    Evaluaciones de desempeño que permitan{" "}
                    <span class=" text-indigo-600 xl:inline">
                      {" "}
                      incrementar el potencial de un equipo de trabajo.
                    </span>{" "}
                    <p>
                      {" "}
                      <span class="block text-indigo-600 xl:inline"> </span>
                    </p>
                  </p>
                </div>
              </li>

              <li class="flex items-start lg:col-span-1 ">
                <div class="flex items-center">
                  <img src={sico} alt="Icono" class="w-16 h-16" />
                  <p class="ml-3 leading-5 text-black font-dmsans">
                    Evaluaciones psicolaborales para
                    <span class="text-indigo-600 xl:inline">
                      {" "}
                      identificar el perfil del talento ya sea <br></br>antes
                      de ingresar a la organización, para un ascenso, o
                      determinar su estancia, etc.{" "}
                    </span>
                  </p>
                </div>
              </li>
            </div>

            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-lg shadow">
                <a
                  href="https://2kliic9t7ed.typeform.com/to/Lw8OmtpQ"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 "
                >
                  Evalúa tu equipo ahora
                </a>
              </div>
            </div>
          </div>

          <div class="bottom-0 lg:w-1/2 h-full">
            <img
              class="h-84 w-full object-cover sm:h-72 md:h-64 lg:w-full lg:h-[60%]"
              src={evalu}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>,

    <div>
      <section class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="transition-all duration-300 mx-auto max-w-7xl px-4  sm:px-6 lg:px-8  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row font-dmsans border-gray-300 rounded-lg">
          <div class="sm:text-center lg:text-left my-8">
            <h1 class="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-4xl md:text-5xl">
              <span class="block xl:inline">Employer </span>
              <span class="block text-indigo-600 xl:inline"> Branding</span>
            </h1>

            <p class="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
           Entendemos el cambio y la globalización es por ello que implementamos nuestra metodología de atracción fundamentada en el Inbound Recruiting. Que nos permite acelerar nuestros procesos y hacerlos efectivos.

            </p>

            <div>
              <ul class="mt-4 space-y-3 font-medium">
                <li class="flex items-start lg:col-span-1 mb-4">
                  <div class="flex items-center">
                    <img src={habil} alt="Icono" class="w-12 h-12" />
                    <p class="ml-3 leading-5 text-black font-dmsans">
                    Brand Bootcamp | Capacitación Intensiva en Employer Branding
                    </p>
                  </div>
                </li>

                <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                  <div class="flex items-center">
                    <img src={capacitacion} alt="Icono" class="w-12 h-12" />
                    <p class="ml-3 leading-5 text-black font-dmsans">
                    Brand Leadership Academy | Liderazgo Inspirador para una Marca Empleadora Poderosa.
                    </p>
                  </div>
                </li>

                <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                  <div class="flex items-center">
                    <img src={taller} alt="Icono" class="w-12 h-12" />
                    <p class="ml-3 leading-5 text-black font-dmsans">
                    Brand ADN Workshops | Construyendo la Identidad Cultural de una Marca Empleadora de Vanguardia.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-lg shadow">
                <a
                  href="https://2kliic9t7ed.typeform.com/to/Lw8OmtpQ"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 text-center"
                >
                  Fortalece tu marca empleadora
                </a>
              </div>
            </div>
          </div>

          <div class="lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-full w-full object-cover sm:h-72 md:h-64 lg:w-full lg:h-full"
              src={emplo}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>,
  ];
  const activeBtn = "w-72 flex items-center justify-center font-semibold m-2 px-5 py-2 border-b-4 text-primarycolor border-blue-500 font-dmsans transition duration-300";

  const inactiveBtn = "w-72 flex items-center justify-center font-semibold hover:text-primarycolor m-2 px-5 py-2 border-b-4 bg-white text-gray-800 border-transparent hover:border-blue-500 font-dmsans transition duration-300";
  

  return (
    <div id="intermedio" className=" flex flex-wrap justify-center w-full items-center">
      <h2 className="text-primarytext font-semibold text-4xl mt-8 md:mt-20 text-center">
        {" "}
        <img src={flecha} alt="" className="inline-block w-16 h-12 mr-2"></img>
        Brindamos soluciones para todo tipo de reto de <br></br>{" "}
        <span class="block text-primarycolor xl:inline">GESTION HUMANA </span>
      </h2>
      <div className="flex w-auto flex-wrap justify-center mx-4 border-b-2 mt-12">
        <button
          className={`${
            activeContent === 0 ? activeBtn : inactiveBtn
          } mb-2 lg:mb-0 py-2 `}
          onMouseEnter={() => setActiveContent(0)}
        >
          Atracción de Personal
        </button>

        <button
          className={`${
            activeContent === 1 ? activeBtn : inactiveBtn
          } mb-2 lg:mb-0  py-2 `}
          onMouseEnter={() => setActiveContent(1)}
        >
          Head Hunting
        </button>

        <button
          className={`${
            activeContent === 2 ? activeBtn : inactiveBtn
          } mb-2 lg:mb-0  py-2`}
          onMouseEnter={() => setActiveContent(2)}
        >
          Evaluación de Personal
        </button>

        <button
          className={`${
            activeContent === 3 ? activeBtn : inactiveBtn
          } mb-2 lg:mb-0 py-2 `}
          onMouseEnter={() => setActiveContent(3)}
        >
          Employer Branding
        </button>
      </div>
      <div className=" text-white">{content[activeContent]}</div>
    </div>
  );
}

export default Intermedio;
