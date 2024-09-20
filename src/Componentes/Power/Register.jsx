import React, { useState } from 'react';
import { supabase } from "../../supabase/supabase.config";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
  const [isRegistered, setIsRegistered] = useState(false);
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
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      // Insertar en la tabla usuario usando el user.id
      const { error: insertError } = await supabase
        .from('usuario')
        .insert([{
          user_id: signUpData.user.id,  // Guardar el User UID en la columna user_id
          email,
          contraseña: password,
          nombre: name,
          telefono: phone,
          distrito: district,
          dni_user: dni,
          fecha_nac: birthdate,
        }]);

      if (insertError) throw insertError;

      setIsRegistered(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRedirectToLogin = () => {
    navigate('/Login');
    window.location.reload();
  };

  return (
    <div className="bg-white p-8 max-w-md mx-auto">
      {error && <p className="text-red-600">{error}</p>}

      {isRegistered ? (
        <div className="text-center">
          <p className="text-green-600 font-bold mb-4">
            ¡Registrado correctamente! 
            Por favor, verifica tu correo electrónico para confirmar tu cuenta antes de iniciar sesión.
          </p>
          <button
            onClick={handleRedirectToLogin}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Ir a Iniciar Sesión
          </button>
        </div>
      ) : (
        <form onSubmit={handleRegister}>
          {/* Email input */}
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

          {/* Password inputs */}
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
                  placeholder="**********"
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
                  placeholder="**********"
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

          {/* Name input */}
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

          {/* DNI and Birthdate inputs */}
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

          {/* District and Phone inputs */}
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

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Registrarse
          </button>

          {/* Redirect to login */}
          <button
            type="button"
            onClick={handleRedirectToLogin}
            className="w-full bg-gray-300 text-gray-800 py-2 mt-4 rounded-lg hover:bg-gray-400"
          >
            ¿Ya tienes cuenta? Inicia Sesión
          </button>
        </form>
      )}
    </div>
  );
}

export default Register;