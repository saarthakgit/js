// if 


// const username="sarthakW"
// if(username==="sarthakW"){
//     console.log("passed")
// }else{
//     console.log("fail");
// }

// const score = 200
// if (score>100){
//     let power = "fly"
//     console.log(`your power is: you can ${power}`)
// }


// short notation-- prevent using
// const balance = 100
// if (balance>500) console.log("rich")
//     else console.log("about to be rich");
const balance=100000
if(balance<500){
    if(balance<=0){
        console.log("please maintain minimum balance")
    }else{
        console.log("less than 500")
    }
}else if(balance==500){
    console.log("equal to 500");
}else if(balance>500){
    console.log("more than 500")
}else{
    console.log("Invalid request");
}
