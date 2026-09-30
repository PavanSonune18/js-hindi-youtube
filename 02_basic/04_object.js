//object


// let product = {
//     name:"Pavan",
//     age:22,
//     wheel:4
// }

// console.log(product.wheel);

// const tinderUser = new Object() // singleton object he

const tinderUser = {} // not singleton object he

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// const regularUser = {
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Pavan",
//             lastname:"Sonune"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// const obj3 = {5:"a",6:"b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);


// const obj4 = Object.assign(obj1,obj2,obj3); combine all object using the assing operator
// console.log(obj4);

// const obj4 = {...obj1,...obj2, ...obj3}
// console.log(obj4);


// const user = [
//     {
//         id:1,
//         email:"paramre155@gmail.com"
//     },
//     {
//         id:2,
//         email:"jamarpue255@gmail.com"
//     },
//     {
//         id:1,
//         email:"shrima355@gmail.com"
//     },
//     {
//         id:1,
//         email:"Rathur455@gmail.com"
//     },
//     {
//         id:1,
//         email:"shputut555@gmail.com"
//     },
//     {
//         id:1,
//         email:"mutrkute655@gmail.com"
//     }
// ]
// user[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn '));



//object destructuring

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// console.log(course.courseInsturctor);

const {courseInstructor} = course;
console.log(courseInstructor);


// api as like json object format
{
// "name":"hitesh",
// "coursename":"js in hindi",
// "Price":"free"
}

// api as like array format
// [
//     {},
//     {},
//     {}
// ]