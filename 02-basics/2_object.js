//const  tinderUser =new Object()
const tinderUser ={ id:"123abc",
               name:"Vishwas",
               isLoggedIn:false
}
// console.log(tinderUser);
const regularUser ={ email:"vishwas@gmail.com",
fullName:{
    userFullName:{
        firstName:"Vishwas",
         
            lastname:"Singh"}

         }
    }


//  console.log(regularUser.fullName.userFullName.lastname);
const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
//const obj3={obj1,obj2}
// console.log(obj3);
// const obj3=object.assign({},obj1,obj2,obj4)

// console.log(obj3);
const obj3={...obj1,...obj2}
// console.log(obj3);

const user=[{
    id:"12as",
    naam:"Vshwas"
},
{
    id:"12as",
    naam:"Vshwas"},
    {
        id:"12as",
        naam:"Vsas"},
        {
            id:"12as",
            naam:"Vs"}]
        //  console.log( user[3].naam);  
         console.log(Object.keys(tinderUser));
         console.log(Object.values(tinderUser));
         console.log(Object.entries(regularUser));
         console.log(tinderUser.hasOwnProperty('isLogged'));