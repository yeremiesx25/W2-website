import { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  });
  const [loading, setLoading] = useState(true);

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw new Error("Ocurrió un error durante la autenticación");
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
    navigate("/", { replace: true });
  }

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            console.log("supabase event: ", session);
            if (session == null) {
                navigate("/", { replace: true });
            } else {
                setUser(session?.user);
                console.log("data del usuario ", session?.user);
                navigate("/Admin");
            }
        });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};