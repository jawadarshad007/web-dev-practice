// getAttribute( attr ) //to get the attribute value
let div = document.querySelector("div")
console.log(div)
let id = div.getAttribute("id")
console.log(id)
console.log(div.getAttribute("name"))
let p = document.querySelector("p") 
console.log(p.getAttribute("class"))

// setAttribute( attr, value ) //to set the attribute value
console.log(p.setAttribute("class", "new-class"))


// Style
// node.style
div.style.backgroundColor = "blue"
div.style.fontSize = "26px";
div.innerText="Text-changed"
// div.style.visibility = "hidden"


// Insert Elements contains 2-Steps 1)Create 2)add
let newbtn = document.createElement("button")
newbtn.innerText = "Click me!"
console.log(newbtn)
newbtn.style.backgroundColor = "red"
newbtn.style.color = "white"
// div.append(newbtn)  ///adds at the end of node (inside)
// div.prepend(newbtn) //adds at the start of node (inside)
// div.before(newbtn)  ///adds before the node (outside)
// div.after(newbtn)  ///adds after the node (outside)
document.querySelector("body").prepend(newbtn)


let newheading = document.createElement("h1")
newheading.innerHTML = "<i>I am new heading</i>"
document.querySelector("body").append(newheading)


// Delete Elemnet 
// node.remove( ) //removes the node
p.remove();



// practice QS
// Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.
// read classlist through mdn 
let i = document.querySelector("p")
console.log(i);
i.classList.add("addition")

