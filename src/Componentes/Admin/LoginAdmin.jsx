import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext'; 
import LoginAdminImg from "../../assets/LoginAdminImg.svg";
import HeaderPowerAuth from '../PowerAuth/HeaderPowerAuth';
import HeaderPower from '../Power/HeaderPower';

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
            <HeaderPower />
            <div className=" w-[100%] h-screen flex font-dmsans items-center">
                <div className="w-1/2 h-full bg-primarygradientdark hidden lg:block"> 
                       
                </div>
                <div className="md:w-1/2 h-full py-6 bg-white flex items-center mx-auto px-4     ">
                    <div className="p-10 xs:p-0 md:mx-auto lg:w-full lg:max-w-md    ">
                        <h1 className="font-bold text-left text-2xl text-primarycolor">Te damos la bienvenida</h1>
                        <h1 className="font-regular text-left text-md mb-5 text-gray-700">Ingresa tus datos para iniciar sesión</h1>
                        <div className="bg-white w-full rounded-lg divide-y divide-gray-200">
                            <div className=" py-7 w-full">
                                <label className="font-regular text-md text-gray-600 pb-1 block">Correo electrónico</label>
                                <input placeholder="Ingresa tu correo" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8" required />
                                <label className="font-regular text-md text-gray-600 pb-1 block">Contraseña</label>
                                <input type="password" placeholder="Ingresa tu contraseña" value={uid} onChange={(e) => setUid(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-12" required/>
                                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                                <div className='flex md:justify-between items-center flex-wrap gap-4 justify-center'>
                                    <a href="https://wa.me/51970632448?text=Hola%2C%20me%20gustar%C3%ADa%20que%20me%20pueda%20ayudar%20a%20recuperar%20mi%20contrase%C3%B1a
" className='text-[#00aec7] font-base  text-md'>Olvidé mi contraseña</a>
                                     <button type="button" onClick={handleLogin} className="transition duration-200 bg-[#ffe946] hover:bg-[#fff084] focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-primarycolor w-52 h-10 flex py-2.5 rounded-lg text-md shadow-sm hover:shadow-md font-semibold text-center justify-center items-center">
                                    <span className="inline-block mr-2">Continuar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default LoginAdmin;
