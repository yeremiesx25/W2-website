import React, { useState, useEffect, useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import QuestionsModal from "./QuestionsModal"; // Importar el componente QuestionsModal
import { supabase } from "../../supabase/supabase.config"; // Importar cliente de Supabase
import { UserAuth } from "../../Context/AuthContext"; // Importar contexto de autenticación
import { MdOutlineVerifiedUser } from "react-icons/md";
import dayjs from "dayjs"; 
import relativeTime from 'dayjs/plugin/relativeTime';
import ShareButton from "./ShareButton"; // Import the ShareButton component
import { IoLogoWhatsapp } from "react-icons/io";

function InfoJob({ selectedJob }) {
    const { user } = UserAuth(); // Obtener información del usuario autenticado
    const [atBottom, setAtBottom] = useState(false);
    const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);
    const [hasApplied, setHasApplied] = useState(false); // Estado para rastrear si el usuario ya se postuló
    const [nombreReclutador, setNombreReclutador] = useState(""); // Estado para el nombre del reclutador
    const contentRef = useRef(null);
    const navigate = useNavigate();

    // Función para obtener el nombre del reclutador desde la tabla perfiles
    const fetchNombreReclutador = async () => {
        if (selectedJob) {
            const { data, error } = await supabase
                .from('perfiles')
                .select('nombre')
                .eq('id', selectedJob.id_reclutador)
                .single(); // Solo esperamos un resultado

            if (error) {
                console.error("Error fetching recruiter name:", error);
            } else {
                setNombreReclutador(data?.nombre || "Reclutador no encontrado");
            }
        }
    };

    useEffect(() => {
        fetchNombreReclutador(); // Llamar la función cuando selectedJob cambia
    }, [selectedJob]);

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
    
    const jobDetails = [
        {
            title: "¿Por qué deberías unirte a nosotros?",
            content: (selectedJob.beneficios),
        },
        {
            title: "¿Qué buscamos?",
            content: (selectedJob.requisitos),
        },
        {
            title: "¿Qué es lo que harás?",
            content: (selectedJob.funciones),
        },
        {
            title: "Horario de Trabajo",
            content: (selectedJob.horario),
        },
    ];

    const whatsappBaseUrl = selectedJob.wtsp_url
      ? selectedJob.wtsp_url.split("?")[0]
      : "";
    const whatsappMessage = `Hola, estoy interesado en el puesto de ${selectedJob.puesto}`;
    const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

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
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    {selectedJob.ubicacion}
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    S/. {selectedJob.sueldo}
                </span>
            </div>

            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className="bg-primarycolor p-2 rounded-lg mr-2">
                        <MdOutlineVerifiedUser className="text-white text-xl" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-800">
                            {selectedJob.empresa}
                        </p>
                        <p className="text-xs text-gray-500">
                            {nombreReclutador}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mb-4">
                <button
                    className={`font-bold py-2 px-4 rounded-full w-48 ${
                        hasApplied ? "bg-gray-500 text-white cursor-not-allowed" : "bg-[#0057c2] text-white"
                    }`}
                    onClick={hasApplied ? null : () => setIsQuestionsModalOpen(true)} // Mostrar el modal de preguntas
                    disabled={hasApplied}
                >
                    {hasApplied ? "YA HAS POSTULADO" : "POSTULARME"}
                </button>

                {/* Replace the old share button with ShareButton */}
                <div className="mr-60">
        <ShareButton selectedJob={selectedJob} />
    </div>
            </div>

            <div className="mb-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                    <h3 className="font-semibold text-lg text-gray-800">Descripción</h3>
                    <p>{selectedJob.descripcion}</p>
                    {jobDetails.map((detail, index) => (
                        <div key={index} className="py-2">
                            <div>{detail.title}</div>
                            <div className="mt-2">{detail.content}</div>
                        </div>
                    ))}
                </p>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    className={`font-bold py-2 px-4 rounded-full mr-4 ${
                        hasApplied
                            ? "bg-gray-500 text-white cursor-not-allowed"
                            : "bg-[#0057c2] text-white"
                    }`}
                    onClick={hasApplied ? null : () => setIsQuestionsModalOpen(true)} // Mostrar el modal de preguntas
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