import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabase.config";
import { FaWhatsapp, FaCheck, FaQuestion } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const InfoPostulante = ({ postulado, onEstadoChange }) => {
  const [estadoActual, setEstadoActual] = useState(postulado.estado);
  const [userData, setUserData] = useState(null);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    setEstadoActual(postulado.estado);

    // Fetch additional user data from 'Perfiles' table
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase
          .from("perfiles")
          .select("dni, distrito, fecha_nac") // Cambiado a la tabla perfiles
          .eq("id", postulado.user_id) // Asegúrate de usar el campo correcto para el ID
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setUserData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    // Fetch questions and answers
    const fetchQuestionsAndAnswers = async () => {
      try {
        // Obtén la oferta relacionada usando el ID de la postulacion
        const { data: ofertaData, error: ofertaError } = await supabase
          .from("Oferta")
          .select("preg_1, preg_2, preg_3, preg_4, preg_5, preg_6")
          .eq("id_oferta", postulado.id_oferta)
          .single();

        if (ofertaError) {
          throw ofertaError;
        }

        if (ofertaData) {
          setPreguntas([
            ofertaData.preg_1,
            ofertaData.preg_2,
            ofertaData.preg_3,
            ofertaData.preg_4,
            ofertaData.preg_5,
            ofertaData.preg_6,
          ]);
        }

        // Obtener respuestas de la tabla Postulacion
        setRespuestas([
          postulado.resp_1,
          postulado.resp_2,
          postulado.resp_3,
          postulado.resp_4,
          postulado.resp_5,
          postulado.resp_6,
        ]);
      } catch (error) {
        console.error("Error fetching questions and answers:", error.message);
      }
    };

    fetchUserData();
    fetchQuestionsAndAnswers();
  }, [postulado]);

  const whatsappLink = `https://wa.me/${postulado.telefono}`;

  const handleEstadoClick = async (estadoNuevo) => {
    try {
      const { data, error } = await supabase
        .from("Postulacion")
        .update({ estado: estadoNuevo })
        .eq("id_postulacion", postulado.id_postulacion);

      if (error) {
        throw error;
      }

      if (data) {
        setEstadoActual(estadoNuevo);
        onEstadoChange();
      }
    } catch (error) {
      console.error("Error actualizando estado:", error.message);
    }
  };

  const cvUrl = postulado.cv_link ? `${postulado.cv_link}#view=fitH` : '';

  // Combina preguntas y respuestas en un solo array de objetos
  const preguntasYRespuestas = preguntas
    .map((pregunta, index) => ({ pregunta, respuesta: respuestas[index] }))
    .filter(({ pregunta, respuesta }) => pregunta && respuesta); // Filtra las que no tienen pregunta o respuesta

  return (
    <div className=" text-white rounded-lg shadow-md">
 <div className="flex items-center w-full p-6 bg-white rounded-lg shadow-md space-x-6">
      <img
        className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
        src={postulado.avatar_url}
        alt=""
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{postulado.name_user}</h2>
        <p className="text-sm text-gray-500">Full stack web developer</p>
        <p className="text-sm text-blue-500">@Epic Coders</p>
      </div>
      <div className="ml-auto flex space-x-4">
        <a
          href={whatsappLink}
          className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-md hover:bg-green-600"
        >
          Contact
        </a>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-md hover:bg-gray-100">
          Resume
        </button>
      </div>
    </div>
  
  <div className="flex items-center space-x-2 mb-6">
    <button
      onClick={() => handleEstadoClick("seleccionado")}
      className={`px-4 py-2 ${estadoActual === "seleccionado" ? "bg-green-500 text-white" : "bg-green-300 text-white"} rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400`}
    >
      <FaCheck size={24} />
    </button>
    <button
      onClick={() => handleEstadoClick("pendiente")}
      className={`px-4 py-2 ${estadoActual === "pendiente" ? "bg-yellow-500 text-white" : "bg-gray-300 text-gray-700"} rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
    >
      <FaQuestion size={24} />
    </button>
    <button
      onClick={() => handleEstadoClick("descartado")}
      className={`px-4 py-2 ${estadoActual === "descartado" ? "bg-red-500 text-white" : "bg-red-300 text-white"} rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400`}
    >
      <IoMdClose size={24} />
    </button>
  </div>
  
  <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
    <h3 className="text-xl font-bold text-purple-700">Detalles del Postulante</h3>
    <div className="mb-2">
      <span className="font-semibold">Teléfono:</span> <span>{postulado.telefono}</span>
    </div>
    {userData && (
      <>
        <div className="mb-2">
          <span className="font-semibold">DNI:</span> <span>{userData.dni}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Distrito:</span> <span>{userData.distrito}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Fecha de Nacimiento:</span> <span>{userData.fecha_nac}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Edad:</span> <span>{calculateAge(userData.fecha_nac)}</span>
        </div>
      </>
    )}
  </div>
  
  <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-purple-700">Respuestas</h3>
    {preguntasYRespuestas.map(({ pregunta, respuesta }, index) => (
      <div key={index} className="mb-4">
        <span className="font-semibold">{pregunta}</span>
        <div className="mt-1">
          <span>{respuesta}</span>
        </div>
      </div>
    ))}
  </div>
</div>
  
  );
};

function calculateAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default InfoPostulante;