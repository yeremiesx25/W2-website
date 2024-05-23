import React, { useState } from 'react';
import flecha from "../../assets/flecha.png";

function FaqPracticantes() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      pregunta: "¿Qué carreras son las más solicitadas?",
      respuesta:
        "¡Buscamos personas apasionadas por Recursos Humanos o áreas similares para unirse a nuestro equipo de Talent Hub en constante crecimiento! Si tienes interés en contribuir con tu talento en atracción y selección de personal, ¡Te animamos a aplicar!"
    },
    {
      pregunta: "¿Cuánto tiempo de experiencia se solicita?",
      respuesta:
        "¡No importa si tienes o no experiencia previa! Ofrecemos capacitación para todos. Durante nuestro assessment center, evaluaremos tus habilidades para que puedas destacar. ¡Esperamos tu participación!"
    },
    {
      pregunta: "¿Cuál es la modalidad de trabajo?",
      respuesta:
        "¡Nuestro enfoque es único y flexible! Trabajamos en un modelo híbrido: 90% virtual y 10% presencial. Nos reunimos mensualmente para fortalecer lazos, celebrar logros y establecer metas emocionantes. Es una combinación perfecta de colaboración y flexibilidad."
    },
    {
      pregunta: "¿Cada cuánto tiempo inicia Descubriendo Talentos?",
      respuesta:
        "Realizamos Descubriendo Talentos tres veces al año o según el incremento de nuestras operaciones. Mantente atento a nuestras redes sociales y a nuestro sitio web para conocer las fechas exactas de cada convocatoria."
    },
    {
      pregunta: "¿Luego de aplicar, cómo sé que me van a considerar?",
      respuesta:
        "¡Gracias por tu interés! Revisaremos todas las solicitudes antes de nuestro próximo evento de Descubriendo Talentos. Si eres seleccionado, recibirás un correo electrónico y un mensaje por WhatsApp detallando el proceso. ¡Estamos emocionados de tenerte en nuestro proceso de selección! ¡Buena suerte!"
    }
  ];

  return (
    <div className="relative w-full font-dmsans bg-white px-6 pt-4 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 mb-10">
      <div className="text-center">
        <h2 className="text-primarytext font-bold text-4xl mt-8 md:mt-8 text-center">
          <img src={flecha} alt="" className="inline-block w-16 h-12 mr-2" />
          Preguntas <span className=" text-primarycolor xl:inline"> Frecuentes</span>
        </h2>

        <p className="mt-4  leading-7 text-gray-700 font-regular">
          Encuentra respuestas a tus dudas sobre cómo formar parte de nuestro programa y dar un impulso a tu carrera profesional. Si necesitas más información, ¡Contáctanos! Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-xl">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="py-5 border-b border-gray-200"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="flex justify-between items-center font-semibold font-dmsans text-primarytext">
              <div>{faq.pregunta}</div>
              <svg
                className={`h-6 w-6 transition-transform ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-gray-800">{faq.respuesta}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPracticantes;