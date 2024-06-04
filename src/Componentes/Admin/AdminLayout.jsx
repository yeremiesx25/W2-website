import React from "react";
import BtnContainer from "./BtnContainer";
import JobList from "./JobList";
import BuscadorJob from "./BuscadorJob";

function AdminLayout() {
  return (
    <div className="w-full h-full  pl-20 flex flex-col items-center justify-center shadow pt-32">
      <p className="text-5xl">Panel de Reclutador</p>
      <div className="w-full flex justify-center">
        <BuscadorJob />
      <BtnContainer />
      </div>
      
      <JobList />
    </div>
  );
}

export default AdminLayout;
