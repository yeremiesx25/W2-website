import React from "react";
import flecha from "../../assets/flecha.png";
import capa from "../../assets/capacitaciones.jpg";
import donar from "../../assets/donaciones.jpg";
import { motion } from "framer-motion"

function Testimonio() {
  return (
    <section class=" text-primarytext py-16 font-dmsans flex justify-center items-center">
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-32">
        <h2 class="text-4xl text-center font-bold mb-8">
          {" "}
          <img
            src={flecha}
            alt=""
            className="inline-block w-16 h-12 mr-2"
          ></img>
          Cada vez que contratas nuestro servicios <br></br>{" "}
          <span class="block text-primarycolor xl:inline">
            contribuyes con...{" "}
          </span>
        </h2>

        <div class="flex flex-wrap justify-around w-full items-center">
          <div class="bg-[#061C3D] w-80 h-96 shadow rounded-lg p-8 text-white text-center flex flex-col justify-around items-center mb-6">
          <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
            <img
              src="https://images.unsplash.com/photo-1533222535026-754c501569dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-40 mb-4 rounded-lg"
            /> </motion.div>
            <div className="w-full h-48">
              <h3 className="text-xl font-semibold mb-2">Niños</h3>
              <p className="font-light">
                Contribuir a la formación de valores en niños de diversos
                sectores del país.
              </p>
            </div>
          </div>
          <div class="bg-primarycolor w-80 h-96 shadow rounded-lg p-8 text-white text-center flex flex-col justify-around items-center mb-6">
          <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
            <img src={capa} alt="" className="w-full h-44 mb-4 rounded-lg" />
            </motion.div>
            <div className="w-full h-48">
              <h3 className="text-xl font-semibold mb-2">Capacitaciones</h3>
              <p className="font-light">
                Brindar capacitaciones gratuitas para la población en general
                sobre temas cioyunturales.
              </p>
            </div>
          </div>
          <div class="bg-[#BD51FF] w-80 h-96 shadow rounded-lg p-8 text-white text-center flex flex-col justify-bettween items-center mb-6">
          <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
            <img src={donar} alt="" className="w-full h-40 mb-4 rounded-lg" />
             </motion.div>
            <div className="w-full h-48">
              <h3 className="text-xl font-semibold mb-2">Donaciones</h3>
              <p className="font-light">
                Generar campañas de donación para diversas poblaciones
                vulnerables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonio;
