import { useContext, useState } from "react";
import {ProductContext} from "../App2"


function Product({item}){
    const [addToCart , setAddToCart] = useState(false)
    const {cartItems , setCartItems} = useContext(ProductContext)


    return(
        <>
        <div>
            <h1>Name: {item.name}</h1>
            <h2>Price: {item.price}</h2>
            {
                addToCart ? <button onClick={()=> {setAddToCart(false) , setCartItems((cartItems)=> cartItems-1)}}>Remove</button> 
                :
                 <button onClick={()=> {setAddToCart(true) , setCartItems((cartItems)=> cartItems+1)}}>Add</button>
            }
        </div>
        </>
        
    )
}
export default Product;