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
  const [cvUrl, setCvUrl] = useState(null); // Estado para la URL del CV

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

  const handlePostuladoClick = async (postulado) => {
    setSelectedPostulado(postulado);
    // Obtener la URL del CV del postulado
    const { data, error } = await supabase
      .from('usuario')
      .select('cv_url')
      .eq('user_id', postulado.user_id)
      .single();

    if (error) {
      console.error('Error fetching CV URL:', error);
    } else {
      setCvUrl(data.cv_url);
    }
  };

  if (!jobDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative inline-flex">
          <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
          <div className="w-8 h-8 bg-amber-400 rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-8 h-8 bg-amber-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className='font-dmsans'>
      <HeaderPowerAuth />
      <div className=''>
        <section className="pt-28 pb-10 md:py-8 bg-primarygradientmobile  md:bg-primarygradient dark:bg-dark h-96 md:h-64 flex justify-center items-center">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center text-center md:text-left -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <span className="block text-base font-medium text-white">
                  {jobDetails.ubicacion}
                </span>
                <h2 className="mb-6 text-xl sm:text-3xl font-bold leading-tight text-white sm:mb-8 lg:mb-0">
                  <span className="xs:block"> {jobDetails.puesto} </span>
                  </h2>
                  <div className='flex gap-8 justify-center md:justify-start'>
                    <span className='block mb-4 text-base font-medium text-white'>{jobDetails.modalidad}</span> 
                    <span className='block mb-4 text-base font-medium text-white'>S/. {jobDetails.sueldo}</span> 
                  </div>  
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap lg:justify-end justify-center gap-2">
                  <button
                    className="py-3 my-1 w-40 text-base font-medium transition bg-[#00c792] rounded-md hover:bg-shadow-1 text-white px-7"
                  >
                    Seleccionados
                  </button>
                  <button
                    className="py-3 my-1 w-40 text-base font-medium text-red-400 bg-white transition rounded-md bg-secondary px-7 hover:bg-opacity-90"
                  >
                    Descartados
                  </button>
                </div>
                <div className="flex flex-wrap lg:justify-end justify-center gap-2">
                  <button
                    className="py-3 my-1 w-40 text-base font-medium transition bg-[#00aec7] rounded-md hover:bg-shadow-1 text-white px-7"
                  >
                    Pendientes
                  </button>
                  <button
                    className="py-3 my-1 w-40 text-base font-medium text-[#ffe946] underline underline-offset-2 transition rounded-md bg-secondary px-7 hover:bg-opacity-90"
                  >
                    Ver todo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        <div className="overflow-x-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
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
                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() => handlePostuladoClick(postulado)}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 object-cover rounded-full"
                          src={
                            postulado.avatar_url ||
                            "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1788068356.1719446400&semt=ais_user"
                          }
                          alt=""
                        />
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

        {selectedPostulado && (
           <div className="col-span-2 pl-20">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold">Detalles del Postulante</h3>
                <p className="mt-2"><span className="font-bold">Nombre:</span> {selectedPostulado.name_user}</p>
                <p><span className="font-bold">Teléfono:</span> {selectedPostulado.telefono}</p>
                <p><span className="font-bold">Correo:</span> {selectedPostulado.correo}</p>
                <p><span className="font-bold">Fecha de Postulación:</span> {selectedPostulado.fecha_postulacion}</p>
                {cvUrl && (
                  <p><span className="font-bold">CV:</span> <a href={cvUrl} target="_blank" rel="noopener noreferrer">Ver CV</a></p>
                )}
              </div>
           </div>
        )}
      </div>
    </div>
  );
}

export default Postulados;