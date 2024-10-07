import { Navigate } from 'react-router-dom';
import { UserAuth } from './Context/AuthContext'; // Ajusta la ruta según tu estructura de archivos

const ProtectedRoute = ({ children }) => {
  const { user, loading } = UserAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primarycolor"></div>
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
