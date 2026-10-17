import { useContext } from "react";
import  {CounterContext} from "../App"

function Display(){

    // is values ma jo values behjn thi wo as a object aa rhn hn like
    // values : {count , setCount}
    // idr hme sirf count chahiya tha to hm na destructung kr li ha
    const {count}= useContext(CounterContext)

    return (
        <>
        <h1>I am display and my count is: {count}</h1>
        </>
    )
}
export default Display;