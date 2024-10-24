import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';
import HeaderAdmin from './HeaderAdmin';
import MenuAdmin from './MenuAdmin';
import { useNavigate } from 'react-router-dom'; // Asegúrate de que este import esté aquí

function Programa() {
  const [user, setUser] = useState(null);
  const [interviewDetails, setInterviewDetails] = useState({ postulante: null, date: '' });
  const [interviews, setInterviews] = useState([]);

  const navigate = useNavigate(); // Inicializa useNavigate

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

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      const perfilesData = jsonData.map((row) => ({
        id: uuidv4(),
        nombre: row.Nombre,
        dni: row.DNI,
        telefono: row.Celular,
        rol: 'candidato',
        estado: true,
        correo: row.Email,
      }));

      const { error } = await supabase.from('perfiles').insert(perfilesData);

      if (error) {
        console.error('Error uploading profiles:', error);
        return;
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin />
      <MenuAdmin />
      <div className="pl-64 pt-20 flex flex-col items-center">
        {/* Schedule Interview and File Upload Buttons */}
        <div className="flex justify-between items-center w-3/4 mb-8 mt-8">
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition duration-300 ease-in-out"
            onClick={() => navigate('/Proceso')} // Cambia aquí para navegar a /Proceso
          >
            Programar Entrevista
          </button>
          
          <input 
            type="file" 
            accept=".xlsx, .xls" 
            onChange={handleFileUpload} 
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Scheduled Interviews Section */}
        <div className="w-3/4 bg-white shadow-lg rounded-lg p-6">
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