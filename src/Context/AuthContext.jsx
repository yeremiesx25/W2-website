import {createContext, useState} from 'react'

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>{
    const [user, setUser]  = useState([]);
    async function signInWithGoogle() {
        try {
        const { data, error } = supabase.auth.signInWithOAuth({
            provider: 'google',
          });
          if(error) throw new Error("A ocurrido un error durante la autenticación");
          return data;
        } catch (error) {}  
    }
};