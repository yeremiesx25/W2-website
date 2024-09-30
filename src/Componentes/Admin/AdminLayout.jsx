import React from "react";
import BtnContainer from "./BtnContainer";
import JobList from "./JobList";
import { UserAuth } from "../../Context/AuthContext";
import BuscadorJob from "./BuscadorJob";

function AdminLayout() {
  const { user, signOut } = UserAuth();

  if (!user) {
    return <p>Cargando...</p>;
  }


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center pl-80 pr-10 pt-20">
      <BtnContainer />
      <JobList />
    </div>
  );
}

export default AdminLayout;