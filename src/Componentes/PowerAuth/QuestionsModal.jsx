import React, { useState, useEffect } from 'react';
import { supabase } from "../../supabase/supabase.config";
import { UserAuth } from '../../Context/AuthContext';

function QuestionsModal({ isOpen, onClose, selectedJob }) {
  const { user } = UserAuth();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Oferta')
          .select('preg_1, preg_2, preg_3, preg_4, preg_5')
          .eq('id_oferta', selectedJob.id_oferta)
          .single();

        if (error) {
          throw error;
        }

        const questionsData = [data.preg_1, data.preg_2, data.preg_3, data.preg_4, data.preg_5];
        setQuestions(questionsData.filter((question) => question));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error.message);
        setLoading(false);
      }
    };

    const fetchProfileData = async () => {
      try {
        const { data: profileData, error: profileError } = await supabase
          .from('perfiles')
          .select('nombre, correo, telefono, avatar_url')
          .eq('id', user.id)
          .single();
    
        if (profileError) {
          console.error('Error fetching profile:', profileError.message);
          alert('Error al obtener el perfil. Verifique si el usuario está registrado.');
          return;
        } else if (!profileData) {
          console.error('Profile not found for user ID:', user.id);
          return;
        }
    
    
      } catch (error) {
        console.error('Error fetching profile data:', error.message);
      }
    };

    if (isOpen && selectedJob) {
      fetchQuestions();
      fetchProfileData();
      setCurrentQuestionIndex(-1);
      setAnswers(['', '', '', '', '']);
      setSubmissionSuccess(false);
    }
  }, [isOpen, selectedJob, user.id]);

  const handleClose = () => {
    onClose();
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    try {
      // Verificar que selectedJob es válido
      if (!selectedJob || !selectedJob.id_oferta) {
        console.error('Oferta no válida:', selectedJob);
        alert('Oferta no válida.');
        return;
      }

      // Obtener los datos del perfil del usuario
      const { data: profileData, error: profileError } = await supabase
        .from('perfiles')
        .select('nombre, correo, avatar_url,telefono')
        .eq('id', user.id)
        .single();

      if (profileError || !profileData) {
        console.error('Error al obtener el perfil:', profileError ? profileError.message : 'Perfil no encontrado.');
        alert('No se pudo obtener el perfil del usuario.');
        return;
      }

      const { nombre, correo, avatar_url, telefono } = profileData;

      // Insertar en la tabla de postulaciones
      const { error: insertError } = await supabase
        .from('Postulacion')
        .insert({
          id_oferta: selectedJob.id_oferta,
          user_id: user.id,
          name_user: nombre,
          correo: correo,
          telefono: telefono, // Usar el teléfono obtenido del perfil
          resp_1: answers[0],
          resp_2: answers[1],
          resp_3: answers[2],
          resp_4: answers[3],
          resp_5: answers[4],
          fecha_postulacion: new Date(),
          estado: 'pendiente',
          avatar_url: avatar_url,
        });

      if (insertError) {
        console.error('Error al insertar en postulaciones:', insertError.message);
        alert('Error al enviar la postulación.');
        return;
      }

      // Actualizar el conteo de postulados
      const { error: updateError } = await supabase
        .from('Oferta')
        .update({ count_postulados: selectedJob.count_postulados + 1 })
        .eq('id_oferta', selectedJob.id_oferta);

      if (updateError) {
        console.error('Error al actualizar el conteo de postulados:', updateError.message);
        alert('Error al actualizar el conteo de postulados.');
        return;
      }

      // Si todo va bien
      setSubmissionSuccess(true);
      setAnswers(['', '', '', '', '']); // Limpiar respuestas
    } catch (error) {
      console.error('Error al enviar la postulación:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  const handleBack = () => {
    setCurrentQuestionIndex(-1);
  };

  const handleAccept = () => {
    window.location.reload();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 ${isOpen ? '' : 'hidden'}`} onClick={handleClose}>
      <div className="bg-white rounded-lg p-6 w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl"
          onClick={handleClose}
        >
          ×
        </button>
        <div className="flex flex-col items-center justify-center mt-4">
          <h2 className="text-2xl font-bold mb-4">Preguntas para el Postulante</h2>
          {currentQuestionIndex === -1 ? (
            <div className="max-h-96 overflow-y-auto">
              {loading ? (
                <div className="relative inline-flex">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
              ) : (
                <>
                  {questions.length === 0 ? (
                    <div className="flex flex-col items-center">
                      <p>No hay preguntas disponibles.</p>
                    </div>
                  ) : (
                    questions.map((question, index) => (
                      <div key={index} className="mt-4">
                        <label className="w-full text-left">{question}</label>
                        <textarea
                          value={answers[index]}
                          onChange={(e) => handleAnswerChange(e, index)}
                          className={`w-full mt-2 p-2 border rounded`}
                        />
                      </div>
                    ))
                  )}
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full w-32"
                      onClick={handleBack}
                    >
                      Atrás
                    </button>
                    <button
                      className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32"
                      onClick={handleSubmit}
                    >
                      Enviar
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : null}
          {submissionSuccess && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 rounded-full p-3 mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold mb-2">¡Postulación enviada con éxito!</h2>
                  <p className="text-sm text-gray-500 mb-4">Gracias por tu interés.</p>
                  <button
                    className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32"
                    onClick={handleAccept}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionsModal;
