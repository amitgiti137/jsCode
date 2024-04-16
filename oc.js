// Object
// const student={
//     fullname:"Raaka Hunter",
//     marks:86.5,
//     printmarks(){
//         console.log(`marks ${this.marks}`)
//     },
// };


// prototype
// const employee={
// calculateTax(){
//     console.log("tax rate is 10");
// },
// };

// or function can be like
// calculateTax1:function(){
//     console.log("tax rate is 10");
// }
//  const karanArjun={
//     salary:50000,
//  };
//  karanArjun.__proto__=employee; 

// Class and Object
// class ToyotaCar{
//     start(){
//         console.log("M ON");
//     };
//     stop(){
//         console.log("M OF");
//     };
//     setBrand(name){
//         this.Brand=name;
//     };
// };
// let Fortuner= new ToyotaCar();
// Fortuner.setBrand("Mercedis");
// let lexus=new ToyotaCar();
// lexus.setBrand("Tigor");

// Constructor
// class ToyotaCar{
//     constructor(name,kmpl){
//         console.log("creating the object");
//         this.Brand=name;
//         this.Mileage=kmpl;
//     }
//     start(){
//         console.log("M ON");
//     };
//     stop(){
//         console.log("M OF");
//     };
// };
// let Fortuner= new ToyotaCar("Honda City","20kmpl");
// console.log(Fortuner);
// let lexus=new ToyotaCar("Jaguar","18kmpl");
// console.log(lexus);

// Inheritance
// class person{
//     constructor(age,gender){
//         this.Age=age;
//         this.Gender=gender;
//     }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }
// class engineer extends person {
//     work(){
//         console.log("solve problem, build something");
//     }
// }
// class doctor extends person {
//     work(){
//         console.log("treat patient");
//     }
// }
// let eng = new engineer("26","Female");
// let doc = new doctor("29","Male");

// Super
// class person{
//     constructor(age,gender){
//         this.Age=age;
//         this.Gender=gender;
//     }
//     eat(){
//         console.log("Eat");
//     }
    
// }
// class engineer extends person {
//     constructor(name,branch,age,gender){
//         super(age,gender);
//         this.Name=name;
//         this.Branch=branch;
//     }
//     work(){
//         super.eat();
//         console.log("solve problem, build something");
//     }
// }
// let eng = new engineer("Amit","Mechanical Engineering","26","Male");












 