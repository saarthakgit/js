// "this" -- refers to current context
// console.log(this) -- returns empty object
const user ={
    username:"sarthak101",
    charges:899,
    message: function(){
        // console.log(this) -- prints the current context, i.e the OBJECT user
        return (`Hey! ${this.username}`)
    }
}

// console.log(user.message())
// user.username = "ashvin"
// console.log(user.message())

// console.log(this) -- returns empty object

//  if we run console.log(this) in browser console, we get
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …} :: browser's global object is window

function one(){
    console.log(this)
}
// one() -- when we run same command in function we get some considerable output
// "this" keyword cannot be used in accessing values from a function as we do in object

// ARROWWW
const arrow = ()=>{
    console.log(this)
}

// arrow() :: in arrow functions, "console.log(this)" returns empty object again

const addTwo = (n1,n2)=>{
    return n1+n2
}
console.log(addTwo(3,4))

// implicit return
const addTwonew = (n1,n2)=> ({answer:n1+n2})
console.log(addTwonew(3,4))

const obFn = ()=>({name:"brijesh bhati"})
console.log(obFn())
// if {} are used then, "return" must be used.
// how to return an object then?, simple! using ({}) object wrapped in parenthesis
