import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ShareModal = ({ selectedJob, onClose }) => {
  const navigate = useNavigate();

  const shareOnWhatsApp = (event) => {
    event.preventDefault();
    window.open(`https://wa.me/?text=${encodeURIComponent(
      `Hola, te puede interesar este puesto de trabajo: ${selectedJob.puesto}. Aquí tienes el enlace: https://w2asesoresyconsultores.com/Share?id=${selectedJob.id_oferta}`
    )}`, '_blank');
  };

  const shareOnFacebook = (event) => {
    event.preventDefault();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      `https://w2asesoresyconsultores.com/Share?id=${selectedJob.id_oferta}`
    )}`, '_blank');
  };

  const shareOnLinkedIn = (event) => {
    event.preventDefault();
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      `https://w2asesoresyconsultores.com/Share?id=${selectedJob.id_oferta}`
    )}&title=${encodeURIComponent(
      `Puesto de trabajo: ${selectedJob.puesto}`
    )}`, '_blank');
  };

  const copyLink = (event) => {
    event.preventDefault();
    const link = `https://w2asesoresyconsultores.com/Share?id=${selectedJob.id_oferta}`;
    navigator.clipboard.writeText(link).then(() => {
      // Create and display the confirmation message
      const copiedMessage = document.createElement("div");
      copiedMessage.textContent = "Enlace Copiado";
      copiedMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      copiedMessage.style.color = "white";
      copiedMessage.style.position = "fixed";
      copiedMessage.style.bottom = "20px";
      copiedMessage.style.left = "50%";
      copiedMessage.style.transform = "translateX(-50%)";
      copiedMessage.style.padding = "10px 20px";
      copiedMessage.style.borderRadius = "5px";
      copiedMessage.style.zIndex = "9999";
      document.body.appendChild(copiedMessage);
      
      // Remove the message after 2 seconds
      setTimeout(() => {
        copiedMessage.remove();
      }, 2000);
    }).catch(() => {
      // Handle copy error
      alert('Error al copiar el enlace');
    });
  };

  const handleAccept = () => {
    navigate('/Admin');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md p-8 rounded-lg shadow-2xl relative transform transition-transform duration-300 ease-in-out scale-105">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Compartir este Puesto
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className='font-semibold text-black'> ¡Es hora de encontrar al candidato perfecto! </span> Comparte el puesto de "{selectedJob.puesto}" en tus redes sociales o contactos interesados.
            </p>
          </div>

          <div className="flex justify-between w-full mt-2">
            <div className="flex flex-col items-center w-1/2 pr-4">
              <button
                className="bg-[#00d35e] text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mb-4 w-48 h-12"
                onClick={shareOnWhatsApp}
              >
                <IoLogoWhatsapp className="mr-2" size={24} />
                WhatsApp
              </button>
              <button
                className="bg-[#3b5998] text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mb-4 w-48 h-12"
                onClick={shareOnFacebook}
              >
                <FaFacebookF className="mr-2" size={24} />
                Facebook
              </button>
            </div>
            <div className="flex flex-col items-center w-1/2 pl-4">
              <button
                className="bg-[#0077b5] text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mb-4 w-48 h-12"
                onClick={shareOnLinkedIn}
              >
                <IoLogoLinkedin className="mr-2" size={24} />
                LinkedIn
              </button>
              <button
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mb-4 w-48 h-12"
                onClick={copyLink}
              >
                <MdContentCopy className="mr-2" size={24} />
                Copiar Enlace
              </button>
            </div>
          </div>

          <button
            className="mt-6 bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-48 h-12"
            onClick={handleAccept}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;