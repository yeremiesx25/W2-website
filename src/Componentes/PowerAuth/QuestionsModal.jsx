import React, { useState, useEffect } from 'react';
import { supabase } from "../../supabase/supabase.config"; // Importa tu cliente de Supabase
import { UserAuth } from '../../Context/AuthContext'; // Importa el contexto de autenticación

function QuestionsModal({ isOpen, onClose, selectedJob }) {
  const { user } = UserAuth(); // Obtiene la información del usuario autenticado
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // Inicialmente -1 para el teléfono
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]); // Estado para almacenar las respuestas dinámicas
  const [phone, setPhone] = useState(''); // Estado para almacenar el número de celular
  const [phoneError, setPhoneError] = useState(''); // Estado para el error del teléfono
  const [answerErrors, setAnswerErrors] = useState([]); // Estado para los errores de las respuestas
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Estado para mostrar el mensaje de éxito
  const [cvFile, setCvFile] = useState(null); // Estado para almacenar el archivo CV
  const [cvUrl, setCvUrl] = useState(''); // Estado para almacenar el URL del archivo CV

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
      setSubmissionSuccess(false); // Oculta el mensaje de éxito al abrir el modal
      setCvFile(null); // Reinicia el archivo CV
      setCvUrl(''); // Reinicia el URL del archivo CV
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };

  const handleSubmit = async () => {
    try {
      // Validar que todos los campos estén completos
      if (!phone.trim()) {
        setPhoneError('Campo Obligatorio');
        return;
      }

      if (cvFile === null) {
        // Validar que se haya seleccionado un archivo CV
        console.error('Debes seleccionar un archivo CV');
        return;
      }

      // Subir archivo CV a Supabase Storage
      const { data: fileData, error: fileError } = await supabase.storage
        .from('cv_user')
        .upload(`cv_${user.id}/${cvFile.name}`, cvFile);

      if (fileError) {
        throw fileError;
      }

      // Generar URL del archivo subido
      const bucketName = 'cv_user';
      const filePath = fileData.path;
      const baseUrl = 'https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public';
      const cvUrl = `${baseUrl}/${bucketName}/${filePath}`;

      console.log('URL del archivo subido:', cvUrl);

      // Insertar una nueva fila en la tabla Postulacion
      const { error: insertError } = await supabase
        .from('Postulacion')
        .insert({
          id_oferta: selectedJob.id_oferta,
          user_id: user.id,
          name_user: user.user_metadata.full_name,
          correo: user.email,
          telefono: phone,
          resp_1: answers[0],
          resp_2: answers[1],
          resp_3: answers[2],
          resp_4: answers[3],
          resp_5: answers[4],
          fecha_postulacion: new Date(),
          estado: 'pendiente',
          avatar_url: user.user_metadata.avatar_url, // Agregado: guarda el avatar_url del usuario
          cv_link: cvUrl, // Agrega el URL del archivo CV a la columna cv_link
        });

      if (insertError) {
        throw insertError;
      }

      // Mostrar mensaje de éxito
      setSubmissionSuccess(true);

      // Limpiar formularios y datos para una nueva postulación
      setPhone('');
      setAnswers(['', '', '', '', '']);
      setCvFile(null);
      setCvUrl('');

    } catch (error) {
      console.error('Error al enviar la postulación:', error.message);
    }
  };

  const handleBack = () => {
    setCurrentQuestionIndex(-1); // Vuelve al paso del número de celular
  };

  const handleAccept = () => {
    // Recargar la página
    window.location.reload();
  };

  return (
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
              <label className="w-full text-left mt-4">Subir CV</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full mt-2 p-2 border rounded"
              />
              <div className="flex justify-center mt-4">
                <button
                  className={`bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32 ${phone.trim() && cvFile ? '' : 'opacity-50 cursor-not-allowed'}`}
                  onClick={() => phone.trim() && cvFile && setCurrentQuestionIndex(0)} // Cambia el índice a 0 para mostrar las preguntas si el teléfono y el archivo CV no están vacíos
                  disabled={!phone.trim() || !cvFile}
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
                      onClick={handleSubmit} // Envía las respuestas y el archivo CV
                    >
                      Enviar
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
          {submissionSuccess && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 rounded-full p-3 mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-green-500">¡Postulación Exitosa!</h2>
                  <p className="mb-4">Felicitaciones, has enviado tu postulación correctamente.</p>
                  <p className="mb-4">Los reclutadores se comunicarán contigo pronto.</p>
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