let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset');
let playAgainButton = document.getElementById('play-again-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.getElementById('msg');
let turn0 = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],  
    [6, 7, 8],
];


boxes.forEach((box)=>{
    box.addEventListener('click', () => {
    if (turn0) {
        box.innerText = 'X';
        turn0 = false;
    }
    else{
        box.innerText = 'O';
        turn0 = true;
    }
    box.disabled = true;
    count++;
    checkWin();   
})
});  


const checkWin = () => {
    for (let Patterns  of winPatterns)
    {
        let pos1Value = boxes[Patterns[0]].innerText;
        let pos2Value = boxes[Patterns[1]].innerText;    
        let pos3Value = boxes[Patterns[2]].innerText;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "")
            {
                if (pos1Value === pos2Value && pos2Value === pos3Value) {
                   showwinner(pos1Value);
                   return;
                }
            } 

        
    }
    if (count === 9) {
        showDraw();
    }
}

const showwinner = (value) => {
    msg.innerText = `Congratulations Winner is ${value}`;
    msgContainer.classList.remove('hide');
    disableboxes();

}

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let  box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableboxes();
    msgContainer.classList.add('hide');
}


const showDraw = () => {
    msg.innerText = `It's a Draw!`;
    msgContainer.classList.remove('hide');
    disableboxes();
}


resetButton.addEventListener('click', resetGame);
playAgainButton.addEventListener('click', resetGame);

