const course = {
    courseName : "tea_making",
    price : "unaffordable",
    mentor : "dolly"
}
// DESTRUCTURTING
// accessing values from objects made easy:

// course["mentor"] or course.mentor are two ways but tedious and repetitive.

const {mentor:sir,courseName:name} = course
// now we can use sir directly as a variable, instead of course.mentor and same goes for courseName

console.log(sir,name);
