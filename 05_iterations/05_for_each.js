// foreach fetches items,index, and the array itself respectively. [in that order]

const coding = ["js","ruby","python","html","css"]
// for arrays, forEach is property -- callback function
coding.forEach( (item)=>{
    
    //console.log(item)
}  )


// other way: defining callback function arg explicitly
function printMe(arg){
    console.log(arg);
    
}

//coding.forEach(printMe)

coding.forEach( (item,index,theArray)=>{
    // console.log(`${item} is at index ${index}`);
    // console.log(theArray);
    
} )

// object in array
const myCode = [{
    langname : "js",
    langext : ".js",
    
},
{
    langname : "python",
    langext : ".py",

},
{
    langname : "html",
    langext : ".html",

},
{
    langname : "css",
    langext : ".css",

}]

myCode.forEach( (item)=>{
    console.log(item["langname"],item["langext"])
} )