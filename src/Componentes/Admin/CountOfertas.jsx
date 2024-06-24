import { useContext } from 'react';
import React from 'react';
import JobsContext from '../../Context/JobsContext';
import { CgLoadbarDoc } from "react-icons/cg";
import { UserAuth } from "../../Context/AuthContext";
import { MdOutlineQueryStats } from "react-icons/md";
import { HiOutlineDocumentSearch } from "react-icons/hi";

function CountOfertas() {
  const { jobs } = useContext(JobsContext);
  const { user } = UserAuth();

  // Filtrar trabajos de acuerdo al id del usuario
  const userJobs = jobs.filter(job => job.user_id === user.id);

  // Calcular el total de postulados para las ofertas del usuario
  const totalPostulados = userJobs.reduce((acc, job) => acc + job.count_postulados, 0);

  return (
    <div className='flex gap-6'>
      <div className='w-56 h-20 bg-white flex items-center justify-center rounded-lg text-gray-700 shadow-md gap-6 font-dmsans'>
        <div className='w-12 h-12 bg-[#f4f7fe] rounded-full flex justify-center items-center text-[#422afb]'>
          <CgLoadbarDoc size={30}/>
        </div>
        <div className='flex flex-col text-center'>
          <p className='font-medium text-md text-gray-600'>Ofertas Totales</p>
          <p className='font-bold text-2xl text-primarytext '>{jobs.length}</p> 
        </div>
      </div>

      <div className='w-56 h-20 bg-white flex items-center justify-center rounded-lg text-gray-700 shadow-md gap-6 font-dmsans'>
        <div className='w-12 h-12 bg-[#f4f7fe] rounded-full flex justify-center items-center text-[#422afb]'>
          <HiOutlineDocumentSearch size={30}/>
        </div>
        <div className='flex flex-col text-center'>
          <p className='font-medium text-md text-gray-600'>Mis Ofertas</p>
          <p className='font-bold text-2xl text-primarytext '>{userJobs.length}</p>
        </div>
      </div>

      <div className='w-56 h-20 bg-white flex items-center justify-center rounded-lg text-gray-700 shadow-md gap-6 font-dmsans'>
        <div className='w-12 h-12 bg-[#f4f7fe] rounded-full flex justify-center items-center text-[#422afb]'>
          <MdOutlineQueryStats size={30}/>
        </div>
        <div className='flex flex-col text-center'>
          <p className='font-medium text-md text-gray-600'>Mis Postulados</p>
          <p className='font-bold text-2xl text-primarytext '>{totalPostulados}</p>
        </div>
      </div>
    </div>
  );
}

export default CountOfertas;
