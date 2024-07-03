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

  // Obtener solo la primera palabra del nombre completo
  const firstName = user.user_metadata.full_name.split(' ')[0];

  return (
    <div className="w-full h-full pl-20 flex flex-col items-center justify-center py-12 ">
      <div className="flex gap-10 flex-wrap">
        <p className="text-4xl mb-8 text-gray-800">
          Hola, <strong>{firstName}</strong>
        </p>
        <BuscadorJob />
      </div>
      <div className="w-full flex justify-center">
        <BtnContainer />
      </div>
      <JobList />
    </div>
  );
}

export default AdminLayout;