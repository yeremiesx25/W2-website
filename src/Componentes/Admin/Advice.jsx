import React from 'react';

function Advice() {
  const handleButtonClick = () => {
    const phoneNumber = '970632448'; // Aquí va el número de WhatsApp, con código de país (sin el +)
    const message = 'Hola, he completado mi objetivo mensual en la Plataforma Power.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <div className="w-[90%] mx-auto h-40 bg-primarygradientmobile rounded-lg flex flex-col justify-center items-center text-white px-4">
      <p className="text-center text-sm font-regular mb-4">
        Completa tu objetivo mensual y gana entradas al cine!
      </p>
      <button
        className="bg-white text-blue-700 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-all duration-300"
        onClick={handleButtonClick}
      >
        ¡Lo logré!
      </button>
    </div>
  );
}

export default Advice;
