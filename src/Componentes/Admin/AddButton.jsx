import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

function AddButton() {
  return (
    <div className='w-48 h-32 p-6  rounded-lg flex flex-col justify-center items-center'>
      <div className='text-sm'>
        
      </div>
      <Link to="/AdminForm">
        <button
          className='w-full h-12 bg-primarycolor text-white font-bold  rounded-lg flex justify-center items-center gap-2 px-2'
          aria-label="Crear Oferta"
        >
          <FaPlus size={20} /> 
          <p className=''>Crear Oferta </p>
        </button>
      </Link>
    </div>
  );
}

export default AddButton;