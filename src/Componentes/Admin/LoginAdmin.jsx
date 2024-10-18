import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import HeaderPower from '../Power/HeaderPower';
import { GrFormNextLink } from "react-icons/gr";

function LoginAdmin() {
    const navigate = useNavigate();
    const { manualSignIn } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    setError("");
        try {
            const success = await manualSignIn(email, password);
            if (success) {
                const userRole = await getUserRole(email);
                if (userRole === 'reclutador') {
                    navigate('/Admin');
                } else {
                    setError('No tienes permiso para acceder a esta área');
                }
            } else {
                setError('Correo electrónico o contraseña incorrecta');
            }
        } catch (err) {
            setError('Ocurrió un error al iniciar sesión');
        }
    };

    return (
        <div>
            <HeaderPower />
            <div className="w-[100%] h-screen flex font-dmsans items-center">
                <div className="w-1/2 h-full hidden md:flex flex-col gap-8 items-center justify-center overflow-hidden">
                <img className='h-96' src="https://keenthemes.com/assets/media/illustrations/customerservice.svg" alt="" />
                <p className='text-gray-700 font-light px-2 text-center'>"La pasión por conectar personas con su potencial impulsa tu éxito."</p>
                </div>
                <div className="md:w-1/2 w-full justify-center h-full py-6 bg-newprimarycolor flex items-center mx-auto px-4">
                    <div className="p-10 xs:p-0 md:mx-auto lg:w-full lg:max-w-md">
                        <h1 className="font-bold text-center text-2xl text-white mt-20">
                            Te damos la bienvenida
                        </h1>
                        <h1 className="font-normal text-center text-md text-gray-300 mt-2">
                            Ingresa tus datos para iniciar sesión
                        </h1>
                        <div className="w-full">
                            <div className="py-7 w-full">
                                <label className="font-light text-md text-gray-300 block">Correo electrónico</label>
                                <input
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8"
                                    required
                                />
                                <label className="font-light text-md text-gray-300 block">Contraseña</label>
                                <input
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-2"
                                    required
                                />
                                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                                <div className='flex md:justify-between items-center flex-wrap gap-8 justify-center'>
                                    <a href="https://wa.me/51970632448?text=Hola%2C%20me%20gustar%C3%ADa%20que%20me%20pueda%20ayudar%20a%20recuperar%20mi%20contrase%C3%B1a" className='text-colorgreen font-light text-sm flex ml-auto underline underline-offset-4'>Olvidé mi contraseña</a>
                                    <button
                                        type="button"
                                        onClick={handleLogin}
                                        className="transition duration-200 bg-[#ffe946] hover:bg-[#fff084] focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-primarycolor w-full h-12 flex py-2 rounded-lg shadow-sm hover:shadow-md text-center justify-center items-center"
                                    >
                                        <span className="inline-block font-semibold text-lg">Iniciar Sesión</span>
                                    </button>
                                </div>
                                <a href="https://wa.me/51970632448?text=Hola%20vengo%20de%20Power.%20Quiero%20solicitar%20mi%20cuenta%20de%20Reclutador." className="text-yellowprimary hover:text-white mt-4  flex items-center text-center">
                                    Solicitar cuenta de Reclutador <GrFormNextLink size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;