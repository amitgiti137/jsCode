const url="https://cat-fact.herokuapp.com/facts";
const parag=document.querySelector("#para");
const parag1=document.querySelector("#para1");
const btnn=document.querySelector("#btn");


// async function getFacts(){
//     console.log("getting data...");
//     let response=await fetch(url);
//     console.log(response);
// };

// or
// const getFacts1=async()=>{
//     console.log("getting data1...");
//     let resp=await fetch(url);
//     console.log(resp);
//     let jresp= await resp.json();
//     console.log(jresp[3].text);
//     parag.innerText=jresp[0].text;
//     parag1.innerText=jresp[1].text;
//     parag1.innerText=jresp[3].text;
// };

// btnn.addEventListener("click",getFacts1);
// btnn.addEventListener("mouseover",getFacts1);
// btnn.addEventListener("dblclick",getFacts1);

// through promise chain
async function get(){
    fetch(url).then((resp)=>{
        return resp.json();
    }).then((jresp)=>{
        console.log(jresp);
        parag1.innerText=jresp[3].text;
    })
}
btnn.addEventListener("dblclick",get);