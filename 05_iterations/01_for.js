//  for loop
// firstly,index gets initialized, then if the condition is true, execution starts, and index is updated afterwards
for (let index = 0; index <= 10; index++) {
    const element = index; 
    // console.log(element);
     
}

// ctrl+d :: for duplicate

// Nested Loops
// for every one iteration of parent loop, child iterates 10 times
for (let i = 0; i <= 10; i++) {
   // console.log(`Outer Loop ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner Loop ${j} , Parent Loop ${i}`)
       // console.log(`${i}*${j} = ${i*j} `)
        
    }
}

const myArr = [1,22,3,44,5,66,7,88,9]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i] *10;
    //console.log(element);
    
    
}

// break and continue
for (let i = 1; i<100 ;i++ ) {
    console.log(i)
    if (i===20){
        break
    }
    
}

// continue skips the current condition

for (let i = 1; i<20 ;i++ ) {
    if (i===1){
        console.log("ONE HERE");
        continue
    }
    console.log(i)
    
}