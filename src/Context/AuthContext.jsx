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

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw new Error("Ocurrió un error durante la autenticación");
      setJustLoggedIn(true); // Marcar que el usuario acaba de iniciar sesión
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error("Ocurrió un error durante el cierre de sesión");
    setUser(null);
    localStorage.removeItem('user');
    setJustLoggedIn(false); // Resetear el estado
    navigate("/", { replace: true });
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session == null) {
        setUser(null);
        localStorage.removeItem('user');
      } else {
        const user = session.user;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));

        // Save or update user info in the database
        const { data, error: upsertError } = await supabase
          .from('Usuarios')
          .upsert({
            id: user.id,
            name: user.user_metadata.full_name,
            email: user.email,
            profile_image: user.user_metadata.avatar_url
          });

        if (upsertError) {
          console.error('Error upserting user info:', upsertError);
        }

        // Redirigir a PowerAuth solo si el usuario acaba de iniciar sesión
        if (justLoggedIn || location.pathname === '/') {
          navigate("/PowerAuth", { replace: true });
          setJustLoggedIn(false); // Resetear el estado
        }
      }
      setLoading(false);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [navigate, justLoggedIn, location.pathname]);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
