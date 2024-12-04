// NOTE ==> "{}", this is called scope 

let a = 100
const b = 200
var c = 300 // here Var c = 300
console.log("This is Global Scope");

console.log("Before Outer a : ", a);    // Outer a :  100

console.log("Before Outer b : ", b);    // Outer b :  200

console.log("Before Outer c : ", c);    // Outer c :  300

if(true){
   let a = 10
   const b = 20
   var c = 30
   console.log("This is Local Scope");
   console.log("Inner a : ", a);    // Inner a :  10
   console.log("Inner b : ", b);    // Inner b :  20
   console.log("Inner c : ", c);    // Inner c :  30    // Here in condition Var c = 30
}

console.log("After Outer a : ", a);    // Outer a :  100

console.log("After Outer b : ", b);    // Outer b :  200

console.log("After Outer c : ", c);    // Outer c :  30
// But , Here Printed 30, Because Var can be  accesed from anywhere 
// Therefor it can be changed from anywhere like , from fuction, if condition ,for loop
// Which is Bug of this language ,Therefor you should not use Var keyword



function one (){
    const userName = "Shubham"

    function two(){
        const id = 28
        console.log("UserName is : ",userName); // UserName is :  Shubham
    }
    // console.log("ID is : ",id);  // Error , Because variable can't be called out the scope
    
    two()
}
one()

if (true) {
    const userName = "Shubham"
    if (userName === "Shubham") {
        const userLastName = "Sadadiya"
        console.log(userName + " " + userLastName); // Shubham Sadadiya
    }
}

// ==========>  Interesting  <==========

console.log("Before addOne : ",addOne(5))  // Before addOne :  6
// You can call Normal function from anywhere
function addOne(num){
    return num + 1
}
console.log("After addOne : ",addOne(6))   // After addOne :  7


// console.log(addTwo(6))
// You cannot call function which is stored in variable before it's function
const addTwo = function(num){
    return num + 2
}
console.log("Variable Stored Function : ",addTwo(6))    // Variable Stored Function : 8