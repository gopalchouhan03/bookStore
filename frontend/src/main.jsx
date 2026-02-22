<<<<<<< HEAD

=======
import { StrictMode } from 'react'
>>>>>>> 48926768c62aa40b4b9c7bb9275670814df4805c
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '../context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
       <App />
    </AuthProvider>
  </BrowserRouter>,
)
