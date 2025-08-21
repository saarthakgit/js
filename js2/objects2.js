// const User = new Object() -- singleton way

const User = {}
User.id = "1234oops"
User.name = "Altman"
User.isLoggedIn = false

// console.log(User);


// nested objects
const Student = {
    name : "Sam" ,
    parentsName : {
        Mother : "Reeta" ,
        Father : "Joe"
    },
    rollNo : 28
} 

// accessing all keys/values
// console.log(Object.keys(Student))
// console.log(Object.values(Student))

// check if a property (key) exists
console.log(Student.hasOwnProperty("name"));
console.log(Student.hasOwnProperty("nam"));


// console.log(Student["parentsName"]["Father"]);

// concatenate objects - create a new object and use spread op
// let merged = {...User,...Student}
// console.log(merged)

// Object.assign - another method to merge existing objects
// syntax - Object.assign{target,source1,source2....}
// returns a target object which has all sources merged and so, it it recommended to use {} an empty object as the target object.
// console.log(Object.assign({},User,Student))