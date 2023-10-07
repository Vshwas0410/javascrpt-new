const my_Arr= ["vishwas", "shubh", "neon"]
const heros= ["superman", "spiderman", "batman"]

// my_Arr.push(heros)

// console.log(my_Arr);
// console.log(my_Arr[3][1]);///not usefull


// my_Arr.concat(heros)
// console.log(my_Arr);  // notusefull
// const newHeros= my_Arr.concat(heros)
// const allHeros= [...my_Arr,...heros]
// console.log(allHeros);
// console.log(newHeros);
const another_Array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_Array.flat(Infinity)//all the number will print without any depth
console.log(real_another_array);
// console.log(Array.isArray("Vishwas"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name:"Hitesh"}));
// let score1=100
// let score2=200
// let score3=300
// console.log(Array.of(score1,score2,score3));