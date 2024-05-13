import React, { useState } from 'react';
import logoLacruz from '../../assets/STARTUP TALENT.png';
import modalimg from '../../assets/Pop.gif';


function CardTrabajo() {
  const [modalOpen, setModalOpen] = useState(true); // Cambiado a true para que el modal se abra automáticamente

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Resto del contenido del componente */}
      
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-50 relative">
            {/* Botón de cerrar */}
            <button onClick={handleModalClose} className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg font-semibold">X</button>
            {/* Imagen */}
            <img className='w-full max-h-[80vh]' src= {modalimg} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default CardTrabajo;