import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';
import InfoPostulante from './InfoPostulante';

function Postulados() {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [postulados, setPostulados] = useState([]);
  const [selectedPostulado, setSelectedPostulado] = useState(null);
  const [filteredPostulados, setFilteredPostulados] = useState([]);
  const [filtroSeleccionado, setFiltroSeleccionado] = useState('total');

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
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

        const { data: postuladosData, error: postuladosError } = await supabase
          .from('Postulacion')
          .select('*, user_id')
          .eq('id_oferta', id);

        if (postuladosError) {
          console.error('Error fetching postulados:', postuladosError);
        } else {
          setPostulados(postuladosData);
          setFilteredPostulados(postuladosData);
          if (postuladosData.length > 0) {
            setSelectedPostulado(postuladosData[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchJobDetails();

    const subscription = supabase
      .channel(`public:Postulacion:id_oferta=eq.${id}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'Postulacion', filter: `id_oferta=eq.${id}` }, (payload) => {
        console.log('Cambio detectado:', payload);
        fetchJobDetails(); // Re-fetch data on change
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [id]);

  useEffect(() => {
    if (filtroSeleccionado === 'total') {
      setFilteredPostulados(postulados);
    } else {
      const filtered = postulados.filter(postulado => postulado.estado === filtroSeleccionado);
      setFilteredPostulados(filtered);
    }
  }, [filtroSeleccionado, postulados]);

  const handlePostuladoClick = (postulado) => {
    setSelectedPostulado(postulado);
  };

  const handleFilterClick = (filtro) => {
    setFiltroSeleccionado(filtro);
  };

  const preguntas = jobDetails
    ? [
        jobDetails.preg_1,
        jobDetails.preg_2,
        jobDetails.preg_3,
        jobDetails.preg_4,
        jobDetails.preg_5,
      ]
    : [];

  const respuestas = selectedPostulado
    ? [
        selectedPostulado.resp_1,
        selectedPostulado.resp_2,
        selectedPostulado.resp_3,
        selectedPostulado.resp_4,
        selectedPostulado.resp_5,
      ]
    : [];

  return (
    <div className="font-dmsans">
      <HeaderPowerAuth />
      <div className="">
        <section className="pt-28 pb-10 md:py-8 bg-primarygradientmobile md:bg-primarygradient dark:bg-dark h-96 md:h-64 flex justify-center items-center">
          <div className="container mx-auto">
            <div className="overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
              <div className="flex flex-wrap items-center text-center md:text-left -mx-4">
                <div className="w-full px-4 lg:w-1/2">
                  <span className="block text-base font-medium text-white">
                    {jobDetails && jobDetails.ubicacion}
                  </span>
                  <h2 className="mb-6 text-xl sm:text-3xl font-bold leading-tight text-white sm:mb-8 lg:mb-0">
                    <span className="xs:block"> {jobDetails && jobDetails.puesto} </span>
                  </h2>
                  <div className="flex gap-8 justify-center md:justify-start">
                    <span className="block mb-4 text-base font-medium text-white">
                      {jobDetails && jobDetails.modalidad}
                    </span>
                    <span className="block mb-4 text-base font-medium text-white">
                      S/. {jobDetails && jobDetails.sueldo}
                    </span>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <div className="flex flex-wrap lg:justify-end justify-center gap-2">
                    <button
                      onClick={() => handleFilterClick('total')}
                      className={`py-3 my-1 w-40 text-base font-medium transition ${
                        filtroSeleccionado === 'total'
                          ? 'bg-primarycolor hover:bg-shadow-1 text-white'
                          : 'bg-white text-primarycolor hover:bg-opacity-90'
                      } rounded-md px-7`}
                    >
                      Total
                    </button>
                    <button
                      onClick={() => handleFilterClick('seleccionado')}
                      className={`py-3 my-1 w-40 text-base font-medium transition ${
                        filtroSeleccionado === 'seleccionado'
                          ? 'bg-[#00c792] hover:bg-shadow-1 text-white'
                          : 'bg-white text-[#00c792] hover:bg-opacity-90 '
                      } rounded-md px-7`}
                    >
                      Seleccionados
                    </button>
                  </div>
                  <div className="flex flex-wrap lg:justify-end justify-center gap-2">
                    <button
                      onClick={() => handleFilterClick('descartado')}
                      className={`py-3 my-1 w-40 text-base font-medium transition ${
                        filtroSeleccionado === 'descartado'
                          ? 'bg-red-400 hover:bg-shadow-1 text-white'
                          : 'bg-white text-red-400 hover:bg-opacity-90 '
                      } rounded-md px-7`}
                    >
                      Descartados
                    </button>
                    <button
                      onClick={() => handleFilterClick('pendiente')}
                      className={`py-3 my-1 w-40 text-base font-medium transition ${
                        filtroSeleccionado === 'pendiente'
                          ? 'bg-yellowprimary hover:bg-shadow-1 text-primarycolor'
                          : 'bg-gray-100 text-yellow-800 hover:bg-opacity-90'
                      } rounded-md px-7`}
                    >
                      Pendientes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-8 pl-20">
          <div className="overflow-x-auto w-full md:w-1/3">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Postulantes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPostulados.map((postulado) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedPostulado && (
            <div className='w-2/3 pl-8'>
              <InfoPostulante 
                postulado={selectedPostulado}
                preguntas={preguntas}
                respuestas={respuestas}
                onEstadoChange={() => fetchJobDetails()} // Actualizar después del cambio de estado
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Postulados;
