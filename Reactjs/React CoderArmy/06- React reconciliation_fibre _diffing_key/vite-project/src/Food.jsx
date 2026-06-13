

// const   props ={
//     foods:["Apple", "Banana", "Orange"],
//     a="10"
// }



function Food(props) {
    return(
        <>
        <ul>
            {props.foods.map((food)=> <li key={food}>{food}</li>)}
            {/* here key is used to compare elements virtual DOM to copy of Vitual Dom
            Key must be a unique, but dont give key a index number ANd state key ka sath attach rahte ha*/}
            {/* And agr app childerns ko key nai provide kro ga than React position (index) ki bunyaad par match karne ki koshish karta hai.   */}
                </ul>
        </>
    )
}
export default Food;    