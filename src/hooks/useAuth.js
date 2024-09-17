import { useEffect, useState } from "react";

const useAuth = () => {
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

    const login = async () => {

        setLoading(true);
        await sleep(2000);

        let fakeToken = "12323232";
        localStorage.setItem("token", fakeToken);
        setIsLoggedIn(true);

        setLoading(false);
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    
    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    }
    return { isLoggedIn, login, logout, loading };
};

export default useAuth;