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

  // Obtener el usuario actual
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  // Obtener ofertas activas del reclutador
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

  // Obtener entrevistas programadas
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

  // Manejar clic en oferta seleccionada
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

  // Manejar la programación de entrevista
  const handleScheduleInterview = async () => {
    const { postulante, date } = interviewDetails;

    const { error } = await supabase
      .from('Entrevistas')
      .insert([{ nombre_postulante: postulante, fecha: date, id_reclutador: user.id }]);

    if (error) {
      console.error('Error scheduling interview:', error);
      return;
    }

    // Actualizar la lista de entrevistas
    setInterviews([...interviews, { nombre_postulante: postulante, fecha: date }]);
    setInterviewDetails({ postulante: null, date: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin />
      <MenuAdmin />
      <div className="pl-64 pt-20 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-6 w-3/4">
          {/* Columna de Ofertas */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ofertas Disponibles</h2>
            {ofertas.map((oferta) => (
              <div 
                key={oferta.id_oferta} 
                className="mb-4 p-4 border rounded-lg hover:bg-gray-50 transition duration-300 ease-in-out cursor-pointer"
                onClick={() => handleOfertaClick(oferta)}
              >
                <h3 className="text-xl font-semibold text-gray-700">{oferta.puesto}</h3>
              </div>
            ))}
          </div>

          {/* Columna de Postulantes Aptos */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Postulantes Aptos</h2>
            {selectedOferta ? (
              <>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">{selectedOferta.puesto}</h3>
                {selectedOferta.postulantes.length > 0 ? (
                  <ul className="space-y-3">
                    {selectedOferta.postulantes.map((postulante) => (
                      <li 
                        key={postulante.id_postulacion} 
                        className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <span className="text-gray-700">{postulante.name_user}</span>
                        <button 
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition duration-300 ease-in-out"
                          onClick={() => setInterviewDetails({ postulante: postulante.name_user, date: '' })}
                        >
                          Programar
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No hay postulantes aptos para esta oferta.</p>
                )}
              </>
            ) : (
              <p className="text-gray-600">Selecciona una oferta para ver los postulantes.</p>
            )}
          </div>
        </div>

        {/* Modal o sección para programar entrevista */}
        {interviewDetails.postulante && (
          <div className="mt-8 w-3/4 p-6 bg-gray-50 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-gray-800">Programar Entrevista con {interviewDetails.postulante}</h3>
            <div className="mt-4 flex items-center space-x-4">
              <input 
                type="date" 
                value={interviewDetails.date} 
                onChange={(e) => setInterviewDetails({ ...interviewDetails, date: e.target.value })}
                className="border-gray-300 p-3 rounded-lg shadow-sm w-full"
              />
              <button 
                className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-500 transition duration-300 ease-in-out"
                onClick={handleScheduleInterview}
              >
                Confirmar
              </button>
            </div>
          </div>
        )}

        {/* Sección para mostrar entrevistas programadas */}
        <div className="mt-8 w-3/4 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Entrevistas Programadas</h2>
          {interviews.length > 0 ? (
            <ul className="space-y-2">
              {interviews.map((interview, index) => (
                <li key={index} className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                  {interview.nombre_postulante} - {new Date(interview.fecha).toLocaleDateString()}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No hay entrevistas programadas.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Programa;