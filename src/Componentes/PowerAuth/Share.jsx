import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase.config";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderPowerAuth from "./HeaderPowerAuth";
import QuestionsModal from './QuestionsModal';
import IniciarSesion from '../Power/IniciarSesion';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork, MdOutlineVerifiedUser } from "react-icons/md";
import { UserAuth } from "../../Context/AuthContext";

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

  const formatToList = (text) => {
    if (!text) return '';
  
    // Separar el texto por puntos y eliminar espacios innecesarios
    const items = text.split('.').map(item => item.trim()).filter(item => item);
    
    // Crear elementos de lista y mantener el punto al final
    const listItems = items.map((item) => `<li>${item}.</li>`).join('');
    
    // Retornar la lista HTML
    return `<ul>${listItems}</ul>`;
  };

  const formatContent = (content) => {
    if (!content) return null;

    // Si el contenido es solo texto plano, convertirlo a lista
    const formattedContent = content.includes('.') ? formatToList(content) : content;

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
    <div className="font-dmsans">
      <HeaderPowerAuth />
      <section className="flex flex-col pt-20">
        {/* Header */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4">
          <div className="bg-gray-100 p-3 rounded-xl mb-4">
            <div className="bg-primarycolor p-2 rounded-lg">
              <MdOutlineVerifiedUser className="text-white text-xl" />
            </div>
          </div>
          <h1 className="text-gray-900 text-xl font-semibold">
            {selectedJob.puesto || "Senior UI Designer"}
          </h1>
          <p className="text-gray-500">{selectedJob.empresa}</p>
        </div>

        {/* Info Cards */}
        <div className="flex space-x-2 w-full justify-center font-light">
          <span className="bg-blue-100 text-primarycolor text-sm px-3 py-1 rounded-full flex gap-2 items-center">
            <IoLocationOutline /> {selectedJob.ubicacion}
          </span>
          <span className="bg-blue-100 text-primarycolor text-sm px-3 py-1 rounded-full flex gap-2 items-center">
            <MdOutlineMapsHomeWork /> {selectedJob.modalidad}
          </span>
          <span className="bg-blue-100 text-primarycolor text-sm px-3 py-1 rounded-full flex gap-2 items-center">
            S/. {selectedJob.sueldo}
          </span>
        </div>
        <span className="text-gray-500 text-sm mb-4 text-center my-4">
          {calcularTiempoTranscurrido(selectedJob.fecha_publicacion) || "18 January 2023"}
        </span>

        {/* Apply Section */}
        <div className="flex w-full flex-col md:flex-row items-center justify-center my-4 px-4 md:px-24 bg-transparent fixed bottom-0">
          <div className="flex items-center justify-center bg-white rounded-lg">
            <button
              className={`font-bold py-3 px-6 w-80 rounded-lg bg-primarycolor text-white ${hasApplied ? "opacity-70 cursor-not-allowed" : ""}`}
              onClick={hasApplied ? null : handleOpenModal}
              disabled={hasApplied}
            >
              {hasApplied ? "Postulado" : "Postular Ahora"}
            </button>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white p-6 rounded-lg shadow-md px-4 md:px-24 pb-20">
          <h2 className="font-semibold text-xl text-gray-800 mb-4">Descripción del Empleo</h2>

          <div className="mb-4">
            <p className="font-semibold mb-2 text-lg text-gray-700">Beneficios</p>
            <p className="text-md font-light text-gray-700">{formatContent(selectedJob.beneficios)}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2 text-lg text-gray-700">Requisitos</p>
            <p className="text-md font-light text-gray-700">{formatContent(selectedJob.requisitos)}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2 text-lg text-gray-700">Funciones</p>
            <p className="text-md font-light text-gray-700">{formatContent(selectedJob.funciones)}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2 text-lg text-gray-700">Horario</p>
            <p className="text-md font-light text-gray-700">{formatContent(selectedJob.horario)}</p>
          </div>
        </div>
      </section>

      {isModalOpen &&
        (user ? (
          <QuestionsModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            selectedJob={selectedJob}
          />
        ) : (
          <IniciarSesion isOpen={isModalOpen} onClose={handleCloseModal} />
        ))}
    </div>
  );
}

export default Share;