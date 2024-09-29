import React, { useEffect, useState } from 'react';
import { BsBarChartLine } from 'react-icons/bs';
import AddButton from './AddButton';
import { supabase } from "../../supabase/supabase.config"; // Asegúrate de que la importación sea correcta

function BtnContainer() {
  const [ofertasCount, setOfertasCount] = useState(0); // Estado para almacenar la cantidad de ofertas

  useEffect(() => {
    // Función para obtener la cantidad de ofertas del reclutador logueado
    const fetchOfertasCount = async () => {
      try {
        // Obtener el id del usuario reclutador autenticado
        const { data: { session } } = await supabase.auth.getSession();
        const userId = session?.user?.id;

        console.log("Usuario logueado ID:", userId); // Verificar el ID del usuario autenticado

        if (userId) {
          // Consulta para contar las ofertas creadas por el reclutador
          let { count, error } = await supabase
            .from('Oferta')
            .select('*', { count: 'exact' }) // Contar las filas
            .eq('id_reclutador', userId); // Filtrar por el reclutador autenticado

          if (error) {
            console.error('Error al obtener las ofertas:', error);
          } else {
            console.log("Cantidad de ofertas encontradas:", count); // Verificar la cantidad de ofertas
            setOfertasCount(count); // Actualiza el estado con la cantidad de ofertas
          }
        } else {
          console.log("No hay usuario autenticado."); // Mensaje si no hay usuario
        }
      } catch (error) {
        console.error('Error al obtener la sesión:', error);
      }
    };

    fetchOfertasCount();
  }, []); // Ejecuta solo una vez al montar el componente

  return (
    <div className="flex justify-between items-center bg-gray-100 py-4 ">
      <div className="flex space-x-8">
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm w-48">
          <div>
            <p className="text-sm text-[#A3AED0]">Mis ofertas</p>
            <p className="text-3xl font-bold text-[#1B2559]">{ofertasCount}</p>
          </div>
          <div className="text-primarycolor">
            <BsBarChartLine size={32} />
          </div>
        </div>
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm w-48">
          <div>
            <p className="text-sm text-[#A3AED0]"></p>
            <p className="text-3xl font-bold text-[#1B2559]">10</p>
          </div>
          <div className="text-primarycolor">
            <BsBarChartLine size={32} />
          </div>
        </div>
      </div>
      <AddButton />
    </div>
  );
}

export default BtnContainer;