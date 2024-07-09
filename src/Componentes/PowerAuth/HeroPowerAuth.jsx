import React from "react";
import Buscador from "../Power/Buscador";
import { useContext } from "react";
import JobsContext from "../../Context/JobsContext";

function HeroPowerAuth() {
  const { jobs } = useContext(JobsContext);

  return (
    <section className="w-full h-[400px] bg-primarygradient font-dmsans flex items-center justify-center md:pl-20 rounded-full-b-3xl">
      <div className="md:w-1/2 w-full p-8">
        <h1 className="text-3xl md:text-4xl text-center text-white font-regular mt-32 md:mt-0 max-w-[500px] mx-auto">
          Vive la experiencia{" "}
          <span className="text-[#FFE946] font-bold">Power</span>{" "}
          <span className="font-bold">y postula con nosotros.</span>
        </h1>
        <Buscador />
      </div>
      <div className="w-1/2 hidden md:flex flex-col p-8">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white h-24 w-24 rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Placeholder" className="h-full w-full object-cover" />
          </div>
          <div className="bg-white h-32 w-32 rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Placeholder" className="h-full w-full object-cover" />
          </div>
          <div className="bg-white h-28 w-28 rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Placeholder" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white h-32 w-32 rounded-full overflow-hidden">
            <img src="https://images.pexels.com/photos/4483772/pexels-photo-4483772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder" className="h-full w-full object-cover" />
          </div>
          <div className="bg-white h-24 w-24 rounded-full overflow-hidden">
            <img src="https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder" className="h-full w-full object-cover" />
          </div>
          <div className="bg-white h-40 w-40 rounded-full overflow-hidden">
            <img src="https://images.pexels.com/photos/1267329/pexels-photo-1267329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPowerAuth;
