import React from "react";
import Buscador from "../Power/Buscador";
import { useContext } from "react";
import JobsContext from "../../Context/JobsContext";

function HeroPowerAuth() {
  const { jobs } = useContext(JobsContext);

  return (
    <section
      className="w-full h-auto z-999 pb-4 md:pt-24 pt-[68px] font-dmsans flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url('https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Shapes/HeroPowerShapes.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundColor: '#0072C6',
      }}
    >
      <div className="w-full md:w-3/4 lg:w-2/3 relative flex items-center justify-center">
        <Buscador />
      </div>
    </section>
  );
}

export default HeroPowerAuth;