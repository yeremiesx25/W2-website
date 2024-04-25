import React, { useState, useEffect } from 'react';

const IncrementingNumber = ({ finalNumber, label, tiempo }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < finalNumber) {
        setNumber(prevNumber => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, tiempo); // Intervalo de tiempo en milisegundos

    return () => clearInterval(interval); // Limpieza del intervalo al desmontar el componente
  }, [number, finalNumber]);

  return (
    <div className='flex w-32 h-32 flex-col items-center justify-center text-center'>
      <h3 className='text-4xl font-bold'>{number}<span className='text-primarycolor'>+</span></h3>
      <h4 className='font-medium text-gray-700'>{label}</h4>
    </div>
  );
};

export default IncrementingNumber;
