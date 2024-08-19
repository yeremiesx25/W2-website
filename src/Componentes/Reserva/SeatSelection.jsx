import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaLock } from 'react-icons/fa';
import { PiChairDuotone } from 'react-icons/pi';
import Colegio from '../../assets/coworking/Colegio.jpeg';
import Herradura from '../../assets/coworking/Herradura.jpeg';
import Innovacion from '../../assets/coworking/Innovacion.jpeg';
import Estrategia from '../../assets/coworking/Estrategia.jpeg';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSpaceClosed, setSelectedSpaceClosed] = useState('');
  const [selectedTrainingSpace, setSelectedTrainingSpace] = useState('');

  const [isPersonalSeatsOpen, setIsPersonalSeatsOpen] = useState(false); // Cambiado a false
  const [isSpaceClosedOpen, setIsSpaceClosedOpen] = useState(false); // Cambiado a false
  const [isTrainingSpaceOpen, setIsTrainingSpaceOpen] = useState(false); // Cambiado a false

  const handleSeatSelect = (seatId) => {
    setSelectedSeats((prevSelectedSeats) => {
      const newSelectedSeats = prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter(seat => seat !== seatId)
        : [...prevSelectedSeats, seatId];
      
      return newSelectedSeats;
    });

    setSelectedSpaceClosed('');
    setSelectedTrainingSpace('');
  };

  const handleSpaceClosedSelect = (spaceId) => {
    setSelectedSpaceClosed((prevSelectedSpace) => {
      const newSelectedSpace = prevSelectedSpace === spaceId ? '' : spaceId;
      return newSelectedSpace;
    });

    setSelectedSeats([]);
    setSelectedTrainingSpace('');
  };

  const handleTrainingSpaceSelect = (spaceId) => {
    setSelectedTrainingSpace((prevSelectedSpace) => {
      const newSelectedSpace = prevSelectedSpace === spaceId ? '' : spaceId;
      return newSelectedSpace;
    });

    setSelectedSeats([]);
    setSelectedSpaceClosed('');
  };

  const isPersonalSeatsDisabled = selectedSpaceClosed || selectedTrainingSpace;
  const isSpaceClosedDisabled = selectedSeats.length > 0 || selectedTrainingSpace;
  const isTrainingSpaceDisabled = selectedSeats.length > 0 || selectedSpaceClosed;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-3">Tipo de Reserva</h1>
      <div className="block text-m font-medium text-gray-700 mb-3">Elige una de las tres opciones que tenemos:</div>

      {/* Asientos Personales */}
      <div className="mb-8">
        <button
          onClick={() => setIsPersonalSeatsOpen(!isPersonalSeatsOpen)}
          className="text-xl font-semibold mb-4 w-full text-left flex items-center justify-between border-b-2 border-gray-300 py-2"
          disabled={isPersonalSeatsDisabled}
        >
          Asientos Personales
          {isPersonalSeatsDisabled ? (
            <FaLock className="text-gray-500" />
          ) : isPersonalSeatsOpen ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </button>
        {isPersonalSeatsOpen && !isPersonalSeatsDisabled && (
          <div className="grid grid-cols-6 gap-4">
            {[...Array(26)].map((_, index) => (
              <div
                key={index}
                className={`w-12 h-12 border rounded-lg flex items-center justify-center cursor-pointer ${selectedSeats.includes(index + 1) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleSeatSelect(index + 1)}
              >
                <PiChairDuotone className="text-2xl" />
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
          disabled={isSpaceClosedDisabled}
        >
          Espacio Cerrado
          {isSpaceClosedDisabled ? (
            <FaLock className="text-gray-500" />
          ) : isSpaceClosedOpen ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </button>
        {isSpaceClosedOpen && !isSpaceClosedDisabled && (
          <div className="space-y-4">
            <div
              className={`flex items-center cursor-pointer ${selectedSpaceClosed === '27' ? 'bg-blue-100' : ''}`}
              onClick={() => handleSpaceClosedSelect('27')}
            >
              <img src={Innovacion} alt="Innovación" className="w-32 h-32 object-cover mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Sala de Innovación</h3>
                <p>Ideal para reuniones pequeñas, equipada con recursos como TV y pizarra.</p>
              </div>
            </div>
            <div
              className={`flex items-center cursor-pointer ${selectedSpaceClosed === '28' ? 'bg-blue-100' : ''}`}
              onClick={() => handleSpaceClosedSelect('28')}
            >
              <img src={Estrategia} alt="Estrategia" className="w-32 h-32 object-cover mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Sala de Estrategia</h3>
                <p>Perfecta para sesiones estratégicas y colaborativas. También cuenta con TV, pizarra o ambos.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Espacio de Capacitación */}
      <div>
        <button
          onClick={() => setIsTrainingSpaceOpen(!isTrainingSpaceOpen)}
          className="text-xl font-semibold mb-4 w-full text-left flex items-center justify-between border-b-2 border-gray-300 py-2"
          disabled={isTrainingSpaceDisabled}
        >
          Espacio de Capacitación
          {isTrainingSpaceDisabled ? (
            <FaLock className="text-gray-500" />
          ) : isTrainingSpaceOpen ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </button>
        {isTrainingSpaceOpen && !isTrainingSpaceDisabled && (
          <div className="space-y-4">
            <div
              className={`flex items-center cursor-pointer ${selectedTrainingSpace === '29' ? 'bg-blue-100' : ''}`}
              onClick={() => handleTrainingSpaceSelect('29')}
            >
              <img src={Herradura} alt="Forma de Herradura" className="w-32 h-32 object-cover mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Forma de Herradura</h3>
                <p>Diseñada para eventos con una disposición en herradura. Cuenta con proyector y si desea añadir un coffee break.</p>
              </div>
            </div>
            <div
              className={`flex items-center cursor-pointer ${selectedTrainingSpace === '30' ? 'bg-blue-100' : ''}`}
              onClick={() => handleTrainingSpaceSelect('30')}
            >
              <img src={Colegio} alt="Forma de Colegio" className="w-32 h-32 object-cover mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Forma de Colegio</h3>
                <p>Adecuada para capacitaciones con disposición en aula. Se puede incluir un proyector y si desea coffee break.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatSelection;