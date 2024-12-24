
// <, >, <=, >=, ==, !=, ===, !== 

// IF
const temprature = 45;

if (temprature < 50) {
    console.log("Temprature is less than 50.")
}
// It also written like given EX...
// if(temprature < 50) console.log("<50"),console.log(">50");


// IF Else
const score = 225
if (score > 100) {
    console.log("Score is Greater than or Equal to 100.")
}
else
{
    console.log("Score is less than 100.")
}


// IF Else if
const balance = 1000;

if (balance < 500) {
    console.log("Balance is Less Than 500");
}
else if (balance < 750) {
    console.log("Balance is Less Than 750");
}
else if (balance < 1000) {
    console.log("Balance is Less Than 1000");
}
else {
    console.log("Balance is Greater Than or Equal to 1000");
}


// Operators : 
// " && " , " || " , " ?? " , " ? : "

// " ?? " Operator is called Nullish Coalescing Operator(??): null undefined
let val1;
val1 = 5 ?? 10 
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
console.log(val1);

// " ? : " Operator is called Terniary Operator
let teaPrice = 100;
teaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");

