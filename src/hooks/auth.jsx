import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({ children }){
const [data, setData] = useState({});

    async function signIn({ email, password }){

      if (!email, !password) {
        return alert("Infome o email/senha.")
       }

     try {   
     const response = await api.post("/sessions", { email, password});
     const { user, token } = response.data;

     localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
     localStorage.setItem("@rocketmovies:token", token)
     
     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
     setData({user, token})

     } catch (error) {
      if(error.response){
        alert(error.response.data.message)
        
      }else{
        alert("Não foi possivel entrar")
      };
     };
    };

    function Logout(){
      localStorage.removeItem("@rocketmovies:token");
      localStorage.removeItem("@rocketmovies:user");

      setData({});
    };

    useEffect(() => {
       const token = localStorage.getItem("@rocketmovies:token")
       const user = localStorage.getItem("@rocketmovies:user")

       if (user && token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setData({
          token,
          user: JSON.parse(user)
        })
       }
      }, []);

    return (
        <AuthContext.Provider value={{ signIn, Logout, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth(){
 const context = useContext(AuthContext);

 return context
};

export { AuthProvider, useAuth };
