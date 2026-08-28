// Js introduced in 1995
alert("Hello");
console.log("Code is Running")
console.log("Code is also Running")
console.log("Code is Looking a WOW")
var a=prompt("Enter Ur number")
var istruee = confirm("Are u sure to leave this page and blast your computer")
if(istruee){
    console.log("Ur Computer is blasting")
}
else{
    console.log("Ur Computer is not blasting")

}
console.log("Your number is " + a)







// This video serves as an introductory deep dive into JavaScript, exploring its origins, its necessity in modern web development, and how it functions behind the scenes.

// Why do we need JavaScript?
// Static vs. Dynamic: While HTML and CSS provide structure and styling (1:55-2:45), they lack the ability to perform logical tasks or handle user interactions, such as calculators or button clicks (2:47-3:30). JavaScript acts as the "brain" of a website, enabling interactivity (4:00).
// The Browser Environment: Browsers act as execution engines (5:00-5:35). While they understand HTML and CSS, they require a specific runtime for JavaScript to function (6:09-6:31).
// The Historical Necessity of JavaScript (1995)
// Rather than using powerful languages like C++, JavaScript was created to solve specific web constraints:

// Ease of Learning: It needed to be accessible to web developers who were already comfortable with HTML (9:12-10:22).
// Security: Running C++ in a browser could have been a security nightmare, potentially allowing malicious code to access local files, delete system data, or manipulate raw memory via pointers (13:20-17:50).
// Hardware Limitations: In 1995, PCs had limited resources (4-8MB RAM). JavaScript was designed to be lightweight and avoid the need for heavy, separate compilers (17:58-19:15).
// Automatic Memory Management: Unlike C++ (which requires manual memory allocation/deallocation via new and delete), JavaScript includes automatic garbage collection to prevent memory leaks and crashes (19:15-21:10).
// How JavaScript Runs






// 🧑‍💻 Compiler
// Compiler poore code ko ek saath translate karta hai machine language mein, phir program run hota hai.
// 🗣️ Interpreter
// Interpreter code ko line-by-line execute/translate karta hai.


// Compiler converts code into machine language, which is understood by the computer's CPU(system)
// Engines: Browsers use engines like V8 (for Google Chrome) or SpiderMonkey (for Firefox) to execute JavaScript (25:19-26:52).
// The V8 Engine: It is essentially a piece of software written in C++ machine code  and executes JavaScript code (27:26-28:38).
//ya jo machine code hota ha ya machine independent hota ha , windows, mac, linux sab ma different hota ha . even ka 32 but ka bhi 64 bit sa different hota ha . 
// is lia jab bhi app browser download karte ho to us ma different version hota ha

// Node.js: By taking the V8 engine out of the browser and into the local system, Node.js allows developers to run JavaScript code directly on their machines outside of a browser environment. Ya JS ka runtime environment ha mean jo JS ko execute kr skhata ha. (41:40-43:46).









 // Notes link
// https://app.notion.com/p/Introduction-to-Javascript-2763a78e0e22809db99af584c1c5c6ec