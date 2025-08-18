let score;
// score = "33"
console.log(typeof score)
let convertedScore = Number(score)


// conversion:
// "33" => 33
// "33abc" => NaN 
// null => 0
// undefined => NaN
// true/false => 1/0

// typeof NaN => number

let IsLoggedIn = undefined
let Bool = Boolean(IsLoggedIn)
console.log(Bool)
console.log(typeof Bool)

// 1 and any other value which is not ZERO or NULL or undefined or a blank => true, else false.