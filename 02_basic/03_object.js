// singleton

// object literals

const jsuser = {
    name:"Pavan",
    age:18,
    location:"Jaipur",
    email:"Pavan@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(jsuser.email);

// console.log(jsuser["email"]);

// console.log(jsuser.lastLoginDays);

// console.log(jsuser.location);

jsuser.email = "Jivan@google.com";

// console.log(jsuser.email);

// Object.freeze(jsuser)

jsuser.email = "Jiamn@google.com";
// console.log(jsuser.email);

jsuser.greeting = function(){
    console.log(`Hello Js user ${this.name}`);

}

console.log(jsuser.greeting());
