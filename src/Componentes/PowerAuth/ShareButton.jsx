import React, { useRef, useState, useEffect } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaCopy, FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function ShareButton({ selectedJob }) {
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const shareButtonRef = useRef(null);

  const shareUrl = `https://w2asesoresyconsultores.com/Share?id=${selectedJob.id_oferta}`;
  const whatsappMessage = `Hola, quisiera compartir esta Oferta Laboral contigo: ${shareUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;

  const handleShareClick = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);

    // Show copied message
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

    setTimeout(() => {
      copiedMessage.remove();
    }, 3000);

    setIsShareMenuOpen(false);
  };

  // Manejar clics fuera del menú desplegable
  const handleClickOutside = (event) => {
    if (shareButtonRef.current && !shareButtonRef.current.contains(event.target)) {
      setIsShareMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={shareButtonRef}>
      <button
        className="font-bold py-2 px-4 rounded-full w-48 bg-blue-50 text-primarycolor flex items-center justify-center"
        onClick={handleShareClick}
      >
        <CiShare2 className="mr-2" />
        Compartir
      </button>

      {isShareMenuOpen && (
        <div className="absolute top-full right-0 bg-white border rounded-lg shadow-lg p-4 z-10 mt-2">
          <ul className="space-y-2">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <IoLogoWhatsapp className="text-[#25D366] text-lg" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FaFacebookF className="text-[#1877F2] text-lg" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <button onClick={handleCopyLink} className="flex items-center space-x-2">
                <FaCopy className="text-gray-500 text-lg" />
                <span>Copiar Enlace</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShareButton;