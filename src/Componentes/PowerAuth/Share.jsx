import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase.config";
import { useLocation, useNavigate } from "react-router-dom";
import Buscador from "../Power/Buscador";
import HeaderPowerAuth from "./HeaderPowerAuth";
import QuestionsModal from './QuestionsModal'; // Importar el componente QuestionsModal
import { IoIosArrowBack } from "react-icons/io";
import { UserAuth } from "../../Context/AuthContext"; // Importar contexto de autenticación
import { TbMoneybag } from 'react-icons/tb';
import { FaRegBuilding } from 'react-icons/fa';
import { MdOutlineVerifiedUser } from "react-icons/md";

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

  // Función para formatear el contenido con viñetas o enumeraciones
  const formatContent = (content) => {
    if (!content) return null;

    // Aplicar clases de Tailwind CSS a las listas desordenadas y ordenadas
    const formattedContent = content
      .replaceAll("<ul>", '<ul class="list-disc pl-6">')
      .replaceAll("<ol>", '<ol class="list-decimal pl-6">');

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: formattedContent,
        }}
      />
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Función para calcular tiempo transcurrido desde la fecha de publicación
  const calcularTiempoTranscurrido = (fecha) => {
    const fechaPublicacion = new Date(fecha);
    const fechaActual = new Date();
    const diferencia = fechaActual.getTime() - fechaPublicacion.getTime();
    const diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    if (diasTranscurridos < 1) {
      return "Publicado Ahora";
    } else if (diasTranscurridos === 1) {
      return "Publicado hace 1 día";
    } else {
      return `Publicado hace ${diasTranscurridos} días`;
    }
  };

  if (!selectedJob) {
    return null;
  }

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

        <h1 className="text-primarytext text-3xl font-bold mb-4 ml-24">{selectedJob.puesto}</h1>
        <p className="text-black mb-4 ml-24"> <MdOutlineVerifiedUser className='inline-block mr-2 text-green-500' />{selectedJob.empresa} - {selectedJob.ubicacion}</p>
        <div className='ml-24 mb-4 text-sm text-black flex items-center '>
          <TbMoneybag className='mr-2' />
          <span className='font-semibold'>S/. {selectedJob?.sueldo}</span>
          <span className='mx-2'> | </span>
          <FaRegBuilding className='inline-block mr-2' />
          <span className='font-semibold'>{selectedJob?.modalidad}</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md ml-24">
          <h2 className="font-semibold mb-4">DESCRIPCION DEL EMPLEO:</h2>
          <p className="mb-2 font-bold">BENEFICIOS</p> 
          <p className="mb-2">{formatContent(selectedJob.beneficios)}</p>
          <p className="mb-2 font-bold">REQUISITOS</p> 
          <p className="mb-2">{formatContent(selectedJob.requisitos)}</p>
          <p className="mb-2 font-bold">FUNCIONES</p> 
          <p className="mb-2">{formatContent(selectedJob.funciones)}</p>
          <p className="mb-2 font-bold">HORARIO</p> 
          <p className="mb-2">{formatContent(selectedJob.horario)}</p>

          <p className="mb-2 mt-6 font-bold">{calcularTiempoTranscurrido(selectedJob.fecha_publicacion)}</p>
        </div>
        <button
          className={` mt-4 font-bold py-2 px-4 rounded-full mb-4 ml-24 ${
            hasApplied ? "bg-[#0057c2] text-white" : "bg-[#0057c2] text-white"
          }`}
          onClick={hasApplied ? null : handleOpenModal}
          disabled={hasApplied}
        >
          {hasApplied ? "YA HAS POSTULADO" : "POSTULARME"}
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