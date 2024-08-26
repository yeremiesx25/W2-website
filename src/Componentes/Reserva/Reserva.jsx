import React, { useState } from 'react';
import Modal from 'react-modal';
import { supabase } from '../../supabase/supabase.config';
import Auth from './Auth';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SeatSelection from './SeatSelection';
import { FaWhatsapp } from 'react-icons/fa';

Modal.setAppElement('#root');

function Reserva() {
  const [formData, setFormData] = useState({
    fecha: new Date(),
    horaInicio: '08:00',
    horaFin: '12:00',
    nombre: '',
    dni: '',
    celular: '',
    cantidad: '',
    medioPago: 'yape',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateDuration = () => {
    const [startHours, startMinutes] = formData.horaInicio.split(':').map(Number);
    const [endHours, endMinutes] = formData.horaFin.split(':').map(Number);
    const startTime = new Date();
    const endTime = new Date();

    startTime.setHours(startHours, startMinutes);
    endTime.setHours(endHours, endMinutes);

    const durationMs = endTime - startTime;
    const durationHours = Math.floor(durationMs / 3600000);
    const durationMinutes = Math.floor((durationMs % 3600000) / 60000);

    return `${durationHours}h ${durationMinutes}m`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fecha, horaInicio, horaFin, nombre, dni, celular, cantidad, medioPago } = formData;

    const { data: reservaData, error: reservaError } = await supabase
      .from('Reserva')
      .insert([{ 
        fecha_reserva: fecha, 
        hora_inicio: horaInicio, 
        hora_fin: horaFin, 
        nombre_user: nombre, 
        dni_user: dni, 
        celular, 
        cantidad, 
        pago: medioPago,
        estado: 'Pendiente'
      }])
      .single();

    if (reservaError) {
      console.error('Error creating reservation:', reservaError);
      return;
    }

    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    window.location.reload();
  };

  const openAuthModal = () => {
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour <= 18; hour++) {
      for (let minutes = 0; minutes < 60; minutes += 15) {
        const time = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        options.push(<option key={time} value={time}>{time}</option>);
      }
    }
    return options;
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, fecha: date });
  };

  const generateWhatsappLink = () => {
    const { nombre, fecha, horaInicio, horaFin, cantidad } = formData;
    const formattedDate = fecha.toLocaleDateString();
    const message = `Hola! Soy ${nombre}. Quisiera confirmar mi reserva para el ${formattedDate} de ${horaInicio} a ${horaFin} para ${cantidad} personas.`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    return whatsappLink;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className='bg-white'>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Reserva</label>
              <Calendar
                onChange={handleDateChange}
                value={formData.fecha}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
              <div className="flex items-center">
                <select
                  name="horaInicio"
                  value={formData.horaInicio}
                  onChange={handleTimeChange}
                  className="w-28 px-3 py-2 border rounded-lg"
                  required
                >
                  {generateTimeOptions()}
                </select>
                <span className="mx-2">Hasta</span>
                <select
                  name="horaFin"
                  value={formData.horaFin}
                  onChange={handleTimeChange}
                  className="w-28 px-3 py-2 border rounded-lg"
                  required
                >
                  {generateTimeOptions()}
                </select>
                <span className="ml-6">{`Total ${calculateDuration()}`}</span>
              </div>
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
            <SeatSelection />

            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="w-full py-2 px-4 bg-primarycolor text-white rounded-lg mt-6"
            >
              Siguiente
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Medio de Pago</label>
              <select
                name="medioPago"
                value={formData.medioPago}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="yape">Yape</option>
                <option value="plin">Plin</option>
                <option value="tarjeta">Transferencia</option>
                <option value="efectivo">Efectivo</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="py-2 px-4 bg-gray-300 text-black rounded-lg"
              >
                Atrás
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-primarycolor text-white rounded-lg"
              >
                Reservar
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id='reserva' className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg font-dmsans mb-12 bg-white">
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold mb-5 text-primarycolor text-center">Reserva Coworking</h1>
        <button onClick={openAuthModal} className='bg-yellowprimary flex justify-center items-center px-4 font-semibold text-primarycolor rounded-lg'>
          Ver reservas
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Reserva Confirmada"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">¡Reserva Confirmada!</h2>
          <p>Tu reserva ha sido creada con éxito.</p>
          <button
            onClick={() => {
              closeModal();
              window.location.href = generateWhatsappLink();
            }}
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg mt-4 flex items-center justify-center"
          >
            <FaWhatsapp className="mr-2" />
            Contactar por WhatsApp
          </button>
        </div>
      </Modal>
      {authModalOpen && <Auth onClose={closeAuthModal} />}
    </div>
  );
}

export default Reserva;