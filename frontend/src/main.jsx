import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';

const clientId = '8429412904-jeeo8mv090bd2ema7b81amutnmch2rri.apps.googleusercontent.com'; // replace with your client ID
createRoot(document.getElementById('root')).render(
   <StrictMode>
    <AuthProvider>
      <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
    </AuthProvider>
  </StrictMode>,
  
)