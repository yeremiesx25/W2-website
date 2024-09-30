import { Navigate } from 'react-router-dom';
import { UserAuth } from './Context/AuthContext'; // Ajusta la ruta según tu estructura de archivos

const ProtectedRoute = ({ children }) => {
  const { user, loading } = UserAuth();

  if (loading) {
    return (
      <div class="flex justify-center items-center h-screen">
<div class="flex flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
  <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
</div>
</div>
    ); // Pantalla de carga personalizada
  }

  // Si no hay usuario y ya no está cargando, redirigir a la página de inicio
  if (!user) {
    return <Navigate to="/Power" replace />;
  }

  // Si el usuario está autenticado, renderizar el componente protegido
  return children;
};

export default ProtectedRoute;
