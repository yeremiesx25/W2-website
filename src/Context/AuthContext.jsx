import { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  });
  const [loading, setLoading] = useState(true);
  const [justLoggedIn, setJustLoggedIn] = useState(false);

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
  
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      console.log('Usuario autenticado:', data); // Verificar datos del usuario
      navigate('/Admin');
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
      localStorage.removeItem('user');
      setJustLoggedIn(false);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session == null) {
        setUser(null);
        localStorage.removeItem('user');
      } else {
        const user = session.user;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));

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
  }, [navigate, justLoggedIn, location.pathname]);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, manualSignIn, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};