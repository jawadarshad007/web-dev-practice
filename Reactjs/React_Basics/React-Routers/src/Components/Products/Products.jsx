import React, { useState } from 'react'
import axios from 'axios'
import './Products.css'

const Products = () => {

    const [data, setData]= useState([])
   async function fetchData(){
    try{
        const responce = await axios.get("https://dummyjson.com/users")
    console.log(responce.data.users);
    setData(responce.data.users)
    }
    catch(err){
        console.log("Error from products fetching ", e.message);
    }
    }
  return (
    <div>
      Product page
      <br />
        <button onClick={fetchData}>Fetch Products</button>
         <br />
       {data && data?.map((item, index)=>{
        
        return  <h1 id='data'>{index}: {item.firstName}</h1>
    
       })}
    </div>
  )
}

export default Products
