import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import AddPuestoForm from './FormAdd'; // Ajusta la ruta según la ubicación de tu archivo

function AddButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=''>
      <button
        onClick={() => setIsModalOpen(true)}
        className='w-60 h-16 bg-primarycolor text-white font-semibold shadow-md rounded flex justify-center items-center gap-6'
      >
         <FaPlus size={20} /> <p className=''>Agregar Puesto</p>
      </button>

      {isModalOpen && (
        <AddPuestoForm onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default AddButton;