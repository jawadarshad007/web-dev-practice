import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <App2 />
  </StrictMode>,
)
