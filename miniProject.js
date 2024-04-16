let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score");
const cChoice=document.querySelector("#comp-choice");


const genCompChoice=()=>{
    const option=["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};
const draw=()=>{
    msg.innerText="Game Draw Play Again";
    msg.style.backgroundColor="blue";
};

const showWinner=(userwin)=>{

    if(userwin){
        userScore++;
        uscore.innerText=userScore;
        msg.innerText="You win";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        cscore.innerText=compScore;
        msg.innerText="You lose Play Again";
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log(userChoice);
    const compChoice=genCompChoice();
    console.log(compChoice);
    cChoice.innerHTML=`<img src="image/${compChoice}.png">`;
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userwin=true;
        if(userChoice==="stone"){
            userwin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userwin=compChoice==="scissors"?false:true;
        }
        else{
            userwin=compChoice==="stone"?false:true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

  