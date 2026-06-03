// const element1 = document.createElement('h1');
// element1.textContent = 'Hello, World!';
// element1.style.color = 'blue';
// element1.style.fontSize = '24px';
// document.getElementById('root').append(element1);




// function createElement(tag,attributes,children){
//     const element = document.createElement(tag)
//     element.textContent = children;
//     // element.className = attributes.className;  // dont do it mannualy

//     for (let key in attributes){
//         if (key == "style"){
//             // copies the properties to one object to another object
//             Object.assign(element.style,attributes.style) // style is an object so we have to assign it mannually
//         }
//         else
//         element[key] = attributes[key]
//     }
//     return element; 


// }



// React aik JS ka object ha, jis ma various methods samil hn eg useState , useEfect .....
// AND React is a JS library.   

// Our custom React
// const React ={
//      createElement:function (tag,attributes,children){
//     const element = document.createElement(tag)
//     element.textContent = children;
//     // element.className = attributes.className;  // dont do it mannual

//     for (let key in attributes){
//         if (key == "style"){
//             // copies the properties to one object to another object
//             Object.assign(element.style,attributes.style) // style is an object so we have to assign it mannually
//         }
//         else
//         element[key] = attributes[key]
//     }
//     return element;     
// }
// }


// ReactDOM aik separate JS library ha .
// const ReactDOM = {
//     render : function (child,parent){
//         parent.append(child);

//     }
// }




//Original React
// const React = {
//     createElement:function(type,props,children){

//         // ise hm virtual DOM bhi kehte hn.
//     return {
//         type:type,
//         props:{
//             ...props,
//             children:children
//         }
//     }
// }

// }



//            React ya return kre ga 
// {
//     type:"h1",
//     props:{
//         children:"Hello Coder Army",
//         className:"element",
//         id:"first",
//         style:{fontSize:"30px",backgroundColor:"orange", color:"purple" }
//     }
// }



// const ReactDOM = {
//     render:function(ReactElement,parent){

//         parent.innerHTML = " ";
//         const element = document.createElement(ReactElement.type);

//         const {props}  = ReactElement;
//         for (let key in props){
//             if (key === "style"){
//                 Object.assign(element.style , props.style)
//             }
//             else if(key === "children"){
//                 element.textContent = props[key];
//             }
//             else{
//                 element[key] = props[key];
//             }
//         }
//         parent.append(element)
//     }
// }


const root = document.getElementById("root")

const element1 = React.createElement("h1", {className:"element",id:"first", style:{fontSize:"30px",backgroundColor:"orange", color:"purple" }},"Hello Coder Army")
const element2 = React.createElement("h2", {className:"element",id:"second"},"This is element 2")

// console.log(element1)
// root.append(element1,element2)   
// ReactDOM.render(element1,root)
// ReactDOM.render(element2,root)


// agr multiple elements show krwane hon
const div = React.createElement("div",null,element1,element2);
console.log(div)
// Modern Syntax for rendering
const root2 = ReactDOM.createRoot(root);
root2.render(div);  


// React is only responsible for UI part(how UI should look like). It creates lightweight JS objects that act as blueprint. It doesnot create DOM elements.

// ReactDOM is responsible for rendering the UI to the DOM. It takes the blueprint  elements from React  and renders them to the actual DOM. It also handles updates to the DOM when the state of the application changes.
// like document.createElement()



// Why React and ReactDOM are separate?
// React use in web, reactNative(mobile), and react-pdf (creating pdf) and many more. They all understand React but they all have different rendering engine. ReactDOM is only for web. So they are separate because they have different responsibilities and can be used independently in different environments.





