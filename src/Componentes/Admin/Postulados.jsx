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
      .from('Usuario')
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
           <div className="col-span-2">
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