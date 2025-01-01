
// For Each Loop

const arr = ["js", "py", "rb", "cpp", "java"]

// Print array's value threw Normal Function
arr.forEach(  function (val) {
    console.log(val); 
})

// You can also print array's value by making function and refer it to loop
function printMe(ans){
    console.log(ans);
}
arr.forEach(printMe)

// Print array's value threw Arrow Function
arr.forEach( (items) => {
    console.log(items);
})

arr.forEach( (item, index, array) => {
    console.log(item, index, array);
})

const myCode = [
    {
        langName : "JavaScript ",
        langFileName : "js"
    },
    {
        langName : "Python ",
        langFileName : "py"
    },
    {
        langName : "Ruby ",
        langFileName : "rb"
    }
]

myCode.forEach( (values) => {
    console.log(values.langName);
})

// For Each Loop cannot return value it gives 'undefined'
const values = arr.forEach( (item) => {
    // console.log(item);
    return item;
})
console.log(values);

// Filter // It Allows you to give Condition in array
// Syntax // variable = variable.filter( (CallBackFunction) => (Condition))
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. 
const newNums = myNums.filter( (num) => num > 5)
console.log(newNums);
// 2.
const exNum = myNums.filter( (num) => {
    return num <= 5
})
console.log(exNum);
