import { useState } from "react";




function App() {
  // let count =0;
  // function incrementCount(){
  //   count++;

  //   //Direct DOM Manipulation(Dont do this)
  //   const para =  document.querySelector("p");
  //   para.textContent = `Counter: ${count}` ;


  //   const button =  document.querySelector("button");
  //   button.textContent = `Increment: ${count}` ;
  //   // console.log(count)


  // }


 // Now do this by useState hook
     let [count, setCount] = useState(0)
      function incrementCount(){
        // count++;
   // setCount() is used to update the value of count and also re-render the component    
    // App is sa count ki value ko kr skahte ho, and App function ko re-render kr skahte ho.
        setCount(count+1);
      }

 
  return (
    <>
    <p>Counter: {count}</p>
    <button onClick={incrementCount}>Increment:{count}</button>
    </>
  )
}
export default App;



// Hooks :
//Hooks Are like powerfull funcitons