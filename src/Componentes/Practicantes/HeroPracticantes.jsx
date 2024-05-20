import React from "react";
import fondo from "../../assets/FondoBanner2.png";
import imgHero from "../../assets/imgPracticas.png";
import arrow from "../../assets/flechas-a-la-derecha.png";
import Descubre from "./Descubre";
function HeroPracticantes() {
  return (
    <section
  style={{ backgroundImage: `url(${fondo})` }}
  className="pt-20 md:pt-40 font-dmsans"
>
      
      <div class="container mx-auto px-0 md:px-8 lg:flex">
        
        <div class="text-center lg:text-left lg:w-1/2">
          
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            
            Descubriendo <span className="text-primarycolor">Talentos</span>{" "}
          </h1>
          <p class=" lg:text-xl mt-6 font-light">
            Un programa diseñado para estudiantes de los últimos ciclos que
            buscan formarse y formar parte de W2. Nos esforzamos por preparar a
            los estudiantes para enfrentar los desafíos del mundo laboral al
            brindarles oportunidades prácticas que complementen su formación
            académica. No buscamos experiencia, buscamos DESCUBRIR TALENTO y
            PASIÓN.
          </p>
          <a
            href="/Empresas"
            title=""
            className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-primarycolor border-2 border-transparent sm:w-auto rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 animate-fade-right mt-8"
            role="button"
          >
            Descubre nuestro ecosistema
            <span
              className="flex items-center justify-center bg-no-repeat ml-2 animate-fade-right"
              style={{
                backgroundImage: `url(${arrow})`,
                width: "30px",
                height: "20px",
              }}
            ></span>
          </a>
        </div>
        <div class="lg:w-1/2 flex justify-center">
          <img src={imgHero} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroPracticantes;
