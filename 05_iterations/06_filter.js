const coding = ["js","ruby","python","html","css"]
const whatDoesforEachReturn = coding.forEach( (item,index,fullarray)=>{
    //console.log(item);
    return fullarray
} )
//console.log(whatDoesforEachReturn);
// undefined (if nothing is set to return)
// now trying after specifying what to return ::: still returns undefined

// thus, forEach, does not return anything

const myNums = [1,2,3,4,5,6,7,8,9,10]
greaterThan5 = myNums.filter( (num) => {return num>5}  )
console.log(greaterThan5);
// filter : returns value

// doing same via forEach
arr = []
myNums.forEach( (item)=>{
    if (item>5){
        arr.push(item)
    }
} )
console.log(arr);

// same output finally.


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//const userBooks = books.filter( (book)=> book["genre"] === "History" )


const userBooks = books.filter( (book)=> book["publish"]>=1990 && book["genre"] === "History")
console.log(userBooks);

