import React, { useState, useEffect } from 'react';
import { supabase } from "../../supabase/supabase.config";
import { UserAuth } from '../../Context/AuthContext';
import LoadingSpinner from './LoadingSpinner';
import QuestionList from './QuestionList';
import SubmissionSuccess from './SubmissionSuccess';

function QuestionsModal({ isOpen, onClose, selectedJob }) {
  const { user } = UserAuth();
  const [questions, setQuestions] = useState([]);
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

        if (error) throw error;

        const questionsData = [data.preg_1, data.preg_2, data.preg_3, data.preg_4, data.preg_5];
        setQuestions(questionsData.filter((question) => question));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error.message);
        setLoading(false);
      }
    };

    if (isOpen && selectedJob) {
      fetchQuestions();
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
      // Verify that selectedJob is valid
      if (!selectedJob || !selectedJob.id_oferta) {
        console.error('Oferta no válida:', selectedJob);
        alert('Oferta no válida.');
        return;
      }
  
      // Fetch user profile data
      const { data: profileData, error: profileError } = await supabase
        .from('perfiles')
        .select('nombre, correo, avatar_url, telefono')
        .eq('id', user.id)
        .single();
  
      if (profileError || !profileData) {
        console.error('Error al obtener el perfil:', profileError ? profileError.message : 'Perfil no encontrado.');
        alert('No se pudo obtener el perfil del usuario.');
        return;
      }
  
      const { nombre, correo, avatar_url, telefono } = profileData;
  
      // Insert application into the Postulacion table
      const { error: insertError } = await supabase
        .from('Postulacion')
        .insert({
          id_oferta: selectedJob.id_oferta,
          user_id: user.id,
          name_user: nombre,
          correo: correo,
          telefono: telefono, // Use the phone obtained from the profile
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
  
      // Update the applicant count
      const { error: updateError } = await supabase
        .from('Oferta')
        .update({ count_postulados: selectedJob.count_postulados + 1 })
        .eq('id_oferta', selectedJob.id_oferta);
  
      if (updateError) {
        console.error('Error al actualizar el conteo de postulados:', updateError.message);
        alert('Error al actualizar el conteo de postulados.');
        return;
      }
  
      // If everything went well
      setSubmissionSuccess(true);
      setAnswers(['', '', '', '', '']); // Clear answers
    } catch (error) {
      console.error('Error al enviar la postulación:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40 z-50 ${isOpen ? '' : 'hidden'}`} onClick={handleClose}>
      <div className="bg-white rounded-lg p-8 w-[700px] h-[600px] relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl" onClick={handleClose}>×</button>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Preguntas para el Postulante</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <QuestionList
            questions={questions}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            onSubmit={handleSubmit}
          />
        )}
        <SubmissionSuccess isVisible={submissionSuccess} onAccept={handleClose} />
      </div>
    </div>
  );
}

export default QuestionsModal;