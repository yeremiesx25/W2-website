import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import HeaderAdmin from './HeaderAdmin';
import MenuAdmin from './MenuAdmin';
import { useNavigate } from 'react-router-dom'; 
import JobProceso from "./JobProceso";


function Programa() {
  const [user, setUser] = useState(null);
  const [interviewDetails, setInterviewDetails] = useState({ postulante: null, date: '' });
  const [interviews, setInterviews] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, []);

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

  const handleScheduleInterview = async () => {
    const { postulante, date } = interviewDetails;

    const { error } = await supabase
      .from('Entrevistas')
      .insert([{ nombre_postulante: postulante, fecha: date, id_reclutador: user.id }]);

    if (error) {
      console.error('Error scheduling interview:', error);
      return;
    }

    setInterviews([...interviews, { nombre_postulante: postulante, fecha: date }]);
    setInterviewDetails({ postulante: null, date: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin />
      <MenuAdmin />
      <div className="pl-64 pt-20 flex flex-col items-center">
        {/* Schedule Interview Button */}
        <div className="flex justify-between items-center w-3/4 mb-8 mt-8">
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition duration-300 ease-in-out"
            onClick={() => navigate('/Proceso')}
          >
            Programar Entrevista
          </button>
        </div>

        <JobProceso />
      </div>
    </div>
  );
}

export default Programa;