import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabase.config";
import { FaWhatsapp } from "react-icons/fa";

const InfoPostulante = ({ 
  postulado,
  preguntas,
  respuestas,
  onEstadoChange,
}) => {
  const [estadoActual, setEstadoActual] = useState(postulado.estado);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setEstadoActual(postulado.estado);

    // Fetch additional user data from 'Usuario' table
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase
          .from("usuario")
          .select("dni_user, fecha_nac, distrito, cv_url") // Include cv_url in the selection
          .eq("user_id", postulado.user_id)
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

    fetchUserData();
  }, [postulado]);

  const whatsappLink = `https://wa.me/${postulado.telefono}`;

  const handleEstadoClick = async (estadoNuevo) => {
    try {
      console.log("Estado nuevo:", estadoNuevo);

      // Actualizar el estado en Supabase
      const { data, error } = await supabase
        .from("Postulacion")
        .update({ estado: estadoNuevo })
        .eq("id_postulacion", postulado.id_postulacion);

      if (error) {
        throw error;
      }

      if (data) {
        // Llamar a la función callback para actualizar el estado en el componente padre
        setEstadoActual(estadoNuevo);
        onEstadoChange(); // Llamar al callback
      } else {
        console.warn("La respuesta de actualización es null o undefined");
      }
    } catch (error) {
      console.error("Error actualizando estado:", error.message);
    }
  };

  // Agregar parámetros para visualizar solo el documento
  const cvUrl = postulado.cv_link ? `${postulado.cv_link}#view=fitH` : '';

  return (
    <div className="bg-gray-100 shadow overflow-hidden sm:rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={postulado.avatar_url || "https://via.placeholder.com/150"}
            alt=""
          />
          <div>
            <p className="text-lg font-semibold">{postulado.name_user}</p>
            <p className="text-gray-500">{postulado.correo}</p>
            <p className="text-gray-500">{postulado.fecha_postulacion}</p>
          </div>
          <a
            href={whatsappLink}
            className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center text-white text-3xl"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleEstadoClick("seleccionado")}
              className={`px-4 py-2 ${
                estadoActual === "seleccionado"
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400`}
            >
              Seleccionar
            </button>
            <button
              onClick={() => handleEstadoClick("descartado")}
              className={`px-4 py-2 ${
                estadoActual === "descartado"
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400`}
            >
              Descartar
            </button>
            <button
              onClick={() => handleEstadoClick("pendiente")}
              className={`px-4 py-2 ${
                estadoActual === "pendiente"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
            >
              Pendiente
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <div className="mb-2">
          <span className="font-semibold">Teléfono:</span>{" "}
          <span>{postulado.telefono}</span> <p></p>{" "}
        </div>

        {userData && (
          <>
            <div>
              <div className="mb-2">
                <span className="font-semibold">DNI:</span>{" "}
                <span>{userData.dni_user}</span>
              </div>

              <div className="mb-2">
                <span className="font-semibold">Edad:</span>{" "}
                <span>{userData && calculateAge(userData.fecha_nac)}</span>
              </div>

              <div className="mb-2">
                <span className="font-semibold">Fecha de Nacimiento:</span>{" "}
                <span>{userData.fecha_nac}</span>
              </div>

              <div className="mb-2">
                <span className="font-semibold">Distrito:</span>{" "}
                <span>{userData.distrito}</span>
              </div>

              <p className="text-lg font-semibold mt-4">Respuestas:</p>
              <ul className="divide-y divide-gray-200">
                {preguntas.map((pregunta, index) => (
                  <li key={index} className="py-2">
                    <p className="text-gray-500">{pregunta}</p>
                    <p className="mt-1">{respuestas[index]}</p>
                  </li>
                ))}
              </ul>

              {userData.cv_url && ( // Check if cv_url exists before displaying
                <div className="mt-4">
                  <p className="text-lg font-semibold mb-2">Currículum Vitae:</p>
                  <iframe
                    src={userData.cv_url}
                    title="CV"
                    width="100%"
                    height="500px"
                    className="border border-gray-300 rounded-lg"
                  />
                </div>
              )}
            </div>
          </>
        )}
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