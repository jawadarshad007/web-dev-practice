import { useState } from "react";




function App(){
  // const [counter,setCounter] = useState(0);
  const [counter,setCounter] = useState([10,20,30]);


//  React performance improve karne ke liye Virtual DOM use karta hai. Virtual DOM asal mein UI ki ek lightweight JavaScript representation hoti hai.
//                                     Diffing:
// Jab bhi state ya props update hote hain, React ek naya Virtual DOM tree create karta hai aur usay purane Virtual DOM tree ke sath compare karta hai. Is process ko Diffing kehte hain.
//                                     Reconcilliation:
// Comparison ke baad React sirf un elements ko Real DOM mein update karta hai jin mein actual change aya ho. Is process ko Reconciliation kehte hain.
// Is wajah se React poora page ya poora DOM update nahi karta, balki sirf wahi hissa update karta hai jahan change hua ho.



// Diffing Algorithm:
// React check karta ha ki new Virtual DOM aur purane virtual ma kya difference ha. Is process ko Diffing kehte hain.




  
    console.log("Checking")


  function handleChange(){
    //React non-premetive data types jiase array ma change detect wo reference change hone par hota ha. Agar hum array ma directly change karte ha to React ko pata nahi chalta ki array ma change hua ha kyunki reference same rehta ha. Iseliye virtual DOM aur real DOM dono same rehte ha aur React ko pata nahi chalta ki array ma change hua ha.Is lia yahn wo re-render nahi hota
    // counter.push(40);
    // setCounter(counter); 


    // Its Solution
    setCounter([...counter,40]); // yahn hum spread operator ka use kar rahe ha jo existing array ke elements ko copy karta ha aur new array me  phir uske baad 40 ko add karta ha. Isse React ko pata chal jata ha ki array ma change hua ha kyunki reference change ho jata ha aur phir React re-render karta ha.
    
  }

  return (
    <>
    <h1>React Counter App:</h1>
    <p>Counter: {counter}</p>
    {/* <button onClick={()=>setCounter(counter+1)}>Increment</button> */}
    <button onClick={handleChange}>Increment</button>
    <button onClick={()=>setCounter(counter-1)}>Decrement</button>
    </>
  )
}
export default App;



// React Fibre:
// React Fibre is a reimplementation of the React core algorithm. It is designed to improve the performance and responsiveness of React applications by allowing React to break down rendering work into smaller chunks and prioritize them based on their importance. This allows React to update the UI more efficiently and provide a smoother user experience, especially in complex applications with many components.


// As we know JS is a single Treaded Language. Jase hi state change hoti ha to naaya virtual DOM bnta ha , age ise duran User na UI ma kuxh enter kia mean input field ma to single threaded hone ki waja sa JS naaya virtual DOM banane ma busy ho ga and UI theek sa update nai ho ga mean laggy feel ho ga.
// its Solution is React Fibre. React Fibre allows React to break down rendering work into smaller chunks and prioritize them based on their importance. This allows React to update the UI more efficiently and provide a smoother user experience, especially in complex applications with many components. React Fibre uses a technique called "time slicing" to allow React to pause and resume rendering work as needed, which helps to keep the UI responsive even when there are heavy updates happening in the background.  