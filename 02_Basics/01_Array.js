// You can Write array in different types

// 1. It includes Numbers in array
const arrNo = [0, 1, 2, 3, 4, 5, 6 ]

// 2. It includes Names in array
const arrHeroName = [ "Hanuman", "Shaktiman", "Shiva"]

// 3. It includes Boolean value in array
const arrBoolean = [true]

// 4. It includes Both Numbers, Names, and Boolean in array
const arrBoth = [1, "Hanuman", 2, "Shaktiman"]

// // Array Methods

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

// NOTE ===> It must be Written in given format
myArr.push(6)
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
// It add the Given Parameter

// NOTE ===> It must be Written in given format
myArr.pop()
console.log(myArr); // [0, 1, 2, 3, 4, 5]
// It Removes the last element 

myArr.unshift(7)
console.log(myArr); // [7, 0, 1, 2, 3, 4, 5]
// It adds value at starting of array, Which is not so useful for Big Arrays

myArr.shift()
console.log(myArr); // [0, 1, 2, 3, 4, 5]
// It removes element from Starting of array

console.log(myArr.includes(9)); // False
console.log(myArr.includes(5)); // True
// It Checks the value is in array or not in array

console.log(myArr.indexOf(9));  // -1 // it gives '-1' on unavailable value of array
console.log(myArr.indexOf(3));  // 3
// It checkes the given element is on which index

const newArr = myArr.join()
console.log(myArr);         // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);        // 0,1,2,3,4,5
console.log(typeof newArr); // string
// Join Function converts array into string

 console.log("A", myArr);   // A [ 0, 1, 2, 3, 4, 5 ]

// Syntax := myArr.slice(Starting Element , number of element you want from starting )
const myNewArr1 = myArr.slice(0, 3)
console.log( myNewArr1);    // [ 0, 1, 2 ]
// It does not include last element of parameter

console.log("B", myArr);    // B [ 0, 1, 2, 3, 4, 5 ]

// Syntax := myArr.slice(Starting Element , number of element you want from starting )
const myNewArr2 = myArr.splice(0, 3)
console.log( myNewArr2);    // [ 0, 1, 2 ]
// It includes last element of parameter , But it Affects Your original array , It Cuts the elements from original array

console.log("C", myArr);    // C [ 3, 4, 5 ]
 

