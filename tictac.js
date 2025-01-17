let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");


let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [6,7,8]
]
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}





boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.classList.add("Ocolor");
            turnO=false;
        }
        else{
            box.innerText="x";
            box.classList.add("Xcolor");
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(wiNNer)=>{
    msg.innerText=`Congratulation, winner is ${wiNNer}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                showwinner(pos1Val);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);