// function myFunction(msg,msg1){
//     console.log(msg,msg1);
// }
// myFunction("i am writting the messege","i am writting  the messege 1");


// function sum(x,y){
//     console.log(x+y);
// }
// sum(51,49);


// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let add=sum(51,49);
// console.log(add); //or
// console.log(sum(51,49));

// function mul(x,y){
//     return x*y;
// }
// // let add=mul(20,5);
// // console.log(add); //or
// console.log(mul(20,5));


// const arrowsum=(x,y)=>{
//     console.log(x+y);
// };
// arrowsum(10,20);


// const arrowmul=(x,y)=>{
//     console.log(x*y);
// };
// arrowmul(25,4);


// const arrowmul=(x,y)=>{
//     return x*y;
// };
// console.log(arrowmul(25,5));



// function countVowel(str){
//     let count=0;
//     for(const char of str){
//         if(
//             char==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++;
//             console.log(char);
//         }
//     }
//     // console.log(count);
//     return count;
// }
// console.log(countVowel("i am learning"));


// const cntvwlarr=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(
//             char==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++;
//             console.log(char);
//         }
//     }
//     return count;
// }
// console.log(cntvwlarr("inadia ia going to high"));


// let suphero=["shaktimaan","gangadhar","junior g","balveer"];
// suphero.forEach(function hero(sup){
//     console.log(sup);
// })

// let foodItems=["chips","biscuit","kurkure","cake","sweets"];
// foodItems.forEach((food,ind,ar)=>{
//     console.log(food,ind,ar);
// })

// let aru=[1,2,3,4,5,6,7];
// aru.forEach(function num(square){
//     console.log(square**2);
// })

// let aru=[1,2,3,4,5,6,7];
// let ans=aru.map(function num(square){
//     return square**2;
// });
// console.log(ans);

// let aru=[1,2,3,4,5,6,7];
// let ans = aru.map((square)=>{
//     return square**2;
// });
// console.log(ans);

// let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let even=num.filter((ev)=>{
//     return ev%2===0;
// })
// console.log(even);

// let num1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let odd=num1.filter(function ody(od){
//     return od%2!==0;
// })
// console.log(odd);


// let marks=[61,67,68,79,86];
// let avg;
// let sum=marks.reduce(function msum(res,cur){
//     return res+cur;
// })
// avg=sum/marks.length;
// console.log(avg);

// let marks1=[80,80,90,100,100];
// let avg1;
// let sum1=marks1.reduce((res,cur)=>{
//     return res+cur;
// })
// avg1=sum1/marks1.length;
// console.log(avg1);

// let marks=[87,93,64,99,86];
// let mark90plus=marks.filter((mark)=>{
//     return mark>90;
// })
// console.log(mark90plus);

// let marks=[87,93,64,99,86];
// let mark90plus=marks.filter(function markob(mark){
//     return mark>90;
// })
// console.log(mark90plus);

let arr=[];
let n=prompt("enter the value of n");
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((res,cur)=>{
    return res+cur;
})
console.log(sum);
let prod=arr.reduce(function mul(res,cur){
    return res*cur;
})
console.log(prod);