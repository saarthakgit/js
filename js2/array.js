// array: being a non primitive data type, falls under "heap" memory category and thus, "shallow copies"{same ref point} are formed.
const arr = [1,2,3,4,5,7]
const names = ["sarthak","ashwin","virat","rudra"]
// each item is called ELEMENT
// arr.push(6) 
// names.push("salad")
// push works like append does in python
// console.log(arr)
// console.log(names)
// console.log(arr.pop()): last value deleted and returned
// arr.unshift(99) : adds element at "zero" index, causes all other array elements to relocate and thus increases load on machine.
// arr.unshift("cat")
// arr.shift() : removes element at zero index
// console.log(arr.includes(7))
// console.log(arr.indexOf(7))
// console.log(arr.at(5))
// console.log(arr.reverse())

// const newarr = names.join(" ") : returns string separated by " " comprising of elements in array
// console.log(newarr)

// INTERVIEW Q: slice vs splice
console.log("Before anything:" , arr)
// Slice: returns elements from specified range in the array excluding the end, does not modify the original array.
const sliced = arr.slice(1,4)
console.log("Sliced:",sliced);
console.log("After sliced:", arr);
// Splice: modifies original array, returns the removed part and ([it seems]the end index is inclusive.), but splice works differently: it doesn’t take an “end index” at all.Instead, it takes deleteCount → how many items to remove starting from start.
const spliced = arr.splice(1,4)
console.log("Spliced:",spliced)
console.log("After splice:",arr)
