
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { createContext, useState } from 'react';


// here we produce Context
export const CounterContext = createContext()


function App() {
  
  // issue:
  // state vaiable ha jo ka Body ka child Counter.jsx ma ha count name ka , is state ko hm na Header ka child Display.jxs ha is ma bhi update krwana ha .
// Soluiton is State Lifting 
// jo state hm na Body ka child Counter.jsx ma banahi thi count name ki , ab wo hmm App.jsx ma banahn gyn taake ya sab ko share kr skahn , isse ko hm state lifting kahte hn , ka hn na state lift kr di ha 

// yahn pa hme aik issue face krna parh rha ha wo ha prop drilling , mean aik component sa dosare component ma and is sa 3sre component ma props pass ho rahn hn. Jis sa state change hone pr ya sab components render hn gyn 
// is issue ko hal krne ka lia ata ha Context API useContext Hook
//Context API is used for data centralization
//useContext hook ap ka lia context create kre ga , is ma 2 cheezen ate hn 
//  i) CreateContexxt ii) useContext
// useContext hme prop drilling sa bachata ha
// is ma hm data as a prop ki trah nai behjn gyn 

 const [count , setCount] = useState(0);    

  return (
    <>
      {/* <Header count={count}/> */}
      {/* <Body count={count} setCount={setCount}/> */}

      {/*  ab CounterContext ki provided values ka use tamam kr skahte hn */}
      {/* jis kisi ko ya values chahiye hn gyn wo useContet ko import krwa kaar kr skahte ha */}
      <CounterContext value={{count , setCount}}>
      <Header/>
      <Body/>
      <Footer/>
      </CounterContext>
    </>
  )
}

export default App
