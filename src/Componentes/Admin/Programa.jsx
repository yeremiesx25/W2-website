import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import HeaderAdmin from './HeaderAdmin';
import MenuAdmin from './MenuAdmin';

function Programa() {
  const [ofertas, setOfertas] = useState([]);
  const [selectedOferta, setSelectedOferta] = useState(null);
  const [user, setUser] = useState(null);
  const [interviewDetails, setInterviewDetails] = useState({ postulante: null, date: '' });
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchOfertasYPostulantes = async () => {
      if (!user) return;

      const { data: ofertasData, error: ofertasError } = await supabase
        .from('Oferta')
        .select('id_oferta, puesto')
        .eq('estado', 'activa')
        .eq('id_reclutador', user.id);

      if (ofertasError) {
        console.error('Error fetching ofertas:', ofertasError);
        return;
      }

      setOfertas(ofertasData);
    };

    fetchOfertasYPostulantes();
  }, [user]);

  useEffect(() => {
    const fetchInterviews = async () => {
      if (!user) return;

      const { data: interviewsData, error: interviewsError } = await supabase
        .from('Entrevistas')
        .select('*')
        .eq('id_reclutador', user.id);

      if (interviewsError) {
        console.error('Error fetching interviews:', interviewsError);
        return;
      }

      setInterviews(interviewsData);
    };

    fetchInterviews();
  }, [user]);

  const handleOfertaClick = async (oferta) => {
    const { data: postulantesData, error: postulantesError } = await supabase
      .from('Postulacion')
      .select('id_postulacion, name_user')
      .eq('id_oferta', oferta.id_oferta)
      .eq('estado', 'apto');

    if (postulantesError) {
      console.error('Error fetching postulantes:', postulantesError);
      return;
    }

    setSelectedOferta({ ...oferta, postulantes: postulantesData });
  };

  const handleScheduleInterview = async () => {
    const { postulante, date } = interviewDetails;

    // Guardar la entrevista en la base de datos
    const { error } = await supabase
      .from('Entrevistas')
      .insert([{ nombre_postulante: postulante, fecha: date, id_reclutador: user.id }]);

    if (error) {
      console.error('Error scheduling interview:', error);
      return;
    }

    // Actualizar la lista de entrevistas
    setInterviews([...interviews, { nombre_postulante: postulante, fecha: date }]);
    // Resetear estado después de programar
    setInterviewDetails({ postulante: null, date: '' });
  };

  return (
    <div className='w-full h-screen'>
      <HeaderAdmin />
      <MenuAdmin />
      <div className='w-full h-screen pl-64 pt-20 flex flex-col items-center'>
        <div className='grid grid-cols-2 gap-4 w-3/4'>
          {/* Columna de Ofertas */}
          <div className='bg-white shadow-md rounded-lg p-4'>
            <h2 className='text-xl font-bold'>Ofertas</h2>
            {ofertas.map((oferta) => (
              <div 
                key={oferta.id_oferta} 
                className='mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded'
                onClick={() => handleOfertaClick(oferta)}
              >
                <h3 className='text-lg font-semibold'>{oferta.puesto}</h3>
              </div>
            ))}
          </div>

          {/* Columna de Postulantes Aptos */}
          <div className='bg-white shadow-md rounded-lg p-4'>
            <h2 className='text-xl font-bold'>Postulantes Apto</h2>
            {selectedOferta ? (
              <>
                <h3 className='text-lg font-semibold'>{selectedOferta.puesto}</h3>
                {selectedOferta.postulantes.length > 0 ? (
                  <ul className='list-disc pl-5'>
                    {selectedOferta.postulantes.map(postulante => (
                      <li key={postulante.id_postulacion} className='flex justify-between items-center text-gray-700'>
                        {postulante.name_user}
                        <button 
                          className='ml-4 bg-blue-500 text-white px-2 py-1 rounded'
                          onClick={() => setInterviewDetails({ postulante: postulante.name_user, date: '' })}
                        >
                          Programar Entrevista
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hay postulantes aptos para esta oferta.</p>
                )}
              </>
            ) : (
              <p>Selecciona un trabajo para ver los postulantes.</p>
            )}
          </div>
        </div>

        {/* Modal o sección para programar entrevista */}
        {interviewDetails.postulante && (
          <div className='mt-4 p-4 bg-gray-100 rounded-lg'>
            <h3 className='text-lg font-bold'>Programar Entrevista con: {interviewDetails.postulante}</h3>
            <input 
              type='date' 
              value={interviewDetails.date} 
              onChange={(e) => setInterviewDetails({ ...interviewDetails, date: e.target.value })}
              className='mt-2 border p-2 rounded'
            />
            <button 
              className='ml-2 bg-green-500 text-white px-2 py-1 rounded'
              onClick={handleScheduleInterview}
            >
              Confirmar
            </button>
          </div>
        )}

        {/* Sección para mostrar entrevistas programadas */}
        <div className='mt-8 bg-white shadow-md rounded-lg p-4 w-3/4'>
          <h2 className='text-xl font-bold'>Entrevistas Programadas</h2>
          {interviews.length > 0 ? (
            <ul className='list-disc pl-5'>
              {interviews.map((interview, index) => (
                <li key={index} className='text-gray-700'>
                  {interview.nombre_postulante} - {new Date(interview.fecha).toLocaleDateString()}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay entrevistas programadas.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Programa;