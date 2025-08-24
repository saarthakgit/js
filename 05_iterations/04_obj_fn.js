// forin : working for iterating {objects}
// does not work with maps (not iterable)

const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swi : "swift"
}

for (const key in myObj) {
    if (Object.prototype.hasOwnProperty.call(myObj, key)) {
        const element = myObj[key];
        // console.log(element);
        
    }
}

for (const key in myObj) {
   // console.log(`${key} means ${myObj[key]}`);
}

// trying for-in on Arrays
const myArr = ["js","python","ruby","css"]
for (const index in myArr) {
        // console.log(index); :: returns index of values
    //console.log(`${index} index has value ${myArr[index]}`);
            
} 
