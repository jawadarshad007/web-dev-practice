
import { createContext , useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA'


//Step1: Create context
const UserContext = createContext()
const themeContext = createContext()
// Step2: wrap all the child inside a provider  
// Step3: provide a value to the provider
// Step4: Consume the value from the context in any child component


function App() {
  const [user, setUser] = useState({name:"John", age:30})
  const [theme , setTheme] = useState('light')
  return (
   <div>
    <h1>I am parent APP.jsx</h1>
    {/* <UserContext.Provider value={user}>
    <ChildA/> 
    </UserContext.Provider> */}


{/* 
    <themeContext.Provider value={{theme, setTheme}}>
      <ChildA/>
    </themeContext.Provider> */}


 <UserContext.Provider value={user}>
  
    <themeContext.Provider value={{theme, setTheme}}>
      <ChildA/>
    </themeContext.Provider>
    </UserContext.Provider>

 
<h1>Selected theme: {theme}</h1>

       </div>
  )
}

export default App
export {UserContext}
export {themeContext}