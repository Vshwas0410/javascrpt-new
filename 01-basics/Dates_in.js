// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate= new Date(2023,0,23,5)

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()//it shows the milisecond value 1 JAN 1970
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);// don't practice
console.log(Math.floor(Date.now()/1000));
let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getMilliseconds());


