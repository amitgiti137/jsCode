// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);    
// };


// let box=document.querySelector(".box");
// box.onmouseover=(evt)=>{
//     console.log("box is entered");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// };


// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     console.log("this is handler1");
// });
// const hand2=()=>{
//     console.log("this is handler2")};
// btn1.addEventListener("click",hand2);
// btn1.addEventListener("click",()=>{
//     console.log("this is handler3");
// });
// btn1.addEventListener("click",()=>{
//     console.log("this is handler4");
// });
// btn1.removeEventListener("click",hand2);
 

// let tdbtn=document.querySelector("#tdbtn");
// let currMode="light";
// tdbtn.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark"
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// })


let tdbtn=document.querySelector("#tdbtn");
let body=document.querySelector("body");
let currMode="light";
tdbtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark"
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})