// Qs. Create a H2 heading element with text - “Hello JavaScript”
// . Append “from Apna College
// students” to this text using JS.

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " from Apna College";
// console.dir(h2)
// do italic this text that is inside h2
let h2 = (document.querySelector("h2"))
console.dir(h2.innerHTML= `<i>${h2.innerText}   from apna Collage</i>`)

// (h2.style.fontstyle = "italic")
// console.dir(h2)



// Create 3 divs with common class name - “box”
// . Access them & add some unique text to each
// of them.
let div = document.querySelectorAll(".box")
// console.dir(div[0].innerText = div[0].innerText+ "some ")
let index = 1
for (i of div){
    i.innerText = "new data " +  index;
    index++;    
}