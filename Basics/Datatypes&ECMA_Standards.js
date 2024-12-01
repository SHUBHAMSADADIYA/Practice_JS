// // ===============  PRIMITIVE  =============== //

// // 7 types :

// // String,
// // Number,
// // Boolean
// // Null,
// // Undefined
// // Symbol
// // BigInt

// // Big Addvantage of JS is, you can use variable without define it's Datatypes

// const score = 100           // int
// const scoreValue = 100.3    // float
// const isLoggedIn = false    // Boolean
// const outsideTemp = null    // NULL
// let userEmail;              // UNDEFINED


// const id1 = Symbol('123')
// const id2 = Symbol('123')

// console.table([id1,id2]);
// // console.log(id1,id2); // both are different, even if they have same value,

// console.log(id1 === id2);   // False
// // console.log(id1 == id2); // False, because == checks value and === checks value

// const bigNumber = 13584813495315        // normal number
// const bigIntNumber = 13584813495315n    // 'n' defines the datatype is BigInt

// // ============  REFERENCE(NON-PRIMITIVE)  =========== // 

// // Array , Object , Function

// // ==> Array
// const cartoons = ['Bheem','Ben10','Oggy','Tom']
// console.log(cartoons);

// // ==> Object

// let myObj = {
//     name    : "Shubham",
//     Age     : 19,
//     Course  : "Bsc.I.T"
// }
// console.log(myObj);

// // You can create object without Making a Variable like this 
// /*
//     {
//         name    : "Shubham",
//         Age     :  19,
//         Course  : "Bsc.I.T"
//     }
// */

// ==> Function

// Declaration 
const myFunction = function(){
    console.log("Hello Viwer (*-*)");
    console.log("Welcome From SHUBHAM");
}

// Calling
myFunction();
