import React from "react";

const SuccessModal = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Primero llama la función onClose
    window.location.reload(); // Luego recarga la página
  };

  return (
    <div class="z-10 p-8 absolute w-96 h-full">
    <div class="bg-primarycolor  mx-auto p-4 rounded-md shadow-lg ">
        <h1 class="text-2xl font-bold text-white mb-4">Genial!</h1>
        <p class="text-white text-left mb-4">Se enviaron los datos correctamente.</p>

        <div class="text-right">
            <button onClick={handleClose}
                class="inline-block bg-white py-2 px-4 text-primarycolor rounded-md font-semibold uppercase text-sm ">Ok
            </button>
        </div>
    </div>
</div>
  );
};

export default SuccessModal;