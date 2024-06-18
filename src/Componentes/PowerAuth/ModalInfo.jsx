import React from 'react';

function ModalInfo({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex flex-col items-center justify-center mt-4">
          <h2 className="text-2xl font-bold mb-4">¿Estás seguro de Postular a  <h2 className="text-2xl font-bold mb-2 text-center">esta Oferta Laboral?</h2> </h2>
          <div className="flex justify-center space-x-4 mt-2">
            <button
              className="bg-gray-300 text-black font-bold py-2 px-4 rounded-full w-32"
              onClick={onClose}
            >
              No
            </button>
            <button
              className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32"
              onClick={onConfirm}
            >
              Sí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInfo;