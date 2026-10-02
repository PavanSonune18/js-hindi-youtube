


// let a = 300;
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;

//     console.log("INNER: ",a);
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a)


//Nested scope

// function one(){
//     const username = "Pavan";
    
//     function two(){
//         const website = "youtube";
//         console.log(username);
//             console.log(website);
//     }

//     two();
// }
// one();

// if (true) {
//     const username = "Pavan";
//     if(true){
//         const website = "youtube";
        
//         console.log(username+website);
//           console.log(website)
//     }
    
// console.log(username)

  
// }

// +++++++++++++++ Interesting ++++++++++++++++

function addone(num1){
    return num1+1;
}
const result = addone(90);
console.log(result)

const addTwo = function(num2){
    return num2+2;
}
 console.log(addTwo(8));



