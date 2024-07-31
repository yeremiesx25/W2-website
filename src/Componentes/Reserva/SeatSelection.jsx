import React, { useState, useEffect } from 'react';

const seatTypes = {
  personal: { count: 26, label: "Asiento Personal" },
  closedGroup: { count: 2, label: "Espacio Cerrado (6 personas)" },
  openGroup: { count: 1, label: "Espacio Abierto (6-8 personas)" },
  herradura: { count: 1, label: "Forma Herradura (13 personas)" },
  colegio: { count: 1, label: "Forma Colegio (16 personas)" },
  capacitacion: { count: 1, label: "Capacitación (26 personas)" },
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
    return Array.from({ length: count }, (_, index) => (
      <div 
        key={`${type}-${index}`} 
        className={`seat ${selectedSeats.includes(`${type}-${index}`) ? 'selected' : ''} ${reservedSeats.includes(`${type}-${index}`) ? 'reserved' : ''}`} 
        onClick={() => handleSeatClick(type, index)}
      >
        {index + 1}
      </div>
    ));
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