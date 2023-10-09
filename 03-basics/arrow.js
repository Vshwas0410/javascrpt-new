const user={
    username:"vishwas",
    price:999,
 welcomeMessage: function( ) {
  //  console.log(`${this.username},welcome to website`);
   // console.log(this);
 }

    
 }
 user.welcomeMessage()
 user.username="vishwa"
 user.welcomeMessage()
 //console.log(this);

 //Inside browser global object is window object


 /**************function  **********************/
//  function chai(){
//     let username="vishwas"
//     console.log(this.username);   ///output for this is undefined
//  }
//  chai()
// const chai = ()=>{
//     let username="vishwas"
//     console.log(this);
// }
// chai()
//const addTwo=(num1, num2)=>{
  //  return num1+num2
//}
//console.log(addTwo(3,4))//// ERxplicit return type
//const addTwo=(num1,num2)=> (num1+ num2)
const addTwo=(num1, num2)=>({username:"vishwas"})
//console.log(addTwo(3,4))    /****without wrapping we cannot return object *********/
/**With curly braces we will use return keyword & with braces we will not use return keyword  ******/

const myArray=[2,3,5,8]
myArray.forEach(()=>{})//myArray.forEach(function(){})
console.log(myArray);
    
