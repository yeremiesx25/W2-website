import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

function AddButton() {
  return (
    <div>
      <Link to="/AdminForm">
        <button
          className='w-60 bg-primarycolor text-white font-semibold shadow-md rounded-lg flex justify-center items-center gap-6 h-20'
          aria-label="Crear nueva oferta"
        >
          <FaPlus size={20} /> 
          <p>Crear Oferta</p>
        </button>
      </Link>
    </div>
  );
}

export default AddButton;
