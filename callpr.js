// Asynchronous
// let hello=()=>{
//     console.log("Hello this is me");
// }
// setTimeout(hello,5000);

// function hellow(){
//     console.log("Hellow this is me!");
// }
// setTimeout(hellow,10000);

// console.log("set 1")
// setTimeout(()=>{
//     console.log("this is hello from me");
// },5000);
// console.log("set 2")


// Callback
// let sum=(a,b)=>{
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(24,26,sum);

// calculator(15,35,(a,b)=>{
//     console.log(a+b);
// })
// setTimeout(()=>{
//     calculator(14,20,sum)
// },3000);


// let hello=()=>{
//     console.log("Hello this is me");
// }
// setTimeout(hello,5000);

// callback hell
// setTimeout(()=>{
//     calculator(9,14,(a,b)=>{
//         console.log(a+b);
//     });
// },7000);

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//         getNextData();
//         }
//     },1000);
// }
// getData(201,()=>{
//     getData(202,()=>{
//         getData(203,()=>{
//             getData(204)
//         })
//     })
// })

// promises
// let pro=new Promise((resolve,reject)=>{
//     console.log("this is promise");
//     resolve("ho gya promise pura");
// })
// console.log(pro);

// function getData(dataId,dataId1){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{    
//         console.log("data",dataId);
//         resolve("got the data successful");
//         if(dataId1){
//             dataId1();
//         }
//         },6000);
//     });
// }
// // let get=getData();
// getData().then((res)=>{
//     console.log(res);
// })

// function fun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1",);
//             resolve("got the data1 successfully");
//         },4000);
//     });
    
// }
// function fun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("got the data2 successfully");
//         },4000);
//     });
// }

// console.log("fetching data1...");
// let f1=fun1();
// f1.then((res)=>{
//     console.log(res)
//     console.log("fetching data2...");
//     let f2=fun2();
//     f2.then((res)=>{
//     console.log(res)
// })
// })

// console.log("fetching data1...");
// fun1().then((res)=>{
//     console.log("fetching data2...");
//     fun2().then((res)=>{})
// })

// console.log("fetching data1...");
// fun1().then((res)=>{
//     console.log(res);
//     console.log("fetching data2...");
//     return fun2();
// })
// .then((res)=>{
//     console.log(res);
// })

// function getData(dataId,dataId1){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{    
//         console.log("data",dataId);
//         resolve("got the data successful");
//         if(dataId1){
//             dataId1();
//         }
//         },6000);
//     });
// }

// getData(56).then((res)=>{
//     console.log(res);
//     getData(38).then((res)=>{
//         console.log(res);
//         getData(98).then((res)=>{
//             console.log(res);
//         })
//     })
// })

// getData(45)      //in case of printing  result in the last
// .then((res)=>{
//     return getData(78);
// })
// .then((res)=>{
//     return getData(69);
// })
// .then((res)=>{
//     console.log(res);
// })

// async-await

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather forecast");
//             resolve(200);
//         },3000)
//     })
// }

// async function getWeather(){
//     await api();
// }
// console.log(getWeather());


// function getData(dataId,dataId1){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{    
//         console.log("data",dataId);
//         resolve("got the data successful");
//         if(dataId1){
//             dataId1();
//         }
//         },6000);
//     });
// }

// async function getdt(){
//     await getData(45);
//     await getData(23);
//     await getData(98);
// }
// console.log(getdt());

// IIFE
// (async function(){ 
//     await getData(45);
//     await getData(23);
//     await getData(98);
// })()

















   