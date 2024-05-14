let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let newGame = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let turnO =true; // playerX playerY 

// 2D array
const winning = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgCont.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO) { // player O
            box.innerText = "O";
            box.classList.add("green");
            turnO = false;
        } else { // player X
            box.innerText = "X";
            box.classList.add("red");
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winners) => {
    msg.innerText = `Congratulation, Winner is ${winners}`;
    msgCont.classList.remove("hide");
    disableBoxes();
};

const checkWin =() => {
    for(let win of winning) {
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        };
    };
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);