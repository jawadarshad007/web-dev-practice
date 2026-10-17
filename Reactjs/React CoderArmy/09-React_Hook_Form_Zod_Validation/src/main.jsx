
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Form from './Form.jsx'
import ZodForm3 from './ZodForm3.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <App />
    {/* <Form></Form> */}
    <ZodForm3/>
  </>
)
