// Primitive

// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

// const score = 100;
// const scoreValue = 100.3;

// const isloggidIn = false;
// const outsideTemp = null;

// let userEmail;


// const id  = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id=== anotherId);
// const bigNumber = 233552345645243145243n;


// // Reference (non primitive)
// //Array,Object,Function

// const heros = ["Pavan","harshad","Ayush","samarth"]
// let myobj = {
//     name:"Pavan",
//     age:22,

// }
// const myFunction = function(){
//     console.log("hello");

// }

// myFunction();



// let num1,num2,num3
// num1 = num2 = num3 = 2+2

// console.log(num1);

// let gameCounter = 100;
// ++gameCounter;
// console.log(gameCounter);


// +++++++++++++++++++++ Memory ++++++++++++++++++++++++++

// Stack,Heap two type of memory


// stack
let myYoutubename = "PavanSonunedotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

//heap

let userone = {
    email:"Pavan@gmail.com",
    upi:"user@ybl"
}

let usertwo = userone

usertwo.email = "jivan@gmail.com";

console.log(userone.email);
console.log(usertwo.email);


