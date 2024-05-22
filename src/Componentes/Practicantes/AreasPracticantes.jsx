import React from "react";
import talent from "../../assets/talent_hub.jpg";
import creative from "../../assets/Copia de IMG_4036.jpg";
import tech from "../../assets/tech_lab.jpg";
import mind from "../../assets/mind_mastery.jpg";
import money from "../../assets/money_matrix.jpg";

function AreasPracticantes() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-8 font-dmsans mb-8 ">

   
    <div className="rounded overflow-hidden shadow-lg flex flex-col w-96">
      
        <div className="relative">
          <img className="w-full h-full" src={talent} alt="Atardecer en las montañas" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </div>
      
      <a href="#!">
        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          Cocina
        </div>
      </a>
      <div className="px-6 py-4 mb-auto">
        <p href="#" className="text-lg text-primarytext font-semibold transition duration-500 ease-in-out inline-block mb-2">
          Talent Hub: El Corazón de la Atracción de Talento
        </p>
        <p className="text-gray-700 text-sm">
        Dirigido a estudiantes de
Psicología Organizacional,
Recursos Humanos,
Ing. Industrial (enfocada en
RR.HH)
        </p>
      </div>
      <a href="https://w2asesoresyconsultores.bitrix24.es/pub/form/10_como_podemos_ayudarte_/ex701t/?view=preview&preview=click" className="px-6 py-3 flex flex-row items-center justify-center bg-primarycolor cursor-pointer">
        
          <span className="ml-1 text-white font-semibold">Postula Aquí</span>
        
      </a>
    </div> 

    <div className="rounded overflow-hidden shadow-lg flex flex-col w-96">
      
        <div className="relative">
          <img className="w-full h-full" src={creative} alt="Atardecer en las montañas" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </div>
      
      <a href="#!">
        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          Cocina
        </div>
      </a>
      <div className="px-6 py-4 mb-auto">
        <a href="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
        Creative Nexus: Conectando Marcas con Audiencias de Impacto 
        </a>
        <p className="text-gray-700 text-sm">
        Dirigido a estudiantes de las
carreras de Comunicaciones,
Marketing, Diseño gráfico,
Edición de video, Fotografía,
y afines.   
        </p>
      </div>
      <a className="px-6 py-3 flex flex-row items-center justify-center bg-primarycolor cursor-pointer">
        
          <span className="ml-1 text-white font-semibold">Postula Aquí</span>
        
      </a>
    </div> 

    <div className="rounded overflow-hidden shadow-lg flex flex-col w-96">
      
        <div className="relative">
          <img className="w-full h-full" src={tech} alt="Atardecer en las montañas" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </div>
      
      <a href="#!">
        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          Cocina
        </div>
      </a>
      <div className="px-6 py-4 mb-auto">
        <a href="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
        Tech Lab: Donde la Innovación Define el Futuro
        </a>
        <p className="text-gray-700 text-sm">
        Dirigido a estudiantes de las carreras de Ingeniería en Sistemas, Ingeniería de Software, Ciencias de la Computación, Ingeniería en Informática, y afines.
        </p>
      </div>
      <a href="https://w2asesoresyconsultores.bitrix24.es/pub/form/10_como_podemos_ayudarte_/ex701t/?view=preview&preview=click" className="px-6 py-3 flex flex-row items-center justify-center bg-primarycolor cursor-pointer">
        
          <span className="ml-1 text-white font-semibold">Postula Aquí</span>
        
      </a>
    </div> 

    <div className="rounded overflow-hidden shadow-lg flex flex-col w-96">
      
        <div className="relative">
          <img className="w-full h-full" src={mind} alt="Atardecer en las montañas" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </div>
      
      <a href="#!">
        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          Cocina
        </div>
      </a>
      <div className="px-6 py-4 mb-auto">
        <a href="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
        Mind Mastery: Desarrollando el Potencial a Través del Conocimiento
        </a>
        <p className="text-gray-700 text-sm">
        Dirigido a estudiantes de las carreras de Educación, Pedagogía, Ciencias de la Educación, Psicopedagogía, y afines.
        </p>
      </div>
      <a className="px-6 py-3 flex flex-row items-center justify-center bg-primarycolor cursor-pointer">
        
          <span className="ml-1 text-white font-semibold">Postula Aquí</span>
        
      </a>
    </div> 

    <div className="rounded overflow-hidden shadow-lg flex flex-col w-96">
      
        <div className="relative">
          <img className="w-full h-full" src={money} alt="Atardecer en las montañas" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </div>
      
      <a href="#!">
        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          Cocina
        </div>
      </a>
      <div className="px-6 py-4 mb-auto">
        <a href="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
        MoneyMatrix: Construyendo futuros financieros
        </a>
        <p className="text-gray-700 text-sm">
        Dirigido a estudiantes de
Administración, contabilidad,
finanzas, economía y afines. 
        </p>
      </div>
      <a href="https://w2asesoresyconsultores.bitrix24.es/pub/form/10_como_podemos_ayudarte_/ex701t/?view=preview&preview=click" className="px-6 py-3 flex flex-row items-center justify-center bg-primarycolor cursor-pointer">
        
          <span className="ml-1 text-white font-semibold">Postula Aquí</span>
        
      </a>
    </div> 

    
    </div>
  );
}

export default AreasPracticantes;
