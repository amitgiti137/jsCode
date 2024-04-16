// let a=10;
// let b="10";
// a++;
// b--;
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);
// console.log("a+b=",a+b);
// console.log("a=",a);
// console.log("b=",b);
// console.log("a++",a++);
// console.log("a=",a);
// console.log("b--",b--);
// console.log("b=",b);
// console.log("++a",++a);
// console.log("a=",a);
// console.log("--b",--b);
// console.log("b=",b);
// a+=b;
// a-=b;
// a*=b;
// a/=b;
// a%=b;
// a**=b;
// console.log("a =",a);
// console.log(a<=b);
// console.log(a>=b && a===b);
// console.log(a>b || a===b);
// console.log(!(a===b));
// let age=18;
// if (age >= 18){
//     console.log("You are an adult");
// }
// else{
//     console.log("You are under 18");
// }
// let mode="dark mode";
// let color;
// if(mode==="dark mode"){
//     color="black";
// }
// if(mode==="light"){
//     color="white";
// }
// console.log(color);
// let age=18;
// let adult;
// if (age >= 18){
//     adult="YES";
// }
// else{
//     adult="NO";
// }
// console.log(adult);
// let num=9;
// let evenOdd;
// if(num%2===0){
//     evenOdd="Number is Even";
// }
// else{
//     evenOdd="Number is Odd";
// }
// console.log(num,evenOdd);
// let mode="green";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// else if(mode==="blue"){
//     color="blue";
// }
// else if(mode==="green"){
//     color="green";
// }
// else{
//     color="white";
// }
// console.log(color);
// let age="29"
// let ageGroup;
// if(age<18){
//     ageGroup="Junior";
// }
// else if(age>60){
//     ageGroup="Senior";
// }
// else{
//     ageGroup="Middle age";
// }
// console.log(age,ageGroup);
// let age=17;
// let ageGroup= age>18?"Adult 18+":"Not Adult";
// console.log(ageGroup);
// let age=27;
// age>18?console.log("Adult 18+"):console.log("Not Adult");
// let input=prompt("Enter the number");
// let mpl5;
// if(input%5===0){
//     mpl5="is multiple of 5";
// }
// else{
//     mpl5="not miltiple of 5";
// }
// console.log(input,mpl5);
let marks=prompt("Marks Obtained");
let grade;
if(marks>=90 && marks<=100){
    grade="A";
}
else if(marks>=70 && marks<=89){
    grade="B";
}
else if(marks>=60 && marks<=69){
    grade="C";
}
else if(marks>=50 && marks<=59){
    grade="D";
}
else if(marks>=40 && marks<=49){
    grade="E";
}
else if(marks>=0 && marks<=39){
    grade="F";
}
else{
    grade="Not define";
}
console.log("Marks Obtained",marks,"Grade",grade);
