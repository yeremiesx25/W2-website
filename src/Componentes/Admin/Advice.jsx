import React from 'react';

function Advice() {
  return (
    <div className="w-[90%] mx-auto h-40 bg-primarygradientmobile rounded-lg flex flex-col justify-center items-center text-white px-4">
      <p className="text-center text-sm font-regular mb-4">
        Completa tu objetivo mensual y gana entradas al cine!
      </p>
      <button className="bg-white text-blue-700 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-all duration-300">
        ¡Lo logré!
      </button>
    </div>
  );
}

export default Advice;
