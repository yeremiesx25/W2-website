import React from 'react';
import 'tailwindcss/tailwind.css';
import exampleImage from '../../assets/coaches.png'; // Asegúrate de cambiar esta ruta por la de tu imagen

const CtaPower = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen p-4 bg-gray-100 md:px-20 font-dmsans">
      <div className="w-full md:w-1/2 flex flex-col text-center justify-center md:items-start md:text-left space-y-4 md:space-y-6 md:px-16">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-gray-800">
          Nuestros coaches <br />
          están listos para asesorarte <br />
        </h1>
        <p className="text-sm md:text-lg text-gray-600">
        Contamos con un equipo de profesionales expertos para ayudarte a conseguir el trabajo que deseas.
        </p>
        <li class="my-1 flex w-1/2 items-center text-gray-600">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Asesoría y orientación de cv
            </li>
            <li class="my-1 flex w-1/2 items-center text-gray-600">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Preparación para la entrevista
            </li>
            <li class="my-1 flex w-1/2 items-center text-gray-600">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Desarrollo de habilidades blandas
            </li>
        <button className="bg-primarycolor text-white py-2 px-4 md:px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Chatear con un coach
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative w-full md:w-2/3 h-auto bg-primarycolor p-4 rounded-lg">
          <img src={exampleImage} alt="Person with tablet" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CtaPower;
