import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="flex gap-5 justify-end px-20 py-12 mt-36 text-sm font-semibold leading-5 text-white bg-gray-800 max-md:flex-wrap max-md:px-5">
      <div className="flex-auto max-md:max-w-full">
        © 2024 W2 Consultores y Asesores - Todos los derechos reservados.
      </div>
      <div className="flex gap-5 justify-between">
        <div>Términos de uso</div>
        <div>Política de privacidad</div>
      </div>
    </div>
  );
}

export default Footer