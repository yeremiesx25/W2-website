import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

function AddButton() {
  return (
    <div className=''>
      <Link to="/AdminForm">
        <button
          className='w-60  bg-primarycolor text-white font-semibold shadow-md rounded-lg flex justify-center items-center gap-6 h-20'
        >
          <FaPlus size={20} /> <p className=''>Crear Oferta</p>
        </button>
      </Link>
    </div>
  );
}

export default AddButton;
