const URL = "https://official-joke-api.appspot.com/random_joke";
// let promise=fetch(URL)
// console.log(promise);

// const getJoke = async () =>{
//     console.log("Fetching a joke...");
//     let responce= await fetch(URL)
//     console.log(responce);    
//     // console.log(responce.status);    
//     console.log("Response received from the server");

// }
// getJoke();  
// whats is AJAX?
// AJAX stands for Asynchronous JavaScript and XML. It is a technique used in web development to send and receive data asynchronously without refreshing the entire page. This allows for a more dynamic and responsive user experience.
// what is JSON?
// JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application as an alternative to XML.

let jokePara = document.getElementById("para");
let btn = document.getElementById("btn");
const getJoke = async () =>{
    console.log("Fetching a joke...");
    let responce= await fetch(URL)
    console.log(responce);    
    // to make data in readable format
    let data = await responce.json()
    // console.log(data);
    // console.log(data.setup);
    // console.log("Answer:");
    // console.log(data.punchline);
    jokePara.innerHTML = data.setup + " - " + data.punchline;
}
// getJoke();  
btn.addEventListener("click", getJoke);


// do the same work as above but using Proimises chain 
// but better way is to do with aysnc await
// function getJoke(){
//     fetch(URL).then((responce) =>{
//         return responce.json();
//     })
//     .then((data) => {
//         console.log(data);
//         jokePara.innerHTML = data.setup + " - " + data.punchline;
//     })
// }
// btn.addEventListener("click", getJoke);




// HTTP Verbs = https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods
// HTTP response status codes= https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
