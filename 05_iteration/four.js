const coding = ["js","rb","java","python","c++"];

// coding.forEach( function (val) {
//     console.log(val);
    
// } )

// coding.forEach((item)=>{
//     console.log(item);
    
// })

const mycoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
     {
        languageName:"Python",
        languageFileName:"Python"
    },
]

mycoding.forEach((item) =>{
    console.log(`first one is Name ${item.languageName} second one is file = ${item.languageFileName}`);
    
})