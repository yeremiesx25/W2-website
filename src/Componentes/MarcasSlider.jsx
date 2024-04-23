import React from 'react';
import redondos from '../assets/logo-redondos.png'; // Importa todos tus logotipos aquí

function MarcasSlider() {
  const logos = [redondos, redondos, redondos, redondos, redondos, redondos, redondos, redondos, redondos]; // Agrega todos tus logotipos aquí

  return (
    <div className="py-8 overflow-hidden">
      <h1 className="text-center text-2xl font-bold mb-6">Nuestros clientes</h1>
      <div className="flex items-center space-x-8 animate-marquee" style={{ width: `${logos.length * 120}px` }}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="h-20" />
        ))}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            animation: marquee 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default MarcasSlider;
