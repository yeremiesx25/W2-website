import {createContext, useState, useContext, useEffect} from 'react'
import {supabase} from '../supabase/supabase.config'
import {useNavigate} from 'react-router-dom'




const AuthContext = createContext();
export const AuthContextProvider = ({ children }) =>{
    const navigate = useNavigate()
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
    
    useEffect(()=>{
        const {data:authListener} = supabase.auth.onAuthStateChange(async (event, session)=>{
            console.log("supabase event: ", session);
            if(session==null){
                navigate("/", {replace:true})
            }
            else {
                setUser(session?.user.user_metadata)
                console.log("data del usuario ", session?.user.user_metadata)
                navigate("/PowerAuth", );
            }
        })
    }, [])  

    return (
        <AuthContext.Provider value={{signInWithGoogle, signOut, user}} >
            {children}
        </AuthContext.Provider>
    )  
};

export const UserAuth=()=>{
    return useContext (AuthContext)
}