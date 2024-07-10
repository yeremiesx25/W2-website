import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';

const InfoPostulante = ({ postulado, preguntas, respuestas }) => {
  const [estadoActual, setEstadoActual] = useState(postulado.estado); // Estado actual del postulante

  useEffect(() => {
    setEstadoActual(postulado.estado); // Actualizar estado actual cuando cambia el postulado seleccionado
  }, [postulado]);

  const handleEstadoClick = async (estadoNuevo) => {
    try {
      console.log('Estado nuevo:', estadoNuevo); // Verificar qué valor se está pasando como estadoNuevo

      // Actualizar el estado en Supabase
      const { data, error } = await supabase
        .from('Postulacion')
        .update({ estado: estadoNuevo })
        .eq('id_postulacion', postulado.id_postulacion); // Verifica si 'id_postulacion' es correcto

      if (error) {
        throw error;
      }

      // Verificar si data es válido antes de acceder a sus propiedades
      if (data) {
        // Aquí asumimos que data debería ser un array o un objeto con la fila actualizada
        console.log('Respuesta de actualización:', data);

        if (Array.isArray(data) && data.length > 0) {
          setEstadoActual(estadoNuevo); // Actualizar el estado local si la actualización fue exitosa
        } else if (typeof data === 'object' && data !== null) {
          // Si data no es un array, revisamos si es un objeto válido
          console.log('Respuesta de actualización como objeto:', data);
          setEstadoActual(estadoNuevo); // Actualizar el estado local si la actualización fue exitosa
        } else {
          console.warn('La respuesta de actualización no es un array y no es un objeto válido');
        }
      } else {
        console.warn('La respuesta de actualización es null o undefined');
      }
    } catch (error) {
      console.error('Error actualizando estado:', error.message);
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={postulado.avatar_url || "https://via.placeholder.com/150"}
            alt=""
          />
          <div>
            <p className="text-lg font-semibold">{postulado.name_user}</p>
            <p className="text-gray-500">{postulado.email}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleEstadoClick('seleccionado')}
              className={`px-4 py-2 ${estadoActual === 'seleccionado' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400`}
            >
              Seleccionar
            </button>
            <button
              onClick={() => handleEstadoClick('descartado')}
              className={`px-4 py-2 ${estadoActual === 'descartado' ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400`}
            >
              Descartar
            </button>
            <button
              onClick={() => handleEstadoClick('pendiente')}
              className={`px-4 py-2 ${estadoActual === 'pendiente' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
            >
              Pendiente
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-lg font-semibold mb-2">Respuestas:</p>
        <ul className="divide-y divide-gray-200">
          {preguntas.map((pregunta, index) => (
            <li key={index} className="py-2">
              <p className="text-gray-500">{pregunta}</p>
              <p className="mt-1">{respuestas[index]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoPostulante;
