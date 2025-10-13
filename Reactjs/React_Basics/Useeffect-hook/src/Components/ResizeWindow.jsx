import React, { useEffect, useState } from 'react'

const ResizeWindow = () => {
    const [windowWidth , setwindowWidth] = useState(window.innerWidth)
    const  [handleWidth , sethandleWidth] = useState(true);
    useEffect(()=>{
      let handleResize
        if (handleWidth){
         handleResize = () =>{setwindowWidth(window.innerWidth)}
        console.log("Event listener added")
        window.addEventListener("resize" , handleResize)
        }
        // Whenever handleWidth changes → React first runs the cleanup function (the return part), then runs the effect again.
        return ()=>{
        console.log("Event listener removed")

        window.removeEventListener("resize" , handleResize)
        }
    },[handleWidth])
    
  return (
    <div>
        <h1>Window Width: {windowWidth}</h1>
        <button onClick={()=>{sethandleWidth(true)}}>Activate-Window-width</button>
        <br /> <br />
        <button onClick={()=>{sethandleWidth(false)}}>Disabled-Window-width</button>
        
      
    </div>
  )
}

export default ResizeWindow
