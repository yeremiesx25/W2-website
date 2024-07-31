import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth({ onClose }) {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === '123') {
      onClose();
      navigate('/ReservaAdmin');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Ingrese Contraseña</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-lg mb-4"
            placeholder="Contraseña"
            required
          />
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg">
            Confirmar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 bg-gray-500 text-white rounded-lg mt-2"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
