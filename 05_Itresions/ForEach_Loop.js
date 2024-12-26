
// For Each Loop

const arr = ["js", "py", "rb", "cpp", "java"]

// Print array's value threw Normal Function
arr.forEach(  function (val) {
    // console.log(val); 
})

// You can also print array's value by making function and refer it to loop
function printMe(ans){
    // console.log(ans);
}
arr.forEach(printMe)

// Print array's value threw Arrow Function
arr.forEach( (items) => {
    // console.log(items);
})

arr.forEach( (item, index, array) => {
    // console.log(item, index, array);
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