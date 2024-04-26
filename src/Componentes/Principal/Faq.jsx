import React, { useState } from 'react';
import vector from '../../assets/Aprendizaje Continuo.gif';

function Faq() {
  // Estado local para controlar la visibilidad de cada pregunta
  const [showAnswer, setShowAnswer] = useState(Array(4).fill(false));

  // Función para alternar la visibilidad de la respuesta
  const toggleAnswer = (index) => {
    const newShowAnswer = [...showAnswer];
    newShowAnswer[index] = !newShowAnswer[index];
    setShowAnswer(newShowAnswer);
  };

  return (
    <section className="w-full py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-wrap justify-center items-center">
        
        <div className="max-w-md">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Preguntas Frecuentes</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Algunas preguntas que nos hacen a menudo</p>
          </div>

          <div className="max-w-md mt-8 space-y-4 md:mt-16">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className={`transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 rounded-lg ${showAnswer[index] ? 'border-blue-500' : ''}`}>
                <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleAnswer(index)}>
                  <span className="flex text-lg font-semibold text-black">¿Qué tipo de empresas suelen contratar sus servicios de reclutamiento?</span>
                  <svg className={`w-6 h-6 text-gray-400 ${showAnswer[index] ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${showAnswer[index] ? 'block' : 'hidden'}`}>
                  <p>Esta pregunta permitirá a los visitantes de tu página web comprender mejor el tipo de empresas que pueden beneficiarse de tus servicios.</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 textbase mt-9">¿Cuál es la experiencia y el historial de éxito de su empresa en el reclutamiento?<a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
        </div>
        
      </div>
    </section>
  );
}

export default Faq;
