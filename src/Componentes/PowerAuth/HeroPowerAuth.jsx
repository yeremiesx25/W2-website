import React from "react";
import Buscador from "../Power/Buscador";
import { useContext } from "react";
import JobsContext from "../../Context/JobsContext";

function HeroPowerAuth() {
  const { jobs } = useContext(JobsContext);

  return (
    <section className="w-full md:h-[480px] h-[450px]  bg-newprimarycolor font-dmsans flex items-center justify-center md:pl-20 rounded-full-b-3xl">
      <div className=" w-full md:p-8 p-4">
        <h1 className='text-3xl md:text-6xl font-semibold mb-4 text-center px-2 animate-fade-right text-white'>
            Vive la experiencia <span className='text-yellowprimary'>Power</span> y postula <br /> con nosotros
          </h1>
        
        <Buscador />
      </div>
    </section>
  );
}

export default HeroPowerAuth;
