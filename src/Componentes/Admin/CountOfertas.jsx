import React, { useEffect, useState, useContext } from 'react';
import JobsContext from '../../Context/JobsContext';
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from '../../supabase/supabase.config';

// Función para contar los postulantes en estado pendiente para las ofertas del usuario
const fetchPendingPostuladosCount = async (userJobIds) => {
  try {
    const { data: postuladosData, error: postuladosError } = await supabase
      .from('Postulacion')
      .select('id_postulacion')
      .in('id_oferta', userJobIds)
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
  const userJobIds = userJobs.map(job => job.id_oferta);

  // Log para verificar los datos de userJobs
  console.log("User Jobs:", userJobs);

  // Calcular el total de postulados para las ofertas del usuario
  const totalPostulados = userJobs.reduce((acc, job) => {
    // Log para verificar el valor de count_postulados
    console.log(`Job ID: ${job.id_oferta}, Count Postulados: ${job.count_postulados}`);
    return acc + (job.count_postulados || 0); // Maneja undefined o null
  }, 0);

  useEffect(() => {
    const updatePendingCount = async () => {
      if (userJobIds.length > 0) {
        const count = await fetchPendingPostuladosCount(userJobIds);
        setPendingCount(count);
      }
    };

    updatePendingCount();
  }, [userJobIds]);

  return (
    <div className='flex gap-4 flex-wrap'>
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

      
    </div>
  );
}

export default CountOfertas;
