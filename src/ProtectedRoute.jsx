import { Navigate } from 'react-router-dom';
import { UserAuth } from './Context/AuthContext'; // Ajusta la ruta según tu estructura de archivos

const ProtectedRoute = ({ children }) => {
  const { user, loading } = UserAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative inline-flex">
          <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
          <div className="w-8 h-8 bg-amber-400 rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-8 h-8 bg-amber-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
      </div>
    ); // Pantalla de carga personalizada
  }

  // Si no hay usuario y ya no está cargando, redirigir a la página de inicio
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Si el usuario está autenticado, renderizar el componente protegido
  return children;
};

export default ProtectedRoute;
