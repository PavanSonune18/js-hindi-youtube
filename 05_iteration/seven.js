//reduce function

// const myNums = [1,2,3,4];

// const mytotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc+currval;
// },0)
// console.log(mytotal)


// const myNums = [1,2,3,4];

// const mytotal = myNums.reduce((acc,currval)=> acc+currval,0)
// console.log(mytotal);


const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"Mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },

];

const result = shoppingCart.reduce((acc,item) => acc+item.price,0)

console.log(shoppingCart)