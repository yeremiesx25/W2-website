import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabase.config";
import { FaWhatsapp } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { HiOutlineIdentification } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { BiHome } from "react-icons/bi";
import { LuMail } from "react-icons/lu";

const InfoPostulante = ({ postulado, onEstadoChange }) => {
  const [estadoActual, setEstadoActual] = useState(postulado.estado);
  const [userData, setUserData] = useState(null); // Iniciar con null
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de cargando

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase
          .from("perfiles")
          .select("*")
          .eq("id", postulado.user_id)
          .single();

        if (error) throw error;
        if (data) setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    const fetchQuestionsAndAnswers = async () => {
      try {
        const { data: ofertaData, error: ofertaError } = await supabase
          .from("Oferta")
          .select("preg_1, preg_2, preg_3, preg_4, preg_5, preg_6")
          .eq("id_oferta", postulado.id_oferta)
          .single();

        if (ofertaError) throw ofertaError;

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

    // Función para manejar la carga de los datos
    const fetchData = async () => {
      await fetchUserData();
      await fetchQuestionsAndAnswers();
      setLoading(false); // Dejar de cargar una vez que se obtengan los datos
    };

    fetchData();
  }, [postulado]);


  const preguntasYRespuestas = preguntas
    .map((pregunta, index) => ({ pregunta, respuesta: respuestas[index] }))
    .filter(({ pregunta, respuesta }) => pregunta && respuesta);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primarycolor"></div>
      </div>
    ); // Spinner de carga
  }

  return (
    <div className="bg-white pb-6 text-white rounded-lg border transition-all duration-900 h-full mb-4">
      <div className="flex items-center justify-around w-full p-6 bg-white rounded-lg space-x-6">
        <div className="flex space-x-20 justify-center w-full">
          <img
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-200"
            src={userData.avatar_url}
            alt=""
          />
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-xl font-medium text-gray-700">
                {userData.nombre}
              </h2>
              <p className="text-sm text-gray-600">
                {calculateAge(userData.fecha_nac)} años
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="px-4 py-2 bg-green-400 text-white text-sm font-semibold rounded-lg hover:bg-green-600 flex items-center gap-2"
              >
                <FaWhatsapp size={20} />
              </a>
              <a href={userData.cv_url} target="_blank" className="px-4 py-2 bg-red-400 text-whitetext-sm font-semibold rounded-md hover:bg-red-300">
                <FaFilePdf size={20} /> 
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-600 flex gap-2 items-center">
              <HiOutlineIdentification size={18} />
              {userData.dni}
            </p>
            <p className="text-sm text-gray-600 flex gap-2 items-center">
              <FiPhone size={18} />
              {userData.telefono}
            </p>
            <p className="text-sm text-gray-600 flex gap-2 items-center">
              <BiHome size={18} />
              {userData.distrito}
            </p>
            <p className="text-sm text-gray-600 flex gap-2 items-center">
              <LuMail size={18} />
              {userData.correo}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-white p-6 rounded-lg">
        <h3 className="text-xl font-bold text-purple-700">Respuestas</h3>
        {preguntasYRespuestas.map(({ pregunta, respuesta }, index) => (
          <div key={index} className="mb-4">
            <span className="font-semibold text-gray-700">{pregunta}</span>
            <div className="mt-1 text-gray-600">
              <span>{respuesta}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 px-10">
          <iframe
            src={userData.cv_url} // URL del CV
            style={{ width: "100%", height: "500px" }} // Ajusta el tamaño según sea necesario
            frameBorder="0"
            title="CV"
          ></iframe>
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
