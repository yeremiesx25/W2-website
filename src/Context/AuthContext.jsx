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
  const [manualLogin, setManualLogin] = useState(false); // Flag para detectar si es un login manual

  // SignIn con Google (sin rol específico)
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

  // Inicio de sesión manual para reclutadores
const manualSignIn = async (email, password) => {
  try {
    // Utiliza el método de autenticación de Supabase
    const { user: authUser, error: authError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (authError) {
      console.error('Error de autenticación:', authError.message); // Muestra el error de autenticación
      throw new Error('Credenciales incorrectas');
    }

    // Busca el usuario en la tabla 'reclutador' para obtener más información
    const { data, error: userDataError } = await supabase
      .from('perfiles')
      .select('*')
      .eq('correo', email)
      .single();

    if (userDataError) {
      console.error('Error al buscar usuario en la base de datos:', userDataError.message);
      throw new Error('No se encontró el usuario en la base de datos');
    }

    if (!data) {
      throw new Error('No se encontró el usuario en la base de datos');
    }

    // Autenticación exitosa, guardar usuario y su rol
    const userData = { ...data, rol: 'reclutador' }; // Añade el rol "reclutador" al usuario
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Guardar en localStorage
    setManualLogin(true); // Indicamos que fue un login manual
    console.log('Usuario autenticado:', userData); // Verificar datos del usuario

    // Redirigir a la página de admin
    navigate('/Admin', { replace: true });
  } catch (error) {
    console.error('Error en el inicio de sesión manual:', error.message);
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
        // Mantener el usuario autenticado con Google, pero sin rol específico
        const user = session.user;
        const userData = { ...user, rol: 'usuario' }; // Usuario estándar si se loguea con Google
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));

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
