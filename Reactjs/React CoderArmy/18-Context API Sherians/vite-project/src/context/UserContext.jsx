import React, { createContext } from 'react'

export const userDataContext = createContext();
// createContext() ek Context object create karta hai.

const UserContext = (props) => {
     const user = "Jawad"   
    
  return (
   <>
   <userDataContext.Provider value={user}>
    {/* Provider un components ko context data provide karta hai jo iske andar render hote hain. */}
   {props.children}
   </userDataContext.Provider>
   </>
  )
}

export default UserContext