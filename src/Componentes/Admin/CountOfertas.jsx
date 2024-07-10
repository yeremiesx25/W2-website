import React, { useEffect, useState, useContext } from 'react';
import JobsContext from '../../Context/JobsContext';
import { UserAuth } from "../../Context/AuthContext";
import { CgLoadbarDoc } from "react-icons/cg";
import { MdOutlineQueryStats } from "react-icons/md";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { supabase } from '../../supabase/supabase.config';

// Función para contar los postulantes en estado pendiente
const fetchPendingPostuladosCount = async (id) => {
  try {
    const { data: postuladosData, error: postuladosError } = await supabase
      .from('Postulacion')
      .select('id_postulacion') // Solo seleccionamos id para contar los registros
      .eq('estado', 'pendiente');

    if (postuladosError) {
      throw postuladosError;
    }

    return postuladosData.length; // Contamos los registros
  } catch (error) {
    console.error('Error fetching pending postulados count:', error.message);
    return 0;
  }
};

function CountOfertas() {
  const { jobs } = useContext(JobsContext);
  const { user } = UserAuth();
  const [pendingCount, setPendingCount] = useState(0);

  // Filtrar trabajos de acuerdo al id del usuario
  const userJobs = jobs.filter(job => job.user_id === user.id);

  // Calcular el total de postulados para las ofertas del usuario
  const totalPostulados = userJobs.reduce((acc, job) => acc + job.count_postulados, 0);

  useEffect(() => {
    const updatePendingCount = async () => {
      if (userJobs.length > 0) {
        const id = userJobs[0].id_oferta; // Usa la primera oferta del usuario para la consulta
        const count = await fetchPendingPostuladosCount(id);
        setPendingCount(count);
      }
    };

    updatePendingCount();
  }, [userJobs]);

  return (
    <div className='flex gap-4 flex-wrap'>
      {/* <div className='w-40 h-16 flex items-center justify-center rounded-lg text-gray-700 font-dmsans '>
        <div className='w-10 h-10 flex justify-center items-center text-white'>
          <CgLoadbarDoc size={20} />
        </div>
        <div className='flex flex-col text-center ml-2'>
          <p className='font-medium text-sm text-white'>Ofertas Totales</p>
          <p className='font-bold text-lg text-white'>{jobs.length}</p>
        </div>
      </div> */}

      <div className='w-40 h-16 flex items-center justify-center rounded-lg text-gray-700 font-dmsans '>

        <div className='flex flex-col text-center ml-2 '>
          <p className='font-medium text-sm text-white'>Mis Ofertas</p>
          <p className='font-bold text-lg text-white'>{userJobs.length}</p>
        </div>
      </div>

      <div className='w-40 h-16 flex items-center justify-center rounded-lg text-gray-700 font-dmsans '>

        <div className='flex flex-col text-center ml-2'>
          <p className='font-medium text-sm text-white'>Mis Postulados</p>
          <p className='font-bold text-lg text-white'>{totalPostulados}</p>
        </div>
      </div>

      <div className='w-40 h-16 flex items-center justify-center rounded-lg text-gray-700 font-dmsans '>

        <div className='flex flex-col text-center ml-2'>
          <p className='font-medium text-sm text-white'>Pendientes</p>
          <p className='font-bold text-lg text-white'>{pendingCount}</p>
        </div>
      </div>
    </div>
  );
}

export default CountOfertas;
