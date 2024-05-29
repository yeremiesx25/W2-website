import { Navigate } from 'react-router-dom';
import { UserAuth } from './Context/AuthContext'; // Ajusta la ruta según tu estructura de archivos

const ProtectedRoute = ({ children }) => {
  const { user, loading } = UserAuth();

  if (loading) {
    return <div>Loading...</div>; // Puedes personalizar este loading screen
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
