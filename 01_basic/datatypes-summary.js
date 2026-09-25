// Primitive

// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isloggidIn = false;
const outsideTemp = null;

let userEmail;


const id  = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);
const bigNumber = 233552345645243145243n;


// Reference (non primitive)
//Array,Object,Function

const heros = ["Pavan","harshad","Ayush","samarth"]
let myobj = {
    name:"Pavan",
    age:22,

}
const myFunction = function(){
    console.log("hello");

}