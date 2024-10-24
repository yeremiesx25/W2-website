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
  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // Función para iniciar sesión manualmente
  
  
  //inicio en candidato
  const manualSignIn = async (email, password) => {
    try {
      // Iniciar sesión con Supabase usando email y contraseña
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) throw signInError;
  
      // Obtener el perfil del usuario desde la tabla de 'perfiles'
      const { data: userProfile, error: profileError } = await supabase
        .from('perfiles')
        .select('rol')
        .eq('correo', email)
        .single();
  
      if (profileError || !userProfile) throw new Error('Perfil no encontrado');
  
      // Verificar si el usuario tiene el rol de "reclutador"
      if (userProfile.rol !== 'reclutador') {
        // Si no es reclutador, cierra la sesión y lanza un error
        await supabase.auth.signOut();
        throw new Error('No tienes permisos para iniciar sesión como reclutador');
      }
  
      // Si el rol es correcto, establece el estado del usuario y redirige
      setUser(userProfile);
  
      // Recarga la página rápidamente después de la redirección
      navigate('/Admin', { replace: true });
      window.location.reload(); // Recarga rápida de la página
  
    } catch (error) {
      console.error('Error al iniciar sesión manualmente:', error.message);
      // Aquí puedes mostrar un mensaje de error en la interfaz si lo deseas
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
      {loading ? <div className="flex justify-center items-center h-screen w-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primarycolor"></div>
      </div> : children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);