// for loops

// for(let i = 0; i <= 10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }
//console.log(element)

// for(let i=1;i<=10;i++){
//     console.log(`Outer loop value:${i}`)
// for(let j=1;j<=10;j++){
//     //console.log(`Inner loop value ${j} and inner loop ${i}`)

//     console.log(i+" * "+j+ " = " + i*j)
// }
// }

// let myArray = ["flash","batman","superman"]

// for(let i=0; i< myArray.length; i++){
//     const element = myArray[i];
//     console.log(element);
    
// }


//break and continue statement
// for(let i=0;i<=20;i++){ 
//     if(i == 5){
//         console.log(`Detected 5`)
//         break;                    // break statement are used to break the loops
//     }
//     console.log(`Value of i is ${i}`);

// }


// for(let i=0; i<=20;i++){
//     if(i == 5){
//         console.log("Detected 5")
//         continue;
//     }
//     console.log(`Value of i is ${i}`)

// }


// while loops

// let index = 1;
// while(index<=10){
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }


// let myArrays = ['flash','batman','superman']
// let indexs = 0;
// while(indexs<myArrays.length){
//     console.log(`Value of MyArray is ${myArrays[indexs]}`);
//     indexs = indexs+1;

//}

let score = 1;

do{
    console.log(`Score is ${score}`);
    score++
}while(score <= 10);