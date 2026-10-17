import React, { useState } from 'react'
import Product from './Product';


function Body(){
    const [items , setItems] = useState([
        {id:1, name:"Milk", price:220},
        {id:2, name:"Egg", price:25},
        {id:3, name:"Almonds", price:800},
        {id:4, name:"Peanuts", price:500},
        {id:5, name:"Coconut", price:100}
    ]);

 

    return(
        <>
        <h1>I am Daraz.pk Body</h1>
        {/* <Counter /> */}
        <div style={{display:"flex" , gap:"50px"}}>
            {
                items.map((item)=> <Product key={item.id} item={item}></Product>)
            }
        </div>
        </>
    )
}

export default Body
