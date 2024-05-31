import React, { useState } from 'react';
import { supabase } from '../../supabase/supabase.config'; // Ajusta la ruta según la ubicación de tu archivo
import { FiPlusCircle } from "react-icons/fi";


function AddButton() {
  const [puesto, setPuesto] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('pruebas') // Reemplaza 'pruebas' con el nombre de tu tabla
      .insert([{ puesto }]);

    if (error) {
      console.error('Error insertando el puesto:', error);
    } else {
      console.log('Puesto insertado:', data);
      setPuesto(''); // Limpia el input después de insertar
      setIsModalOpen(false); // Cierra el modal después de insertar
    }
  };

  return (
    <div className='mx-auto w-96 flex flex-col mt-32'>
      <button
        onClick={() => setIsModalOpen(true)}
        className='bg-powercolor text-white p-4 rounded flex justify-center items-center gap-6'
      >
        Agregar Puesto <FiPlusCircle size={28} />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl mb-4">Agregar Nuevo Puesto</h2>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <input
                className='border border-gray-400 p-2 mb-4'
                type="text"
                placeholder='Nombre del puesto'
                value={puesto}
                onChange={(e) => setPuesto(e.target.value)}
              />
              <button type='submit' className='bg-powercolor text-white p-2 rounded mb-2'>
                Guardar
              </button>
              <button
                type='button'
                onClick={() => setIsModalOpen(false)}
                className='bg-gray-300 p-2 rounded'
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddButton;
