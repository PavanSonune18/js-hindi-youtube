const marvel_heros = ["thor","Iroman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)// combine both array in one array

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);


// const allheros = marvel_heros.concat(dc_heros)// concat are used to create new array 
// console.log(allheros);



// const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]];

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


// console.log(Array.isArray("Pavan")); // this isArray function not convert into Array

// console.log(Array.from("Pavan")); // this from function convert into Array

// console.log(Array.from({name:"hitesh"})) // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
