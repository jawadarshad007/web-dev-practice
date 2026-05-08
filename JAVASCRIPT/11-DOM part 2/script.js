

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






// add new element
let newh2 =  document.createElement("h2")
// now add text and id
newh2.textContent = "Text by new element";
newh2.id = "newh2id"
console.log(newh2)
document.querySelector(".New").after(newh2);


let newh3 = document.createElement("h3")
newh3.textContent = "Bakra Eid is on 27May2026"
newh3.id = "newh3id";
// to add multiple classes to single element
newh3.classList.add("newh3class")
newh3.classList.add("newh3class2")
console.log(newh3)

newh3.style.backgroundColor = "brown"
newh3.style.color = "pink"
newh3.style.fontSize = "25px"


document.querySelector("#newh2id").before(newh3)

// to remove class from element
newh3.classList.remove("newh3class2")


// getAttribute gives the value of attribute
console.log(newh2.getAttribute("id"))
console.log(newh3.getAttribute("class"))

// setAttribute( attr, value ) //to set the attribute value
newh3.setAttribute("hello", "world")
console.log(newh3)
console.log(newh3.getAttribute("hello"))



let list = document.createElement("li");
list.textContent = "Milk";
let list2 = document.createElement("li");
list2.textContent = "Cake";
let list3 = document.createElement("li");
list3.textContent = "Halwa";
let list4 = document.createElement("li");
list4.textContent = "Butter ";

let unorderedList = document.querySelector("#listing")
unorderedList.append(list);
unorderedList.append(list2);
unorderedList.prepend(list3);

// list.after(list4);

console.dir(unorderedList)
console.log(unorderedList.children)
unorderedList.children[1].after(list4)




// Now lets see real world example where you recieve a long length array , and you put the data of the array in ordered list. 



// this method is not optimied , beacuse we update UI on each iteration, and it is not good for performance.    
let array = ["Bicep", "Tricep", "Chest", "Shoulders"];
// let orderedList =  document.getElementById("orderList");
// for (let element of array){
//     let list = document.createElement("li")
//     list.textContent = element
//     orderedList.append(list);
// }



// Optimize way with fragment
let fragment = document.createDocumentFragment() // it is a virtual node which is not part of DOM, and we can use it to improve performance by reducing the number of reflows and repaints.
 let orderedList =  document.getElementById("orderList");
for (let elements of array){
    let list = document.createElement("li")
    list.textContent = elements
    fragment.append(list)
}
orderedList.append(fragment)


// Optimize way(WithOut fragment) , idr hm UI ko aik sath update kr rahn hn 
// let orderedList =  document.getElementById("orderList");
// let listItems = [];
// for (let elements of array){
//     let list = document.createElement("li");
//     list.textContent = elements;
//     listItems.push(list)
// };

// // console.log(listItems)
// orderedList.append(...listItems)





// how to delete element
let deleteh1 = document.getElementById("toDelete")
 deleteh1.remove(); 