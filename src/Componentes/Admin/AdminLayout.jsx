import React from "react";
import BtnContainer from "./BtnContainer";
import JobList from "./JobList";
import { UserAuth } from "../../Context/AuthContext";
import BuscadorJob from "./BuscadorJob";
import Postulados from "./Postulados";
import MenuAdmin from "./MenuAdmin";

function AdminLayout() {
  const { user, signOut } = UserAuth();

  if (!user) {
    return <p>Cargando...</p>;
  }


  return (
    <div className="w-full h-screen flex flex-col bg-gray-50 pl-80 pr-10 pt-20">
      <BtnContainer />
      <JobList />
    </div>
  );
}

export default AdminLayout;