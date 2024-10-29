import React from 'react';

const EnviarMensaje = ({ candidato, puesto, programaData }) => {
  const handleContact = () => {
    if (candidato.telefono) {
      const message = `Hola ${candidato.name_user || candidato.nombre}, estamos en el proceso de selección para el puesto de ${puesto}. 
      La plataforma es ${programaData[0]?.plataforma_1}`;
      const phoneNumber = candidato.telefono.replace(/\D/g, '');
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      console.error(`Candidato ${candidato.nombre} no tiene número de teléfono.`);
    }
  };

  return (
    <button onClick={handleContact} className="p-2 bg-green-500 text-white rounded">
      Contactar
    </button>
  );
};

export default EnviarMensaje;