// let heroes=["Superman","Spiderman","Batman","Captain America","Thor","loki"];
// for(let hero=0;hero<heroes.length;hero++){
//     console.log(heroes[hero]);
// }

// let heroes=["Superman","Spiderman","Batman","Captain America","Thor","loki"];
// for(let hero of heroes){
//     console.log(hero);
// }

// let heroes=["Superman","Spiderman","Batman","Captain America","Thor","loki"];
// for(let hero in heroes){
//     console.log(heroes[hero]);
// }

// let heroes=["Superman","Spiderman","Batman","Captain America","Thor","loki"];
// let hero=0;
// while(hero<heroes.length){
//     console.log(heroes[hero]);
//     hero++;
// }

// let heroes=["Superman","Spiderman","Batman","Captain America","Thor","loki"];
// let hero=0;
// do{
//     console.log(heroes[hero]);
//     hero++;
// }while(hero<heroes.length);

// let stdmarks=[85,97,44,37,76,60];
// let sum=0;
// let avg;
// for(let marks=0;marks<stdmarks.length;marks++){
//     sum=sum+stdmarks[marks];
//     avg=sum/stdmarks.length;
// }
// console.log(avg);


// let stdmarks=[85,97,44,37,76,60];
// let sum=0;
// let avg;
// for(let marks of stdmarks){
//     sum=sum+marks;
//     avg=sum/stdmarks.length;
// }
// console.log(avg);

// let stdmarks=[85,97,44,37,76,60];
// let sum=0;
// let avg;
// for(let marks in stdmarks){
//     sum=sum+stdmarks[marks];
//     avg=sum/stdmarks.length;
// }
// console.log(avg);

// let stdmarks=[85,97,44,37,76,60];
// let sum=0;
// let avg;
// let marks=0;
// while(marks<stdmarks.length){
//     sum=sum+stdmarks[marks];
//     avg=sum/stdmarks.length;
//     marks++;
// }
// console.log(avg);

// let stdmarks=[85,97,44,37,76,60];
// let sum=0;
// let avg;
// let marks=0;
// do{
//     sum=sum+stdmarks[marks];
//     avg=sum/stdmarks.length;
//     marks++;
// }while(marks<stdmarks.length);
// console.log(avg);


// let prices=[250,645,300,900,50];
// let dcprice;
// for(let cp of prices){
//     dcprice=0.9*cp;
//     console.log(dcprice);
// }


// let price=[250,645,300,900,50];
// let i=0;
// for(let dcof of price){
//     let of=dcof/10;
//     price[i]=price[i]-of;
//     console.log(price[i]);
//     i++;    
// }


// let prices=[250,645,300,900,50];
// let i=0;
// for(let nprice of prices){
//     prices[i]=0.9*prices[i];
// console.log(prices[i])
// i++;
// }

// let prices=[250,645,300,900,50];
// for(let i=0;i<prices.length;i++){
//     // prices[i]=0.9*prices[i]; or
//     let off= prices[i]/10;
//     prices[i]-=off;
// }
// console.log(prices);

// let food=["chips","cold drinks","biscuit","tea"];
//     food.push("kurkure","lays");
//     console.log(food);


// let food1=["chips","cold drinks","biscuit","tea","kurkure","lays"];
// let fooddel=food1.pop();
// console.log(food1);
// console.log(fooddel);


// let food2=["chips","cold drinks","biscuit","tea","kurkure","lays"];
// console.log(food2.toString());
// console.log(food2);


// let marhero=["Iron man","Thor","Captain America"];
// let dchero=["Batman","Superman","Wonder woman"];
// let indhero=["Hanuman","Shaktiman","Krish"];
// let allhero=marhero.concat(dchero,indhero);
// console.log(allhero);
// console.log(marhero);


// let marhero=["Iron man","Thor","Captain America"];
// marhero.unshift("Ant man");
// console.log(marhero);


// let dchero=["Batman","Superman","Wonder woman"];
// let ddchero=dchero.shift();
// console.log(dchero);
// console.log(ddchero);


// let hero=["Iron man","Thor","Captain America","Batman","Superman","Wonder woman"];
// console.log(hero.slice(2,4));
// console.log(hero.slice());
// console.log(hero.slice(1));


let hero=["Iron man","Thor","Captain America","Batman","Superman","Wonder woman"];
// add
// hero.splice(3,0,"Hanuman","Shaktiman","Krish");
// console.log(hero);

// delete
// hero.splice(2,2);
// console.log(hero);

// replace
// hero.splice(2,2,"Hanuman","Shaktiman","Krish");
// console.log(hero);

// hero.splice(3);
// console.log(hero);

// hero.splice();
// console.log(hero);


let com=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
com.shift();
com.splice(1,1,"Ola");
com.push("Amazon");
console.log(com);

