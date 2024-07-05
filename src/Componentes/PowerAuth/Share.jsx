import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase.config";
import { useLocation, useNavigate } from "react-router-dom";
import Buscador from "../Power/Buscador";
import HeaderPowerAuth from "./HeaderPowerAuth";
import QuestionsModal from './QuestionsModal'; // Importar el componente QuestionsModal
import { IoIosArrowBack } from "react-icons/io";
import { UserAuth } from "../../Context/AuthContext"; // Importar contexto de autenticación

function Share() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook useNavigate para manejar la navegación
  const { user } = UserAuth(); // Obtener información del usuario autenticado
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal
  const [hasApplied, setHasApplied] = useState(false); // Estado para rastrear si el usuario ya se postuló

  useEffect(() => {
    const fetchJob = async () => {
      const jobId = new URLSearchParams(location.search).get("id");
      if (jobId) {
        const { data, error } = await supabase
          .from('Oferta')
          .select('*')
          .eq('id_oferta', jobId)
          .single();
        if (error) {
          console.error("Error fetching job", error);
        } else {
          setSelectedJob(data);
        }
      }
    };

    fetchJob();
  }, [location]);

  useEffect(() => {
    const checkIfApplied = async () => {
      if (user && selectedJob) {
        const { data, error } = await supabase
          .from("Postulacion")
          .select("id_postulacion")
          .eq("user_id", user.id)
          .eq("id_oferta", selectedJob.id_oferta)
          .single();

        if (error && error.code !== "PGRST116") {
          console.error("Error checking if user has applied:", error.message);
        } else {
          setHasApplied(!!data); // Si hay datos, el usuario ya se ha postulado
        }
      }
    };

    checkIfApplied();
  }, [user, selectedJob]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!selectedJob) {
    return null; 
  }

  // Función para formatear el contenido como lista si contiene guiones o puntos
  const formatContentAsList = (content) => {
    if (!content) return null;
    // Verificar si el contenido tiene listas separadas por guiones o puntos
    const isList = content.includes("-") || content.includes("•");
    if (isList) {
      return content.split(/\n/).map((item, index) => (
        <li key={index} className="mt-2">
          {item.trim()}
        </li>
      ));
    } else {
      return <p>{content}</p>; // Devolver el contenido sin modificar si no hay listas detectadas
    }
  };

  return (
    <div>
      <HeaderPowerAuth />
      <section className="w-full bg-white font-dmsans flex flex-col items-center">
        <div className="flex items-center w-full justify-center">
          <Buscador />
        </div>
      </section>
      
      <section className="p-8">
        <button 
          className="text-black mb-4 ml-24 border border-gray-400 bg-white hover:bg-gray-200 rounded-full py-2 px-4 flex items-center" 
          onClick={() => navigate('/PowerAuth')} // Redirigir a PowerAuth
        >
          <IoIosArrowBack className="mr-2" size={20} /> Volver al listado
        </button>

        <h1 className="text-3xl font-bold mb-4 ml-24">{selectedJob.puesto}</h1>
        <p className="text-black mb-6 ml-24">{selectedJob.empresa} - {selectedJob.ubicacion}</p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md ml-24">
          <h2 className="text-xl font-semibold mb-4">Descripción de la oferta</h2>
          <p className="mb-2 font-bold">Salario:</p> 
          <p className="mb-2">S/. {selectedJob.sueldo}</p>
          <p className="mb-2 font-bold">Beneficios:</p> 
          <ul className="mb-2">
            {formatContentAsList(selectedJob.beneficios)}
          </ul>
          <p className="mb-2 font-bold">Requisitos:</p> 
          <ul className="mb-2">
            {formatContentAsList(selectedJob.requisitos)}
          </ul>
          <p className="mb-2 font-bold">Funciones:</p> 
          <ul className="mb-2">
            {formatContentAsList(selectedJob.funciones)}
          </ul>
          <p className="mb-2 font-bold">Horario:</p> 
          <ul className="mb-2">
            {formatContentAsList(selectedJob.horario)}
          </ul>
          <p className="mb-2 font-bold">Fecha de publicación:</p> 
          <p className="mb-2">{selectedJob.fecha_publicacion}</p>
        </div>
        <button
          className={` mt-4 font-bold py-2 px-4 rounded-full mb-4 ml-24 ${
            hasApplied ? "bg-[#0057c2] text-white" : "bg-[#0057c2] text-white"
          }`}
          onClick={hasApplied ? null : handleOpenModal}
          disabled={hasApplied}
        >
          {hasApplied ? "Ya te has postulado" : "POSTULARME"}
        </button>
      </section>

      {/* Renderizar el modal */}
      <QuestionsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedJob={selectedJob}
      />
    </div>
  );
}

export default Share;