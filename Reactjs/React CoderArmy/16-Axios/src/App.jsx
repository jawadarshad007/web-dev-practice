import axios from 'axios'
import React, { useEffect, useState } from 'react'


// API (Application Programming Interface) aik messenger ki tarah hoti hai jo do applications ko aapas mein communicate karne mein help karti hai.
// API frontend aur backend ke darmiyan communication ka zariya hoti hai.
// Frontend ma majority time data backend sa ata ha and wo JSON ki format ma hota ha 
// Two types ma backend sa zaida tr data ata ha 
// 1) SSR(Server Side Rendering)- agr backend sa pura ka pura HTML a jahe to isko hm bolte hn SSR
// 2) CSR(Client Side Rendering)  -Agr backend sa sirf JSON format ka data aa rha hn , ap isko process kr ka frontend pr show kr rahe hn to isko hm CSR bolte hn


// npm i axios

const App = () => {
  const [allData , setallData] = useState([])



  useEffect(()=>{

     async function getData(){
    // 1)In fetch response.json() likhna hota hai but  axios Automatically JSON parse karta hai
    // 2)fetch used for Simple API calls and axios used for Large apps and complex API handling
    // 3)Axios: HTTP error status codes ko automatically reject karta hai, jabke Fetch mein response.ok check karna hota hai.
    try{
      const responce = await axios.get("https://jsonplaceholder.typicode.com/users") 
      setallData(responce.data)
      console.log(responce)
    console.log(responce.data)
    }
    catch (error){
      console.log(error)
    }
    
  }
    getData()
  },[])

  return (
    <>
    {/* <button onClick={getData}>Get Data</button> */}

    {
      allData.map((ele , idx)=> {
          return <div key={idx}>
            <h1 >Name: {ele.name}</h1>
            <p>Address: {ele.address.street}</p>
          </div>
      })
    }
    </>
  )
}

export default App