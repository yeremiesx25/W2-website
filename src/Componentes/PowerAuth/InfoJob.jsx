import React, { useState, useEffect, useRef } from "react";
import { FaLocationDot} from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import QuestionsModal from "./QuestionsModal"; // Importar el componente QuestionsModal
import { FaCopy, FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { supabase } from "../../supabase/supabase.config"; // Importar cliente de Supabase
import { UserAuth } from "../../Context/AuthContext"; // Importar contexto de autenticación
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import dayjs from "dayjs"; 
import relativeTime from 'dayjs/plugin/relativeTime';


function InfoJob({ selectedJob }) {
  const { user } = UserAuth(); // Obtener información del usuario autenticado
  const [atBottom, setAtBottom] = useState(false);
  const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [hasApplied, setHasApplied] = useState(false); // Estado para rastrear si el usuario ya se postuló
  const contentRef = useRef(null);
  const shareButtonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          setAtBottom(true);
        } else {
          setAtBottom(false);
        }
      }
    };

    if (contentRef.current) {
      contentRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shareButtonRef.current &&
        !shareButtonRef.current.contains(event.target)
      ) {
        setIsShareMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  if (!selectedJob) {
    return null; // Evitar renderizar si selectedJob es null
  }

  // Función para formatear el contenido con react-quill
  const formatContent = (content) => {
    if (!content) return null;
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: content.replaceAll('<ul>', '<ul class="list-disc pl-6">')
                          .replaceAll('<ol>', '<ol class="list-decimal pl-6">')
        }}
      />
    );
  };
  
  const jobDetails = [
    {
      title: "¿Por qué deberías unirte a nosotros?",
      content: formatContent(selectedJob.beneficios),
    },
    {
      title: "¿Qué buscamos?",
      content: formatContent(selectedJob.requisitos),
    },
    {
      title: "¿Qué es lo que harás?",
      content: formatContent(selectedJob.funciones),
    },
    {
      title: "Horario de Trabajo",
      content: formatContent(selectedJob.horario),
    },
  ];

  const whatsappBaseUrl = selectedJob.wtsp_url
    ? selectedJob.wtsp_url.split("?")[0]
    : "";
  const whatsappMessage = `Hola, estoy interesado en el puesto de ${selectedJob.puesto}`;
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleApplyClick = () => {
    setIsQuestionsModalOpen(true); // Mostrar el modal de preguntas directamente
  };

  const handleShareClick = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  const handleCopyLink = () => {
    const shareUrl = `https://w2asesoresyconsultores.com/Share?id=${selectedJob.id_oferta}`;
    navigator.clipboard.writeText(shareUrl);

    const copiedMessage = document.createElement("div");
    copiedMessage.textContent = "Enlace Copiado";
    copiedMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    copiedMessage.style.color = "white";
    copiedMessage.style.position = "fixed";
    copiedMessage.style.bottom = "20px";
    copiedMessage.style.left = "50%";
    copiedMessage.style.transform = "translateX(-50%)";
    copiedMessage.style.padding = "10px 20px";
    copiedMessage.style.borderRadius = "5px";
    copiedMessage.style.zIndex = "9999";
    document.body.appendChild(copiedMessage);

    setTimeout(() => {
      copiedMessage.remove();
    }, 3000);

    setIsShareMenuOpen(false);
  };

   // Formatear la fecha de publicación a dd-mm-yyyy
   const formattedDate = dayjs(selectedJob.fecha_publicacion).format("DD-MM-YYYY");
   // Cargar el plugin
dayjs.extend(relativeTime);
const timeAgo = dayjs(selectedJob.fecha_publicacion).fromNow();

  return (
    <div
  className="selected-job-info w-full sm:w-3/5 rounded-lg md:flex flex-col p-8 mx-8 bg-white hidden transition-all duration-500 font-dmsans"
  style={{ height: "650px", overflowY: "auto", position: "relative" }}
>
  <p className="text-gray-500 text-sm">{timeAgo}</p>
  <h2 className="font-bold text-2xl mb-3 text-gray-800">
    {selectedJob.puesto}
  </h2>

  <div className="flex items-center space-x-2 mb-4">
    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{selectedJob.ubicacion}</span>
    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">S/. {selectedJob.sueldo}</span>
  </div>

  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center">
    <div className="bg-primarycolor p-2 rounded-lg mr-2">
                <MdOutlineVerifiedUser className="text-white text-xl" />
              </div>
      <div>
        <p className="text-sm font-medium text-gray-800">{selectedJob.empresa}</p>
        <p className="text-xs text-gray-500">Reclutador{selectedJob.reclutador}</p>
      </div>
    </div>
  </div>

  <div className="mb-4">
    
    <p className="text-gray-700 text-sm leading-relaxed">
      <h3 className="font-semibold text-lg text-gray-700">Descripción</h3>
          <p>{selectedJob.descripcion}</p>
      {jobDetails.map((detail, index) => (
        <div key={index} className="py-2">
          <div className="font-semibold text-gray-700 text-lg">{detail.title}</div>
          
          <div className="mt-2">{detail.content}</div>
        </div>
      ))}
    </p>
  </div>

  

  <div className="flex justify-center mt-4">
    <button
      className={`font-bold py-2 px-4 rounded-full mr-4 ${hasApplied ? "bg-gray-500 text-white cursor-not-allowed" : "bg-[#0057c2] text-white"}`}
      onClick={hasApplied ? null : handleApplyClick}
      disabled={hasApplied}
    >
      {hasApplied ? "YA HAS POSTULADO" : "POSTULARME"}
    </button>
    {whatsappBaseUrl && (
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-[#00d35e] text-white font-bold py-2 px-4 rounded-full flex items-center">
          <IoLogoWhatsapp className="mr-2" size={24} />
          WhatsApp
        </button>
      </a>
    )}
  </div>

  <QuestionsModal
    isOpen={isQuestionsModalOpen}
    onClose={() => setIsQuestionsModalOpen(false)}
    selectedJob={selectedJob}
  />
</div>

  );
}

export default InfoJob;