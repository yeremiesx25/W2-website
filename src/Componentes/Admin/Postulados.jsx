import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';
import InfoPostulante from './InfoPostulante';
import { UserAuth } from '../../Context/AuthContext';
import HeaderAdmin from './HeaderAdmin';
import MenuAdmin from './MenuAdmin';

function Postulados() {
  const { user } = UserAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState(null);
  const [postulados, setPostulados] = useState([]);
  const [selectedPostulado, setSelectedPostulado] = useState(null);
  const [filteredPostulados, setFilteredPostulados] = useState([]);
  const [filtroSeleccionado, setFiltroSeleccionado] = useState('total');

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const { data: jobData, error: jobError } = await supabase
          .from('Oferta') // Reemplaza 'Oferta' con el nombre correcto de tu tabla
          .select('*, preg_1, preg_2, preg_3, preg_4, preg_5')
          .eq('id_oferta', id) // Asegúrate de que 'id' es la columna correcta
          .single(); // Espera un solo objeto
    
        if (jobError) {
          console.error('Error fetching job details:', jobError);
          return; // Salir de la función si hay un error
        }
    
        if (!jobData) {
          console.error('No job found with the given id');
          return; // Salir si no hay datos
        }
    
        setJobDetails(jobData);
        
        const { data: postuladosData, error: postuladosError } = await supabase
          .from('Postulacion')
          .select('*, user_id')
          .eq('id_oferta', id);
    
        if (postuladosError) {
          console.error('Error fetching postulados:', postuladosError);
          return; // Salir de la función si hay un error
        }
    
        const postuladosConChecked = postuladosData.map(postulado => ({
          ...postulado,
          checked: false
        }));
        
        setPostulados(postuladosConChecked);
        setFilteredPostulados(postuladosConChecked);
        if (postuladosConChecked.length > 0) {
          setSelectedPostulado(postuladosConChecked[0]);
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();

    const subscription = supabase
      .channel(`public:Postulacion:id_oferta=eq.${id}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'Postulacion', filter: `id_oferta=eq.${id}` }, (payload) => {
        console.log('Cambio detectado:', payload);
        fetchJobDetails(); 
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
    const postulanteEnFiltro = filteredPostulados.find(postulado => postulado.id === selectedPostulado?.id);
    if (!postulanteEnFiltro) {
      setSelectedPostulado(null);
    }
  };

  const handleCheckboxChange = (id) => {
    setPostulados((prevPostulados) =>
      prevPostulados.map((postulado) =>
        postulado.id === id
          ? { ...postulado, checked: !postulado.checked }
          : postulado
      )
    );
  };

  const handlePuestoClick = () => {
    if (jobDetails) {
      navigate(`/oferta/${jobDetails.id}`);
    }
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
      <div>
        <section className="pt-28 pb-10 md:pb-8 bg-primarygradientdark md:bg-primarygradientdark dark:bg-dark h-96 md:h-72 flex justify-center items-center">
          <div className="container mx-auto">
            <div className="overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
              <div className="flex flex-wrap items-center text-center md:text-left -mx-4">
                <div className="w-full px-4 lg:w-1/2">
                  <span className="block text-base font-medium text-white">
                    {jobDetails && jobDetails.ubicacion}
                  </span>
                  <h2 
                    onClick={handlePuestoClick}
                    className="mb-6 text-xl sm:text-3xl font-bold leading-tight text-white sm:mb-8 lg:mb-0 cursor-pointer"
                  >
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
                  {/* Filtros */}
                  {/* Aquí puedes agregar la lógica de filtros según tus necesidades */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex mt-8 pl-20">
          <div className="overflow-x-auto w-full md:w-1/3">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Postulantes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPostulados.map((postulado) => (
                  <tr
                    key={postulado.id}
                    className="cursor-pointer"
                    onClick={() => handlePostuladoClick(postulado)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={postulado.checked}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleCheckboxChange(postulado.id);
                          }}
                          className="mr-2"
                        />
                        {postulado.name_user} 
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ml-4 w-full md:w-2/3">
            {selectedPostulado && (
              <InfoPostulante 
                postulado={selectedPostulado} 
                preguntas={preguntas} 
                respuestas={respuestas} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postulados;
