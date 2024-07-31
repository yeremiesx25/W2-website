import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { supabase } from '../../supabase/supabase.config';
import SeatSelection from './SeatSelection';
import Auth from './Auth';  // Importar el componente Auth

Modal.setAppElement('#root'); // Necesario para accesibilidad

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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (formData.fecha) {
      fetchAvailability(formData.fecha);
    }
  }, [formData.fecha]);

  const fetchAvailability = async (fecha) => {
    const { data, error } = await supabase
      .from('asientos')
      .select('*')
      .eq('fecha_reserva', fecha);

    if (error) {
      console.error('Error fetching availability:', error);
      return;
    }

    setAvailableSeats(data);
    setReservedSeats(data.filter(seat => seat.estado === 'reservado').map(seat => `${seat.tipo_asiento}-${seat.id_asiento}`));
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

    // Insert the reservation
    const { data: reservaData, error: reservaError } = await supabase
      .from('Reserva')
      .insert([{ fecha_reserva: fecha, hora_inicio: horaInicio, hora_fin: horaFin, nombre_user: nombre, dni_user: dni, celular, cantidad, pago: medioPago }])
      .single();

    if (reservaError) {
      console.error('Error creating reservation:', reservaError);
      return;
    }

    // Update seat availability
    const updates = selectedSeats.map(seatId => {
      const [tipo_asiento, id_asiento] = seatId.split('-');
      return {
        fecha_reserva: fecha,
        tipo_asiento,
        id_asiento,
        estado: 'reservado'
      };
    });

    const { error: updateError } = await supabase
      .from('asientos')
      .upsert(updates);

    if (updateError) {
      console.error('Error updating availability:', updateError);
    }

    // Show success modal
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    window.location.reload(); // Reload the page after closing the modal
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg font-dmsans">
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold mb-5">Reserva</h1>
        <button onClick={() => setModalOpen(true)} className='bg-yellowprimary flex justify-center items-center px-4 font-semibold text-primarycolor rounded-lg'>
          Ver reservas
        </button>
      </div>
      
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
            <option value="plin">Plin</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>
        <SeatSelection
          availableSeats={availableSeats}
          reservedSeats={reservedSeats}
          onSelect={handleSeatSelect}
        />
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg mt-4">
          Reservar
        </button>
      </form>

      {modalOpen && <Auth onClose={() => setModalOpen(false)} />}
      {/* Modal for success message */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Reserva Exitosamente"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-4">¡Reserva creada exitosamente!</h2>
        <button onClick={closeModal} className="py-2 px-4 bg-primarycolor text-white rounded-lg">
          Aceptar
        </button>
        </div>
      </Modal>
    </div>
  );
}

export default Reserva;
