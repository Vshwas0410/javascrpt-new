//****Immediately Invoked function Expression ***********/
//function chai(){
   
   // console.log('DB connected');
//}
//chai()

(function chai(){
    console.log('DB connected');
})();
///***because of global scope pollution problem occurs may times so remove the global scope pollution we use iife*/

(function aurcode (){
    console.log('DB connected Two');
})();

/****for to going into next code we should put semicolon ****/
( ()=>{
    console.log('DB connected Two');
})();
((name)=>{
    console.log(`DB connected Two ${name}`);
})('hitesh')