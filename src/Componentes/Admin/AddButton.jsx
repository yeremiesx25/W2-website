import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

function AddButton() {
  return (
    <div className='rounded-md border border-indigo-500 bg-newprimarycolor shadow-md w-36'>

      <Link className='w-full h-full p-6 flex justify-center' to="/AdminForm">
        <button
          className='flex flex-col items-center justify-center cursor-pointer text-white'
          aria-label="Crear Oferta"
        >
          <FaPlus size={20} /> 
          <p className=''>Crear Oferta</p>
        </button>
      </Link>
    </div>
  );
}

export default AddButton;