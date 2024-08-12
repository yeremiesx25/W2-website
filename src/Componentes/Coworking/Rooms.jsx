import React, { useState, useEffect } from 'react';

// Importar las imágenes de los espacios de trabajo
import workspace1 from '../../assets/coworking/Herradura.jpeg';
import workspace2 from '../../assets/coworking/Herradura.jpeg';
import workspace3 from '../../assets/coworking/Herradura.jpeg';
import workspace4 from '../../assets/coworking/Herradura.jpeg';

const roomsData = [
  { img: workspace1, title: 'Forma de herradura', location: '12 Asientos' },
  { img: workspace2, title: 'Capacitaciones', location: '12 Asientos' },
  { img: workspace3, title: 'Home Office', location: '12 Asientos' },
  { img: workspace4, title: 'Oficina freelance', location: '12 Asientos' },
  { img: workspace1, title: 'Forma de colegio', location: '8 Asientos' },
  { img: workspace2, title: 'Sala de reuniones', location: '5 Asientos' },
  { img: workspace3, title: 'Zona de café', location: '3 Asientos' },
  { img: workspace4, title: 'Sala de espera', location: '6 Asientos' },
];

const Rooms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roomsData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 overflow-hidden font-dmsans">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Oficinas de trabajo colaborativo</h2>
        <p className="text-lg text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque quo, repudiandae repellendus aperiam assumenda!
          <a href="#" className="text-primarycolor"> Lorem ipsum dolor sit amet.</a>
        </p>
      </div>

      <div className="flex transition-transform duration-700 ease-in-out gap-4"
           style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {roomsData.map((room, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0"
            style={{ width: '25%' }} // Para que cada slide ocupe un cuarto del contenedor
          >
            <img src={room.img} alt={room.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{room.title}</h3>
              <p className="text-primarycolor">{room.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
