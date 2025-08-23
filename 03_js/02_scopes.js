// 2 types : Global and Local
// var :: declaring variable with "var" has scope issues!! -- accessible everywhere
// for example-
// if (true){
//     var c = 20
// }
// console.log(c);

function one(){
    const user = "sarthak"
    function two(){
        const website = "google.com"
        console.log(user)
    }
    // console.log(website) : cant access
    two()
}

// we can access variable => 
    // {
    //     defined here : inside the scope, even if used with nesting
    //     {
    //         but cannot access defined here outside of this scope
    //     }
    // }
    

//  in short, for now, understand that variables defined in parent scope are accessible in child scopes

// one()


// in if else:
if (true){
    const username = "sarthak123"
    if (username === "sarthak123"){
        website = "sarthak.io"
        // console.log(`${username} owns ${website}`);
        
    }
}

// ++++++++++++++interesting++++++++++++ //

// console.log(addOne(0)) -- does not throw error
function addOne(value){
    return value+1
}
// console.log(addOne(0)) -- no error

// another way to define function via variables
// this is sometimes called expressions
// console.log(addTwo(1)) -- throws error
const addTwo = function(value){
    return value+2
}
// console.log(addTwo(1)) -- works here

// So, difference is, when defined in a variable,a function cannot be accessed before initialization. Whereas, the other wat allows it.