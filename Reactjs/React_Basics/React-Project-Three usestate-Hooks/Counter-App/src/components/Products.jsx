import React from 'react'
import "./UseState"


// here wo do Destructing 
const Products = ({name , model , color , data}) => {
  return (
    <div>
      <h2>Product Description</h2>
      <p>Name:{name}</p>
      <p>Model:{model}</p>
      <p>Colour:{color}</p>
      <p>{data}</p>       
    </div>  
    
  )
}

export default Products
