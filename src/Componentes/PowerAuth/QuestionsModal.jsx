import React, { useState, useEffect } from 'react';
import { supabase } from "../../supabase/supabase.config"; // Importa tu cliente de Supabase
import { UserAuth } from '../../Context/AuthContext'; // Importa el contexto de autenticación

function QuestionsModal({ isOpen, onClose, selectedJob }) {
  const { user } = UserAuth(); // Obtiene la información del usuario autenticado
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState(['', '', '']); // Estado para almacenar las respuestas

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Oferta')
          .select('preg_1, preg_2, preg_3')
          .eq('id_oferta', selectedJob.id_oferta)
          .single();

        if (error) {
          throw error;
        }

        const questionsData = [data.preg_1, data.preg_2, data.preg_3];
        setQuestions(questionsData.filter((question) => question)); // Filtra las preguntas que no son null o undefined
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error.message);
        setLoading(false);
      }
    };

    if (isOpen && selectedJob) {
      fetchQuestions();
      setCurrentQuestionIndex(0); // Restablece el índice a 0 cuando el modal se abre
      setAnswers(['', '', '']); // Restablece las respuestas cuando el modal se abre
    }
  }, [isOpen, selectedJob]);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    try {
      console.log('Enviando respuestas:', answers);

      // Obtener el valor actual de count_postulados
      const { data: currentData, error: fetchError } = await supabase
        .from('Oferta')
        .select('count_postulados')
        .eq('id_oferta', selectedJob.id_oferta)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      const currentCount = currentData.count_postulados || 0;

      // Incrementar la columna count_postulados en 1
      const { error: updateError } = await supabase
        .from('Oferta')
        .update({ count_postulados: currentCount + 1 })
        .eq('id_oferta', selectedJob.id_oferta);

      if (updateError) {
        throw updateError;
      }

      // Insertar una nueva fila en la tabla Postulacion
      const { error: insertError } = await supabase
        .from('Postulacion')
        .insert({
          id_oferta: selectedJob.id_oferta,
          user_id: user.id,
          name_user: user.user_metadata.full_name, // Asegúrate de que este campo exista y contenga el nombre del usuario
          correo: user.email,
          fecha_postulacion: new Date(),
          estado: 'pendiente',
        });

      if (insertError) {
        throw insertError;
      }

      console.log('Actualización exitosa de count_postulados y creación de nueva Postulacion');
      onClose();
    } catch (error) {
      console.error('Error al enviar la postulación:', error.message);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex flex-col items-center justify-center mt-4">
          <h2 className="text-2xl font-bold mb-4">Preguntas para el Postulante</h2>
          {loading ? (
            <div class="relative inline-flex">
            <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
          ) : questions.length === 0 ? (
            <div className="flex flex-col items-center">
              <p>No hay preguntas disponibles.</p>
              <button
                className="bg-green-500 text-white font-bold py-2 px-4 rounded-full w-32 mt-4"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </div>
          ) : (
            <div>
              <p>{questions[currentQuestionIndex]}</p>
              <textarea
                className="w-full mt-2 p-2 border rounded"
                rows="4"
                value={answers[currentQuestionIndex]}
                onChange={handleAnswerChange}
                placeholder="Escribe tu respuesta aquí"
              />
              <div className="flex justify-center space-x-4 mt-2">
                {currentQuestionIndex > 0 && (
                  <button
                    className="bg-gray-300 text-black font-bold py-2 px-4 rounded-full w-32"
                    onClick={handlePrevious}
                  >
                    Anterior
                  </button>
                )}
                {currentQuestionIndex < questions.length - 1 && (
                  <button
                    className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32"
                    onClick={handleNext}
                  >
                    Siguiente
                  </button>
                )}
                {currentQuestionIndex === questions.length - 1 && (
                  <button
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded-full w-32"
                    onClick={handleSubmit}
                  >
                    Enviar
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionsModal;