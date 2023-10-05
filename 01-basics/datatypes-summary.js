// 7 types :String (call by value), Number, Boolean, Null, Undefined, Symbol, BigInt

const score=100;
const scoreValue=100.3;
const isLoogedIn=false;
const outsideTemp=null;
let userEmail;
const id=Symbol('123')//Returns a new unique Symbol value.
const anotherId=Symbol('123')
console.log(id===anotherId);
//const bigNumber=354555841452414n


//Reference (Non Primitive)

//Array,objects, functions
 //Array
 const heros=["shaktiman","naagraj","doga"]
 let myObj={name:"hitesh",age:22}

 const myfunction=function(){
    console.log("Hello World");
 }
 console.log(typeof bigNumber);
 console.log(typeof scoreValue);
 console.log(typeof myfunction);
 console.log(typeof anotherId);