import { useState } from "react";
import Food from "./Food.jsx";



function List(){
    const [foodItems, setFoodItems] = useState(["Apple", "Banana", "Orange"]);
    function handleChange(){
        setFoodItems(["Grapes",...foodItems]);
    }
    return(
        <>
        <div style={{marginTop:"10px"
        }}>

        <button onClick={handleChange}>Increment Foods</button>
        </div>
        {/* // passing data from parent component to child component using props */}
        {/* <Food foods={foodItems} a="10"  /> */}
        <Food foods={foodItems}></Food>
        </>
    )
}
export default List;