// const name = "   sarthak   "
// const score = "100"
// // console.log(name+score)
// // better way to use strings-backticks
// console.log(`We can use backticks which is a better option to use a string ${name}:${score}`);

// console.log(name.toUpperCase())
// console.log(name.charAt(6))
// console.log(name.indexOf("s"));
// console.log(name.trim())
// const newname=name.replace("s","S")
// console.log(newname);
const cars = "civic-cruze-polo-vento-rapid"
let carlist=cars.split("-")
console.log(carlist[2])

// Explicitly define strings- copy paste this in browser console and you can see all methods under the prototype section
const myString = new String("dollar")
console.log(myString)