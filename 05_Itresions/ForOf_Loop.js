
// For of Loop

// ["", "", ""] // You can make Arrays and Objects like this
// [{}, {}, {}]

const arr = ["Shubham", 2, "Bhargav", 4, "Prince"]
for (const num of arr)  // Here num is like variable which contains  value of looping variable
{
    console.log(num);
}

const greeting = "Hello Welcome!!!"
console.log(`Each Alfabate of ${greeting} is :`);
for (const greet of greeting) {
    console.log(greet);
}

// Maps // It is known for his 'entry of Unique value only','Display in same order'
const map = new Map()
map.set('IND',"INDIA")
map.set('USA',"United States of America")
map.set('FRC',"France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ' ==> ', value);
}
