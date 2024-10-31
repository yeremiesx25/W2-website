import React from 'react';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { useNavigate } from 'react-router-dom'; 
import JobProceso from "./JobProceso";

function Programa() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin />
      <MenuAdmin />
      <div className="pl-64 pt-20 flex flex-col items-center">
        {/* Schedule Interview Button */}
        <div className="flex justify-between items-center w-3/4 mb-8 mt-8">
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition duration-300 ease-in-out"
            onClick={() => navigate('/Proceso')}
          >
            Programar Entrevista
          </button>
        </div>

        <JobProceso />
      </div>
    </div>
  );
}

export default Programa;