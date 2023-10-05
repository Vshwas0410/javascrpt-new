const name="Vishwas"
const repoCount=50
//console.log(name+repoCount+"Value");// not a good practice
console.log(`Hello  name is ${name} and my repo count is ${repoCount}`);// good practice
const gameName=new String('hiteshhc')
//string is object
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));
const newString= gameName.substring(0,4);
console.log(newString);
const anotherString =gameName.slice(-5,4);
console.log(anotherString);
//substring always starts with zero
const newStringOne= "    vishwas    "
console.log(newStringOne);
console.log(newStringOne.trim());
const url="https://hitesh.com/vishwas%20.com";
console.log(url.replace('%20','-'));
console.log(url.includes('ankit'));
console.log(gameName.split('-'));