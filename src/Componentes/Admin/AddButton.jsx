import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiApps2AddLine } from "react-icons/ri";

function AddButton() {
  return (
    <div className='w-48 h-32 p-6 bg-white rounded-lg flex justify-center items-end'>
      <Link to="/AdminForm">
        <button
          className='w-40 h-20 bg-primarycolor text-white font-base shadow-md rounded-lg flex justify-center items-center gap-6'
          aria-label="Crear Oferta"
        >
          <RiApps2AddLine size={30} /> 
          <p>Crear Oferta</p>
        </button>
      </Link>
    </div>
  );
}

export default AddButton;
