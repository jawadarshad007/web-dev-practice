import React from 'react'



// here wo do Destructing 
const Products = ({name , model , color }) => {
  return (
    <div>
      <h2>Product Description</h2>
      <p>Name:{name}</p>
      <p>Model:{model}</p>
      <p>Colour:{color}</p>
      
          
    </div>  
    
  )
}

export default Products
