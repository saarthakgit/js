// switch basic syntax

// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

const month = 6
switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("Apr")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("Jun")
        break;
    case 7:
        console.log("Jul")
        break;
    case 8:
        console.log("Aug")
        break;
    case 9:
        console.log("Sep")
        break;
    case 10:
        console.log("Oct")
        break;
    case 11:
        console.log("Nov")
        break;
    case 12:
        console.log("Dec")
        break;

    default:
        console.log("no match");
        break;
}


// Nullish Coalescing Operator (??)
// used to handle "null" / "undefined"
// prevents assigning them in a var
let pop;
// pop = null ?? 10
// pop = 100 ?? null
//  pop = 1000 ?? undefined
//pop = undefined ?? 45
// pop = null??50??10
// console.log(pop);

// assigns the first value it fetches, other than null/undefined

// Terniary Operator
// syntax:
// specify condition ? if true : if false

// const price = 100
// price > 80 ? console.log("expensive") : console.log("affordable")