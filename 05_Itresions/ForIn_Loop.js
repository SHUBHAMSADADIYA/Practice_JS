
// For In Loop

const myObject = {
    js : 'JavaScript',
    py : 'Python',
    cpp : 'C++',
    rb : 'Ruby'
}

for (const key in myObject) {
    console.log(`${key} is shortcut of ${myObject[key]}`)
}

const arr = ["js", "py", "rb", "cpp", "java"]
for (const key in arr) {
    console.log(arr[key]);
}