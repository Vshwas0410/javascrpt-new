const mySym=Symbol("key1")
const JsUser={
    name:"Vishwas",
    FullName:"vishwas Singh",
    age:12,
    location:"Lucknow",
    email:"vishwas@gmail.com",
    [mySym]:"myKey1",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["FullName"]);
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);
// JsUser.email="Vishwas@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email="ninja@google.com"
// console.log(JsUser);
JsUser.greeting=function(){
    console.log("Hello Jsuser");//[Function(anonymous)]
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());