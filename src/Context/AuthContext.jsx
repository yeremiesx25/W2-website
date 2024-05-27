import { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [initialAuthCheck, setInitialAuthCheck] = useState(true); // Inicialmente true para manejar la verificación inicial

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw new Error('Ha ocurrido un error durante la autenticación');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error('Ha ocurrido un error durante el cierre de sesión');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Supabase event: ', event, session);

      if (session == null) {
        setUser(null);
        if (!initialAuthCheck) { // Si ya se ha hecho la verificación inicial
          navigate(location.pathname, { replace: true });
        }
      } else {
        setUser(session.user.user_metadata);
        console.log('Datos del usuario: ', session.user.user_metadata);
        if (initialAuthCheck) {
          navigate('/PowerAuth', { replace: true });
          setInitialAuthCheck(false); // Marcar la verificación inicial como completada
        }
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [navigate, location.pathname, initialAuthCheck]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user.user_metadata);
        setInitialAuthCheck(false); // Marcar la verificación inicial como completada si ya hay una sesión
      } else {
        setInitialAuthCheck(false); // Asegurar que el estado se actualiza incluso si no hay sesión
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
