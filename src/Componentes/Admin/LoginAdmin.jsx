import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext'; 
import LoginAdminImg from "../../assets/LoginAdminImg.svg";
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';

function LoginAdmin() {
    const navigate = useNavigate();
    const { user } = UserAuth(); 
    const [email, setEmail] = useState('');
    const [uid, setUid] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (user && user.email === email && user.id === uid) {
            setError('');
            // Redirigir al usuario a la página adecuada
            navigate('/Admin');
            console.log("Reclutador logueado")
        } else {
            setError('Correo electrónico o UID incorrecto');
        }
    };

    return (
        <div>
            <HeaderPowerAuth />
            <div className="pl-20 w-[100%] h-screen flex font-dmsans items-center">
                <div className="w-[calc(100%-600px)] h-full py-6 bg-white flex items-center">
                    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                        <h1 className="font-bold text-center text-2xl mb-5 text-primarytext">Iniciar sesión como reclutador</h1>
                        <h1>{user.email}</h1>
                        <h1>{user.id}</h1>
                        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                            <div className="px-5 py-7">
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Correo electrónico</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Contraseña</label>
                                <input type="text" value={uid} onChange={(e) => setUid(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                                <button type="button" onClick={handleLogin} className="transition duration-200 bg-primarycolor hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    <span className="inline-block mr-2">Continuar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[600px] h-full bg-primarycolor">
                    
                    <img src={LoginAdminImg} className="w-full h-full" alt="" />
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;
