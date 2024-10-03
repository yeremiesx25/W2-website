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
    <div className='px-6 flex'>
    <div
      style={{
        backgroundImage: `url(https://masterbundles.com/wp-content/uploads/2023/02/wave-background-23-992.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex w-full justify-between items-center py-4 px-10 my-4 rounded-xl"
    >
      <div className="flex space-x-4 px-4 justify-between">
        {/* Card 1 */}
        <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg min-w-32">
          <p className="text-sm text-[#A3AED0]">Mis Ofertas</p>
          <p className="text-3xl font-bold text-[#1B2559]">5</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg min-w-32">
          <p className="text-sm text-[#A3AED0]">Abiertas</p>
          <p className="text-3xl font-bold text-[#1B2559]">3</p>
          <p className="text-sm text-[#A3AED0]">(40%)</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg min-w-32">
          <p className="text-sm text-[#A3AED0]">Cerradas</p>
          <p className="text-3xl font-bold text-[#1B2559]">2</p>
          <p className="text-sm text-[#A3AED0]">(25%)</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg min-w-32">
          <p className="text-sm text-[#A3AED0]">Objetivo Mensual</p>
          <p className="text-3xl font-bold text-[#1B2559]">13</p>
          <p className="text-sm text-[#A3AED0]">(20%)</p>
        </div> 
        
      </div>
<AddButton />
     
    </div>
    </div>
  );
}

export default BtnContainer;