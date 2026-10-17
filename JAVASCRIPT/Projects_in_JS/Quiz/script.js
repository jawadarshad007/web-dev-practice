const answer = {
    q1 : "Sachin Tendulkar",
    q2 : "West Indies",
    q3 :  "Sachin Tendulkar",
    q4 : "264",
    q5 : "Muttiah Muralitharan"
}
const form = document.querySelector("form")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let finalScore = 0
    const data = new FormData(form)
    for (let [name,value] of data.entries()){
        console.log(name , value)
        if (answer[name] == value){
            finalScore++;
        }
    }
    document.getElementById("out").textContent = `Your score is ${finalScore} out of 5`
    form.reset();
})