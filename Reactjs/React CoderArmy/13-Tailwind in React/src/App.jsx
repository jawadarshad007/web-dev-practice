import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl font-bold ' >Testing</h1>
      <h2 className='bg-amber-900'>Hello Guys</h2>
    </>
  )
}

export default App
