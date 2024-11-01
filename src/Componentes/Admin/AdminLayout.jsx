import React from "react";
import BtnContainer from "./BtnContainer";
import JobList from "./JobList";
import { UserAuth } from "../../Context/AuthContext";
import BuscadorJob from "./BuscadorJob";
import Postulados from "./Postulados";
import HeaderDashboard from "./HeaderDashboard";

function AdminLayout() {
  const { user, signOut } = UserAuth();

  if (!user) {
    return <p>Cargando...</p>;
  }


  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafbff] pl-72 pr-10 pt-20">
      
      <HeaderDashboard />
      <JobList />
    </div>
  );
}

export default AdminLayout;