//const user = {
    name:"Pavan",

    //welcomeMessage: function(){
        //console.log(`${this.name} , welcome to website`); // this keyword is current context ko refers karta he
        // console.log(this);
        
 //   }
//}
// user.welcomeMessage();
// user.name = "Jivan";
// user.welcomeMessage();
//console.log(this);


// const chai = function(){
//     let name = "Pavan"
//     console.log(this.name)
// }
// chai();


// Basic Arrow function

// const addTwo = (num1,num2) => {
//     return num1+num2;
// } 
// console.log(addTwo(8,6));

//implicit Arrow function means return keyword write karachi garaj nahi

// const addTwo = (num1,num2) => num1 + num2;

// console.log(addTwo(7,4));



//Immediately Invoked Function Expressions(IIFE)


(function chai(){
    console.log(`DB CONNECTION`);
})
();


( (name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})('Pavan');