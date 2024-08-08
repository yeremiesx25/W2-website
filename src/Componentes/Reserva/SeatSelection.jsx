import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Colegio from '../../assets/coworking/Colegio.jpeg';
import Herradura from '../../assets/coworking/Herradura.jpeg';
import Innovacion from '../../assets/coworking/Innovacion.jpeg';
import Estrategia from '../../assets/coworking/Estrategia.jpeg';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSpaceClosed, setSelectedSpaceClosed] = useState('');
  const [selectedTrainingSpace, setSelectedTrainingSpace] = useState('');

  const [isPersonalSeatsOpen, setIsPersonalSeatsOpen] = useState(false);
  const [isSpaceClosedOpen, setIsSpaceClosedOpen] = useState(false);
  const [isTrainingSpaceOpen, setIsTrainingSpaceOpen] = useState(false);

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter(seat => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-6">Tipo de Reserva</h1>

      {/* Asientos Personales */}
      <div className="mb-8">
        <button
          onClick={() => setIsPersonalSeatsOpen(!isPersonalSeatsOpen)}
          className="text-xl font-semibold mb-4 w-full text-left flex items-center justify-between border-b-2 border-gray-300 py-2"
        >
          Asientos Personales
          {isPersonalSeatsOpen ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </button>
        {isPersonalSeatsOpen && (
          <div className="grid grid-cols-6 gap-4">
            {[...Array(26)].map((_, index) => (
              <div
                key={index}
                className={`w-12 h-12 border rounded-lg flex items-center justify-center cursor-pointer ${selectedSeats.includes(index + 1) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleSeatSelect(index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Espacio Cerrado */}
      <div className="mb-8">
        <button
          onClick={() => setIsSpaceClosedOpen(!isSpaceClosedOpen)}
          className="text-xl font-semibold mb-4 w-full text-left flex items-center justify-between border-b-2 border-gray-300 py-2"
        >
          Espacio Cerrado
          {isSpaceClosedOpen ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </button>
        {isSpaceClosedOpen && (
          <div className="flex space-x-8">
            <div
              className={`cursor-pointer ${selectedSpaceClosed === 'innovacion' ? 'bg-blue-100' : ''}`}
              onClick={() => setSelectedSpaceClosed('innovacion')}
            >
              <img src={Innovacion} alt="Innovación" className="w-32 h-32 object-cover mb-2" />
              <h3 className="text-lg font-semibold">Innovación</h3>
              <p>Texto descriptivo sobre el espacio de Innovación.</p>
            </div>
            <div
              className={`cursor-pointer ${selectedSpaceClosed === 'estrategia' ? 'bg-blue-100' : ''}`}
              onClick={() => setSelectedSpaceClosed('estrategia')}
            >
              <img src={Estrategia} alt="Estrategia" className="w-32 h-32 object-cover mb-2" />
              <h3 className="text-lg font-semibold">Estrategia</h3>
              <p>Texto descriptivo sobre el espacio de Estrategia.</p>
            </div>
          </div>
        )}
      </div>

      {/* Espacio de Capacitación */}
      <div>
        <button
          onClick={() => setIsTrainingSpaceOpen(!isTrainingSpaceOpen)}
          className="text-xl font-semibold mb-4 w-full text-left flex items-center justify-between border-b-2 border-gray-300 py-2"
        >
          Espacio de Capacitación
          {isTrainingSpaceOpen ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </button>
        {isTrainingSpaceOpen && (
          <div className="flex space-x-8">
            <div
              className={`cursor-pointer ${selectedTrainingSpace === 'herradura' ? 'bg-blue-100' : ''}`}
              onClick={() => setSelectedTrainingSpace('herradura')}
            >
              <img src={Herradura} alt="Forma de Herradura" className="w-32 h-32 object-cover mb-2" />
              <h3 className="text-lg font-semibold">Forma de Herradura</h3>
              <p>Texto descriptivo sobre la forma de Herradura.</p>
            </div>
            <div
              className={`cursor-pointer ${selectedTrainingSpace === 'colegio' ? 'bg-blue-100' : ''}`}
              onClick={() => setSelectedTrainingSpace('colegio')}
            >
              <img src={Colegio} alt="Forma de Colegio" className="w-32 h-32 object-cover mb-2" />
              <h3 className="text-lg font-semibold">Forma de Colegio</h3>
              <p>Texto descriptivo sobre la forma de Colegio.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatSelection;