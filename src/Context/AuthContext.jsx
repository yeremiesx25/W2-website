import {createContext, useState, useContext} from 'react'
import {supabase} from '../supabase/supabase.config'

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
        } catch (error) {
            console.log(error)
        }  
    }
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if(error) throw new Error("A ocurrido un error durante el cierre de sesión");
      }
    
    return (
        <AuthContext.Provider value={{signInWithGoogle, signOut, user}} >
            {children}
        </AuthContext.Provider>
    )  
};

export const UserAuth=()=>{
    return useContext (AuthContext)
}