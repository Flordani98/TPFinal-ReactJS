import { useState } from "react";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        console.log("logging in...")
        setIsLoggedIn(true);
    };
    
    const logout = () => setIsLoggedIn(false);

    return { isLoggedIn, login, logout };
};

export default useAuth;