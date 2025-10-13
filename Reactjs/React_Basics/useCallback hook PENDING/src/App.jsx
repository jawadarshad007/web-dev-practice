
import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './Components/ChildComponents'

function App() {
    const [count, setCount] = useState(0)

  // function handleClick(){
  //   setCount(preValue => preValue+1)
  // }


  // So when you click the button and count updates → React re-renders → count changes → new version of handleClick is created → ChildComponents receives a new prop → it re-renders.
  // const handleClick = useCallback(()=>{
  //   setCount(count+1)

  // },[count])





// ✅ Now handleClick will never change between renders (always the same reference).
// ✅ If your ChildComponents is wrapped in React.memo, it won’t re-render unnecessarily.
    const handleClick = useCallback(()=>{
      setCount(preUpdatedValue=> preUpdatedValue+1)
    },[])



  return (
    <div>
      <div>
        Count: {count}
        <div>
          <button onClick={handleClick}>Increment</button>
        </div>
      </div>
          <br />
        <div>
          <ChildComponents buttonName="Click Me!" handleClick={handleClick}/>
        </div>
    </div> 
)}

export default App
