import React from 'react';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { useNavigate } from 'react-router-dom'; 
import JobProceso from "./JobProceso";

function Programa() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafbff]">
      <HeaderAdmin />
      <MenuAdmin />
      <div className="pl-60 pt-20 flex flex-col items-center">
        {/* Schedule Interview Button */}
        <div className="flex pl-20 items-center w-full mb-8 mt-8">
        <button 
  className="bg-primarycolor text-white px-4 py-2 rounded-lg shadow hover:bg-newprimarycolor transition duration-300 flex items-center space-x-2"
  onClick={() => navigate('/Proceso')}
>
  <span className="text-lg font-semibold">+</span>
  <span>Crear Proceso</span>
</button>

        </div>
        <div className='w-full px-20'>
          <JobProceso />
        </div>
        
      </div>
    </div>
  );
}

export default Programa;
