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
    <div className="w-full h-full pl-20 flex flex-col items-center font-dmsans">
      <div className="flex w-full">
        <div class=" w-full bg-secundarygradient pt-12 flex justify-center flex-col items-center">
        <div className="w-1/2">
            <h1 class="text-center font-bold text-white text-4xl">
              Bienvenid@ {firstName}
            </h1>
            <p class="mx-auto font-normal text-sm my-6 max-w-lg text-white text-center">
              En esta sección podrás crear una nueva oferta de trabajo y visualizar tus ofertas ya creadas.
            </p>
          </div>
          <BuscadorJob /><BtnContainer /> 
        </div>
      </div>
      <div className="w-full flex justify-center">
        
      </div>
      <JobList />
    </div>
  );
}

export default AdminLayout;