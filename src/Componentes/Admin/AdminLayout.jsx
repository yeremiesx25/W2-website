import React from "react";
import BtnContainer from "./BtnContainer";
import JobList from "./JobList";

import { UserAuth } from "../../Context/AuthContext";

function AdminLayout() {
  const { user, signOut } = UserAuth();

  if (!user) {
    return <p>Cargando...</p>;
  }

  

  return (
    <div className="w-full h-full pl-20 flex flex-col items-center justify-center py-12 ">
      <p className="text-4xl mb-8 text-gray-800">
        Hola, <strong>{user.name}</strong>
      </p>
      <div className="w-full flex justify-center">

        <BtnContainer />
      </div>
      <JobList />
    </div>
  );
}

export default AdminLayout;
