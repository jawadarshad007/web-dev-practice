// const element = React.createElement("h1",{id:"title"},"Hello Coder Army");   
// const element = <h1 id="title">hello h1</h1>  // JS directly cant understand this 

// JSX: JavaScript XML -> Look like HTML
// Browsers don’t understand JSX directly. It gets converted into JavaScript using tools like Babel.
// TO Convert JSX to JS(React.createElement) we need to use Babel
const element = <h1 id="title">hello h1</h1> // this is JSX
const element2 = <div>
            <h1>Hello i am h1</h1>
            <h2>Hello i am h2</h2>
        </div>
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element1)
root.render(element2)