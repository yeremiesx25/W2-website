import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from 'react-icons/io';

function ReservaAdmin() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetchReservas();
  }, []);

  const fetchReservas = async () => {
    const { data, error } = await supabase
      .from('Reserva')
      .select('*');

    if (error) {
      console.error('Error fetching reservas:', error);
      return;
    }

    setReservas(data);
  };

  const handleApprove = async (id_reserva) => {
    const { error } = await supabase
      .from('Reserva')
      .update({ estado: 'Aceptado' })
      .eq('id_reserva', id_reserva);

    if (error) {
      console.error('Error approving reserva:', error);
      return;
    }

    setReservas(reservas.map(reserva => 
      reserva.id_reserva === id_reserva ? { ...reserva, estado: 'Aceptado' } : reserva
    ));
  };

  const handleReject = async (id_reserva) => {
    const { error } = await supabase
      .from('Reserva')
      .update({ estado: 'Rechazado' })
      .eq('id_reserva', id_reserva);

    if (error) {
      console.error('Error rejecting reserva:', error);
      return;
    }

    setReservas(reservas.map(reserva => 
      reserva.id_reserva === id_reserva ? { ...reserva, estado: 'Rechazado' } : reserva
    ));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Reservas</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-center">Fecha de Reserva</th>
            <th className="px-4 py-2 border text-center">Hora de Inicio</th>
            <th className="px-4 py-2 border text-center">Hora de Fin</th>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">DNI</th>
            <th className="px-4 py-2 border">Celular</th>
            <th className="px-4 py-2 border text-center">Medio de Pago</th>
            <th className="px-4 py-2 border text-center">Cantidad de Personas</th>
            <th className="px-4 py-2 border text-center">Estado de la Reserva</th>
            <th className="px-4 py-2 border text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id_reserva}>
              <td className="px-4 py-2 border text-center">{reserva.fecha_reserva}</td>
              <td className="px-4 py-2 border text-center">{reserva.hora_inicio}</td>
              <td className="px-4 py-2 border text-center">{reserva.hora_fin}</td>
              <td className="px-4 py-2 border">{reserva.nombre_user}</td>
              <td className="px-4 py-2 border">{reserva.dni_user}</td>
              <td className="px-4 py-2 border">{reserva.celular}</td>
              <td className="px-4 py-2 border text-center">{reserva.pago}</td>
              <td className="px-4 py-2 border text-center">{reserva.cantidad}</td>
              <td className="px-4 py-2 border text-center">{reserva.estado}</td>
              <td className="px-4 py-2 border text-center">
                <button 
                  onClick={() => handleApprove(reserva.id_reserva)}
                  className="text-green-500 mr-2"
                >
                  <IoMdCheckmark />
                </button>
                <button 
                  onClick={() => handleReject(reserva.id_reserva)}
                  className="text-red-500"
                >
                  <IoMdClose />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservaAdmin;