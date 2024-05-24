import React from "react";
import fondoIlustrado from "../../assets/BG 31.png";
import bgpowerauth from "../../assets/Bg-PowerAuth.png";
import arrow from "../../assets/flechas-a-la-derecha.png";
import Buscador from "../Power/Buscador";

function HeroPowerAuth() {
  return (
    <section style={{ backgroundImage: `url(${bgpowerauth})` }} className="w-full h-[400px] bg-powercolor font-dmsans flex items-center justify-center flex-col">
      <h1 className="text-3xl md:text-5xl text-center text-white font-semibold">Hay miles de trabajos esperándote en Perú</h1>
      <Buscador />
    </section>
  );
}

export default HeroPowerAuth;
