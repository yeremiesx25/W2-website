import React from "react";
import fondoIlustrado from "../../assets/BG 31.png";
import bgpowerauth from "../../assets/Bg-PowerAuth.png";
import logopower from "../../assets/Logo Power.png";
import Buscador from "../Power/Buscador";
import { useContext } from 'react';
import JobsContext from '../../Context/JobsContext';

function HeroPowerAuth() {

  const { jobs } = useContext(JobsContext);

  return (
    <section className="w-full h-[300px] bg-white font-dmsans flex items-center justify-center flex-col">
      <h1 className="text-3xl md:text-5xl text-center text-primarytext font-semibold">
        Hay <span className="text-amber-400">{jobs.length}</span> trabajos esperándote en Perú
      </h1>
      <Buscador />
    </section>
  );
}

export default HeroPowerAuth;