// Explicitly define numbers- copy paste this in browser console and you can see all methods under the prototype section

const score = new Number(96.33)
// console.log(score.toString()) : convert number to string

// console.log(score.toFixed(1)); : given number to decimal number with desired number of decimals
//const income = 12000000
//console.log(income.toLocaleString("en-IN"))

// to convert numbers to specific region format.

// +++++++++++++++++MATHS+++++++++++++++++++++++ //

// console.log(Math.abs(-5)) : gives the absolute value of any number passed (acts like mod)

// console.log(Math.round(6.7)) : gives rounded off value

// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.9)); : respectively round off forced to upper/lower value

// Random -- values belong to [0,1] 
console.log((Math.random()*10) + 1);
// create a custom range for this: Formula
const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max - min + 1))+min)
