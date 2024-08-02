import React, { useState, useEffect } from 'react';
import { PiChairDuotone } from "react-icons/pi";

const seatTypes = {
  personal: { count: 26, label: "Asiento Personal" },
  openGroup: { count: 1, label: "Espacio grupal (3-8 personas)" },
  capacitacion: { count: 1, label: "Taller o Capacitación (10-26 personas)" },
};

function SeatSelection({ reservedSeats = [], onSelect }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    setSelectedSeats([]);
  }, [reservedSeats]);

  const handleSeatClick = (type, index) => {
    const seatId = `${type}-${index}`;
    if (reservedSeats.includes(seatId)) return;

    const isSelected = selectedSeats.includes(seatId);
    const updatedSeats = isSelected 
      ? selectedSeats.filter(seat => seat !== seatId)
      : [...selectedSeats, seatId];

    setSelectedSeats(updatedSeats);
    onSelect(updatedSeats);
  };

  const renderSeats = (type, count) => {
    return Array.from({ length: count }, (_, index) => {
      const seatId = `${type}-${index}`;
      const isSelected = selectedSeats.includes(seatId);
      const isReserved = reservedSeats.includes(seatId);

      const seatClass = `
        seat
        ${isSelected ? 'bg-green-500 text-white' : 'bg-white text-black'}
        ${isReserved ? 'bg-red-500 text-white cursor-not-allowed' : 'cursor-pointer'}
        border border-gray-300 flex items-center justify-center p-2
      `;

      return (
        <div 
          key={seatId} 
          className={seatClass} 
          onClick={() => handleSeatClick(type, index)}
        >
          <PiChairDuotone />
        </div>
      );
    });
  };

  return (
    <div className="seat-selection">
      {Object.entries(seatTypes).map(([type, { count, label }]) => (
        <div key={type} className="mb-4">
          <h3 className="text-lg font-bold mb-2">{label}</h3>
          <div className="grid grid-cols-6 gap-2">
            {renderSeats(type, count)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeatSelection;