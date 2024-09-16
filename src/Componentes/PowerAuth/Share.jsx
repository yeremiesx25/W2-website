import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase.config";
import { useLocation, useNavigate } from "react-router-dom";
import Buscador from "../Power/Buscador";
import HeaderPowerAuth from "./HeaderPowerAuth";
import QuestionsModal from './QuestionsModal';
import IniciarSesion from '../Power/IniciarSesion'; // Import the IniciarSesion component
import { IoIosArrowBack } from "react-icons/io";
import { UserAuth } from "../../Context/AuthContext";
import { TbMoneybag } from 'react-icons/tb';
import { FaRegBuilding } from 'react-icons/fa';
import { MdOutlineVerifiedUser } from "react-icons/md";

function Share() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

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
          setHasApplied(!!data);
        }
      }
    };

    checkIfApplied();
  }, [user, selectedJob]);

  const formatContent = (content) => {
    if (!content) return null;
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
          {/* Content, e.g., a logo, can be added here if necessary */}
        </div>
      </section>

      <section className="p-4 md:p-8">
      <button 
  className="text-black mb-4 md:mb-6 border border-gray-400 bg-white hover:bg-gray-200 rounded-full py-2 px-4 flex items-center ml-4 md:ml-24 mt-16 md:mt-2" 
  onClick={() => navigate('/PowerAuth')}
>
  <IoIosArrowBack className="mr-2" size={20} /> Volver al listado
</button>

        <h1 className="text-primarytext text-2xl md:text-3xl font-bold mb-4 ml-4 md:ml-24">{selectedJob.puesto}</h1>
        <p className="text-black mb-4 ml-4 md:ml-24">
          <MdOutlineVerifiedUser className='inline-block mr-2 text-green-500' />
          {selectedJob.empresa} - {selectedJob.ubicacion}
        </p>
        <div className='ml-4 md:ml-24 mb-4 text-sm text-black flex items-center'>
          <TbMoneybag className='mr-2' />
          <span className='font-semibold'>S/. {selectedJob?.sueldo}</span>
          <span className='mx-2'> | </span>
          <FaRegBuilding className='inline-block mr-2' />
          <span className='font-semibold'>{selectedJob?.modalidad}</span>
        </div>
        
   
        <div className="flex flex-col md:flex-row items-center mb-5 ml-4 md:ml-24">
          <button
            className={`font-bold py-2 px-4 rounded-full mb-2 md:mb-0 ${
              hasApplied ? "bg-[#0057c2] text-white" : "bg-[#0057c2] text-white"
            }`}
            onClick={hasApplied ? null : handleOpenModal}
            disabled={hasApplied}
          >
            {hasApplied ? "YA HAS POSTULADO" : "POSTULARME"}
          </button>
          
          <span className="bg-gray-300 inline-block py-2 px-4 rounded-full ml-0 md:ml-2">
            {calcularTiempoTranscurrido(selectedJob.fecha_publicacion)}
          </span>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md ml-4 md:ml-24">
          <h2 className="font-semibold mb-4">DESCRIPCIÓN DEL EMPLEO:</h2>
          <p className="mb-2 font-bold">BENEFICIOS</p> 
          <p className="mb-2">{formatContent(selectedJob.beneficios)}</p>
          <p className="mb-2 font-bold">REQUISITOS</p> 
          <p className="mb-2">{formatContent(selectedJob.requisitos)}</p>
          <p className="mb-2 font-bold">FUNCIONES</p> 
          <p className="mb-2">{formatContent(selectedJob.funciones)}</p>
          <p className="mb-2 font-bold">HORARIO</p> 
          <p className="mb-2">{formatContent(selectedJob.horario)}</p>
        </div>
      </section>

      {isModalOpen && (
        user ? (
          <QuestionsModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            selectedJob={selectedJob}
          />
        ) : (
          <IniciarSesion
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )
      )}
    </div>
  );
}

export default Share;