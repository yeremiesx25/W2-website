import React from "react";

const SuccessModal = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Primero llama la función onClose
    window.location.reload(); // Luego recarga la página
  };

  return (
    <div class="z-10 absolute left-0 p-8 w-full h-full flex items-center justify-center">
    <div class="bg-primarycolor  mx-auto p-8 rounded-md shadow-xl h-96 w-96 flex flex-col justify-around">
      <div>
        <h1 class="text-2xl font-bold text-white mb-4 text-center">Genial!</h1>
        <p class="text-white text-center mb-4">Se enviaron tus datos correctamente, nos pondremos en contacto contigo a la brevedad posible. </p>
        </div>
        <div class="flex w-full justify-center items-center">
            <button onClick={handleClose}
                class="inline-block bg-white py-4 px-4 w-full text-primarycolor rounded-full font-semibold uppercase text-sm ">Aceptar
            </button>
        </div>
    </div>
</div>
  );
};

export default SuccessModal;