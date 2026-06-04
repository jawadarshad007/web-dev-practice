// const element = React.createElement("h1",{id:"title"},"Hello Coder Army");   
// const element = <h1 id="title">hello h1</h1>  // JS directly cant understand this 

// JSX: JavaScript XML -> Look like HTML
// Browsers don’t understand JSX directly. It gets converted into JavaScript using tools like Babel.
// TO Convert JSX to JS(React.createElement) we need to use Babel


// { <h1 id="title">hello I am h1</h1> }
//babel will convert above JSX code into below JS code
// React.createElement("h1",{id:"title"},"hello I am h1")  // this is JS
// pir above code React element(JS object) ma convert hoga
//{type:"h1",props:{id:"title",children:"hello I am h1"}}  // this is React element(JS object)
// than ya React element(JS object) DOM ma convert hoga and browser ma show hoga




const element1 = <h1 id="title" className="first">hello I am first h1</h1> // this is JSX
//When you write code in multiple lines, you need to wrap it in parentheses. It is a Good practice.
const element2 = (<div>
            <h1>Hello i am h1</h1>
            <h2>Hello i am h2</h2>
        </div>)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element1)
root.render(element2)    


// React Component --> It is a function or class that returns a React element(JSX) , here first word of function name must be capital.(Takke wo differentiate kr ske normal html tag sa and hamre custom component sa)
function MyComponent(name){
    // by using curly brackets , app wahn JS ka kasi bhi expression ko likh skate hn
    // ap is curly brackets ma text,element,numbers,string,array likh sakhte hn
    // but object nai likh skahte(throw Error) because JS dont know how to display objects

    const isLoggedIn = false;
    return <h1>Hello I am MyComponent, and My name is {name}, and also {10+30}, and also {<h2>I am h2</h2>}...and also {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly Sign In</h2>} </h1>
}
const root2 = ReactDOM.createRoot(document.getElementById("root"))
root2.render(MyComponent("Jawad"))
// and app is ko ase bhi call kr skate hn 
root2.render(<MyComponent/>)






const courses = ["React","Angular","Vue"];
const elemennt = (<ul>
    {courses.map(course=><li>{course}</li>
    )}
    </ul>)

const root3 = ReactDOM.createRoot(document.getElementById("root"))
root3.render(elemennt)



// Here this function recieve multiple arguments , ise ko hm props kehte hn, and props is an object which contain all the arguments which we pass in function call
// like this
// props = {
//     name:"Jawad",
//     age:23
// }
function App(props){
    return  <h1 id="ggg" style={{backgroundColor:"orange"}}>HEllo Coder Army my name is {props.name} and my age is {props.age}</h1>
}

// to pass arguments
// idr app ki arguments html ka element ki trah bnte hn ...key value pair ki form ma pass krte hn, and ye key value pair props object ma store ho jata hai
let ele =  <App name="Jawad" age={23}></App>
const root4 = ReactDOM.createRoot(document.getElementById("second"))
root4.render(ele)







//-------------------Small Project -------------------
function Header(props){
    return (
        <h1>Welcome {props.name} to Pakistan Election Commission</h1>
    )
}

//const props= {
// user :{
    // name:"Jawad",
    // age:23,
    // city:Lahore
//}
//}
function Main({user}){
    return (
        <>
        <h2>This is information about us</h2>
        <h2>Hi {user.name}</h2>
        <h2>{user.age>18? "Eligible to vote":"Not eligible to vote"}</h2>
        <p>Your city is {user.city}</p>
        </>
    )
}




function Footer(){
    return (
        <h3>Thank you for visiting our website</h3>
    )
}

function App2(){
    return (
        // ya single element hi return krta ha is lia is ko empty fragment ma wrap kia ha
        <>
        <Header name="Jawad"></Header>
        <Main user={{name:"Jawad",age:23,city:"Lahore"}}></Main>
        <Footer></Footer>
        </>

    )
}

const miniProject = ReactDOM.createRoot(document.getElementById("project"))
miniProject.render(<App2/>)