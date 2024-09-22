import React from "react";
import Buscador from "../Power/Buscador";
import { useContext } from "react";
import JobsContext from "../../Context/JobsContext";

function HeroPowerAuth() {
  const { jobs } = useContext(JobsContext);

  return (
    <section className="w-full h-auto pt-28 font-dmsans flex flex-col items-center justify-center relative bg-[#F5F7F9]">

      <div className="w-full md:w-3/4 lg:w-2/3 relative flex items-center justify-center">
        <Buscador />
      </div>
    </section>
  );
}

export default HeroPowerAuth;
