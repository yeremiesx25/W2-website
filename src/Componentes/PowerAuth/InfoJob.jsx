import React, { useState, useEffect, useRef } from 'react';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { CiShare2 } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import ModalInfo from './ModalInfo'; // Importar el componente ApplyModal
import { FaCopy, FaFacebookF} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


function InfoJob({ selectedJob }) {
  const [atBottom, setAtBottom] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const contentRef = useRef(null);
  const shareButtonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          setAtBottom(true);
        } else {
          setAtBottom(false);
        }
      }
    };

    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareButtonRef.current && !shareButtonRef.current.contains(event.target)) {
        setIsShareMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!selectedJob) {
    return null; // Evitar renderizar si selectedJob es null
  }

  const jobDetails = [
    {
      title: '¿Por qué deberías unirte a nosotros?',
      content: selectedJob.beneficios,
    },
    {
      title: '¿Qué buscamos?',
      content: selectedJob.requisitos,
    },
    {
      title: '¿Qué es lo que harás?',
      content: selectedJob.funciones,
    },
    {
      title: 'Horario de Trabajo',
      content: selectedJob.horario,
    },
  ];

  const whatsappBaseUrl = selectedJob.wtsp_url ? selectedJob.wtsp_url.split('?')[0] : '';
  const whatsappMessage = `Hola, estoy interesado en el puesto de ${selectedJob.puesto}`;
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmApply = () => {
    // Aquí puedes implementar la lógica para obtener preguntas de Supabase y mostrarlas
    // Por ahora, solo cerramos el modal
    setIsModalOpen(false);
  };

  const handleShareClick = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  const handleCopyLink = () => {
    const shareUrl = `http://localhost:5173/Share?id=${selectedJob.id_oferta}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Enlace copiado al portapapeles');
    setIsShareMenuOpen(false);
  };

  return (
    <div
      className="selected-job-info w-full sm:w-1/2 border rounded-lg flex flex-col p-4 mx-8 bg-white shadow-lg"
      style={{ height: '650px', overflowY: 'auto', position: 'relative' }}
    >
      <h2 className="ml-1 mt-3 font-bold text-4xl text-black">{selectedJob.puesto}</h2>
      <div className="flex items-center justify-between mb-2 mt-2">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start">
            <span
              className="text-black text-sm uppercase font-semibold tracking-wide"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {selectedJob.empresa}
            </span>
            <span className="inline-block mx-4 h-4 w-px bg-gray-400"></span>
            <span
              className="text-black text-sm uppercase font-semibold tracking-wide"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaLocationDot style={{ color: 'black', marginRight: '5px' }} />
              {selectedJob.ubicacion}
            </span>
            <span className="inline-block mx-4 h-4 w-px bg-gray-400"></span>
            <span
              className="text-black text-sm uppercase font-semibold tracking-wide"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              S/. {selectedJob.sueldo} al mes
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-2 items-center">
        <button
          className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full mb-4"
          onClick={handleApplyClick}
        >
          POSTULARME
        </button>
        <div ref={shareButtonRef} className="ml-2 flex items-center justify-center bg-[#0057c2] rounded-full cursor-pointer hover:bg-blue-300 mb-4 relative" style={{ height: '40px', width: '40px' }} onClick={handleShareClick}>
        <CiShare2 size={24} color="white" />
        
        {isShareMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
        <div className="py-2">
        
        <a href={`https://wa.me/?text=${encodeURIComponent(`Hola, te puede interesar este puesto de trabajo: ${selectedJob.puesto}. Aquí tienes el enlace: http://localhost:5173/Share?id=${selectedJob.id_oferta}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-800 hover:bg-blue-50">
        <IoLogoWhatsapp className="mr-2" size={16} />
        <span>WhatsApp</span>
        </a>
        
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href + `/Share?id=${selectedJob.id_oferta}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-800 hover:bg-blue-50">
          <FaFacebookF className="mr-2" size={16} />
          <span>Facebook</span>
        </a>
        
        <button onClick={handleCopyLink} className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-blue-50">
          <FaCopy className="mr-2" size={16} />
          <span>Copiar Enlace</span>
        </button>
      </div>
    </div>
  )}
</div>
      </div>
      <div className="border-t border-gray-300 my-2" style={{ width: '100%' }}></div>
      <div ref={contentRef} className="mx-auto mt-3 w-full overflow-y-auto" style={{ height: 'calc(100% - 180px)' }}>
        <h3 className="font-bold">Descripción del Empleo:</h3>
        {jobDetails.map((detail, index) => (
          <div key={index} className="py-5 border-b border-gray-200">
            <div className="font-semibold font-dmsans text-primarytext text-orange-500">
              <div>{detail.title}</div>
            </div>
            <p className="mt-3 text-gray-800" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', width: '100%' }}>
              {detail.content}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4" style={{ opacity: atBottom ? 1 : 0, transition: 'opacity 0.3s' }}>
        <button className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full mr-4" onClick={handleApplyClick}>
          POSTULARME
        </button>
        {whatsappBaseUrl && (
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center">
              <FaWhatsapp className="mr-2" size={24} />
              WhatsApp
            </button>
          </a>
        )}
      </div>
      <ModalInfo isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmApply} />
    </div>
  );
}

export default InfoJob;