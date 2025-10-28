
import { useState } from 'react'
import './App.css'
import Child from './Components/Child'
import Panel1 from './Components/Panel1'
import Panel2 from './Components/Panel2'

function App() {
  const [name , setName] = useState('')
  const [panel1Active, setPanel1Active] = useState(true);
  const [panel2Active, setPanel2Active] = useState(true);
  return (
    <>
      <Child title="Card-1" name={name} setName={setName}/>
      <Child title="Card-2" name={name} setName={setName}/>
      <p>I am inside parent component and value of name is: {name}</p>
      <Panel1 panel1Active={panel1Active} setPanel1Active={setPanel1Active} setPanel2Active={setPanel2Active} />
      <Panel2 panel2Active={panel2Active} setPanel2Active={setPanel2Active} setPanel1Active={setPanel1Active}/>

    </>
  )
}

export default App
