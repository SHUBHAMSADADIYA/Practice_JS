let value = 3
let negValue = -value

// console.log(value); // 3
// console.log(negValue); // -3  // it gives '-' sign to value

// console.log(2+2);   //  4
// console.log(2-2);   //  0
// console.log(2*2);   //  4  
// console.log(2**3);  //  8 // it is works like (2*2*2) = 2 power of 3
// console.log(2/3);   //  0.66...
// console.log(2%3);   //  2

// to Combine Strings

let fName = "Shubham "
let mName = "Girishbhai "
let lName = "Sadadiya "

let fullName = fName + mName + lName
console.log(fullName);

/*
                ****** IT IS NOT PREFERABLE ****** 
console.log("1" + 2);   // 12
// Here "1" is string and 2 is number so the addition is not posible because Datatype isn't maching.

console.log(1 + "2");   // 12
// Here 1 is number and "2" is string so the addition is also not posible because Datatype isn't maching.

console.log("1" + 2 + 2);//122
// Here "1" is string and 2 and 2 is number but numbers can not be added because string already combined first 2 therefor...

console.log(1 + 2 + "2");
// Here 1 and 2 is number and "2" is string so it Add number Datatype first because it comes first and combine with string.

*/

console.log(true);  // true
console.log(+true); // 1
// console.log(true+); // ERROR
console.log(+"");   // 0
// All above should not be used in real time code

let num1,num2,num3

num1 = num2 = num3 = 4; // it is Irreadable so dont write like this

let mark1 = 100
let mark2 = 100
mark1++
console.log(mark1); // 101 // it is called PostFix Increment 

++mark2
console.log(mark2); // 101 // it is called PreFix Increment
