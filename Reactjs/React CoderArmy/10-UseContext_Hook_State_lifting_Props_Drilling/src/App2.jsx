import { createContext, useState } from "react"
import Body from "./Components2/Body"
import Header from "./Components2/Header"
import Footer from "./Components2/Footer"

export const ProductContext = createContext()


function App2(){

    const [cartItems , setCartItems] = useState(0)




    return(
        <>
        <ProductContext value={{cartItems , setCartItems}}>

        <Header></Header>
        <Body></Body>
        <Footer></Footer>

        </ProductContext>
        </>
    )
}
export default App2;