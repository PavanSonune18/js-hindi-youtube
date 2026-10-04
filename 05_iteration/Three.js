//for of
//["","",""]
//[{},{},{}]

// Array in for of loops

// const arr = [1,2,3,4,5]

// for(const num of arr){
// console.log(num);
// }

// string in for of loops

// const greetings = "Hello world"
// for(const greet of greetings){
//     if(greet == " "){
//         continue;
//     }
//     console.log(`Each char is ${greet}`)
// }

//Maps = map() is the array method to create new array applying function to every element of the original array.

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set("IN","India")
//console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}


const myObjects = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apply";

}
for(const key in myObjects){
    console.log('');
}





















// const number = [1,2,3,4,5];

// const result = number.map((num)=>{
//     return num*2;
// })
// console.log(result);