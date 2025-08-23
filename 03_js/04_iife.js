// Immidiately invoked function expression [IIFE]

// problem arises when we have a nested function and some global scope variables are polluting the child function, so then we need to execute the child function immidiately. So that the pollution does not affect

// think this way-
function chai(){
    // NAMED IIFE
    console.log("Tea causes bloat")
}
chai();
// This is calling just after getting defined but wont save from the pollution. so,

(function fest(){
    console.log("fest causes net")
})();

// define function in parenthesis, and use parenthesis afterwards for immidiate execution

(function sum(n1,n2){
    console.log(n1+n2)
})(4,7);

// wrinting as arrow function
( ()=>{
    console.log("Hey , arrow function here! I am executed")
} )()

// iife functions, do not work simultaneously? in a single scope?
// NOOOO, actually iife's invoke but do not know where to stop the context, and so to properly end that we use ";" at the end of execution of a particular iife.