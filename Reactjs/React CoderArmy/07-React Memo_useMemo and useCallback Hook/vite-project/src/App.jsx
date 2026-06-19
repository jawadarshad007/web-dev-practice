import { useCallback, useMemo, useState } from 'react'
import Sum  from './Sum'
import Post from './Post'
import Homework from './Homework'


function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(100000)

  console.log("Check App render")


  // here issue is that jab jab counter ki value change ho gye, ya calculatePrime wla func bhi dobara call ho rha ha, ja ka bare heavy calulation perform kr rha ha, jo ka UI ma laag ka sabab bn rha ha
  
  
  // Solution is that to this func in useMemo(), useMemo() ap ka pechle value(number,string,array,object kuch bhi ho skahte ha) memorize kr leta ha  

  // function calculatePrime(){
  //   let total = 0;

  //   if(number>1)
  //     total++;

  //   for(let i=3; i<=number; i++){
  //      total++;
  //       for(let j=2; j<i; j++){
  //         if(i%j==0){
  //         total--;
  //         break;
  //         }
        
  //       }
  //   }
  //     return total;
  // }


  // ab ya calculatePrime() function ko useMemo() ma wrap kar do, ya ap ka pechla value memorize kar lega jo wo func return kre ga, aur jab jab ap ka dependency array pa parhe  number ki value change ho ga, tab tab hi ya dobara call ho ga, agr number ki value change nai ho gi to ya dobara call nai ho ga, ya ap ka performance improve kar de ga
  const totalPrime = useMemo(()=>{
      let total = 0;

    if(number>1)
      total++;

    for(let i=3; i<=number; i++){
       total++;
        for(let j=2; j<i; j++){
          if(i%j==0){
          total--;
          break;
          }
        
        }
    }
      return total;
  },[number])


  // Problem is that ka jab jab count ya number ki value change ho gye, to App function dobara render ho rha ha, dobara re-render hone pr wo ya function dobara create ho rha ha, at the end funciton aik object ha jo ka dobara create hone pr new memory la ga.

// function handleClick(){
//     console.log("Hello Ji!")
//   }

  //Solution is  useCallback() ma ap ka function pass kar do,useCallback() ap ka funciton ko memorize krta ha ,aur uska dependency array bhi pass kar do, jab jab ap ka dependency array ma parhe value change ho ga, tab tab hi ya dobara create ho ga, agr dependency array ma parhe value change nai ho gi to ya dobara create nai ho ga, ya ap ka performance improve kar de ga, ya ap ka function ko unnecessary re-render hone se bacha lega, aur ap ka UI ma lag ka issue solve kar de ga
  const handleClick = useCallback(()=>{
    console.log("Hello Ji!", count)
  },[count])




  const obj = useMemo(()=>{
    return {name:"Jawad", age:23}
  },[])


  // 
  // function justPass(){
  //   console.log("Just go to HomeWork component")
  // }
// har bar App() re-render hone pr ya funciton dobara create nai ho ga because of useCallback()
  const justPass = useCallback(()=>{
    console.log("Just go to HomeWork component")
  },[])




// Yaad rakho:
// React.memo → Functional Components ke liye
// useMemo → Value ko memoize karne ke liye
// useCallback → Function ko memoize karne ke liye




  return (
    <>
     <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Your current number: {number}</h2>
      <button onClick={()=> setNumber(number+500)} >Increment number</button>

      <h3>Total Prime Nuumbers: {totalPrime}</h3>

      <button onClick={handleClick}>Click</button>

      {/* Here issue is that ka jab jab App function render ho raha ha, wo apni  child component Sum function ko bhi dobara re-render krwa rha ha */}

      {/* Soution is to use React.memo in child component , ab child component apne parent component pa depend nai rhae ga , ab ya change tab ho ga, jab wo apne parent sa koi props wegra la ga, agr wo bhi constant rahe ga mean change nai ho ga , than bhi wo re-render nai ho */}

      {/* <Sum></Sum> */}

      {/*Idr bhi child component re-render nai ho ga, khoun ka prop ki value change nai ho rhae, idr React.memo virtual Dom and again created virtual DOM ma props ko compare kare ga  */}
    {/* Child only render when its props value actually chnages */}

      {/* <Sum number={1000} ></Sum> */}

      {/* idr ab child component re-render ho ga, jab jab is ka props ki value changes ho gye */}
      <Sum number={number}></Sum>


      {/* Ya count ya number ki value change hone pr bhi render ho raha ha, because hm na yahn pa object pass kia ha, and React object/array ka comparison refernce base pa krta ha na ka value base pa */}
      {/* jab first time virtual DOM bana , and count ki value change hoe to jo again copy bane virtual DOM ki is ma object new memory pa again bana, in donon ma React na object ko compare kia refernce base pa , beacasue of new memory of object , is lia ya bhi re-render ho raha ha  */}

      {/* <Post value={{name:"Jawad", age:23}}></Post> */}

      {/* here solution is to useMemo, jo ka across the re-render ap ki value yaad kr ka rkahta ha */}
      <Post value={obj} ></Post>



       {/* Ya count ya number ki value change hone pr bhi render ho raha ha, because hm na yahn pa Function pass kia ha, and React object/array/functions ka comparison refernce base pa krta ha na ka value base pa */}
      {/* jab first time virtual DOM bana , and count ki value change hoe to jo again copy bane virtual DOM ki is ma object new memory pa again bana, in donon ma React na object ko compare kia refernce base pa , beacasue of new memory function , is lia ya bhi re-render ho raha ha  */}
      <Homework justPass={justPass} ></Homework>
      {/* Here Solution is to use useCallBack(), jo ka across the re-render funciton ka reference yaad rakhta ha, and Component dobara re-render na ho is lia child component ko React.memo ma wrap kar do */}
      

      
    </>
  )
}

export default App
