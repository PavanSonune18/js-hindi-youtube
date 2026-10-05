//const coding  = ["js","ruby","Java","Python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
    
// })
// console.log(values)


//Basic filter function

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNums.filter((num)=> num > 4)
// console.log(newNum);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>{
//     return num > 5;
// })
// console.log(newNums);

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNum = []

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNum.push(num);
//     }
// })
// console.log(newNum)



const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'Non-Fiction',
        publish: 1995,
        edition: 2008
    },
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'Book Four',
        genre: 'Non-Fiction',
        publish: 2002,
        edition: 2010
    },
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'Book Six',
        genre: 'Fiction',
        publish: 1987,
        edition: 2003
    },
    {
        title: 'Book Seven',
        genre: 'Technology',
        publish: 2012,
        edition: 2016
    },
    {
        title: 'Book Eight',
        genre: 'History',
        publish: 2005,
        edition: 2011
    },
    {
        title: 'Book Nine',
        genre: 'Science',
        publish: 2015,
        edition: 2020
    }
];


// const userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks);


// const userBooks = books.filter((bk) => bk.publish >= 2000)
// console.log(userBooks)


const userBooks = books.filter((bk) =>{
    return bk.publish >= 1995 && bk.genre === 'History'
})
console.log(userBooks);
