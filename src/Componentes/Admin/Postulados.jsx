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
  const [selectedId, setSelectedId] = useState(null);

  const handleDivClick = (postulado) => {
    setSelectedId(postulado.id);
    handlePostuladoClick(postulado);
  };

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
          return;
        }

        if (!jobData) {
          console.error('No job found with the given id');
          return;
        }

        setJobDetails(jobData);

        const { data: postuladosData, error: postuladosError } = await supabase
          .from('Postulacion')
          .select('*, user_id')
          .eq('id_oferta', id);

        if (postuladosError) {
          console.error('Error fetching postulados:', postuladosError);
          return;
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
    <div className="font-dmsans py-2 px-4 bg-gray-50">
      <div>
        <section className="bg-primarycolor md:bg-newprimarycolor rounded-lg dark:bg-dark h-96 md:h-40 flex justify-center items-center max-h-screen">
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
        <div className="flex mt-8 px-0">
          <div className="overflow-x-auto w-full md:w-1/3">
            <div className="flex flex-col space-y-4">
              {filteredPostulados.map((postulado) => (
                <div
                  key={postulado.id}
                  className={`flex items-center p-4 border rounded-lg  bg-white cursor-pointer hover:bg-gray-100 ${
                    selectedId === postulado.id ? 'bg-blue-100' : ''
                  }`}
                  onClick={() => handleDivClick(postulado)}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-300 flex items-center justify-center text-white mr-2">
                      <img src={postulado.avatar_url} alt="" />
                    </div>
                    <span className="font-medium">{postulado.name_user}</span>
                  </div>
                </div>
              ))}
            </div>
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