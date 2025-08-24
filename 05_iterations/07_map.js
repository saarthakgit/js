// map callback function
// also returns array with elements that are not just true but also false wrt the condition
const nums = [1,2,3,4,5,6,7,8,9,10]
//const resultStore = nums.map( (num)=> num+10)


// chaining
const resultStore = nums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>20)
console.log(resultStore);