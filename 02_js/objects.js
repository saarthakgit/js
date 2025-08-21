// singleton
// Object.create

// object literals (not singleton)
const User = {firstName : "Sarthak",
    lastName : "Chauhan",
    age : 19,
    email : "sarthak@mycompany.com",
    isLoggedin : false

}
// keys here, are automatically understood as strings only

// console.log(User["firstName"]); :: use like string is mandatory
// console.log(User.firstName); :: not good practice

// Using SYMBOL as key in object
const iAm = Symbol("id")

const newOb = {song1:"azul",song2:"sirra",[iAm]:1234}

// console.log(newOb[iAm]);

// Modifying existing key's value
User["email"] = "sarthak@hiscompany.com"
// console.log(User);

// Object.freeze(User); :: freezes the object and thus no further changes are entertained.

// insert a function inside an object
User.greeting = function(){
    console.log(`Hello ${this.firstName}`)
}    

User.greeting();
// calling function from an object

// console.log(User); :: check

// if we do not set a return value in a function-and print it , it gives "undefined" as well