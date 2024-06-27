import React, { useState } from "react";
import HeaderPowerAuth from "../PowerAuth/HeaderPowerAuth";
import { UserAuth } from "../../Context/AuthContext";


function Profile() {
  const { user } = UserAuth();


  return (
    <div className="w-full h-screen font-dmsans">
      <HeaderPowerAuth />
      <div className="pl-20 w-full h-full flex bg-gray-50">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-[90%] h-[90%] bg-white shadow rounded-lg flex flex-col items-center">
            <div className="rounded-t-lg h-32 overflow-hidden w-full">
              <img
                className="object-cover object-top w-full"
                src="https://debugpointnews.com/wp-content/uploads/2022/08/Fedora-37-Wallpaper-day-option-1.png"
                alt="Mountain"
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-32"
                src={user.user_metadata.avatar_url}
                alt="Perfil del candidato"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">{user.user_metadata.full_name}</h2>
              <p className="text-gray-500 text-sm w-96">{user.email}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-around items-start">
          <div className="w-[90%] h-[40%] bg-white shadow rounded-lg p-4">
            
          </div>
          <div className="w-[90%] h-[40%] bg-white shadow rounded-lg p-4">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
  