// truthy and falsy values

const email = "user@xyz.com"
if (email){
    // console.log("email exists")
}else{
    // console.log("email does not exist");
    
}

// empty string is assumed to be a false value (falsy) , whereas a non empty string is assumed to be true (truthy)

// Falsy Values::
// false,0,-0,0n (bigint data type), null, undefined,NaN

// Truthy values::
// all except falsies-- 
// surprising: [],"0","false" (not an empty string) , " " , {} ,  function(){} : empty function


// check if an array or an object is empty

const myArr = []
if (myArr.length === 0){
    console.log("Empty Array");
    
}

const myObj = {}
if (Object.keys(myObj).length === 0 || Object.values(myObj).length === 0){
    console.log("EMPTY OBJECT");
    
}


