import React, { useState, useEffect } from 'react';
import { supabase } from "../../supabase/supabase.config"; // Importa tu cliente de Supabase

function QuestionsModal({ isOpen, onClose, selectedJob }) {
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
          .select(`preg_1, preg_2, preg_3`)
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

  const handleSubmit = () => {
    // Implementa lógica para manejar el envío de respuestas aquí
    console.log('Respuestas enviadas:', answers);
    onClose();
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
          <h2 className="text-2xl font-bold mb-4">Preguntas de la Aplicación</h2>
          {loading ? (
            <p>Cargando preguntas...</p>
          ) : questions.length === 0 ? (
            <p>No hay preguntas disponibles.</p>
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
                {currentQuestionIndex === 0 && (
                  <button
                    className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32"
                    onClick={handleNext}
                  >
                    Siguiente
                  </button>
                )}
                {currentQuestionIndex > 0 && currentQuestionIndex < questions.length - 1 && (
                  <>
                    <button
                      className="bg-gray-300 text-black font-bold py-2 px-4 rounded-full w-32"
                      onClick={handlePrevious}
                    >
                      Anterior
                    </button>
                    <button
                      className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32"
                      onClick={handleNext}
                    >
                      Siguiente
                    </button>
                  </>
                )}
                {currentQuestionIndex === questions.length - 1 && (
                  <>
                    <button
                      className="bg-gray-300 text-black font-bold py-2 px-4 rounded-full w-32"
                      onClick={handlePrevious}
                    >
                      Anterior
                    </button>
                    <button
                      className="bg-green-500 text-white font-bold py-2 px-4 rounded-full w-32"
                      onClick={handleSubmit}
                    >
                      Enviar
                    </button>
                  </>
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