// for of - works on array/string i.e any iterable  (objects are not iterable)
// [{},{},{}] -- very common pattern

const arr = [11,2,33,4,55]
for (const element of arr) {
    // console.log(element);
}

const name = "Sarthak Chauhan"
for (const letter of name) {
    if (letter === " "){
        continue
    }else{

        // console.log(letter);
    }
    
}

// Maps
const map = new Map()
// map.set("IN", "+91")
map.set("IN", "India")
map.set("UP", "Uttar Pradesh")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key + " and value is: " + value);
    
    
}

// const myObj = {name : "sarthak",
//     class : 1,
//     term : "24f"
// }
// for (const  of myObj) {
//     console.log();
    
// }  OBJECTS NOT ITERABLE VIA FOROF

