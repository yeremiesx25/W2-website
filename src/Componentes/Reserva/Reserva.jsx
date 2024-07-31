import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';
import SeatSelection from './SeatSelection';

function Reserva() {
  const [formData, setFormData] = useState({
    fecha: '',
    horaInicio: '',
    horaFin: '',
    nombre: '',
    dni: '',
    celular: '',
    cantidad: '',
    medioPago: 'yape',
    selectedSeats: [],
  });

  const [availableSeats, setAvailableSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

  useEffect(() => {
    if (formData.fecha && formData.horaInicio && formData.horaFin) {
      fetchAvailability(formData.fecha, formData.horaInicio, formData.horaFin);
    }
  }, [formData.fecha, formData.horaInicio, formData.horaFin]);

  const fetchAvailability = async (fecha, horaInicio, horaFin) => {
    const { data, error } = await supabase
      .from('Disponibilidad')
      .select('*')
      .eq('fecha', fecha)
      .gte('hora_inicio', horaInicio)
      .lte('hora_fin', horaFin);

    if (error) {
      console.error('Error fetching availability:', error);
      return;
    }

    setAvailableSeats(data);
    setReservedSeats(data.filter(seat => seat.estado === 'reservado').map(seat => seat.asiento_id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSeatSelect = (selectedSeats) => {
    setFormData({
      ...formData,
      selectedSeats,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fecha, horaInicio, horaFin, nombre, dni, celular, cantidad, medioPago, selectedSeats } = formData;

    const { data, error } = await supabase
      .from('Reserva')
      .insert([{ fecha_reserva: fecha, hora_inicio: horaInicio, hora_fin: horaFin, nombre_user: nombre, dni_user: dni, celular, cantidad, pago: medioPago }]);

    if (error) {
      console.error('Error creating reservation:', error);
      return;
    }

    // Update seat availability
    const updates = selectedSeats.map(seat => ({
      fecha,
      hora_inicio: horaInicio,
      hora_fin: horaFin,
      asiento_id: seat,
      estado: 'reservado'
    }));

    const { error: updateError } = await supabase
      .from('Disponibilidad')
      .upsert(updates);

    if (updateError) {
      console.error('Error updating availability:', updateError);
    }

    alert('Reserva creada exitosamente!');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Reserva</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Reserva</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Hora de Inicio</label>
          <input
            type="time"
            name="horaInicio"
            value={formData.horaInicio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Hora de Fin</label>
          <input
            type="time"
            name="horaFin"
            value={formData.horaFin}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
          <input
            type="text"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad de Personas</label>
          <input
            type="number"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Medio de Pago</label>
          <select
            name="medioPago"
            value={formData.medioPago}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="yape">Yape</option>
            <option value="efectivo">Efectivo</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar Asientos/Espacios</label>
          <SeatSelection availableSeats={availableSeats} reservedSeats={reservedSeats} onSelect={handleSeatSelect} />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Reservar
        </button>
      </form>
    </div>
  );
}

export default Reserva;