import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';

function Postulados() {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [postulados, setPostulados] = useState([]);

  useEffect(() => {
    const fetchJobDetails = async () => {
      const { data: jobData, error: jobError } = await supabase
        .from('Oferta')
        .select('*')
        .eq('id_oferta', id)
        .single();
      
      if (jobError) {
        console.error('Error fetching job details:', jobError);
      } else {
        setJobDetails(jobData);

        const { data: postuladosData, error: postuladosError } = await supabase
          .from('Postulacion')
          .select('name_user, name_job, fecha_postulacion') // Selecciona los campos necesarios
          .eq('id_oferta', id);

        if (postuladosError) {
          console.error('Error fetching postulados:', postuladosError);
        } else {
          setPostulados(postuladosData);
        }
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
        <HeaderPowerAuth />
        <div className='pl-20'>

        
      <h1 className='text-2xl font-bold'>{jobDetails.puesto}</h1>
      <p className='text-gray-600'>{jobDetails.ubicacion}</p>
      <h2 className='text-xl font-semibold mt-4'>Postulados</h2>
      <ul>
        {postulados.map((postulado) => (
          <li key={postulado.id} className='border-b py-2'>
            <p className='font-medium'>{postulado.name_user}</p>
            <p className='text-gray-600'>{postulado.fecha_postulacion}</p>
          </li>
        ))}
      </ul></div>
    </div>
  );
}

export default Postulados;