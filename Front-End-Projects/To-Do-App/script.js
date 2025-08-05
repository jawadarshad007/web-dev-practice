let inputBox = document.getElementById("input_box");
let listContainer = document.getElementById("list_container");
let addButton = document.getElementById("add_button");
addButton.addEventListener("click", addTask);
function addTask(){
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li =document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);   

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

       span.onclick = function(){
        li.remove();
       }
     }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); 