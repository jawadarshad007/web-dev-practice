// if we write inline events and JavaScript events , the priority goes to JavaScript code events


// node.event = ( ) => {
    //     //handle here
    //     }
    
let btn1 = document.querySelector("#btn1")
btn1.onclick = () => {
    console.log("Button 1 was clicked")
    let a = 25;
    a++;
    console.log(a)
    const bodyElement = document.querySelector("body");
    body.style.backgroundColor = "blue"

}

let div = document .querySelector("div")
div.onmouseover = () => {
    console.log("You are inside div")
     
}

// Events Objects 
let btn2 = document.querySelector("#btn2")
btn2.onclick = (evt) => {
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    // clientX and clientY is the position where the element locate 
    console.log(evt.clientX , evt.clientY)

}

//Events Listeners
// these are better way to handle event form the simple event handle way
// syntax
// node.addEventListener( event, callback )
// callback is a function which is pass as a argument to an other function.

let btnlast = document.querySelector("#eventlisteners");
    btnlast.addEventListener("click" , (evt) => {
        console.log("This button was clicked - by handler 1")
        console.log(evt.type)
    // console.log(evt.target)
    })
    btnlast.addEventListener("click" , (evt) => {
        console.log("This button was clicked - by handler 2")
        console.log(evt.type)
    // console.log(evt.target)
    })
    const handler_3 = () => {
        console.log("This button was clicked - by handler 3")
        console.log(evt.type)

    }

    btnlast.addEventListener("click" , handler_3)


    //remove event listerners
// syntax ---node.removeEventListener( event, callback)
btnlast.removeEventListener("click" , handler_3)


// Practice question
// let darkmode = document.querySelector("#darkmode")
// const body = document.querySelector("body");

// darkmode.addEventListener("click" , () => {
//     // document.style.body.backgroundColor = "blue"
//     body.style.backgroundColor = "#121212";
// })

//best way...
let darkmode = document.querySelector("#darkmode");
let currentmode = "light";
const body = document.querySelector("body");

darkmode.addEventListener("click" , () => {
    if(currentmode === "light"){
        body.style.backgroundColor = "#121212";
        body.style.color = "white";
        currentmode = "dark"
    }
    else {
        currentmode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
    console.log(currentmode)
});


// we can also do that in CSS

// let darkmode = document.querySelector("#darkmode");
// let currentmode = "light";
// const body = document.querySelector("body");

// darkmode.addEventListener("click" , () => {
//     if(currentmode === "light"){
//         currentmode = "dark";

//         body.classList.add("dark");
//     }
//     else {
//         currentmode = "light";
//         body.classList.add("light");
     
    
//     }
//     console.log(currentmode)
    
// })
// this shows keydown event of user every keypress in the input field
let inputField = document.getElementById("inputField");
let output = document.querySelector("#output");
    inputField.addEventListener("keydown", function(e) {
        output.textContent = `You pressed: ${e.key}`;
    });








