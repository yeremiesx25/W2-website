import { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  
  // Estado para guardar el usuario autenticado
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para iniciar sesión con Google
  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      if (error) throw error;
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error.message);
    }
  };

  // Función para iniciar sesión manualmente
  const manualSignIn = async (email, password) => {
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      const { data: userProfile, error: profileError } = await supabase
        .from('perfiles')
        .select('*')
        .eq('correo', email)
        .single();

      if (profileError || !userProfile) throw new Error('Perfil no encontrado');
      // Dentro de manualSignIn
      setUser({ ...userProfile, rol: 'reclutador', id: userProfile.id }); // Asegúrate de que 'id' es el campo correcto
      setUser({ ...userProfile, rol: 'reclutador' });
      navigate('/Admin', { replace: true });
    } catch (error) {
      console.error('Error al iniciar sesión manualmente:', error.message);
    }
  };

  // Función para cerrar sesión
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      navigate('/Power', { replace: true });
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  // Efecto para manejar la sesión actual
  useEffect(() => {
    // Escucha los cambios de autenticación
    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        // Si hay sesión, actualiza el estado del usuario
        const loggedUser = session.user;
        setUser({ ...loggedUser, rol: 'usuario' });
      } else {
        // Si no hay sesión, resetea el usuario
        setUser(null);
      }
      setLoading(false); // Detiene el estado de carga cuando se obtiene la sesión
    });

    // Cleanup al desmontar
    return () => {
      subscription?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, manualSignIn, signOut, user, loading }}>
      {loading ? <div>
        <div className="flex justify-center items-center h-screen">
<div className="flex flex-row gap-2">
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
</div>
</div>
      </div> : children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);
