// console.log("2">1); => true
// console.log("02">1); => true
// console.log(null>0); => false
// console.log(null==0); =>false
// console.log(0==null); =>false
// console.log(null==undefined); => true
// console.log(undefined == 0); => false
// console.log(""==false); => true
// console.log("1"==true); =>true
// console.log(null<undefined); =>false

// NULL:
// console.log(null==0); => FALSE
// console.log(null>0); => False
// console.log(null>=0 && null<=0) => ***TRUE*** because inequality and equality checks work differently. Inequality checks convert null to a number (0), whereas equality does not!

// strict check ===
// console.log(null===0); => FALSE
// console.log("2"===2); => FALSE

// strict check is more convinient and precise