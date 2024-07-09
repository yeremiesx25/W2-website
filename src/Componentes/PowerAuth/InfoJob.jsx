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

  return (
    <div
      className="selected-job-info w-full sm:w-1/2 border rounded-lg md:flex flex-col p-4 mx-8 bg-white shadow-lg hidden"
      style={{ height: "650px", overflowY: "auto", position: "relative" }}
    >
      <h2 className="ml-1 mt-3 font-semibold text-2xl mb-3 text-gray-800">
        {selectedJob.puesto}
      </h2>
      <div className="flex items-center justify-between mb-2 mt-2">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start">
            <span
              className="text-blue-900 text-base uppercase font-regular tracking-wide"
              style={{ display: "flex", alignItems: "center" }}
            >
              {selectedJob.empresa}<MdOutlineVerifiedUser className="flex text-green-500 ml-1 text-lg mb-0.5" />
            </span>
            <span className="inline-block mx-4 h-4 w-px bg-gray-400"></span>
            <span
              className="text-gray-700 text-base  font-regular tracking-wide"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaLocationDot style={{ marginRight: "5px" }} />
              {selectedJob.ubicacion}
            </span>
            <span className="inline-block mx-4 h-4 w-px bg-gray-400"></span>
            <span
              className="text-gray-700 text-base font-regular tracking-wide"
              style={{ display: "flex", alignItems: "center" }}
            >
              S/. {selectedJob.sueldo}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-2 items-center">
        <button
          className={`font-bold py-2 px-4 rounded-full mb-4 ${
            hasApplied ? "bg-[#0057c2] text-white" : "bg-[#0057c2] text-white"
          }`}
          onClick={hasApplied ? null : handleApplyClick}
          disabled={hasApplied}
        >
          {hasApplied ? "YA HAS POSTULADO" : "POSTULARME"}
        </button>
        <div
          ref={shareButtonRef}
          className="ml-2 flex items-center justify-center bg-[#eaf3fb] rounded-full cursor-pointer hover:bg-blue-100 mb-4 relative"
          style={{ height: "40px", width: "40px" }}
          onClick={handleShareClick}
        >
          <CiShare2 size={24} color="#005da9" />

          {isShareMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
              <div className="py-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Hola, te puede interesar este puesto de trabajo: ${selectedJob.puesto}. Aquí tienes el enlace: https://w2asesoresyconsultores.com/Share?id=${selectedJob.id_oferta}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  <IoLogoWhatsapp className="mr-2" size={16} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `https://w2asesoresyconsultores.com/Share?id=${selectedJob.id_oferta}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  <FaFacebookF className="mr-2" size={16} />
                  <span>Facebook</span>
                </a>

                <button
                  onClick={handleCopyLink}
                  className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  <FaCopy className="mr-2" size={16} />
                  <span>Copiar Enlace</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        ref={contentRef}
        className="overflow-y-auto pb-4 mt-3"
        style={{ height: "420px" }}
      >
        <h3 className="font-semibold text-xl text-gray-800">Descripción del Empleo</h3>
        {jobDetails.map((detail, index) => (
          <div key={index} className="py-5 border-b border-gray-300">
            <div className="font-semibold font-dmsans text-gray-800">
              <div>{detail.title}</div>
            </div>
            <div
              className="mt-3 text-gray-700 font-regular"
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                width: "100%",
              }}
            >
              {detail.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4" style={{ opacity: atBottom ? 1 : 0, transition: "opacity 0.3s" }}>
  <button
    className={`font-bold py-2 px-4 rounded-full mr-4 ${
      hasApplied ? "bg-[#0057c2] text-white" : "bg-[#0057c2] text-white"
    }`}
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