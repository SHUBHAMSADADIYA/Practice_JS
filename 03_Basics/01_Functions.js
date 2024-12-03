
function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}
addTwoNumber(5,5)   // 10


function addNumber (number1, number2){
    console.log(number1 + number2)  
}
const result = addNumber(3,5)   // 8
console.log("Result : ", result);    // Undefined
// It returns Undefined, Because you can't store value directly from the function calling


function addNumber2 (number1, number2){
    let ans = number1 + number2
    return ans
    // return number1 + number2 // you can also return direct like this
    console.log("Nothing Work after calling return");
}
const ans = addNumber2(26,4)  
console.log("Answer is : ", ans);


// Print User Login Message 
function loginUserMessage1(username){
    return `${username} is Logged in.`
}
console.log(loginUserMessage1("Shubham"))   // Shubham is Logged in.

// Print User Login Message With If Statement
function loginUserMessage2(username){
    if(username === String){
        return `${username} is Logged in.`
    }
    else{
        console.log("Please Enter UserName in String.");
    }
}
console.log(loginUserMessage2())    // Please Enter UserName in String.


// Here "..." is Rest Operater Which combines extra Values in Array
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,3784,672,34));   // [ 200, 300, 3784, 672, 34 ]
// You can add values as you want that has no limit


const user = {
    productName: "Shoes",
    price: 80000
}

function handleObject(anyObject){
    console.log(`Product Name is ${anyObject.productName} and It's Price is ${anyObject.price}`);
}
// you can pass object in calling in 2 Ways
// 1. Pass already made Object 
handleObject(user)  // Product Name is Shoes and It's Price is 80000

// 2. Make object at calling
handleObject({
    productName: "Shirt",
    price: 2000
})  // Product Name is Shirt and It's Price is 2000


const myNewArray = [233,543,554,222]
function handleArray(getArray){
    return getArray[1]
}
// you can pass Array in calling in 2 Ways
// 1. Pass already made Array
console.log(handleArray(myNewArray));   // 543

// 2. Make Array at calling
console.log(handleArray([111,222,333,444,555]));    // 222  
