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
          .select('name_user, fecha_postulacion') // Selecciona los campos necesarios
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
        
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha de Postulación
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {postulados.map((postulado) => (
              <tr key={postulado.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {postulado.name_user}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{postulado.fecha_postulacion}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Postulados;