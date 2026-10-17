import { useContext } from "react";
import {ProductContext} from "../App2"

function Cart(){

     const {cartItems} = useContext(ProductContext)
    return(
        <>
        <h1>Total Items in Cart: {cartItems}</h1>
        </>
    )
}
export default Cart;