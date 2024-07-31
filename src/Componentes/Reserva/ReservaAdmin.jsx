import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';

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

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Reservas</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Fecha de Reserva</th>
            <th className="px-4 py-2 border">Hora de Inicio</th>
            <th className="px-4 py-2 border">Hora de Fin</th>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">DNI</th>
            <th className="px-4 py-2 border">Celular</th>
            <th className="px-4 py-2 border">Cantidad de Personas</th>
            <th className="px-4 py-2 border">Medio de Pago</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id_reserva}>
              <td className="px-4 py-2 border">{reserva.fecha_reserva}</td>
              <td className="px-4 py-2 border">{reserva.hora_inicio}</td>
              <td className="px-4 py-2 border">{reserva.hora_fin}</td>
              <td className="px-4 py-2 border">{reserva.nombre_user}</td>
              <td className="px-4 py-2 border">{reserva.dni_user}</td>
              <td className="px-4 py-2 border">{reserva.celular}</td>
              <td className="px-4 py-2 border">{reserva.cantidad}</td>
              <td className="px-4 py-2 border">{reserva.pago}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservaAdmin;
