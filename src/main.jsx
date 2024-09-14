import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyManagerApp from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyManagerApp />
  </StrictMode>,
)
