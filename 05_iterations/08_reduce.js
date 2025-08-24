// reduce 
// useful in shopping cart
const nums = [1,2,3,4]
initialVal = 0
const total = nums.reduce((acc,currentVal)=>{ 
    console.log(acc,currentVal);
    
    return acc+currentVal },initialVal)
console.log(total);


// example
const cart = [
    {
        item : "course",
        price: 500
    },
    {
        item : "Keyboard",
        price : 5000
    },
    {
        item : "laptop",
        price : 57000
    }
]


// const myTotal = cart.map((item)=>{return item["price"]}).reduce((acc,currVal)=>(acc + currVal),0)
// console.log(myTotal);

const myTotal = cart.reduce((acc,item)=>(acc + item["price"]),0)
console.log(myTotal);
