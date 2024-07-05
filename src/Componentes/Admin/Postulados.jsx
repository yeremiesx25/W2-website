import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';

function Postulados() {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [postulados, setPostulados] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPostulado, setSelectedPostulado] = useState(null);
  const [user, setUser] = useState(null); // Para manejar el objeto de usuario

  useEffect(() => {
    // Obtén el objeto de usuario desde el contexto global de autenticación
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    
    fetchUser();

    const fetchJobDetails = async () => {
      try {
        // Fetch job details and questions
        const { data: jobData, error: jobError } = await supabase
          .from('Oferta')
          .select('*, preg_1, preg_2, preg_3, preg_4, preg_5')
          .eq('id_oferta', id)
          .single();

        if (jobError) {
          console.error('Error fetching job details:', jobError);
        } else {
          setJobDetails(jobData);
        }

        // Fetch postulados with user details
        const { data: postuladosData, error: postuladosError } = await supabase
          .from('Postulacion')
          .select('*, user_id') // Incluye user_id en la selección
          .eq('id_oferta', id);

        if (postuladosError) {
          console.error('Error fetching postulados:', postuladosError);
        } else {
          setPostulados(postuladosData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  useEffect(() => {
    if (user) {
      // Actualiza el avatar_url de los postulados si se ha cargado el usuario
      const updateAvatarUrl = async () => {
        try {
          const { data: postuladosData, error: postuladosError } = await supabase
            .from('Postulacion')
            .select('*')
            .eq('user_id', user.id);

          if (postuladosError) {
            console.error('Error fetching postulados for update:', postuladosError);
            return;
          }

          if (postuladosData.length > 0) {
            const { error: updateError } = await supabase
              .from('Postulacion')
              .update({ avatar_url: user.user_metadata.avatar_url })
              .eq('user_id', user.id);

            if (updateError) {
              console.error('Error updating avatar_url:', updateError);
            } else {
              console.log('Avatar URL updated successfully');
            }
          }
        } catch (error) {
          console.error('Error updating avatar URL:', error);
        }
      };

      updateAvatarUrl();
    }
  }, [user]);

  const openModal = (postulado) => {
    setSelectedPostulado(postulado);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPostulado(null);
    setModalOpen(false);
  };

  if (!jobDetails) {
    return <div className="flex justify-center items-center h-screen">
    <div className="relative inline-flex">
        <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
        <div className="w-8 h-8 bg-amber-400 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-8 h-8 bg-amber-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
    </div>
</div>;
  }

  return (
    <div className='font-dmsans'>
      <HeaderPowerAuth />
      <div className='px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24'>
        <div className='text-center pt-16 md:pt-12 pb-8'>
          <h1 className='text-2xl font-bold'>{jobDetails.puesto}</h1>
          <p className='text-gray-600'>{jobDetails.ubicacion}</p>
          <h2 className='text-xl font-semibold mt-4'>Postulados</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teléfono
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Correo
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha de Postulación
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Preguntas
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {postulados.map((postulado) => (
                <tr key={postulado.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 object-cover rounded-full" src={postulado.avatar_url || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1788068356.1719446400&semt=ais_user"} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {postulado.name_user}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{postulado.telefono}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{postulado.correo}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{postulado.fecha_postulacion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => openModal(postulado)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Ver respuestas
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && selectedPostulado && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                  {/* Icono o imagen del usuario */}
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Respuestas de {selectedPostulado.name_user}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-700"><strong>{jobDetails.preg_1}</strong><br /> {selectedPostulado.resp_1}</p>
                    <p className="text-sm text-gray-700"><strong>{jobDetails.preg_2}</strong><br />  {selectedPostulado.resp_2}</p>
                    <p className="text-sm text-gray-700"><strong>{jobDetails.preg_3}</strong><br />  {selectedPostulado.resp_3}</p>
                    <p className="text-sm text-gray-700"><strong>{jobDetails.preg_4}</strong><br />  {selectedPostulado.resp_4}</p>
                    <p className="text-sm text-gray-700"><strong>{jobDetails.preg_5}</strong><br />  {selectedPostulado.resp_5}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Postulados;
