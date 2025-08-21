const brands = ["milton","oliveware","tupperware","generic"]
const products = ["bottles","tiffins","copper-utensils"]
// brands.push(products) : push updates existing array
// console.log(brands[4][0])

// console.log(brands.concat(products)) : concatinating arrays and returns new array

// const everything = [...brands,...products]
// console.log(everything) :: concatinating using spread operator

// if we encounter a heavily nested array, to merge it all and have a single array we use FLAT
// let example=[1,2,[3,4],5,[5,6,[7,8,9,[10,11],99],100],101]
// let usable = example.flat(Infinity)
// console.log(usable);


// make array from anything
// let example = Array.from("sarthak")
// console.log(example)
// if making array is not possible then, returns empty array

// array from set of elements
let firstName = "Atmaram"
let middleName = "Tukaram"
let lastName = "Bhide"

console.log(Array.of(firstName,middleName,lastName))