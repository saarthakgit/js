// while loop

// while (true) {
//     console.log(
//         `Hey! this is Jarvis , just kidding , this is Javascript!`
//     );
//     let breaker = prompt("Break me if you can :>");
//     if (breaker == "I did"){
//         console.log("Oh no, you really did :/");
//         break
//     }
    
// }


// Works in browser, as prompt() is a function of window object and prompt is not defined in node

// using arrays
let myArr = ["ghana","ghats","meghalaya"]
i=0
while (i<myArr.length) {
    console.log(myArr[i]);
    i++
}

// DO WHILE
let score = 100
do {console.log(`scores are : ${score}`);
    score = score-10
} while (score>=50);