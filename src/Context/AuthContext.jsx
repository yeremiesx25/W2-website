import { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(() => {
    // Intenta cargar el usuario desde localStorage al inicializar el estado
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null; // Carga el usuario si existe
  });
  const [loading, setLoading] = useState(true);
  const [justLoggedIn, setJustLoggedIn] = useState(false);
  const [manualLogin, setManualLogin] = useState(false); // Flag para detectar si es un login manual

  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      if (error) throw new Error("Ocurrió un error durante la autenticación");
      setJustLoggedIn(true);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const manualSignIn = async (email, password) => {
    try {
      const { data, error } = await supabase
        .from('reclutador')
        .select('*')
        .eq('email', email)
        .eq('contraseña', password)
        .single();

      if (error || !data) {
        throw new Error('Credenciales incorrectas');
      }

      // Autenticación exitosa, guardar id_reclutador en el estado y localStorage
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data)); // Asegúrate de que aquí se guardan todos los datos del usuario
      setManualLogin(true); // Indicamos que fue un login manual
      console.log('Usuario autenticado:', data);

      // Redirigir a la página de admin
      navigate('/Admin', { replace: true });
    } catch (error) {
      console.error(error);
      throw error; // Maneja esto en LoginAdmin
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error("Ocurrió un error durante el cierre de sesión");
      setUser(null);
      localStorage.removeItem('user'); // Elimina el usuario del localStorage
      setJustLoggedIn(false);
      setManualLogin(false); // Resetear el flag de login manual
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      // Si el usuario hizo un login manual, no sobrescribir el estado de autenticación
      if (manualLogin) {
        setLoading(false);
        return;
      }

      // Si la sesión está vacía, eliminar el usuario del localStorage
      if (session == null) {
        setUser(null);
        localStorage.removeItem('user');
      } else {
        const user = session.user;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user)); // Asegúrate de guardar el objeto correcto

        // Si el usuario acaba de iniciar sesión o está en la página raíz
        if (justLoggedIn || location.pathname === '/') {
          navigate("/PowerAuth", { replace: true });
          setJustLoggedIn(false);
        }
      }
      setLoading(false);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [navigate, justLoggedIn, location.pathname, manualLogin]);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, manualSignIn, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};