import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Video from './Video.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Login></Login>
    <Video></Video>
  </>
  
)
