import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ( {children}) => {
    const [user, setUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const token = localStorage.getItem("token");

        if(token){
            setIsLoggedIn(true);
        } else{
            setIsLoggedIn(false)
        }

        setLoading(false);

    }, []);

    const login = async (userData) => {
        setLoading(true);
        await sleep(2000);

        // let token = userData.id;
        let token = "asdasdsada";
        localStorage.setItem("token", token);

        setIsLoggedIn(true);
        setUser(userData);
        setLoading(false);
    }; 
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{user, isLoggedIn, login, logout, loading}}>
        {children}
        </AuthContext.Provider>

    );

};