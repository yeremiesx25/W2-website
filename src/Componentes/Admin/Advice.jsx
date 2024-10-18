import React from 'react';

function Advice() {
  const handleButtonClick = () => {
    const phoneNumber = '970632448'; // Aquí va el número de WhatsApp, con código de país (sin el +)
    const message = 'Hola, he completado mi objetivo mensual en la Plataforma Power.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <div className="w-[90%] mx-auto h-40 bg-white rounded-lg flex flex-col justify-center items-center text-primarycolor px-4 font-lato">
      <p className="text-center text-sm font-normal mb-4 px-4">
        Completa tu objetivo mensual y gana entradas al cine!
      </p>
      <button
        className="bg-yellowprimary text-primarycolor font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-all duration-300"
        onClick={handleButtonClick}
      >
        ¡Lo logré!
      </button>
    </div>
  );
}

export default Advice;
