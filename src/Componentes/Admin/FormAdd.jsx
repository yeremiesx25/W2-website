import React, { useState } from 'react';
import { supabase } from '../../supabase/supabase.config'; // Ajusta la ruta según la ubicación de tu archivo

function AddPuestoForm({ onClose }) {
  const [step, setStep] = useState(1); // Controla el paso actual del formulario
  const [formData, setFormData] = useState({
    puesto: '',
    empresa: '',
    ubicacion: '',
    sueldo: '',
    requisitos: '',
    beneficios: '',
    funciones: '',
    horario: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('Oferta') // Reemplaza 'Oferta' con el nombre de tu tabla
      .insert([formData]);

    if (error) {
      console.error('Error insertando el puesto:', error);
    } else {
      console.log('Puesto insertado:', data);
      setFormData({
        puesto: '',
        empresa: '',
        ubicacion: '',
        sueldo: '',
        requisitos: '',
        beneficios: '',
        funciones: '',
        horario: '',
      }); // Limpia el input después de insertar
      onClose(); // Cierra el modal después de insertar
    }
  };

  const steps = [
    {
      label: 'Nombre del puesto',
      name: 'puesto',
    },
    {
      label: 'Nombre de la empresa',
      name: 'empresa',
    },
    {
      label: 'Ubicación',
      name: 'ubicacion',
    },
    {
      label: 'Sueldo',
      name: 'sueldo',
    },
    {
      label: 'Requisitos',
      name: 'requisitos',
    },
    {
      label: 'Beneficios',
      name: 'beneficios',
    },
    {
      label: 'Funciones',
      name: 'funciones',
    },
    {
      label: 'Horario',
      name: 'horario',
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4 font-semibold">Agregar Nuevo Puesto</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            className="border border-gray-300 p-2 rounded"
            type="text"
            name={steps[step - 1].name}
            placeholder={steps[step - 1].label}
            value={formData[steps[step - 1].name]}
            onChange={handleChange}
          />
          {step < steps.length ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="bg-primarycolor text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Siguiente
            </button>
          ) : (
            <button type="submit" className="bg-primarycolor text-white p-2 rounded hover:bg-blue-600 transition">
              Guardar
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPuestoForm;
