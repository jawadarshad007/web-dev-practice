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




// Revied Practice on Events in JS by CODER ARMY









// function handleClick() {
//     let element =  document.getElementById("first")
//     element.textContent = "Text Changed Succesfully"
// }


// this is also not best way ....is ma ap multiple event listner nai laga skahte last wla uper wale ko overwrite kr da ga  beacuse onClick aik value ha object ma 
// let firsth1 =  document.getElementById("first")
//     firsth1.onclick = function handleClick(){
//         firsth1.textContent = "Text Changed Successfully"
//     }

//     firsth1.onclick = function handleClick(){
//         firsth1.style.backgroundColor = "Pink"
//     }






// Best way to apply Event to an element ..........is ma ap multiple event listner laga skahte ho without overwriting the previous one
// Because addEventListener aik method ha jo 2 parameters accept kr rha ha  
let firsth1 =  document.getElementById("first");
firsth1.addEventListener("click" , ()=>{
firsth1.textContent = "Text Changed Successfully"
})  


firsth1.addEventListener("click" , ()=>{
firsth1.style.backgroundColor = "green"
})

// add double Click event  
firsth1.addEventListener("dblclick" , ()=>{
firsth1.textContent =" U Double Clicked "
})  

// jab is element ma mouse hover ho
firsth1.addEventListener("mouseenter" , ()=>{
    firsth1.style.color = "pink"
})

// jab is element ma mouse leave ho ga
firsth1.addEventListener("mouseleave" , ()=>{
    firsth1.style.color = "yellow"
})


// is ka neche optimze way dia gya ha 
// let parent = document.getElementById("parent");
// console.log(parent.children)
// for (let child of parent.children){
//     child.addEventListener("click" , ()=>{
//         child.textContent = "I am Clicked"
//     })
// }



// Event Bubbling is a concept in which when an event is triggered on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
   let grandParent = document.getElementById("grandParent");
   // when event trigger it gives event object as parameter  ... is ka pass bth useful information hoti jaise ka x-axis(clientX) or y-axis(clientY) and many more
    grandParent.addEventListener("click" , (eventObj)=>{
        console.log(eventObj);
        console.log(eventObj.target) // target property se hume pata chalta hai ki event kis element par trigger hua hai
         console.log("Grand Parent Clicked")
    })

    let Parent = document.getElementById("parent2");
    Parent.addEventListener("click" , ()=>{
        console.log("Parent is Clicked")
    })

    let child = document.getElementById("child");
    child.addEventListener("click" , (eventObj)=>{
            eventObj.stopPropagation() // stopPropagation method se event bubbling ko stop kr skte ho
            // console.log(eventObj.target)
        console.log("Child Clicked")
    })



    // Ab app ko parents, children sab pr event listener lagane ki need nai ha , app sirf parent pr event listener lagao or eventObj.target se pata krlo ki event kis element pr trigger hua hai



// One of the optime way 
    // let parent = document.getElementById("parent");
    // parent.addEventListener("click" , (eventObj)=>{
    //     console.log(eventObj.target) 
    //     eventObj.target.textContent = "I am Clicked"  
    // })


    // Remove Event Listeners
    // agr app na is event listerner ko del bhi krna ho to 
    let parent = document.getElementById("parent");
    function handleEvent (eventObj){
        console.log(eventObj.target) 
        eventObj.target.textContent = "I am Clicked"  
        parent.removeEventListener("click" , handleEvent)
    }
    parent.addEventListener("click" , handleEvent)



