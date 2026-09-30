// Dates 

let myDate = new Date();

// console.log(myDate.toString()); // convert into digital number into string

// console.log(myDate.toDateString()); // convert into date and string day and month date and year is number from

// console.log(myDate.toLocaleDateString()); // convert dates into number and regular form



// let myCreateDates = new Date(2026,9,30,7,37); /// simple all dates format like date time all
// console.log(myCreateDates.toLocaleString());

// let myCreateDates = new Date("2023-02-14")
// console.log(myCreateDates.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreateDates.getTime());

// console.log(myCreateDates.getMonth());

let myTimeStamp = Date.now();

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1);

console.log(newDate.getDay());

newDate.toLocaleString('defualt',{
    weekday:"long"
})

