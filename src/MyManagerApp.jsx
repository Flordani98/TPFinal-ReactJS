import React from 'react'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage';
import './styles/index.css'
import { useAuth } from './hooks';


const MyManagerApp = () => {

  const { isLoggedIn, login, logout } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <HomePage onLogout={logout}  />
      ) : (
        <LoginPage onLogin={login} />

      )}

    </>


  );
}

export default MyManagerApp
