import React, { useState } from 'react';
import { supabase } from "../../supabase/supabase.config";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dni, setDni] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [district, setDistrict] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password || !confirmPassword || !name || !phone || !dni || !birthdate || !district) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const { user, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      const { data, error: insertError } = await supabase
        .from('usuario')
        .insert([{
          email,
          contraseña: password, // Ensure you handle passwords securely
          nombre: name,
          telefono: phone,
          distrito: district,
          dni_user: dni,
          fecha_nac: birthdate,
        }]);

      if (insertError) throw insertError;

      navigate('/Login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-white p-8 max-w-md mx-auto">
      <button
        className="text-black mb-4 md:mb-6 border border-gray-400 bg-white hover:bg-gray-200 rounded-full py-2 px-4 flex items-center"
        onClick={() => navigate('/Login')}
      >
        <IoIosArrowBack className="mr-2" size={20} /> Regresar
      </button>
      
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 md:flex md:justify-between">
          <div className="md:mr-2">
            <label className="block text-gray-700">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="******************"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="md:ml-2">
            <label className="block text-gray-700">Confirmar Contraseña</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="******************"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Nombre Completo</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 md:flex md:justify-between">
          <div className="md:flex-1 md:mr-2">
            <label className="block text-gray-700">DNI</label>
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="md:flex-1 md:ml-2">
            <label className="block text-gray-700">Fecha de Nacimiento</label>
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4 md:flex md:justify-between">
          <div className="md:mr-2">
            <label className="block text-gray-700">Distrito de Residencia</label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="md:ml-2">
            <label className="block text-gray-700">Teléfono</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;