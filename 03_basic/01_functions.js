function sayMyname(){
    console.log("Pavan");
}
// sayMyname();

//addTwoNumber

function addtwonumber(a,b){
    console.log(a+b);
}
//addtwonumber(85,23);

function addTwonum(a,b){
    console.log("Pavan");
    let result =  a+b;
    return result;
}
const result = addTwonum(5,6);
// console.log("Result: ",result);

// write program userloginMessage

function loginUserMessage(username){
    return `${username} just logined in`
}
// console.log(loginUserMessage("Pavan"));

function loginUserMessages(username = "Pavan"){
    if(username === undefined){ // yala as pn write karu shakto 
        return "Please enter a username";
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessages("Rahul"))


function calculateCartPrice(...num1){ // rest operator return array of value
    return num1 
}
console.log(calculateCartPrice(200,400,600));


let user = {
    username:"Pavan",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user);

// another method to pass object to function 

handleObject({
    username:"Jivan",
    price:456
})


const myArray = [200,300,400,500];

function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(myArray))