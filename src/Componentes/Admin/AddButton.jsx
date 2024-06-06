import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

function AddButton() {
  return (
    <div className=''>
      <Link to="/AdminForm">
        <button
          className='w-60 h-16 bg-primarycolor text-white font-semibold shadow-md rounded-lg flex justify-center items-center gap-6'
        >
          <FaPlus size={20} /> <p className=''>Agregar Puesto</p>
        </button>
      </Link>
    </div>
  );
}

export default AddButton;
