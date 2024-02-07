let boxes = document.querySelectorAll(".box")
let restartBtn = document.querySelector("#restart")
let newBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

//player turns
let turn = true

//Winning patterns
let patterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

//reset game function
const resetGame = () => {
    turn=true
    enableBoxes()
    msgContainer.classList.add("hide")
}


boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turn==true){
            //player X
            box.innerText = "X"
            turn = false
        }
        else{
            //player O
            box.innerText = "O"
            turn = true
        }
        box.disabled=true
        
        checkWinner()
    })
})

const disableBoxes = () =>{
    for(let i=0;i<boxes.length;i++){
        boxes[i].disabled = true
    }
}

const enableBoxes = () =>{
    for(let i=0;i<boxes.length;i++){
        boxes[i].disabled = false
        boxes[i].innerText = ""
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () => {
    for(let i=0 ; i<patterns.length ; i++){
        let pos1 = boxes[patterns[i][0]].innerText
        let pos2 = boxes[patterns[i][1]].innerText
        let pos3 = boxes[patterns[i][2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1)
            }
        }
    }
}

newBtn.addEventListener("click",resetGame)
restartBtn.addEventListener("click",resetGame)