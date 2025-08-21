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

// console.log(greeting());

// shopping cart problem (when we do not know what number of arguments will actually be passed)

function cartPrice(...num1){
    return num1
}
// console.log(cartPrice(200,300,500));
// "..." is called REST and SPREAD operator both, depending on the usecase.
// here, it is rest, the function returns an array of input values.

// Another method

function calcPrice(val1,val2,...num1){
    return num1
}
// console.log(calcPrice(200,300,500,1000,2000));
// here, first two values are taken up by val1 and val2, and rest are added to the array

// object handling
 function Objecthandler(para_object){
    // console.log(`Hello, this is object handled! by-${para_object.name},class-${para_object.class}`);
 }
Objecthandler({name:"Sarthak",class:"X-A"})


// Array handling
const arr = [1,2,3,4,5,9]
function secondval(arr_name){
    return arr_name[1]
}
// console.log(secondval(arr));
