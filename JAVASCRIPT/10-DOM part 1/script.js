// QS -- What is Window part ? who generated this ? 
// Window Object
/*The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
& is automatically created by browser.
It is a global object with lots of properties & methods */


/* We access all elements of HTML in JavaScript ---all elements of HTML convert to object in JavaScrpit and this 
special object is called DOM(Document object model) */
// why we use it?
/*When code is uploaded to servers, and later we want to change our HTML and CSS files, we use the **DOM** to make changes to the website at runtime. */
console.log("hello")
window.console.log("hello22222")
console.log(document.body) // its prints body code
// console.dir prints properties and methods of special objects like documents etc...       

document.title = "Updated title"
console.log(document.title)
console.log(document.body)
console.log(window)
document.body.style.backgroundColor = "brown"
// console.dir prints properties and methods of special objects like documents etc...
console.dir(window.document)    
// console.dir(document)    
console.dir(document.body)    
console.log(document.body)    
console.dir(document.body.childNodes[1])    
// Dynamic changes
document.body.childNodes[1].innerText = "updared text"
// DOM Manipulations
let variable =  document.getElementById("Hello");
console.dir(variable);


/* how i change text in html class using javaScript. 
 Select all elements with the class name "cl"
const elements = document.getElementsByClassName("cl");

Loop through the HTMLCollection and update the text
for (let i = 0; i < elements.length; i++) {
    elements[i].innerText = "Updated text in Class";
}
*/

// it returns html collections like arrays
let a =  document.getElementsByClassName("cl")
console.dir(a)
console.log(a)

let parahs =document.getElementsByTagName("p");
console.dir(parahs);

// agr in sab(getElementsByClass,id,tagName) ko aik sath use krna ho to hm modern level pa querySelector use krte hn
// syntax
// document.querySelector("id or class or  tag") it return first element 

let firstelement = document.querySelector("p");  // 1st element  
console.dir(firstelement)

// syntax
// document.querySelectorAll("id or class or  tag") it return node list(all elemwnts)
let all = document.querySelectorAll("p");  // all elements
console.dir(all);   

// to access Class in query selector
let firstclass = document.querySelector(".cl"); // 1st element
console.dir(firstclass)

let allclasses = document.querySelectorAll(".cl"); // all elements
console.dir(allclasses);


// to access ID in query selector
let firstid = document.querySelector("#Hello"); // 1st element
console.dir(firstid);

// ID ka case ma querySelectorAll ya sense nai banata

// see manipulation in Notes
console.log(firstid.tagName);

console.dir(document.body.firstChild);   
// to access childerns of a element
console.dir(document.querySelector("div").children);


// Node: firstChild property
// returns the node's first child in the tree, or null if the node has no children.
console.dir(document.querySelector("#para-01").firstChild)

let div1 = document.querySelector("div").innerText;
console.dir(document.querySelector("h3").innerHTML = "New dtata")
console.dir(document.querySelector("h3").innerHTML = "<i>New dtata</i>")

let div2 = document.querySelector("div").innerHTML;
// change the content in the element
let div3 = document.querySelector("div").textContent="abcd";
console.dir(div3)

// let heading = document.querySelector("h1").innerText = "New Heading"
// let heading = document.querySelector("h1").innerHTML = "<i>New Heading</i>"
// textContent this even hidden element content
let heading = document.querySelector("h1").textContent;
console.dir(heading)