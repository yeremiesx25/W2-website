import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import cw2_1 from '../../assets/coworking/cw2_1.jpg'

const SliderHero = () => {
  const [selectedImage, setSelectedImage] = useState(cw2_1); // Imagen por defecto

  const options = [
    {
      label: 'Branding and Identity',
      icon: '🔖', // Puedes reemplazar esto con el icono adecuado
      image: '/mnt/data/image.png',
    },
    {
      label: 'Digital Marketing Strategy',
      icon: '📊', // Puedes reemplazar esto con el icono adecuado
      image: 'https://www.ceupe.do/images/easyblog_articles/298/coworking.jpg',
    },
    {
      label: 'Special Content Creation',
      icon: '✍️', // Puedes reemplazar esto con el icono adecuado
      image: '/mnt/data/image.png',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen p-4 bg-white">
      <div className="flex flex-col w-full md:w-1/4 space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(option.image)}
            className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200"
          >
            <span className="text-2xl">{option.icon}</span>
            <span className="ml-4 text-lg font-medium">{option.label}</span>
          </button>
        ))}
      </div>
      <div className="w-full md:w-3/4 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <button className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full">
            ▶️
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderHero;
