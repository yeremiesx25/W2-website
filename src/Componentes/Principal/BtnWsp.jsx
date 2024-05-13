import React from "react";

function WhatsAppButton ()  {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=51995667713"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow"
    >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png" alt="" />
    </a>
  );
};

export default WhatsAppButton;
