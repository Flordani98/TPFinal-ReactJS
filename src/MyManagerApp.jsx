import React from 'react'
import './styles/index.css'
import AppRouter from './routers/AppRouter'
import { AuthProvider } from './context/AuthContext'


const MyManagerApp = () => {

  return (
    <AuthProvider>
      <AppRouter></AppRouter>
    </AuthProvider>

  )

}

export default MyManagerApp
