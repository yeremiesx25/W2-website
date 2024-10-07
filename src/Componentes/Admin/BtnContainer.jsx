import React, { useEffect, useState } from 'react';
import AddButton from './AddButton';
import { supabase } from "../../supabase/supabase.config"; // Asegúrate de que la importación sea correcta

function BtnContainer() {
  const [ofertasCount, setOfertasCount] = useState(0);  // Estado para la cantidad total de ofertas
  const [abiertasCount, setAbiertasCount] = useState(0); // Estado para ofertas abiertas
  const [cerradasCount, setCerradasCount] = useState(0); // Estado para ofertas cerradas
  const [objetivoMensual, setObjetivoMensual] = useState(0); // Estado para el objetivo mensual

  // Función para obtener los datos de las ofertas y el objetivo mensual
  const fetchOfertasData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const userId = session?.user?.id;

      if (userId) {
        // Contar las ofertas totales creadas por el reclutador
        let { count: totalCount } = await supabase
          .from('Oferta')
          .select('*', { count: 'exact' })
          .eq('id_reclutador', userId);

        // Contar las ofertas abiertas (estado: activa)
        let { count: abiertasCount } = await supabase
          .from('Oferta')
          .select('*', { count: 'exact' })
          .eq('id_reclutador', userId)
          .eq('estado', 'activa');

        // Contar las ofertas cerradas (estado: cerrada)
        let { count: cerradasCount } = await supabase
          .from('Oferta')
          .select('*', { count: 'exact' })
          .eq('id_reclutador', userId)
          .eq('estado', 'cerrada');

        // Obtener el objetivo mensual del usuario desde la tabla 'Perfiles'
        const { data: perfilData, error: perfilError } = await supabase
          .from('perfiles')
          .select('objetivo_mensual')
          .eq('id', userId)
          .single(); // Obtiene el objetivo de un solo usuario

        if (perfilError) {
          console.error('Error al obtener el objetivo mensual:', perfilError);
        } else {
          setObjetivoMensual(perfilData.objetivo_mensual || 0); // Actualizar el objetivo mensual
        }

        setOfertasCount(totalCount || 0);    // Actualizar el total de ofertas
        setAbiertasCount(abiertasCount || 0); // Actualizar el total de ofertas abiertas
        setCerradasCount(cerradasCount || 0); // Actualizar el total de ofertas cerradas
      }
    } catch (error) {
      console.error('Error al obtener las ofertas:', error);
    }
  };

  useEffect(() => {
    // Llamar a la función para obtener datos al montar el componente
    fetchOfertasData();

    // Suscribirse a los cambios en la tabla "Oferta" usando Realtime
    const subscription = supabase
      .channel('realtime-ofertas')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'Oferta' },
        () => {
          console.log('Cambio detectado en la tabla Oferta');
          // Volver a obtener los datos al detectar un cambio
          fetchOfertasData();
        }
      )
      .subscribe();

    // Limpiar la suscripción al desmontar el componente
    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

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
          {/* Card 1: Total de ofertas */}
          <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg min-w-32">
            <p className="text-sm text-[#A3AED0]">Mis Ofertas</p>
            <p className="text-3xl font-bold text-[#1B2559]">{ofertasCount}</p>
          </div>

          {/* Card 2: Ofertas abiertas */}
          <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg min-w-32">
            <p className="text-sm text-[#A3AED0]">Abiertas</p>
            <p className="text-3xl font-bold text-[#1B2559]">{abiertasCount}</p>
            <p className="text-sm text-[#A3AED0]">
              ({Math.round((abiertasCount / ofertasCount) * 100) || 0}%)
            </p>
          </div>

          {/* Card 3: Ofertas cerradas */}
          <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg min-w-32">
            <p className="text-sm text-[#A3AED0]">Cerradas</p>
            <p className="text-3xl font-bold text-[#1B2559]">{cerradasCount}</p>
            <p className="text-sm text-[#A3AED0]">
              ({Math.round((cerradasCount / ofertasCount) * 100) || 0}%)
            </p>
          </div>

          {/* Card 4: Objetivo mensual */}
          <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg min-w-32">
            <p className="text-sm text-[#A3AED0]">Objetivo Mensual</p>
            <p className="text-3xl font-bold text-[#1B2559]">{objetivoMensual}</p>
            <p className="text-sm text-[#A3AED0]"></p>
          </div>
        </div>
        <AddButton />
      </div>
    </div>
  );
}

export default BtnContainer;
