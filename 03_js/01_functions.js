// Defining A function
// function sayMyName(){
//     console.log("SARTHAK CHAUHAN");
    
// }
// sayMyName : (without parenthesis, is a reference for that function)
// sayMyName() : execution

// values passed to function are Arguments and defined while declaring a function are called Parameters.

function add(num1,num2){
    return (num1+num2);
}
// function terminates after return, after that code is unreachable, if any.
// console.log(add(1,2))

function greeting(username = "user"){
    return `Hey! ${username}`
}
console.log(greeting("sarthak"))

// if you pass "no argument" to a function which asks for parameter, then it is taken as undefined. (unless default is specified)

console.log(greeting());
