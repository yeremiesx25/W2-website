import React from "react";
import fondoIlustrado from "../../assets/BG 31.png";
import bgpowerauth from "../../assets/Bg-PowerAuth.png";
import logopower from "../../assets/Logo Power.png";
import Buscador from "../Power/Buscador";

function HeroPowerAuth() {
  return (
    <section style={{ backgroundImage: `url(${bgpowerauth})` }} className="w-full h-[400px] bg-powercolor font-dmsans flex items-center justify-center flex-col">
      <div className="w-full h-16 px-24 top-0 absolute pt-8"><img className="w-24" src={logopower} alt="" /></div>
      <h1 className="text-3xl md:text-5xl text-center text-white font-semibold">Hay miles de trabajos esperándote en Perú</h1>
      <Buscador />
    </section>
  );
}

export default HeroPowerAuth;
