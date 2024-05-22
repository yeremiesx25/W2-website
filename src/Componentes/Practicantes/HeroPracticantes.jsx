import React from "react";
import fondoIlustrado from "../../assets/BG 31.png";
import imgHero from "../../assets/3d-practicantes.png";
import arrow from "../../assets/flechas-a-la-derecha.png";
import Descubre from "./Descubre";
function HeroPracticantes() {
  return (
    <section className="pt-28 flex flex-wrap font-dmsans md:px-12">
      <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center gap-6 px-4 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-primarytext ">Descubriendo <span className="text-primarycolor">Talentos</span></h1>
        <p className="text-gray-700 text-lg">Un programa para estudiantes de últimos ciclos que desean formarse y unirse a W2. Ofrecemos oportunidades prácticas que complementan su formación académica, preparándolos para los desafíos laborales. No requerimos experiencia, sino TALENTO y PASIÓN.</p>
        <a href="#" className="bg-primarycolor p-2 text-white font-semibold rounded-lg w-80 h-14 text-lg flex items-center justify-center hover:text-primarycolor hover:border-2 hover:border-primarycolor hover:bg-white">
          Descubre nuestro ecosistema
          </a>
      </div>
      <div style={{ backgroundImage: `url(${fondoIlustrado})` }}
      className="w-1/2 md:w-1/2 flex justify-center bg-contain mt-12 md:mt-0 items-center mx-auto">
        <img className="" src={imgHero} alt="" />
      </div>
      
    </section>
  );
}

export default HeroPracticantes;
