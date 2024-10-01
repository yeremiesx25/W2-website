import React, { useState, useEffect } from 'react';
import { supabase } from "../../supabase/supabase.config"; // Importa tu cliente de Supabase
import IniciarSesion from './IniciarSesion'; // Importa el componente IniciarSesion

function QuestionsModalPower({ isOpen, onClose, selectedJob }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // Inicialmente -1 para el teléfono
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]); // Estado para almacenar las respuestas dinámicas
  const [phone, setPhone] = useState(''); // Estado para almacenar el número de celular
  const [phoneError, setPhoneError] = useState(''); // Estado para el error del teléfono
  const [answerErrors, setAnswerErrors] = useState([]); // Estado para los errores de las respuestas
  const [showIniciarSesion, setShowIniciarSesion] = useState(false); // Estado para controlar la visibilidad de IniciarSesion

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
        setQuestions(questionsData.filter((question) => question)); // Filtra las preguntas que no son null o undefined
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error.message);
        setLoading(false);
      }
    };

    if (isOpen && selectedJob) {
      fetchQuestions();
      setCurrentQuestionIndex(-1); // Inicialmente -1 para solicitar el número de celular
      setAnswers(['', '', '', '', '']); // Restablece las respuestas cuando el modal se abre
      setPhone(''); // Restablece el número de celular cuando el modal se abre
      setPhoneError(''); // Limpia cualquier error anterior del número de celular
      setAnswerErrors(['', '', '', '', '']); // Limpia cualquier error anterior de respuestas
    }
  }, [isOpen, selectedJob]);

  const handleClose = () => {
    onClose(); // Cierra el modal al hacer clic en la "X"
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);

    const newErrors = [...answerErrors];
    newErrors[index] = ''; // Limpia el error cuando el usuario comienza a escribir
    setAnswerErrors(newErrors);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    // Validar si el campo de teléfono está vacío
    if (!value.trim()) {
      setPhoneError('Campo Obligatorio');
    } else {
      setPhoneError('');
    }
  };

  const handleBack = () => {
    setCurrentQuestionIndex(-1); // Vuelve al paso del número de celular
  };

  const handleSubmit = () => {
    setShowIniciarSesion(true); // Muestra el componente IniciarSesion al hacer clic en "Enviar"
  };

  const handleIniciarSesionClose = () => {
    setShowIniciarSesion(false); // Restablece el estado showIniciarSesion a false cuando el modal se cierra
  };

  return (
    <>
      <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 ${isOpen ? '' : 'hidden'}`} onClick={handleClose}>
        <div className="bg-white rounded-lg p-6 w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl"
            onClick={handleClose} // Cierra el modal al hacer clic en la "X"
          >
            ×
          </button>
          <div className="flex flex-col items-center justify-center mt-4">
            <h2 className="text-2xl font-bold mb-4">Preguntas para el Postulante</h2>
            {currentQuestionIndex === -1 ? (
              <>
                <label className="w-full text-left">Ingrese su Celular</label>
                <input
                  type="text"
                  placeholder="Número de celular"
                  value={phone}
                  onChange={handlePhoneChange}
                  className={`w-full mt-2 p-2 border rounded ${phoneError ? 'border-red-500' : ''}`}
                />
                {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                <div className="flex justify-center mt-4">
                  <button
                    className={`bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32 ${phone.trim() ? '' : 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => phone.trim() && setCurrentQuestionIndex(0)} // Cambia el índice a 0 para mostrar las preguntas si el teléfono no está vacío
                    disabled={!phone.trim()}
                  >
                    Siguiente
                  </button>
                </div>
              </>
            ) : (
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
                            className={`w-full mt-2 p-2 border rounded ${answerErrors[index] ? 'border-red-500' : ''}`}
                          />
                          {answerErrors[index] && <p className="text-red-500 text-sm">{answerErrors[index]}</p>}
                        </div>
                      ))
                    )}
                    <div className="flex justify-between mt-4">
                      <button
                        className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full w-32"
                        onClick={handleBack} // Vuelve al paso del número de celular
                      >
                        Atrás
                      </button>
                      <button
                        className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32"
                        onClick={handleSubmit} // Muestra el modal IniciarSesion al hacer clic en "Enviar"
                      >
                        Enviar
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {showIniciarSesion && <IniciarSesion onClose={handleIniciarSesionClose} />}
    </>
  );
}

export default QuestionsModalPower;