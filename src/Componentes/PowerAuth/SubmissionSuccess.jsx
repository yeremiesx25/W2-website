import React from 'react';

const CustomSuccessModal = ({ isVisible, onAccept }) => {
  if (!isVisible) return null;

  const handleAccept = () => {
    onAccept();
    window.location.reload();
  };

  return (
    <div className="fixed w-full h-full inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-6 w-full text-center">
        <div className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full p-3 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">¡Postulación enviada con éxito!</h2>
          <p className="text-sm text-gray-500 mb-4">Gracias por tu interés.</p>
          <button className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32" onClick={handleAccept}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSuccessModal;